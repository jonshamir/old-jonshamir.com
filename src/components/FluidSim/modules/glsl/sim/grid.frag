precision highp float;
uniform sampler2D velocity;
uniform vec2 resolution;
varying vec2 uv;

// Pi, the ratio of a circle's circumference to its diameter.
const float M_PI = 3.14159265358979323846264338327950288;
// M_PI / 3
const float M_PI_3 = 2.0943951024;

const float margin = 2.0;

float sdCircle(in vec2 p, in float r) 
{
    return length(p) - r;
}

float circle(in vec2 p, in float strength)
{
    float baseRadius = 0.004 + 0.1 * strength;
    float minRadius = 0.06;// max(fwidth(length(p)), 0.04);
    float radius = max(baseRadius, minRadius);
    float d = sdCircle(p - vec2(0.5, 0.5), radius);
	// return (1.0 - smoothstep(-fwidth(d), fwidth(d), d)) * (baseRadius / radius);
	return (1.0 - smoothstep(-0.01, 0.01, d)) * (baseRadius / radius);
}

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, s, -s, c);
	return m * v;
}

void main(){
    // fluid data
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);

    // ====================================
    
    // grid dots
    vec2 offsetDir = vel;
    float offset = 0.08;
    float strength = pow(clamp(len, 0.0, 1.0), 1.8);

    vec2 n = resolution.xy * 0.03;
    vec2 uv0 = vec2(fract(uv.x * n.x), fract(uv.y * n.y));

    uv0 += offsetDir * 0.2;

    vec2 uvGridIndex = ceil(uv * n) / n;
    uvGridIndex *= step(uvGridIndex, vec2((n-margin)/n));
    uvGridIndex *= 1.0 - step(uvGridIndex, vec2((margin)/n));
    float marginMask = 1.0 - step(min(uvGridIndex.x, uvGridIndex.y), 0.0);
    
    float r = circle(uv0 + offsetDir * offset, strength);
    float g = circle(uv0 + rotate(offsetDir, M_PI_3) * offset, strength);
    float b = circle(uv0 + rotate(offsetDir, -M_PI_3) * offset, strength);
    vec3 color = clamp(vec3(r,g,b) + 0.45, 0.0, 1.0);    
    //color = theme == 1.0 ? color : 1.0 - color;

    gl_FragColor = vec4(color, marginMask * clamp(r+g+b, 0.0, 0.8));
    // gl_FragColor = vec4(mask, mask, mask, 1.0);
}
