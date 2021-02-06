(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(11),l=n.n(o),r=(n(4),n(6),n(7),n(3)),i=n(9),u=n(1),m=function(e){var t=e.onAdd,n=Object(a.useState)(""),o=Object(u.a)(n,2),l=o[0],r=o[1];return c.a.createElement("div",null,c.a.createElement("form",{className:"addTodo",onSubmit:function(e){e.preventDefault();var n={id:+new Date,title:l,completed:!1};t(n),r("")}},c.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:l,onChange:function(e){return r(e.target.value)}})))},d=n(2),s=n.n(d),f=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),o=n[0],l=n[1],r=Object(a.useState)(""),i=Object(u.a)(r,2),m=i[0],d=i[1],f=Object(a.useState)(!1),p=Object(u.a)(f,2),b=p[0],E=p[1],O=e.completeTodo,j=e.itemId,v=e.itemTitle,h=e.deleteTodo,g=e.itemCompleted,N=e.onAddNewTitle,T=function(){b&&(N({id:j,title:m}),E(!1),d(""))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:s()({view:!g&&!b,completed:g&&!b,editing:!g&&b})},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:o,onChange:function(e){var t=e.target.checked;l(t),O(j)}}),!b&&c.a.createElement("label",{onDoubleClick:function(){return E(!0)}},v),c.a.createElement("button",{type:"button",className:"destroy",value:j,onClick:function(e){return h(e.target.value)}})),b&&c.a.createElement("input",{type:"text",className:"edit",value:m,onChange:function(e){return d(e.target.value)},onKeyDown:function(e){var t;"Enter"===(t=e.key)?T():"Escape"===t&&(N(v),E(!1),d(""))},onBlur:T})))},p=function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),o=n[0],l=n[1],r=e.items,i=e.deleteTodo,m=e.completeTodo,d=e.completeAllTodo,p=e.showFotter,b=e.onAddNewTitle;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"checkbox",id:"toggle-all",className:s()({"toggle-all":p,hidden:!p}),onClick:function(){o?(d(o),l(!1)):(d(o),l(!0))}}),p&&c.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),c.a.createElement("ul",{className:"todo-list"},r.map((function(e){return c.a.createElement(f,{key:e.id,completeTodo:m,itemId:e.id,itemTitle:e.title,deleteTodo:i,itemCompleted:e.completed,onAddNewTitle:b})}))))};p.defaultProps={items:[]};var b=function(e,t,n){e.preventDefault(),t(n)},E=function(e){var t=Object(a.useState)(0),n=Object(u.a)(t,2),o=n[0],l=n[1],r=Object(a.useState)(0),i=Object(u.a)(r,2),m=i[0],d=i[1],f=e.todos,p=e.filter,E=e.onFilter,O=e.onRemoveCompleted,j=e.showFotter,v=f.filter((function(e){return!1===e.completed})).length;Object(a.useEffect)((function(){l(v)}),[v]);var h=f.some((function(e){return!0===e.completed}));return Object(a.useEffect)((function(){d(h)}),[h]),c.a.createElement("footer",{className:s()({footer:j,hidden:!j})},c.a.createElement("span",{className:"todo-count"},"".concat(o,"  items left")),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:s()({selected:"all"===p}),onClick:function(e){return b(e,E,"all")}},"All")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:s()({selected:"active"===p}),onClick:function(e){return b(e,E,"active")}},"Active")),c.a.createElement("li",null,c.a.createElement("a",{href:"#/",className:s()({selected:"completed"===p}),onClick:function(e){return b(e,E,"completed")}},"Completed"))),m&&c.a.createElement("button",{type:"button",className:"clear-completed",onClick:O},"Clear completed"))};E.defaultProps={todos:[]};var O=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)([]),d=Object(u.a)(l,2),s=d[0],f=d[1],b=Object(a.useState)(""),O=Object(u.a)(b,2),j=O[0],v=O[1];Object(a.useEffect)((function(){localStorage.todos&&o(JSON.parse(localStorage.getItem("todos")||"[]"))}),[]),Object(a.useEffect)((function(){f(Object(i.a)(n))}),[n]);var h=n.length>0;return c.a.createElement("section",{className:"todoapp"},c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement(m,{onAdd:function(e){o((function(t){return[].concat(Object(i.a)(t),[e])}))},todos:n})),c.a.createElement("section",{className:"main"},c.a.createElement(p,{items:s,deleteTodo:function(e){o(n.filter((function(t){return t.id!==+e})))},completeTodo:function(e){o(n.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},completeAllTodo:function(e){o(n.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{completed:e})})))},showFotter:h,onAddNewTitle:function(e){o(n.map((function(t){return t.id===e.id?Object(r.a)(Object(r.a)({},t),{},{title:e.title}):t})))}})),c.a.createElement(E,{todos:n,filter:j,onFilter:function(e){switch(v(e),e){case"active":return f(n.filter((function(e){return!1===e.completed})));case"completed":return f(n.filter((function(e){return!0===e.completed})));default:return f(Object(i.a)(n))}},onRemoveCompleted:function(){o(n.filter((function(e){return!1===e.completed})))},showFotter:h}))};l.a.render(c.a.createElement(O,null),document.getElementById("root"))},4:function(e,t,n){},6:function(e,t,n){},7:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.0a0897d6.chunk.js.map