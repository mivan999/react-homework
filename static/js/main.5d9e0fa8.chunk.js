(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={angle:"Message_angle__1T-oN",message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",text:"Message_text__2fXBO",time:"Message_time__HOFTG",name:"Message_name__Tzmp0",receive:"Message_receive__14Dhc"}},,,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__uGflL",total:"Greeting_total__1Lsfv",error:"Greeting_error__1uvQ8",spanError:"Greeting_spanError__mya1d"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,a,t){e.exports={name:"Affair_name__wrv2c",affair:"Affair_affair__3skNw",affairs:"Affair_affairs__2seW3"}},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",glowing:"SuperButton_glowing__2EODQ",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(24),t(17)),u=t.n(o),s=t(5),i=t(1);var m=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},E=t(4),d=t.n(E),f=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{src:e.avatar,alt:"",className:d.a.avatar}),r.a.createElement("div",{className:d.a.angle}),r.a.createElement("div",{className:d.a.receive},r.a.createElement("div",{className:d.a.name},e.name," "),r.a.createElement("div",{className:d.a.text},e.message),r.a.createElement("div",{className:d.a.time},e.time)))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",h="some text",v="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(f,{avatar:p,name:_,message:h,time:v}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(2),C=t(11),k=t.n(C);var N=function(e){return r.a.createElement("div",{className:k.a.affairs},r.a.createElement("div",{className:k.a.name},e.affair.name),r.a.createElement("div",{className:k.a.affair},e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var x=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"),a)},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & y",priority:"middle"}];var O=function(){var e=Object(n.useState)(j),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),u=o[0],s=o[1],i=function(e,a){var t=e;return"all"===a?t:"high"===a?t=e.filter((function(e){return"high"===e.priority})):"middle"===a?t=e.filter((function(e){return"middle"===e.priority})):"low"===a?t=e.filter((function(e){return"low"===e.priority})):[]}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(x,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e=e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},S=t(18),w=t(9),y=t.n(w),T=t(7),A=t(12),I=t.n(A),F=function(e){var a=e.red,t=e.className,n=(e.label,Object(T.a)(e,["red","className","label"])),l="".concat(a?I.a.red:I.a.default," ").concat(t," ").concat(I.a.default);return r.a.createElement("button",Object.assign({className:l},n))},J=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?y.a.error:y.a.someClass;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o,onBlur:t}),r.a.createElement(F,{disabled:!a,onClick:n},"add"),r.a.createElement("span",{className:y.a.total},c)),r.a.createElement("span",{className:y.a.spanError},l))},M=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(b.a)(s,2),m=i[0],E=i[1],d=a.length;return r.a.createElement(J,{name:o,setNameCallback:function(e){var a=e.currentTarget.value;a?(u(a),E("")):E("enter value")},addUser:function(){t(o),alert("Hello  ".concat(o,"!")),u("")},error:m,totalUsers:d})},B=t(27);var P=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(M,{users:t,addUserCallback:function(e){var a={_id:Object(B.a)(),name:e};l([].concat(Object(S.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(10),G=t.n(W),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(G.a.error," ").concat(u||""),m="".concat(G.a.superInput,"  ").concat(c?G.a.errorInput:G.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},U=t(13),X=t.n(U),K=t(14),L=t.n(K),R=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(L.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:L.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"enter text",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(b.a)(u,2),i=s[0],m=s[1];return console.log("error= ",c),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:X.a.column},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(H,{className:X.a.blue}),r.a.createElement(F,null,"default"),r.a.createElement(F,{red:!0,onClick:o},"delete "),r.a.createElement(F,{disabled:!0},"disabled"),r.a.createElement(R,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(R,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var D=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(O,null),r.a.createElement(P,null),r.a.createElement(z,null))};var Q=function(){return r.a.createElement("div",null,"Junior")};var Z=function(){return r.a.createElement("div",null,"JuniorPLUS")},q="/pre-junior",Y="/junior",$="/junior-plus";var V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(D,null)}),r.a.createElement(i.a,{path:q,element:r.a.createElement(D,null)}),r.a.createElement(i.a,{path:Y,element:r.a.createElement(Q,null)}),r.a.createElement(i.a,{path:$,element:r.a.createElement(Z,null)}),r.a.createElement(i.a,{path:"/*",element:r.a.createElement(m,null)})))};var ee=function(){return r.a.createElement("div",null,r.a.createElement(s.b,{to:q},"PreJunior"),r.a.createElement(s.b,{to:Y},"PreJunior"),r.a.createElement(s.b,{to:$},"PreJunior"))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(ee,null),r.a.createElement(V,null)))};var te=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.5d9e0fa8.chunk.js.map