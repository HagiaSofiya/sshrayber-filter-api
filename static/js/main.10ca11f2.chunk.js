(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(5),r=n.n(i),l=(n(44),n(45),n(36)),c=n(30),s=n(31),p=n(37),u=n(32),d=n(38),f=n(33),m=n.n(f),g=n(34),h=n.n(g),y={alignItems:"center",display:"flex",justifyContent:"center",width:"100vw",height:"100vh"},b={animation:"loading-spin infinite 20s linear",height:"40vmin",pointerEvents:"none"},v={display:"block",margin:"0 auto",width:"50%"},w={width:"80vw",margin:"50px auto 100px"},x={display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginBottom:"50px",marginTop:"25px"},E={backgroundColor:"transparent",color:"#FFE807",border:"0px",borderBottom:"1px solid #FFE807",fontFamily:"'Jura', sans-serif",textTransform:"capitalize",fontSize:"22px",fontWeight:"700",padding:"4px 10px 6px"},k={border:"1px solid #FFE807",borderTop:"none",borderBottom:"none",textAlign:"center"},j={color:"#fbfbfb",fontSize:"20px",fontFamily:"'Ubuntu', sans-serif"},F=function(){return o.a.createElement("div",{style:y},o.a.createElement("img",{src:h.a,style:b,alt:"loading"}))},B=n(35),O=n.n(B),S=function(){return o.a.createElement("img",{src:O.a,style:v,alt:"logo"})},C=n(6),P=n.n(C),W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={isLoading:!1,people:[],filteredPeople:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),new Promise(function(e,t){!function e(t,n,a,o){m.a.get(t).then(function(t){var i=n.concat(t.data.results);null!==t.data.next?e(t.data.next,i,a,o):a(i)}).catch(function(e){return console.log(e)})}("https://swapi.co/api/people/",[],e,t)}).then(function(t){return e.setState({isLoading:!1,people:t,filteredPeople:t})})}},{key:"compareBy",value:function(e){this.setState({filteredPeople:this.state.people.filter(function(t){return t.gender===e})})}},{key:"reset",value:function(){this.setState({filteredPeople:this.state.people})}},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoading,a=t.people,i=t.filteredPeople,r=Object(l.a)(new Set(a.map(function(e){return e.gender}))),c=C.transitions.scaleDown;return!0===n?o.a.createElement(F,null):o.a.createElement("section",{style:w},o.a.createElement(S,null),o.a.createElement("div",{style:x},o.a.createElement("button",{style:E,type:"button",onClick:function(){return e.reset()},key:"reset"},"all"),r.map(function(t){return o.a.createElement("button",{style:E,type:"button",onClick:function(){return e.compareBy(t)},key:t},t)})),o.a.createElement("div",null,o.a.createElement(P.a,{style:k,columnWidth:100,gutterWidth:15,gutterHeight:30,duration:600,easing:C.easings.cubicOut,appearDelay:60,appear:c.appear,appeared:c.appeared,enter:c.enter,entered:c.entered,leaved:c.leaved},i.map(function(e,t){return o.a.createElement("p",{style:j,key:t},e.name)}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,n){e.exports=n.p+"static/media/loading.7686e6f6.png"},35:function(e,t,n){e.exports=n.p+"static/media/logo.40e5b6b3.png"},39:function(e,t,n){e.exports=n(130)},44:function(e,t,n){},45:function(e,t,n){}},[[39,1,2]]]);
//# sourceMappingURL=main.10ca11f2.chunk.js.map