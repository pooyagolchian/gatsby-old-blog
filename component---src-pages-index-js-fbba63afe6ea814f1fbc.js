(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var i=a(7),r=a.n(i),n=a(0),o=a.n(n),s=a(152),l=a(159),c=a(156),d=a(157),u=a(153),A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(d.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},o.a.createElement(s.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",{style:{color:"#999"}},t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(o.a.Component);t.default=A;var f="2785444898"},152:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(154);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var i=a(164),r=a.n(i),n=a(165),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new r.a(o.a);var l=s.rhythm,c=s.scale},154:function(e,t,a){var i;e.exports=(i=a(155))&&i.default||i},155:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),o=a.n(n),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";a(34);var i=a(7),r=a.n(i),n=a(0),o=a.n(n),s=a(152),l=a(153),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,i=t.title,r=t.children;return e="/pooyagolchian.github.io/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},o.a.createElement("header",null,e),o.a.createElement("main",null,r),o.a.createElement("footer",{style:{color:"#666",fontSize:".9em"}},"© 2015 - ",(new Date).getFullYear(),". All right reserved."))},t}(o.a.Component);t.a=c},157:function(e,t,a){"use strict";var i=a(158),r=a(0),n=a.n(r),o=a(4),s=a.n(o),l=a(166),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=i.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Pooya Golchian",description:"A starter blog demonstrating what Gatsby can do.",author:"Pooya Golchian"}}}}},159:function(e,t,a){"use strict";a(160);var i=a(162),r=a(0),n=a.n(r),o=a(152),s=a(163),l=a.n(s),c=a(153);var d="4007731267";t.a=function(){return n.a.createElement(o.b,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a),", Software Engineer with a passion to create simple, elegant, easy to use things to make this world a bit easier."," ",n.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"Twitter")," ",",",n.a.createElement("a",{href:"https://github.com.com/"+i.github},"Github")))},data:i})}},160:function(e,t,a){"use strict";a(161)("fixed",function(e){return function(){return e(this,"tt","","")}})},161:function(e,t,a){var i=a(11),r=a(18),n=a(19),o=/"/g,s=function(e,t,a,i){var r=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(i).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},162:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAATABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/2gAMAwEAAhADEAAAAcNaWkOcqbPbSPPmBbf/xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDERIyIf/aAAgBAQABBQIM8MVLKjcM2nGzByn9/wD/xAAaEQACAgMAAAAAAAAAAAAAAAAAAQIREiFR/9oACAEDAQE/AY40Xwb2I//EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAECAQE/AVY//8QAHRAAAQIHAAAAAAAAAAAAAAAAAAERECAiMTJRof/aAAgBAQAGPwJ7JtjPkGUqkU//xAAdEAACAwACAwAAAAAAAAAAAAABEQAhMRBxUWGh/9oACAEBAAE/IbhFfshhD1Qk+QRjPPqFRULQrjEzfvj6J//aAAwDAQACAAMAAAAQNPfC/8QAGREBAQEAAwAAAAAAAAAAAAAAAQARMUFh/9oACAEDAQE/EC9ueytekwgbgX//xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAECAQE/ENELAZz/xAAeEAEAAgMAAgMAAAAAAAAAAAABESEAMUEQgVHw8f/aAAgBAQABPxBpuEULZj76xka5wK6FNY439B5grBcZCfuRAeQErHdVg/Lvcs7uk+vDQSgUGf/Z",width:50,height:50,src:"/pooyagolchian.github.io/static/b29b6e1f04c521805289e62772e6aa91/7e494/profile-pic.jpg",srcSet:"/pooyagolchian.github.io/static/b29b6e1f04c521805289e62772e6aa91/7e494/profile-pic.jpg 1x,\n/pooyagolchian.github.io/static/b29b6e1f04c521805289e62772e6aa91/36cc2/profile-pic.jpg 1.5x,\n/pooyagolchian.github.io/static/b29b6e1f04c521805289e62772e6aa91/0a3a6/profile-pic.jpg 2x,\n/pooyagolchian.github.io/static/b29b6e1f04c521805289e62772e6aa91/75d16/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Pooya Golchian",social:{twitter:"pooyagolchian"}}}}}},163:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),o=i(a(35)),s=i(a(75)),l=i(a(76)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+s+l+a+r+t+o+n+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,d=e.onError,u=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:o,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,s=f(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E=e.itemProp,w="boolean"==typeof y?"lightgray":y,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,A),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),j={title:t,alt:this.state.isVisible?"":a,style:v,className:f};if(p){var R=p;return c.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),R.base64&&c.default.createElement(m,(0,l.default)({src:R.base64},j)),R.tracedSVG&&c.default.createElement(m,(0,l.default)({src:R.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement(m,{alt:a,title:t,sizes:R.sizes,src:R.src,crossOrigin:this.props.crossOrigin,srcSet:R.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(h){var B=h,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},n);return"inherit"===n.display&&delete L.display,c.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,width:B.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:B.height}}),B.base64&&c.default.createElement(m,(0,l.default)({src:B.base64},j)),B.tracedSVG&&c.default.createElement(m,(0,l.default)({src:B.tracedSVG},j)),this.state.isVisible&&c.default.createElement("picture",null,B.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),c.default.createElement(m,{alt:a,title:t,width:B.width,height:B.height,sizes:B.sizes,src:B.src,crossOrigin:this.props.crossOrigin,srcSet:B.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:B.width,height:B.height},B))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-js-fbba63afe6ea814f1fbc.js.map