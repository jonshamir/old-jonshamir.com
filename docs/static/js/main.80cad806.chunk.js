(this["webpackJsonpjonshamir.com"]=this["webpackJsonpjonshamir.com"]||[]).push([[0],{53:function(e,t,s){},54:function(e,t,s){},56:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},66:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var i=s(2),c=s.n(i),a=s(40),n=s.n(a),r=(s(53),s(101)),o=s(4),l=s(41),j=s(17),h=(s(54),s(0));class d extends c.a.Component{constructor(e){super(e),this.state={}}render(){const{isVisible:e}=this.props;return Object(h.jsx)("div",{className:e?"logo-container visible":"logo-container",children:Object(h.jsx)("div",{className:e?"rotate":"",children:Object(h.jsxs)("div",{className:"logo",children:[Object(h.jsxs)("div",{className:"top",children:[Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"})]}),Object(h.jsxs)("div",{className:"bottom",children:[Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"})]}),Object(h.jsxs)("div",{className:"middle",children:[Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"})]}),Object(h.jsxs)("div",{className:"side",children:[Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"}),Object(h.jsx)("div",{className:"face"})]})]})})})}}d.defaultProps={onClick:()=>{}};var b=d;s(56);class m extends c.a.Component{constructor(e){super(e),this.updateInlinePos=()=>{if(this.inlineLogoEl=document.getElementById("logoInlinePos"),this.inlineLogoEl){const e=this.inlineLogoEl.getBoundingClientRect().x,t=this.inlineLogoEl.offsetTop;this.setState({inlinePos:[e-30,t-180]})}},this.getInlinePos=()=>{const{inlinePos:e}=this.state;if(0!==e[0]&&0!==e[1])return{x:e[0],y:e[1]};this.inlineLogoEl=document.getElementById("logoInlinePos");let t=0,s=0;return this.inlineLogoEl&&(t=this.inlineLogoEl.offsetLeft-30,s=this.inlineLogoEl.offsetTop-180),{x:t,y:s}},this.handleScroll=()=>{const e=document.body.scrollTop||document.documentElement.scrollTop,{isMinimized:t}=this.state;e<10?this.setState({isMinimized:!1}):t||this.setState({isMinimized:!0})},this.state={isLoaded:!1,isMinimized:!1,inlinePos:[0,0],isHomepage:"/"===e.history.location.pathname},this.inlineLogoEl=null}componentDidMount(){window.addEventListener("resize",(()=>this.updateInlinePos())),window.addEventListener("scroll",this.handleScroll),this.updateInlinePos(),setTimeout((()=>{this.setState({isLoaded:!0})}),500),this.props.history.listen(((e,t)=>{this.setState({isHomepage:!1}),"/"===e.pathname&&setTimeout((()=>{this.setState({isHomepage:!0})}),300)}))}onClick(e){"/"===this.props.history.location.pathname&&e.preventDefault()}render(){const{isMinimized:e,isHomepage:t}=this.state,{x:s,y:i}=this.getInlinePos(),c={transform:!t||this.inlineLogoEl&&e?"scale(0.5)":"scale(1) translate(".concat(s,"px,").concat(i,"px)")};return Object(h.jsx)(j.b,{onClick:this.onClick.bind(this),to:"/",className:"FloatingLogo",style:c,children:Object(h.jsx)(b,{isVisible:this.state.isLoaded})})}}var p=Object(o.g)(m),u=s(45),g=s(43);const x=Object(g.a)("colorTheme");function O(){const e=Object(u.useMediaQuery)({query:"(prefers-color-scheme: dark)"},void 0),[t,s]=x(),c=Object(i.useMemo)((()=>void 0===t?!!e:t),[t,e]);return Object(i.useEffect)((()=>{const e=document.querySelector('link[rel="icon"]');c?(document.body.classList.add("dark"),e.href="/favicon-dark.png"):(document.body.classList.remove("dark"),e.href="/favicon-light.png")}),[c]),{isDark:c,setIsDark:s}}s(61);const f=()=>{const{isDark:e,setIsDark:t}=O();return Object(h.jsx)("label",{htmlFor:"DarkModeToggle",className:"DarkModeToggle",children:Object(h.jsx)("input",{id:"DarkModeToggle",type:"checkbox",checked:e,onChange:e=>{let{target:s}=e;return t(s.checked)},"aria-label":"Dark mode toggle"})})};s(62);var v=()=>{const{isDark:e}=O();return Object(h.jsxs)("div",{className:"SocialLinks",children:[Object(h.jsxs)("span",{className:"item",children:[Object(h.jsxs)("span",{children:[e?"Light":"Dark"," Mode"]}),Object(h.jsx)(f,{})]}),Object(h.jsxs)("a",{className:"item",href:"https://www.instagram.com/yonshamir/",target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("span",{children:"Instagram"}),Object(h.jsx)("img",{src:"./assets/ui/instagram.svg",alt:""})]},"instagram"),Object(h.jsxs)("a",{className:"item",href:"https://github.com/jonshamir",target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("span",{children:"GitHub"}),Object(h.jsx)("img",{src:"./assets/ui/github.svg",alt:""})]},"github"),Object(h.jsxs)("a",{className:"item",href:"https://www.twitter.com/jonshamir/",target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("span",{children:"Twitter"}),Object(h.jsx)("img",{src:"./assets/ui/twitterx.svg",alt:""})]},"twitter"),Object(h.jsxs)("a",{className:"item",href:"https://www.linkedin.com/in/jonshamir/",target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("span",{children:"LinkedIn"}),Object(h.jsx)("img",{src:"./assets/ui/linkedin.svg",alt:""})]},"linkedin")]})},y=s(100);class w extends c.a.Component{componentDidMount(){window.scrollTo(0,0)}render(){return null}}var N=w;s(63);var k=e=>Object(h.jsxs)(y.a.div,{className:"ProjectPage Page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[Object(h.jsx)(N,{}),e.children]});s(64);var C=e=>Object(h.jsx)("button",{className:"Button",children:e.children}),S=s(46);s(65),s(66);var T=e=>{let{alt:t,ratio:s=1,style:c={},className:a="",...n}=e;const[r,o]=Object(i.useState)(!1);return Object(h.jsx)(S.AspectRatio,{className:"imageWrapper "+a,ratio:s,style:c,children:Object(h.jsx)("img",{...n,onLoad:e=>{o(!0)},className:r?"image loaded":"image",alt:t})})};var L=e=>Object(h.jsxs)(k,{children:[Object(h.jsx)(T,{ratio:"2",src:"assets/projects/muser/screenshot.png",alt:"Muser Screenshot",className:"Screenshot",style:{backgroundColor:"#455d63"}}),Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("a",{href:"https://jonshamir.github.io/muser",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(C,{children:Object(h.jsx)("span",{children:"Launch Project \u2192"})})}),Object(h.jsx)("h1",{children:"Muser"}),Object(h.jsx)("p",{className:"subtitle",children:"Smart music visualizer"}),Object(h.jsx)("p",{children:"Muser is an experiment to see how machine learning technology can be used to enhance music visualization. The idea originated while writing a seminar paper on the history of music visualization. I researched, designed and implemented the project from start to finish."}),Object(h.jsxs)("p",{children:["A pre-trained neural network called"," ",Object(h.jsx)("a",{href:"https://github.com/jordipons/musicnn",target:"_blank",rel:"noreferrer",children:"musicnn"})," ","predicts the musical genre for each second of a song. The predictions are then used to generate a color scheme. The final visualization color palette is based on the 5 most-fitting genres."]}),Object(h.jsx)("p",{children:"We can use this to visualize how the style of a song changes over time:"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{className:"muserTimeline"}),Object(h.jsx)("strong",{children:"Love the Way You Lie"})," / Eminem feat. Rihanna"]}),Object(h.jsx)("p",{children:"For example, we can see that this classic song by Eminem and Rihanna starts with an acoustic intro (bluish) then alternates between rap (red) and pop (yellow) segments."}),Object(h.jsx)("p",{children:"For more information visit the project website!"}),Object(h.jsx)("br",{}),Object(h.jsxs)("figure",{children:[Object(h.jsx)(T,{src:"assets/projects/muser/kandinsky.jpg",alt:"kandinsky"}),Object(h.jsxs)("span",{className:"Caption",children:[Object(h.jsx)("span",{children:"Circles in a Circle "}),"by Wassily Kandinsky, 1923"]})]}),Object(h.jsxs)("p",{children:["Colors for each genre were chosen according to the"," ",Object(h.jsx)("a",{href:"https://musicmap.info/",target:"_blank",rel:"noreferrer",children:"Musicmap"})," ","project so that music genres which are stylistically closer will get similar colors."]}),Object(h.jsx)("p",{children:"Muser is inspired by Wassily Kandinsky (1866-1944). Generally credited as the pioneer of abstract art, his work is well-known for its musical influences. Kandinsky associated specific tones and instruments to shapes and colors, thus \u201cvisualizing\u201d a musical composition."}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Tools Used"}),Object(h.jsxs)("ul",{className:"List",children:[Object(h.jsx)("li",{children:"JavaScript (React.js)"}),Object(h.jsx)("li",{children:"WebGL (THREE.js + GLSL)"}),Object(h.jsx)("li",{children:"Python"})]})]}),Object(h.jsx)("img",{src:"assets/projects/muser/circles.png",alt:"",className:"muserCircles"})]});var I=e=>Object(h.jsxs)(k,{children:[Object(h.jsx)(T,{ratio:"1.95",src:"assets/projects/herbtree/screenshot.png",alt:"Herb Tree screenshot",className:"Screenshot",style:{backgroundColor:"#f6f2f1"}}),Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("a",{href:"http://herbtree.co.il",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(C,{children:Object(h.jsx)("span",{children:"Launch Project \u2192"})})}),Object(h.jsx)("h1",{children:"Herb Tree"}),Object(h.jsx)("p",{className:"subtitle",children:"Interactive botanic visualization"}),Object(h.jsx)("p",{children:"An online index of culinary herbs, created as the final project for my Visual Communication degree. The plants are organized according to their scientific classification, creating a herbal \u201ctree of life\u201d. Each herb contains a description as well as information about using it in the kitchen. In addition to research, design and development, I photographed dozens of plant specimens from the Hebrew University Herbarium, which are incorporated into the project."}),Object(h.jsx)("p",{children:"Note that the site is currently available only in Hebrew."}),Object(h.jsxs)("figure",{children:[Object(h.jsx)(T,{src:"assets/projects/herbtree/specimen.jpg",alt:"Photographing a Specimen"}),Object(h.jsx)("span",{className:"Caption",children:"Photographing a specimen for the project."})]}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Tools Used"}),Object(h.jsxs)("ul",{className:"List",children:[Object(h.jsx)("li",{children:"JavaScript (d3.js + React.js)"}),Object(h.jsx)("li",{children:"Python"}),Object(h.jsx)("li",{children:"Photography"})]})]})]}),P=s(28),E=s.n(P),M=s(47);s(76);var D=e=>{const t=(s=9,Array.from({length:s},((e,t)=>t+1))).map((e=>Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:"assets/projects/unitycg/slide".concat(e,".png"),alt:"Slide"})},e)));var s;return Object(h.jsx)(k,{children:Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("div",{className:"earth3d",children:Object(h.jsx)(E.a,{url:"assets/projects/unitycg/cube.mp4",config:{file:{attributes:{poster:"assets/projects/unitycg/cube.jpg",disableRemotePlayback:!0}}},playing:!0,loop:!0,width:"100%",attributes:{disableRemotePlayback:!0}})}),Object(h.jsx)("h1",{children:"Unity CG"}),Object(h.jsx)("p",{className:"subtitle",children:"Teaching Computer Graphics in Unity"}),Object(h.jsxs)("p",{children:["In 2019 I was given the opportunity to rebuild the practical side of the Computer Graphics Course at"," ",Object(h.jsx)("a",{href:"https://en.huji.ac.il/",target:"_blank",rel:"noreferrer",children:"the Hebrew University"})," ","from the ground up. The goal was to teach Computer Graphics in a more engaging way, using the real-time interactivity of the"," ",Object(h.jsx)("a",{href:"https://unity.com/",target:"_blank",rel:"noreferrer",children:"Unity game engine"}),"."]}),Object(h.jsx)("p",{children:"Due to the emerging COVID-19 pandemic, the class had to be taught remotely. In an attempt to improve the learning experience for the students, I created 12 lectures with over 500 slides including custom illustrations & animations that visualize different concepts."}),Object(h.jsxs)("div",{className:"slideContainer",children:[Object(h.jsx)(M.Carousel,{showThumbs:!1,showStatus:!1,showIndicators:!1,emulateTouch:!0,infiniteLoop:!0,autoPlay:!0,renderArrowPrev:e=>Object(h.jsx)("div",{onClick:e,className:"CarouselArrow left",children:"<"}),renderArrowNext:e=>Object(h.jsx)("div",{onClick:e,className:"CarouselArrow right",children:">"}),children:t}),Object(h.jsx)("span",{className:"Caption",children:"Some of the slides I created for the course"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"I also created 5 coding exercises involving subjects such as Subdivision Surfaces, Ray-Tracing, Shading, Texturing and more. I taught the students remotely and graded their assignments."}),Object(h.jsx)("div",{className:"earth3d torus",children:Object(h.jsx)(E.a,{url:"assets/projects/unitycg/torus.mp4",config:{file:{attributes:{poster:"assets/projects/unitycg/torus.jpg",disableRemotePlayback:!0}}},playing:!0,loop:!0,width:"100%"})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Tools Used"}),Object(h.jsxs)("ul",{className:"List",children:[Object(h.jsx)("li",{children:"Unity3D + C#"}),Object(h.jsx)("li",{children:"HLSL (shading language)"}),Object(h.jsx)("li",{children:"Adobe CC"}),Object(h.jsx)("li",{children:"Google Slides"})]})]})})};s(82);var z=e=>Object(h.jsx)("div",{className:"VideoEmbed",children:Object(h.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/".concat(e.videoId,"?"),title:"YouTube video player",frameBorder:"0",allow:"modestbranding; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})});var _=e=>{let{href:t,children:s,...i}=e;return Object(h.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:s})};var U=[{slug:"herbtree",name:"Herb Tree",subtitle:"2023 | Interactive botanic visualization",component:I,color:"#e7e1e1"},{slug:"muser",name:"Muser",subtitle:"2021 | Smart music visualizer",component:L,color:"#648887"},{slug:"unitycg",name:"Unity CG",subtitle:"2020-2023 | Computer graphics course in Unity",component:D,color:"#8595a8"},{slug:"scopus",name:"Scopus",subtitle:"2019 | Short 3D animation",component:e=>Object(h.jsx)(k,{children:Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("h1",{children:"Scopus"}),Object(h.jsx)("p",{className:"subtitle",children:"Short 3D animation"}),Object(h.jsx)("p",{children:"Mount Scopus and its brutalist architecture can be seen from practically anywhere in Jerusalem - clashing with the city's ancient architecture. I decided it might be used as a spaceship..."}),Object(h.jsx)("p",{children:"Modeled & rendered using Cinema4D."}),Object(h.jsx)("br",{}),Object(h.jsx)(z,{videoId:"7KkArk0uCDQ"}),Object(h.jsx)("p",{children:Object(h.jsx)("br",{})})]})}),color:"#a1a1a1"},{slug:"leaf-map",name:"Leaf Map",subtitle:"2018 | Interactive map of leaf shapes",component:e=>Object(h.jsxs)(k,{children:[Object(h.jsx)(T,{ratio:"1.95",src:"assets/projects/leaf-map/screenshot.png",alt:"Leaf Map screenshot",className:"Screenshot",style:{backgroundColor:"#f7f3ee"}}),Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("a",{href:"https://jonshamir.github.io/leaf-map",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(C,{children:Object(h.jsx)("span",{children:"Launch Project \u2192"})})}),Object(h.jsx)("h1",{children:"Leaf Map"}),Object(h.jsx)("p",{className:"subtitle",children:"Interactive map of leaf shapes"}),Object(h.jsx)("p",{children:"I used machine learning techniques to organize tree species according to their leaf shape. The idea was to create a more intuitive and friendly way to recognize plant species."}),Object(h.jsx)("img",{src:"assets/projects/leaf-map/features.png",alt:"Leaf Features"}),Object(h.jsxs)("p",{children:["Using the"," ",Object(h.jsx)(_,{href:"https://en.wikipedia.org/wiki/Shape_context",children:"Shape Context Algorithm"})," ",'I generated a "fingerprint" vector representing each leaf, which is then used to asses the similarity of shapes. Finally the dimension of this vector is reduced to 2D using PCA and'," ",Object(h.jsx)(_,{href:"https://en.wikipedia.org/wiki/T-distributed_stochastic_neighbor_embedding",children:"t-SNE"}),", and the leaves are displayed in an interactive interface I created using D3.js."]}),Object(h.jsxs)("p",{children:["The project was inspired by this"," ",Object(h.jsx)(_,{href:"http://fontmap.ideo.com/",children:"Font Map"}),", all data and images were taken from the"," ",Object(h.jsx)(_,{href:"http://leafsnap.com/dataset/",children:"Leaf Snap dataset"}),"."]}),Object(h.jsx)("br",{}),Object(h.jsx)("h2",{children:"Tools Used"}),Object(h.jsxs)("ul",{className:"List",children:[Object(h.jsx)("li",{children:"JavaScript (interface)"}),Object(h.jsx)("li",{children:"Python (data proccessing)"})]})]})]}),color:"#f8f3ef"}];s(83);var H=e=>Object(h.jsx)("div",{className:"IntroSection section",children:Object(h.jsxs)("div",{className:"intro",children:[Object(h.jsx)("span",{id:"logoInlinePos"}),Object(h.jsx)("h1",{children:"Hi, I'm Jon Shamir"}),Object(h.jsx)("p",{children:"My interests lie at the intersection of technology and graphic design: computer graphics, data visualization, web technologies and more."}),Object(h.jsx)("p",{children:"Mostly I love working on projects that combine different fields and use technology in new and interesting ways. Currently working on spatial interactions at Sightful."})]})});s(84);var R=e=>Object(h.jsxs)("div",{className:"ProjectSection section",children:[Object(h.jsx)("h2",{children:"Projects"}),Object(h.jsx)("div",{className:"projectTiles",children:U.map((e=>Object(h.jsxs)(j.b,{to:"/projects/".concat(e.slug),className:"ProjectTile",children:[Object(h.jsx)(T,{src:"assets/projects/".concat(e.slug,"/cover.jpg"),alt:e.name,style:{backgroundColor:e.color}}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("h3",{children:e.name}),Object(h.jsx)("span",{children:e.subtitle})]})]},e.slug)))})]});var A=e=>{let{scrollTop:t,setScrollTop:s,...c}=e;Object(i.useEffect)((()=>{window.scrollTo(0,t)}));return Object(h.jsxs)(y.a.div,{className:"Page",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onAnimationComplete:e=>{if(0===e.opacity){const e=document.documentElement.scrollTop||document.body.scrollTop;s(e)}},transition:{duration:.2},children:[Object(h.jsx)(H,{}),Object(h.jsx)(R,{})]})};l.a.init("phc_Ud6pwqtRXUUeeC5zAjDoPZ7MYE41EdRWPMY2gdni1Yt",{api_host:"https://app.posthog.com"});var F=()=>{const e=Object(o.f)();window.history.scrollRestoration&&(window.history.scrollRestoration="manual");const[t,s]=Object(i.useState)(0),c=U.map((e=>Object(h.jsx)(o.a,{path:"/projects/".concat(e.slug),children:Object(h.jsx)(e.component,{})},e.slug)));return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{}),Object(h.jsx)(v,{}),Object(h.jsx)(r.a,{exitBeforeEnter:!0,children:Object(h.jsxs)(o.c,{location:e,children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(A,{scrollTop:t,setScrollTop:s})}),c]},e.pathname)})]})};var G=e=>{e&&e instanceof Function&&s.e(16).then(s.bind(null,102)).then((t=>{let{getCLS:s,getFID:i,getFCP:c,getLCP:a,getTTFB:n}=t;s(e),i(e),c(e),a(e),n(e)}))};n.a.render(Object(h.jsx)(j.a,{basename:"",children:Object(h.jsx)(F,{})}),document.getElementById("root")),G()}},[[85,14,15]]]);
//# sourceMappingURL=main.80cad806.chunk.js.map