(this["webpackJsonpcovid-site"]=this["webpackJsonpcovid-site"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},23:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(11),c=a.n(r),i=(a(23),a(16)),o=a(12),s=a(13),u=a(17),m=a(15),d=a(14),h=a.n(d),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:{}},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://api.covid19india.org/state_district_wise.json").then((function(t){var a=t.data["Tamil Nadu"].districtData;e.setState({data:a})}))}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement("div",null,l.a.createElement("h1",null,"District Wise COVID Data in TN"),l.a.createElement("ol",null,Object.entries(this.state.data).map((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return l.a.createElement("li",null,l.a.createElement("h1",null,a),l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement("h3",null,"Confirmed:",n.confirmed)),l.a.createElement("li",null,l.a.createElement("h3",null,"Active:",n.active)),l.a.createElement("li",null,l.a.createElement("h3",null,"Deceased:",n.deceased))))}))))}}]),a}(l.a.Component);var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.56a5deb9.chunk.js.map