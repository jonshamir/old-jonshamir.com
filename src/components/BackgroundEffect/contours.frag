precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_pixel_ratio;
uniform float u_theme;

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
    float circleRadius = 0.005 + 0.06 * mouseDist;
    float pixelRadius = fwidth(length(p));
    float radius = max(circleRadius, pixelRadius * 2.);
    float d = sdCircle(p - vec2(0.5, 0.5), radius);
	return (1.0 - smoothstep(0.0, fwidth(d)*2.0, d)) * (circleRadius / radius);
}

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, s, -s, c);
	return m * v;
}

void main() {
    float ratio = u_resolution.x / u_resolution.y;

    float n = 8./ratio;

    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.x *= ratio;

    vec2 mousePos = u_mouse;
    // mousePos.y /= ratio;
    
    vec2 mouseDir = normalize(mousePos - uv);
    
    float mouseDist = 1.0 - smoothstep(0.0, 1.0, distance(mousePos, uv) * 1.5);
    float offset = mouseDist * 0.1;

    
    uv = vec2(fract(uv.x * n), fract(uv.y * n));
    
    float r = circle(uv + mouseDir * offset, mouseDist);
    float g = circle(uv + rotate(mouseDir, M_PI_3) * offset, mouseDist);
    float b = circle(uv + rotate(mouseDir, -M_PI_3) * offset, mouseDist);
    vec3 color = clamp(vec3(r,g,b) + 0.45, 0.0, 1.0);    
    color = u_theme == 1.0 ? color : 1.0 - color;

    gl_FragColor = vec4(color, clamp(r+g+b, 0.0, 0.6));
}