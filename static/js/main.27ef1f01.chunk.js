(this.webpackJsonpxmlvalidator=this.webpackJsonpxmlvalidator||[]).push([[0],{22:function(e,t,n){},35:function(e,t,n){},38:function(e,t){},40:function(e,t){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),s=(n(22),n(35),n(9)),l=n(20),o=n(21),d=n.n(o),u=n(2),h=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),o=i[0],h=i[1],j=Object(a.useState)(""),x=Object(s.a)(j,2),m=x[0],p=x[1],b=Object(a.useState)(""),O=Object(s.a)(b,2),g=O[0],f=O[1];function v(){fetch("https://hugoapgarcia.github.io/structure/user.xml").then((function(e){return e.text()})).then((function(e){var t=(new DOMParser).parseFromString(e,"application/xml");r(e),function(e){document.getElementById("users").textContent="";for(var t=document.getElementById("users"),n=e.getElementsByTagName("user"),a=0;a<n.length;a++)for(var r=n[a].getElementsByTagName("name"),c=document.createElement("li"),i=0;i<r.length;i++)c.textContent=r[i].childNodes[0].nodeValue,t.appendChild(c)}(t),function(e){var t=e.createElement("user"),n=e.createElement("id");n.appendChild(e.createTextNode("1"));var a=e.createElement("name");a.appendChild(e.createTextNode("Karla"));var r=e.createElement("date"),c=(new Date).toISOString();r.appendChild(e.createTextNode(c)),t.appendChild(n),t.appendChild(a),t.appendChild(r),e.getElementsByTagName("users")[0].appendChild(t),function(e,t){var n=new XMLHttpRequest,a="";n.open("POST",a),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var e=n.response;alert("".concat(e,": ").concat(t))}},n.setRequestHeader("Content-Type","text/xml"),n.send(e)}(e,"newXML");var i=e.getElementsByTagName("users")[0],s=(new XMLSerializer).serializeToString(i);h(s)}(t)}))}function S(){fetch("https://hugoapgarcia.github.io/structure/registration.xsd").then((function(e){return e.text()})).then((function(e){return p(e),(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){console.log(e);var t=(new XMLSerializer).serializeToString(e);return JSON.parse(d.a.xml2json(t,{compact:!0,ignoreAttributes:!0,spaces:4}))})).then((function(e){!function(e){var t=(new DOMParser).parseFromString(e,"application/xml");t.getElementsByTagName("title")[0].textContent="Engineer";var n=(new XMLSerializer).serializeToString(t);f(n)}(d.a.json2xml(e,{compact:!0}))}))}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:function(e){return v()},children:"Get & Update XML"}),Object(u.jsx)("h3",{children:"Description:"}),Object(u.jsx)("p",{children:"Click event will be displaying current XML file retrives as List of usernames or any other item. Also will be executting an updated XML ready to be send to a specific endpoint url. Open Dev Tool and Conosole to see the updated XML."}),Object(u.jsx)("h3",{children:"XML DATA:"}),Object(u.jsxs)("div",{className:"xml-box",children:[Object(u.jsxs)("div",{className:"child",children:[Object(u.jsx)("h2",{children:"Current XML Response :"}),Object(u.jsx)("textarea",{readOnly:!0,id:"output",lang:"xml",rows:"30",cols:"55",value:n})]}),Object(u.jsxs)("div",{className:"child",children:[Object(u.jsx)("h2",{children:"Updated XML"}),Object(u.jsx)(l.a,{className:"newXmlbox",xml:o})]}),Object(u.jsxs)("div",{className:"interaction",children:[Object(u.jsx)("h1",{children:"INTERACTION WITH XML:"}),Object(u.jsx)("p",{children:"Iterate in xml file to display only user-names in HTML."}),Object(u.jsx)("ul",{id:"users"})]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{onClick:function(e){return S()},children:"Get XSD & Create Valid XML from Schema"}),Object(u.jsx)("h1",{children:"PROCESING XSD DATA:"}),Object(u.jsxs)("div",{className:"xml-box",children:[Object(u.jsxs)("div",{className:"child",children:[Object(u.jsx)("h2",{children:"Current XML Schema (XSD) Response :"}),Object(u.jsx)("textarea",{readOnly:!0,id:"outputxsd",lang:"xml",rows:"30",cols:"55",value:m})]}),Object(u.jsxs)("div",{className:"child",children:[Object(u.jsx)("h2",{children:"Generated Valid XML :"}),Object(u.jsx)(l.a,{className:"newXmlbox",xml:g})]})]})]})};var j=function(){return Object(u.jsx)(h,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),x()}},[[56,1,2]]]);
//# sourceMappingURL=main.27ef1f01.chunk.js.map