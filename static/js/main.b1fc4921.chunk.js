(this["webpackJsonpemployee-directory-app"]=this["webpackJsonpemployee-directory-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(13),c=n.n(s),i=(n(20),n(3)),l=n(15),d=(n(21),a.a.createContext({})),o=n(0),j=function(){var e=Object(r.useContext)(d);function t(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return Object(o.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var n=e.login,r=e.name,a=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(o.jsx)("img",{src:a.medium,alt:"profile image for "+r.first+" "+r.last,className:"img-responsive"})}),Object(o.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[r.first," ",r.last]}),Object(o.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(o.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(o.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(o.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(i.date)})]},n.uuid)})):Object(o.jsx)(o.Fragment,{})})},h=(n(23),function(){var e=Object(r.useContext)(d);return Object(o.jsx)("div",{className:"employeetable mt-5",children:Object(o.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:e.developerState.headings.map((function(t){var n=t.name,r=t.width;return Object(o.jsxs)("th",{className:"col",style:{width:r},onClick:function(){e.handleSort(n.toLowerCase())},children:[n,Object(o.jsx)("span",{className:"pointer"})]},n)}))})}),Object(o.jsx)(j,{})]})})}),u=(n(24),function(){var e=Object(r.useContext)(d);return Object(o.jsx)("div",{className:"searchbox",children:Object(o.jsxs)("form",{className:"form-inline",children:[Object(o.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}),Object(o.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search"})]})})});n(25);var b=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsx)("div",{className:"search-area col-4",children:Object(o.jsx)(u,{})})})},m=n(14),f=n.n(m),O=function(){return f.a.get("https://randomuser.me/api/?results=5000")},x=(n(44),function(){var e=Object(r.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"5%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"5"}]}),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){O().then((function(e){a(Object(i.a)(Object(i.a)({},n),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[n]),Object(o.jsxs)(d.Provider,{value:{developerState:n,handleSearchChange:function(e){var t=e.target.value,r=n.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));a(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:r}))},handleSort:function(e){"descend"===n.order?a({order:"ascend"}):a({order:"descend"});var t=n.filteredUsers.sort((function(t,r){return"ascend"===n.order?void 0===t[e]?1:void 0===r[e]?-1:"name"===e?t[e].first.localeCompare(r[e].first):r[e]-t[e]:void 0===t[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(t[e].first):r[e]-t[e]}));a(Object(i.a)(Object(i.a)({},n),{},{filteredUsers:t}))}},children:["\xa0\xa0\xa0\xa0\xa0\xa0",Object(o.jsx)(b,{}),"\xa0\xa0\xa0\xa0\xa0\xa0",Object(o.jsxs)("div",{className:"employee-area",children:["\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",n.filteredUsers.length>0?Object(o.jsx)(h,{}):Object(o.jsx)("div",{}),"\xa0\xa0\xa0\xa0\xa0\xa0"]}),"\xa0\xa0\xa0\xa0"]})});n(45);var v=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(x,{})})};n(46);var p=function(e){var t=e.children;return Object(o.jsx)("div",{className:"Container",children:t})};n(47);var g=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Employee Directory"}),Object(o.jsx)("p",{children:"Use search bar or filter for more precise results"})]})};n(48);var N=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(p,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(v,{})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),C()}},[[49,1,2]]]);
//# sourceMappingURL=main.b1fc4921.chunk.js.map