(this["webpackJsonpjonshamir.com"]=this["webpackJsonpjonshamir.com"]||[]).push([[0],{115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),c=s(39),a=s.n(c),r=(s(65),s(34)),o=s(121),l=s(10),j=s(1),d=s(6),h=s(4),u=s(5),b=s(28),m=(s(66),s(0)),p=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).state={},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this.props.isVisible;return Object(m.jsx)("div",{className:e?"logo-container visible":"logo-container",children:Object(m.jsx)("div",{className:e?"rotate":"",children:Object(m.jsxs)("div",{className:"logo",children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"})]}),Object(m.jsxs)("div",{className:"bottom",children:[Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"})]}),Object(m.jsxs)("div",{className:"middle",children:[Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"})]}),Object(m.jsxs)("div",{className:"side",children:[Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"}),Object(m.jsx)("div",{className:"face"})]})]})})})}}]),s}(i.a.Component);p.defaultProps={onClick:function(){}};var x,f,v,O,g,y=p,w=(s(68),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).updateInlinePos=function(){if(n.inlineLogoEl=document.getElementById("logoInlinePos"),n.inlineLogoEl){var e=n.inlineLogoEl.getBoundingClientRect().x,t=n.inlineLogoEl.offsetTop;n.setState({inlinePos:[e-30,t-180]})}},n.getInlinePos=function(){var e=n.state.inlinePos;if(0!==e[0]&&0!==e[1])return{x:e[0],y:e[1]};n.inlineLogoEl=document.getElementById("logoInlinePos");var t=0,s=0;return n.inlineLogoEl&&(t=n.inlineLogoEl.offsetLeft-30,s=n.inlineLogoEl.offsetTop-180),{x:t,y:s}},n.handleScroll=function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=n.state.isMinimized;e<10?n.setState({isMinimized:!1}):t||n.setState({isMinimized:!0})},n.state={isLoaded:!1,isMinimized:!1,inlinePos:[0,0],isHomepage:"/"===e.history.location.pathname},n.inlineLogoEl=null,n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){return e.updateInlinePos()})),window.addEventListener("scroll",this.handleScroll),this.updateInlinePos(),setTimeout((function(){e.setState({isLoaded:!0})}),500),this.props.history.listen((function(t,s){e.setState({isHomepage:!1}),"/"===t.pathname&&setTimeout((function(){e.setState({isHomepage:!0})}),300)}))}},{key:"render",value:function(){var e=this.state,t=e.isMinimized,s=e.isHomepage,n=this.getInlinePos(),i=n.x,c=n.y,a={transform:!s||this.inlineLogoEl&&t?"scale(0.5)":"scale(1) translate(".concat(i,"px,").concat(c,"px)"),pointerEvents:s?"none":"auto"};return Object(m.jsx)(b.b,{to:"/",className:"FloatingLogo",style:a,children:Object(m.jsx)(y,{isVisible:this.state.isLoaded})})}}]),s}(i.a.Component)),N=Object(l.g)(w),S=s(25),k=(s(73),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(j.a)(this,s),(n=t.call(this,e)).canvasRef=i.a.createRef(),n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.initScene(),this.handleResize(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)}},{key:"initScene",value:function(){var e=this;x=this.canvasRef.current,(f=new S.a).position.z=1,v=new S.d;var t=new S.c(2,2);g={u_time:{type:"f",value:1},u_pixel_ratio:{type:"f",value:1},u_resolution:{type:"v2",value:new S.f},u_mouse:{type:"v2",value:new S.f},u_scroll:{type:"f",value:0}};var s=new S.e({uniforms:g,vertexShader:"#define GLSLIFY 1\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}\n",fragmentShader:"#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform float u_scroll;\nuniform float u_pixel_ratio;\n\nvec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\nvec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\nvec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }\n\nfloat snoise(vec2 v) {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n  vec2 i1;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n  + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nvec3 contours(float x, float levels) {\n  float f = fract(x * levels);\n  float df = fwidth(x * levels);\n\n  float y = smoothstep(df*2., df*2.5, f) + smoothstep(df*0.5, df*-0.0, f);\n\n  // Invert colors & reduce contrast\n  y = 1.0 - y;\n  y = 0.05 * y + 0.12;\n  return vec3(y);\n}\n\nvec3 contour_fill(float x, float levels) {\n  float c = floor(x*levels) / levels;\n  vec3 color = vec3(.08 - c*0.08, pow(c, 3.0), .1 + c*.9);\n  color = color * 0.9 + 0.1;\n  return color;\n}\n\nvoid main() {\n  vec2 mouse = vec2(u_mouse.x / u_resolution.x, 1.0 - u_mouse.y / u_resolution.y) * u_pixel_ratio;\n  mouse.x *= u_resolution.x / u_resolution.y;\n\n  float viewportRatio =  u_resolution.x / u_resolution.y;\n  vec2 st = gl_FragCoord.xy / u_resolution.xy; // UV coordinates\n  st.x *= viewportRatio;\n\n  float t = u_time * 0.005;\n\n  vec2 pos = vec2(st*(2.0 / u_pixel_ratio));\n  vec2 vel = vec2(u_time)*0.05; // Movement\n\n  // pos.y += u_scroll;\n\n  vec3 color = vec3(0.0);\n\n  float DF = 0.0;\n\n  float a = 0.0;\n  DF += snoise(pos + vel + vec2(0, -u_scroll)) * 0.25 + 0.25;\n\n  // Add a random position\n  a = snoise(pos*vec2(cos(t), sin(t))*0.1) * 3.1415;\n  vel = vec2(cos(a), sin(a));\n  DF += snoise(pos + vel) * 0.25 + 0.25;\n\n  float x = fract(DF);\n\n  // Mouse warp\n  // x -= 0.1*pow((1.0 - clamp(0.0, 1.0, distance(st, mouse))), 2.0);\n\n  color = contours(x, 7.0);\n  //color = vec3(x,x,x);\n\n  gl_FragColor = vec4(color, 1.0);\n}\n",extensions:{derivatives:!0}}),n=new S.b(t,s);v.add(n),O=new S.g,x.appendChild(O.domElement),document.onmousemove=function(e){g.u_mouse.value.x=e.pageX,g.u_mouse.value.y=e.pageY};!function t(){requestAnimationFrame(t),e.props.shouldDisplay&&(g.u_time.value+=.03,O.render(v,f))}()}},{key:"handleResize",value:function(e){var t=window.innerWidth-0,s=window.innerHeight-0;O.setSize(t,s),g.u_resolution.value.x=t,g.u_resolution.value.y=s}},{key:"handleScroll",value:function(){var e=document.body.scrollTop||document.documentElement.scrollTop;g.u_scroll.value=e/1e3}},{key:"render",value:function(){var e=this.props.shouldDisplay;return Object(m.jsx)("div",{className:e?"ContourEffect":"ContourEffect hidden",ref:this.canvasRef})}}]),s}(i.a.Component)),C=(s(75),function(e){return Object(m.jsxs)("div",{className:"SocialLinks",children:[Object(m.jsxs)("a",{href:"https://www.instagram.com/yonshamir/",target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("span",{children:"Instagram"}),Object(m.jsx)("img",{src:"./assets/ui/instagram.svg",alt:""})]},"instagram"),Object(m.jsxs)("a",{href:"https://github.com/jonshamir",target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("span",{children:"GitHub"}),Object(m.jsx)("img",{src:"./assets/ui/github.svg",alt:""})]},"github"),Object(m.jsxs)("a",{href:"https://google.com/",target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("span",{children:"Resume"}),Object(m.jsx)("img",{src:"./assets/ui/resume.svg",alt:""})]},"resume")]})}),_=s(120),I=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),s}(i.a.Component),L=(s(76),function(e){return Object(m.jsxs)(_.a.div,{className:"ProjectPage Page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(m.jsx)(I,{}),e.children]})}),T=(s(77),function(e){return Object(m.jsx)("button",{className:"Button",children:e.children})}),z=s(43),P=s(35),E=s(59),D=(s(78),s(79),function(e){var t=e.alt,s=e.ratio,i=void 0===s?1:s,c=e.style,a=void 0===c?{}:c,o=e.className,l=void 0===o?"":o,j=Object(P.a)(e,["alt","ratio","style","className"]),d=Object(n.useState)(!1),h=Object(r.a)(d,2),u=h[0],b=h[1];return Object(m.jsx)(E.AspectRatio,{className:"imageWrapper "+l,ratio:i,style:a,children:Object(m.jsx)("img",Object(z.a)(Object(z.a)({},j),{},{onLoad:function(e){b(!0)},className:u?"image loaded":"image",alt:t}))})}),R=function(e){return Object(m.jsxs)(L,{children:[Object(m.jsx)(D,{ratio:"2",src:"assets/projects/muser/screenshot.png",alt:"Muser Screenshot",className:"Screenshot",style:{backgroundColor:"#455d63"}}),Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("a",{href:"https://jonshamir.github.io/muser",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(T,{children:Object(m.jsx)("span",{children:"Launch Project >"})})}),Object(m.jsx)("h1",{children:"Muser"}),Object(m.jsx)("p",{className:"subtitle",children:"Smart music visualizer"}),Object(m.jsx)("p",{children:"Muser is an experiment to see how machine learning technology can be used to enhance music visualization. The idea originated while writing a seminar paper on the history of music visualization. I researched, designed and implemented the project from start to finish."}),Object(m.jsxs)("p",{children:["A pre-trained neural network called"," ",Object(m.jsx)("a",{href:"https://github.com/jordipons/musicnn",target:"_blank",rel:"noreferrer",children:"musicnn"})," ","predicts the musical genre for each second of a song. The predictions are then used to generate a color scheme. The final visualization color palette is based on the 5 most-fitting genres."]}),Object(m.jsx)("p",{children:"We can use this to visualize how the style of a song changes over time:"}),Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{className:"muserTimeline"}),Object(m.jsx)("strong",{children:"Love the Way You Lie"})," / Eminem feat. Rihanna"]}),Object(m.jsx)("p",{children:"For example, we can see that this classic song by Eminem and Rihanna starts with an acoustic intro (bluish) then alternates between rap (red) and pop (yellow) segments."}),Object(m.jsx)("p",{children:"For more information visit the project website!"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"Tools Used"}),Object(m.jsxs)("ul",{className:"List",children:[Object(m.jsx)("li",{children:"JavaScript (React.js)"}),Object(m.jsx)("li",{children:"WebGL (THREE.js + GLSL)"}),Object(m.jsx)("li",{children:"Python"})]}),Object(m.jsxs)("figure",{children:[Object(m.jsx)(D,{src:"assets/projects/muser/kandinsky.jpg",alt:"kandinsky"}),Object(m.jsxs)("span",{className:"Caption",children:[Object(m.jsx)("span",{children:"Circles in a Circle "}),"by Wassily Kandinsky, 1923"]})]}),Object(m.jsx)("p",{children:"Muser is inspired by Wassily Kandinsky (1866-1944). Generally credited as the pioneer of abstract art, his work is well-known for its musical influences. Kandinsky associated specific tones and instruments to shapes and colors, thus \u201cvisualizing\u201d a musical composition."}),Object(m.jsxs)("p",{children:["Colors for each genre were chosen according to the"," ",Object(m.jsx)("a",{href:"https://musicmap.info/",target:"_blank",rel:"noreferrer",children:"Musicmap"})," ","project so that music genres which are stylistically closer will get similar colors."]})]}),Object(m.jsx)("img",{src:"assets/projects/muser/circles.png",alt:"",className:"muserCircles"})]})},A=function(e){return Object(m.jsx)(L,{children:Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("a",{href:"http://herbtree.co.il",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(T,{children:Object(m.jsx)("span",{children:"Launch Project >"})})}),Object(m.jsx)("h1",{children:"Herb Tree"}),Object(m.jsx)("p",{className:"subtitle",children:"Interactive botanic visualization"}),Object(m.jsx)("p",{children:"Final project for my B.Des. in Visual Communication. An index of culinary herbs. The plants are organized according to their genetic classification, creating a herbal \u201ctree of life\u201d. In addition to research, design and development, I photographed dozens of plant specimens from the hebrew University herbarium, which are incorporated in the project."}),Object(m.jsx)("p",{children:"The site is currently available only in Hebrew."}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"Tools Used"}),Object(m.jsxs)("ul",{className:"List",children:[Object(m.jsx)("li",{children:"JavaScript (d3.js + React.js)"}),Object(m.jsx)("li",{children:"Python"})]})]})})},M=s(44),F=s.n(M),G=s(60),U=(s(114),function(e){var t,s=(t=9,Array.from({length:t},(function(e,t){return t+1}))).map((function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:"assets/projects/unitycg/slide".concat(e,".png"),alt:"Slide"})},e)}));return Object(m.jsx)(L,{children:Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("div",{className:"earth3d",children:Object(m.jsx)(F.a,{url:"assets/projects/unitycg/cube.mp4",config:{file:{attributes:{poster:"assets/projects/unitycg/cube.jpg",disableRemotePlayback:!0}}},playing:!0,loop:!0,width:"100%",attributes:{disableRemotePlayback:!0}})}),Object(m.jsx)("h1",{children:"Unity CG"}),Object(m.jsx)("p",{className:"subtitle",children:"Teaching Computer Graphics in Unity"}),Object(m.jsxs)("p",{children:["In 2019 I was given the opportunity to rebuild the practical side of the Computer Graphics Course at"," ",Object(m.jsx)("a",{href:"https://en.huji.ac.il/",target:"_blank",rel:"noreferrer",children:"the Hebrew University"})," ","from the ground up. The idea was to teach Computer Graphics in a more engaging way, using the real-time interactivity of the"," ",Object(m.jsx)("a",{href:"https://unity.com/",target:"_blank",rel:"noreferrer",children:"Unity game engine"}),"."]}),Object(m.jsx)("p",{children:"Due to the emerging COVID-19 pandemic, the class had to be taught remotely. In an attempt to improve the learning experience for the students, I created 12 lectures with over 500 slides including custom illustrations & animations that visualize different concepts."}),Object(m.jsxs)("div",{className:"slideContainer",children:[Object(m.jsx)(G.Carousel,{showThumbs:!1,showStatus:!1,showIndicators:!1,emulateTouch:!0,infiniteLoop:!0,autoPlay:!0,renderArrowPrev:function(e){return Object(m.jsx)("div",{onClick:e,className:"CarouselArrow left",children:"<"})},renderArrowNext:function(e){return Object(m.jsx)("div",{onClick:e,className:"CarouselArrow right",children:">"})},children:s}),Object(m.jsx)("span",{className:"Caption",children:"Some of the slides I created for the course"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"I also created 5 coding exercises involving subjects such as Subdivision Surfaces, Ray-Tracing, Shading, Texturing and more. I taught the students remotely and graded their assignments."}),Object(m.jsx)("div",{className:"earth3d torus",children:Object(m.jsx)(F.a,{url:"assets/projects/unitycg/torus.mp4",config:{file:{attributes:{poster:"assets/projects/unitycg/torus.jpg",disableRemotePlayback:!0}}},playing:!0,loop:!0,width:"100%"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"Tools Used"}),Object(m.jsxs)("ul",{className:"List",children:[Object(m.jsx)("li",{children:"Unity3D + C#"}),Object(m.jsx)("li",{children:"HLSL (shading language)"}),Object(m.jsx)("li",{children:"Adobe CC"}),Object(m.jsx)("li",{children:"Google Slides"})]})]})})}),H=(s(115),function(e){return Object(m.jsx)("div",{className:"VideoEmbed",children:Object(m.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/".concat(e.videoId,"?controls=0"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),W=function(e){var t=e.href,s=e.children;Object(P.a)(e,["href","children"]);return Object(m.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:s})},B=[{slug:"muser",name:"Muser",subtitle:"Smart music visualizer",component:R,color:"#648887"},{slug:"herbtree",name:"Herb Tree",subtitle:"Interactive botanic visualization",component:A,color:"#e7e1e1"},{slug:"unitycg",name:"Unity CG",subtitle:"Computer graphics course in Unity",component:U,color:"#8595a8"},{slug:"scopus",name:"Scopus",subtitle:"Short 3D animation",component:function(e){return Object(m.jsx)(L,{children:Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("h1",{children:"Scopus"}),Object(m.jsx)("p",{className:"subtitle",children:"Short 3D animation"}),Object(m.jsx)("p",{children:"Mount Scopus and its brutalist architecture can be seen from practically anywhere in Jerusalem - clashing with the city's ancient architecture. I decided it might be used as a spaceship..."}),Object(m.jsx)("p",{children:"Modeled & rendered using Cinema4D."}),Object(m.jsx)("br",{}),Object(m.jsx)(H,{videoId:"7KkArk0uCDQ"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})})]})})},color:"#a1a1a1"},{slug:"cavorite",name:"Cavorite",subtitle:"Short 2D animation",component:function(e){return Object(m.jsx)(L,{children:Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("h1",{children:"Cavorite"}),Object(m.jsx)("p",{className:"subtitle",children:"Short 2D animation"}),Object(m.jsx)("p",{children:"Short animation based on an old H.G. Wells story, created as an assignment for an animation course."}),Object(m.jsx)("p",{children:"Made using After Effects & Blender."}),Object(m.jsx)("br",{}),Object(m.jsx)(H,{videoId:"bulTbi_Eno0"}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})})]})})},color:"#265a90"},{slug:"tel-aviv",name:"Tel Aviv",subtitle:"Watercolor studies of Tel Aviv",component:function(e){return Object(m.jsx)(L,{children:Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("h1",{children:"Tel Aviv"}),Object(m.jsx)("p",{className:"subtitle",children:"Watercolor studies of Tel Aviv"}),Object(m.jsx)("br",{}),Object(m.jsx)(D,{ratio:"1.42",src:"assets/projects/tel-aviv/watercolor3.jpg",alt:"Tel Aviv 3",style:{backgroundColor:"#eeeceb"}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(D,{ratio:"1.42",src:"assets/projects/tel-aviv/watercolor2.jpg",alt:"Tel Aviv 2",style:{backgroundColor:"#eeeceb"}}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(D,{ratio:"1.42",src:"assets/projects/tel-aviv/watercolor1.jpg",alt:"Tel Aviv 1",style:{backgroundColor:"#eeeceb"}}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:Object(m.jsx)("br",{})})]})})},color:"#d1c0c4"},{slug:"leaf-map",name:"Leaf Map",subtitle:"Interactive map of leaf shapes",component:function(e){return Object(m.jsxs)(L,{children:[Object(m.jsx)(D,{ratio:"1.95",src:"assets/projects/leaf-map/screenshot.png",alt:"Leaf Map screenshot",className:"Screenshot",style:{backgroundColor:"#f7f3ee"}}),Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("a",{href:"https://jonshamir.github.io/leaf-map",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(T,{children:Object(m.jsx)("span",{children:"Launch Project >"})})}),Object(m.jsx)("h1",{children:"Leaf Map"}),Object(m.jsx)("p",{className:"subtitle",children:"Interactive map of leaf shapes"}),Object(m.jsx)("p",{children:"I used machine learning techniques to organize tree species according to their leaf shape. The idea was to create a more intuitive and friendly way to recognize plant species."}),Object(m.jsx)("img",{src:"assets/projects/leaf-map/features.png",alt:"Leaf Features"}),Object(m.jsxs)("p",{children:["Using the"," ",Object(m.jsx)(W,{href:"https://en.wikipedia.org/wiki/Shape_context",children:"Shape Context Algorithm"})," ",'I generated a "fingerprint" vector representing each leaf, which is then used to asses the similarity of shapes. Finally the dimension of this vector is reduced to 2D using PCA and'," ",Object(m.jsx)(W,{href:"https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding",children:"t-SNE"}),", and the leaves are displayed in an interactive interface I created using D3.js."]}),Object(m.jsxs)("p",{children:["The project was inspired by this"," ",Object(m.jsx)(W,{href:"http://fontmap.ideo.com/",children:"Font Map"}),", all data and images were taken from the"," ",Object(m.jsx)(W,{href:"http://leafsnap.com/dataset/",children:"Leaf Snap dataset"}),"."]}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"Tools Used"}),Object(m.jsxs)("ul",{className:"List",children:[Object(m.jsx)("li",{children:"JavaScript (interface)"}),Object(m.jsx)("li",{children:"Python (data proccessing)"})]})]})]})},color:"#f8f3ef"},{slug:"growth-patterns",name:"Growth Patterns",subtitle:"Population density visualization",component:function(e){return Object(m.jsxs)(L,{children:[Object(m.jsx)(D,{ratio:"1.53",src:"assets/projects/growth-patterns/pic2.jpg",alt:"GrowthPatterns",className:"Screenshot",style:{backgroundColor:"#6c6a70"}}),Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("h1",{children:"Growth Patterns"}),Object(m.jsx)("p",{className:"subtitle",children:"Population density visualization"}),Object(m.jsx)("p",{children:"I created a visualization of population centers in centeral Israel and the Palestinian territories. I visualized the data on a blank canvas, without any borders or markings, by using dried local plants."}),Object(m.jsx)("br",{}),Object(m.jsx)(D,{src:"assets/projects/growth-patterns/data1.jpg",alt:"Data 1",className:"halfImage"}),Object(m.jsx)(D,{src:"assets/projects/growth-patterns/data2.jpg",alt:"Data 2",className:"halfImage"}),Object(m.jsx)("p",{className:"Caption",children:"Every point corrosponds to a city or town, with size representing population"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("p",{children:"I tried to emphasize the natural growth pattern of human settlement, regardless of politics or borders."}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(D,{ratio:"1.33:1",src:"assets/projects/growth-patterns/pic3.jpg",alt:"GrowthPatterns",style:{width:"90%"}})]})]})},color:"#9d929c"},{slug:"generative-leaves",name:"Generative Leaves",subtitle:"Screenprints of generative leaf shapes",component:function(e){return Object(m.jsx)(L,{children:Object(m.jsxs)("div",{className:"section",children:[Object(m.jsx)("h1",{children:"Generative Leaves"}),Object(m.jsx)("p",{className:"subtitle",children:"Screenprints of generative leaf shapes."}),Object(m.jsxs)("p",{children:["I was exploring the creation of leaf shapes using"," ",Object(m.jsx)("a",{href:"https://en.wikipedia.org/wiki/Superformula",target:"_blank",rel:"noreferrer",children:"Generalized Superellipses"})," ","in JavaScript. Each leaf was screen printed in 2 colors with a different halftone pattern."]}),Object(m.jsx)(D,{src:"assets/projects/generative-leaves/leaf1.jpg",alt:"Leaf 1",className:"halfImage"}),Object(m.jsx)(D,{src:"assets/projects/generative-leaves/leaf4.jpg",alt:"Leaf 2",className:"halfImage"}),Object(m.jsx)(D,{src:"assets/projects/generative-leaves/leaf2.jpg",alt:"Leaf 3",className:"halfImage"}),Object(m.jsx)(D,{src:"assets/projects/generative-leaves/leaf3.jpg",alt:"Leaf 4",className:"halfImage"}),Object(m.jsx)("br",{})]})})},color:"#8d7754"}],J=(s(116),function(e){return Object(m.jsx)("div",{className:"IntroSection section",children:Object(m.jsxs)("div",{className:"intro",children:[Object(m.jsx)("span",{id:"logoInlinePos"}),Object(m.jsx)("h1",{children:"Hi, I'm Jon Shamir"}),Object(m.jsx)("p",{children:"Currently based in Jerusalem, I recently graduated from a 5-year program combining computer science & design. My interests lie in the intersection of technology and art and include computer graphics, typography, machine learning and data visualization."}),Object(m.jsx)("p",{children:"I have extensive experience with web technologies and interactive media. I love working on projects that combine different fields and use technologies in new and interesting ways."})]})})}),V=(s(117),function(e){return Object(m.jsxs)("div",{className:"ProjectSection section",children:[Object(m.jsx)("h2",{children:"Recent Projects"}),Object(m.jsx)("div",{className:"projectTiles",children:B.map((function(e){return Object(m.jsxs)(b.b,{to:"/projects/".concat(e.slug),className:"ProjectTile",children:[Object(m.jsx)(D,{src:"assets/projects/".concat(e.slug,"/cover.jpg"),alt:e.name,style:{backgroundColor:e.color}}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("h4",{children:e.subtitle})]})]},e.slug)}))})]})}),Y=function(e){var t=e.scrollTop,s=e.setScrollTop;Object(P.a)(e,["scrollTop","setScrollTop"]);Object(n.useEffect)((function(){window.scrollTo(0,t)}));return Object(m.jsxs)(_.a.div,{className:"Page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onAnimationComplete:function(e){if(0===e.opacity){var t=document.documentElement.scrollTop||document.body.scrollTop;s(t)}},children:[Object(m.jsx)(J,{}),Object(m.jsx)(V,{})]})},q=function(){var e=Object(l.f)();window.history.scrollRestoration&&(window.history.scrollRestoration="manual");var t=Object(n.useState)(0),s=Object(r.a)(t,2),i=s[0],c=s[1],a=B.map((function(e){return Object(m.jsx)(l.a,{path:"/projects/".concat(e.slug),children:Object(m.jsx)(e.component,{})},e.slug)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{shouldDisplay:"/"===e.pathname}),Object(m.jsx)(N,{}),Object(m.jsx)(C,{}),Object(m.jsx)(o.a,{exitBeforeEnter:!0,children:Object(m.jsxs)(l.c,{location:e,children:[Object(m.jsx)(l.a,{exact:!0,path:"/",children:Object(m.jsx)(Y,{scrollTop:i,setScrollTop:c})}),a]},e.pathname)})]})},K=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,122)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),c(e),a(e)}))};a.a.render(Object(m.jsx)(b.a,{basename:"/portfolio",children:Object(m.jsx)(q,{})}),document.getElementById("root")),K()},65:function(e,t,s){},66:function(e,t,s){},68:function(e,t,s){},73:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},79:function(e,t,s){}},[[118,1,2]]]);
//# sourceMappingURL=main.f9aedead.chunk.js.map