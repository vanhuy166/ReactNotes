(this["webpackJsonpreact-notes-app"]=this["webpackJsonpreact-notes-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(8),r=n.n(s),o=(n(17),n(11)),i=n(3),l=n(12),d=(n(18),n(19),n(0));var j=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(d.jsxs)("div",{className:"note new",children:[Object(d.jsx)("textarea",{cols:10,rows:8,placeholder:"Type to add a new note...",onChange:function(e){300-e.target.value.length>=0&&s(e.target.value)},value:a}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsxs)("small",{children:[300-a.length," Remaining"]}),Object(d.jsx)("button",{className:"save",onClick:function(){a.trim().length>0&&(e.handleAddNote(a),s(""))},children:"Save"})]})]})},u=(n(21),function(e){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("h1",{children:[Object(d.jsx)("span",{children:"React"})," Notes"]}),Object(d.jsx)("button",{className:"save",onClick:function(){return e.handleToggleDarkMode((function(e){return!e}))},children:"Toggle Mode"})]})}),h=n(6),b=n(9);n(24);var O=function(e){return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsx)("span",{children:e.text}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsx)("small",{children:e.date}),Object(d.jsx)(h.a,{onClick:function(){return e.handleDelete(e.id)},className:"delete-icon",icon:b.a})]})]})},f=(n(25),function(e){return Object(d.jsxs)("div",{className:"notes-list",children:[e.notes.map((function(t){return Object(d.jsx)(O,{id:t.id,text:t.text,date:t.date,handleDelete:e.handleDelete},t.id)})),Object(d.jsx)(j,{handleAddNote:e.handleAddNote})]})}),x=n(10);n(26);var v=function(e){var t=e.handleSearch;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)("span",{className:"icon-search",children:Object(d.jsx)(h.a,{icon:x.a})}),Object(d.jsx)("input",{type:"text",placeholder:"Search for your notes...",onChange:function(e){return t(e.target.value)}})]})};var m=function(){var e=Object(c.useState)((function(){var e=localStorage.getItem("react-notes-app-data");return e?JSON.parse(e):[]})),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),j=r[0],h=r[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),x=O[0],m=O[1];return Object(c.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(n))}),[n]),Object(d.jsx)("div",{className:"".concat(x&&"dark-mode"),children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u,{handleToggleDarkMode:m}),Object(d.jsx)(v,{handleSearch:h}),Object(d.jsx)(f,{notes:n.filter((function(e){return e.text.toLowerCase().includes(j)})),handleAddNote:function(e){var t=new Date,c={id:Object(l.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(o.a)(n),[c]);a(s)},handleDelete:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}})]})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.91364222.chunk.js.map