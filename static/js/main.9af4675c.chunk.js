(this["webpackJsonptradingview-demo"]=this["webpackJsonptradingview-demo"]||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},72:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(19),i=c.n(n),r=(c(52),c(53),c(8)),s=c(101),o=c(100),l=c(45),u=c.n(l),d=c(35),b=c(29),j=c.n(b);c(72);var m=c(2),O=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),n=Object(a.useState)(0),i=Object(r.a)(n,2),l=i[0],b=i[1],O=Object(a.useRef)(),f=Object(a.useState)(""),h=Object(r.a)(f,2),p=h[0],x=h[1],g=Object(a.useState)(""),v=Object(r.a)(g,2),S=v[0],F=v[1],w=Object(a.useState)(""),y=Object(r.a)(w,2),R=y[0],C=y[1],N=Object(a.useState)(""),D=Object(r.a)(N,2),E=D[0],I=D[1],k=Object(a.useState)(""),T=Object(r.a)(k,2),L=T[0],V=T[1],_=Object(a.useState)(""),A=Object(r.a)(_,2),B=A[0],z=A[1],J=Object(a.useState)(""),P=Object(r.a)(J,2),W=P[0],X=P[1],H=Object(a.useState)(""),M=Object(r.a)(H,2),q=M[0],G=M[1],K=Object(a.useState)(""),Q=Object(r.a)(K,2),U=Q[0],Y=Q[1],Z=Object(a.useState)(""),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ce=Object(a.useState)(19553),ae=Object(r.a)(ce,2),ne=ae[0],ie=ae[1],re=Object(a.useState)("alien.worlds"),se=Object(r.a)(re,2),oe=se[0],le=se[1],ue=Object(a.useState)([]),de=Object(r.a)(ue,2),be=(de[0],de[1]);function je(e,t){return new Intl.NumberFormat("en",{maximumFractionDigits:t,minimumFractionDigits:t}).format(e)}return Object(a.useEffect)((function(){G("https://wax.api.atomicassets.io/atomicassets/v1/assets?template_id={{templateID}}&page=1&limit=1&order=desc&sort=asset_id".replace("{{templateID}}",ne)),Y(function(e){return"https://wax.api.atomicassets.io/atomicmarket/v1/prices/sales?template_id={{templateID}}".replace("{{templateID}}",e)}(ne))}),[ne]),Object(a.useEffect)((function(e){j.a.get(U).then((function(c){if(JSON.stringify(c.data.data)!==JSON.stringify(e)){O.current.setData([]),be(c.data.data);var a=c.data.data.length-1,n=c.data.data[a].price/1e8,i=[];V(parseFloat(n).toFixed(2)),c.data.data.forEach((function(e){var t=(e.price/1e8).toFixed(2);i.push(parseFloat(t)),O.current.update({time:e.block_time/1e3,value:t})}));var r=function(e){var t=e[0],c=e[0],a=e.length;for(;a--;)t=e[a]<t?e[a]:t,c=e[a]>c?e[a]:c;return{min:t,max:c}}(i);O.current.applyOptions({autoscaleInfoProvider:function(){return{priceRange:{minValue:r.min,maxValue:r.max}}}}),t.current.timeScale().fitContent()}})).catch((function(e){}))}),[U]),Object(a.useEffect)((function(){j.a.get(q).then((function(e){le(e.data.data[0].collection.name),F(e.data.data[0].template.immutable_data.name),C(e.data.data[0].template.issued_supply)})).catch((function(e){console.log(e)}))}),[q]),Object(a.useEffect)((function(){te(function(e,t){return"https://wax.api.atomicassets.io/atomicassets/v1/templates/{{collectionName}}/{{templateID}}/stats".replace("{{templateID}}",e).replace("{{collectionName}}",t)}(ne,oe))}),[oe]),Object(a.useEffect)((function(){j.a.get(ee).then((function(e){X(e.data.data.burned)})).catch((function(e){console.log(e)}))}),[ee]),Object(a.useEffect)((function(){if(""!==L&&""!==R){var e=parseFloat(L*(R-W)).toFixed(2);z(e),I(R-W)}}),[L,R,W]),Object(a.useEffect)((function(){t.current=Object(d.b)(e.current,{width:e.current.clientWidth,height:e.current.clientHeight,handleScroll:!0,handleScale:!0,layout:{backgroundColor:"#253248",textColor:"rgba(255, 255, 255, 0.9)"},grid:{vertLines:{color:"#334158",visible:!1,labelVisible:!1},horzLines:{color:"#334158",visible:!1,labelVisible:!1}},crosshair:{mode:d.a.Normal},priceScale:{borderColor:"#485c7b",autoScale:!0},timeScale:{borderColor:"#485c7b",timeVisible:!0,secondsVisible:!1}}),O.current=t.current.addAreaSeries({})}),[]),Object(a.useEffect)((function(){setTimeout((function(){b((function(e){return e+1}))}),5e3)}),[l]),Object(a.useEffect)((function(){return c.current=new ResizeObserver((function(e){var c=e[0].contentRect,a=c.width,n=c.height;t.current.applyOptions({width:a,height:n}),setTimeout((function(){t.current.timeScale().fitContent()}),0)})),c.current.observe(e.current),function(){return c.current.disconnect()}}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{style:{paddingTop:15,paddingBottom:15,backgroundColor:"#253248",color:"white"},children:Object(m.jsxs)(o.a,{container:!0,align:"center",justifyContent:"center",alignItems:"center",children:[Object(m.jsxs)(o.a,{item:!0,xs:12,sm:12,md:2,className:"grid-item",children:[Object(m.jsx)("code",{children:oe}),Object(m.jsx)("h3",{children:S})]}),Object(m.jsxs)(o.a,{item:!0,xs:12,sm:4,md:2,className:"grid-item",children:[Object(m.jsx)("code",{children:"Supply"}),Object(m.jsxs)("h3",{children:[je(E,0)," ",Object(m.jsxs)("small",{children:["(",je(W,0),Object(m.jsx)(u.a,{className:"burn-icon",fontSize:"small"}),")"]})]}),Object(m.jsx)("div",{children:Object(m.jsx)("h5",{})})]}),Object(m.jsxs)(o.a,{item:!0,xs:12,sm:4,md:2,className:"grid-item",children:[Object(m.jsx)("code",{children:"Last Sale Price"}),Object(m.jsxs)("h3",{children:[je(L,2)," WAX"]})]}),Object(m.jsxs)(o.a,{item:!0,xs:12,sm:4,md:2,className:"grid-item",children:[Object(m.jsx)("code",{children:"Market Cap"}),Object(m.jsxs)("h3",{children:[je(B,2)," WAX"]})]}),Object(m.jsx)(o.a,{item:!0,xs:12,sm:12,md:3,className:"grid-item",children:Object(m.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var t=e.target.elements[0].value;ie(t)},children:[Object(m.jsx)("label",{htmlFor:"",children:Object(m.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)},value:p,placeholder:"Enter Template ID",name:"",id:"",style:{height:31,width:115,textAlign:"center",borderRadius:"0px",border:"none",borderTopLeftRadius:"2px",borderBottomLeftRadius:"2px"}})}),Object(m.jsx)(s.a,{variant:"contained",color:"primary",type:"submit",style:{borderRadius:"0px",backgroundColor:"#2b8660",fontSize:"12px",borderTopRightRadius:"2px",borderBottomRightRadius:"2px"},children:Object(m.jsx)("code",{children:"Search"})})]})})]})}),Object(m.jsx)("div",{ref:e,className:"chart-container"})]})},f=c(32),h=c(4);var p=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(f.a,{basename:"/tv-demo",children:Object(m.jsx)(h.c,{children:Object(m.jsx)(h.a,{exact:!0,path:"/",children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(O,{})})})})})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root")),x()}},[[84,1,2]]]);
//# sourceMappingURL=main.9af4675c.chunk.js.map