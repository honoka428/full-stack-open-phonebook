(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(2),o=t.n(c),i=t(16),a=t.n(i),u=(t(7),t(6)),s=t(3),l=t(4),d=t.n(l),f="/api/persons",h=function(){return d.a.get(f).then((function(e){return e.data}))},j=function(e){return d.a.post(f,e).then((function(e){return e.data})).catch((function(e){console.log("failed",e)}))},b=function(e){return d.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.statusText}))},O=function(e,n){return d.a.put("".concat(f,"/").concat(n),e).then((function(e){return e.data})).catch((function(e){console.log("failed",e)}))},m=function(e){return Object(r.jsxs)("div",{style:{display:"flex",marginTop:10},children:[Object(r.jsxs)("div",{children:[e.person.name,":  ",e.person.number]}),Object(r.jsx)("button",{value:e.person.id,onClick:e.handleDelete,style:{marginLeft:10},children:"delete"})]})},g=function(e){return Object(r.jsxs)("div",{children:[" filter shown with: ",Object(r.jsx)("input",{value:e.newFilter,onChange:e.handleFilterChange})]})},p=function(e){return Object(r.jsxs)("form",{onSubmit:e.addPerson,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.message,t=e.errorType;return null===n?null:Object(r.jsx)("div",{className:t,children:n})},x=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],o=n[1],i=Object(c.useState)(""),a=Object(s.a)(i,2),l=a[0],d=a[1],f=Object(c.useState)(""),x=Object(s.a)(f,2),w=x[0],y=x[1],C=Object(c.useState)(""),S=Object(s.a)(C,2),N=S[0],T=S[1],F=Object(c.useState)(!0),P=Object(s.a)(F,2),k=P[0],E=P[1],L=Object(c.useState)(null),D=Object(s.a)(L,2),A=D[0],B=D[1],I=Object(c.useState)(""),J=Object(s.a)(I,2),M=J[0],q=J[1],z=k?t:t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(N.toLowerCase())}));Object(c.useEffect)((function(){h().then((function(e){o(e)})),z=k?t:t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(N.toLowerCase())}))}),[]);var G=function(e){window.confirm("Are you sure you want to delete this person?")&&b(e.target.value).then((function(){var n=t.find((function(n){return String(n.id)===e.target.value})).id;o(t.filter((function(e){return e.id!==n}))),q("greenError"),B("Person deleted succesfully"),setTimeout((function(){B(null)}),5e3)})).catch((function(n){console.log(n),q("redError"),B("This person was already deleted from the server");var r=t.find((function(n){return String(n.id)===e.target.value})).id;o(t.filter((function(e){return e.id!==r})))}))};return Object(r.jsxs)("div",{style:{margin:30},children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(v,{message:A,errorType:M}),Object(r.jsx)(g,{newFilter:N,handleFilterChange:function(e){T(e.target.value),E(!1)}}),Object(r.jsx)("h2",{children:"Add New Person"}),Object(r.jsx)(p,{addPerson:function(e){e.preventDefault();var n=!1,r={name:l,id:Math.random(),number:w};if(t.forEach((function(e){e.name!==l||(n=!0)})),n)if(n){if(!window.confirm("This person already exists. Do you want to replace the old number with a new one?"))return;var c=t.find((function(e){return e.name===l})).id,i=t.find((function(e){return e.id===c})),a=Object(u.a)(Object(u.a)({},i),{},{number:w});O(a,c).then((function(e){o((function(n){return n.id!==c?n:e})),q("greenError"),B("Number replaced succesfully"),setTimeout((function(){B(null)}),5e3)}))}else alert("".concat(l," is already added to phonebook"));else o(t.concat(r)),j(r),q("greenError"),B("Person Added Successfully"),setTimeout((function(){B(null)}),5e3);d(""),y("")},newName:l,handleNameChange:function(e){d(e.target.value)},newNumber:w,handleNumberChange:function(e){y(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)("ul",{children:z.map((function(e){return Object(r.jsx)(m,{person:e,handleDelete:G},e.id)}))})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),w()},7:function(e,n,t){}},[[39,1,2]]]);
//# sourceMappingURL=main.65437dc0.chunk.js.map