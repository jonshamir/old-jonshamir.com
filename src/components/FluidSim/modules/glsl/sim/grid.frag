#extension GL_OES_standard_derivatives : enable

precision highp float;
uniform sampler2D velocity;
varying vec2 uv;

// Pi, the ratio of a circle's circumference to its diameter.
const float M_PI = 3.14159265358979323846264338327950288;
// M_PI / 3
const float M_PI_3 = 1.0471975512;


float sdCircle(in vec2 p, in float r) 
{
    return length(p) - r;
}

float circle(in vec2 p, in float mouseDist)
{
    float baseRadius = 0.004 + 0.06 * mouseDist;
    float minRadius = 0.04;// max(fwidth(length(p)), 0.04);
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
    vec2 vel = texture2D(velocity, uv).xy;
    float len = length(vel);
    vel = vel * 0.5 + 0.5;
    
    vec3 color = vec3(vel, 1.);
    color = mix(vec3(0.0), color, len);
    gl_FragColor = vec4(color, len);

    // gl_FragColor = vec4(uv, 0.0, 1.0);
}
