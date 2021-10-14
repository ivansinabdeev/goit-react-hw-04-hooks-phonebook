(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={addContact:"Form_addContact__1SWfW",button:"Form_button__3uy4d"}},,,,,,function(e,t,n){e.exports={title:"Title_title__4oqts"}},function(e,t,n){e.exports={buttonDelete:"ContactList_buttonDelete__2gVir"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),i=(n(22),n(15)),u=n(6),s=n(26),l=n(8),b=n(9),d=n(10),m=n(16),j=n(14),h=n(11),f=n.n(h),p=n(0);var O=function(e){var t=e.title;return Object(p.jsx)("p",{className:f.a.title,children:t})},v=n(5),C=n.n(v),x=function(e){Object(m.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(l.a)({},a,r))},e.formSubmit=function(t){t.preventDefault();var n={id:Object(s.a)(),name:e.state.name,number:e.state.number};e.props.onSubmit(n),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:C.a.addContact,onSubmit:this.formSubmit,children:[Object(p.jsx)(O,{title:"Phonebook"}),Object(p.jsxs)("label",{children:["Name",Object(p.jsx)("input",{onChange:this.handleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{children:["Number",Object(p.jsx)("input",{value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",className:C.a.button,children:"Add contact"})]})}}]),n}(a.Component),g=function(e){var t=e.value,n=e.onChange;return Object(p.jsxs)("label",{children:["Find contacts by name",Object(p.jsx)("input",{type:"text",value:t,onChange:n})]})},S=n(12),w=n.n(S),y=function(e){var t=e.contacts,n=e.handleClick;return Object(p.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(p.jsxs)("li",{children:[a,":",r,Object(p.jsx)("button",{type:"button",className:w.a.buttonDelete,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},k=n(13);n(24);function _(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:k})),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(u.a)(c,2),l=o[0],b=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(x,{onSubmit:function(e){var t=e.name,a=e.number;if(n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," already exsist at phonebook "));else{var c={id:Object(s.a)(),name:t,number:a};r((function(e){return[c].concat(Object(i.a)(e))}))}}}),n.length?Object(p.jsx)(O,{title:"Contacts"}):null,Object(p.jsx)(g,{value:l,onChange:function(e){b(e.currentTarget.value)}}),Object(p.jsx)(y,{contacts:function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),handleClick:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}var N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root")),N()}],[[25,1,2]]]);
//# sourceMappingURL=main.a788f84c.chunk.js.map