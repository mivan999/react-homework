(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={angle:"Message_angle__1T-oN",message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",text:"Message_text__2fXBO",time:"Message_time__HOFTG",name:"Message_name__Tzmp0",receive:"Message_receive__14Dhc"}},,function(e,a,t){e.exports={navLink:"Header_navLink__16Qkp",block:"Header_block__3dX0N",link:"Header_link__1oUIl",nav:"Header_nav__2xSna"}},,,function(e,a,t){e.exports={someClass:"Greeting_someClass__uGflL",total:"Greeting_total__1Lsfv",error:"Greeting_error__1uvQ8",spanError:"Greeting_spanError__mya1d"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,a,t){e.exports={name:"Affair_name__wrv2c",affair:"Affair_affair__3skNw",affairs:"Affair_affairs__2seW3"}},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",glowing:"SuperButton_glowing__2EODQ",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},function(e,a,t){e.exports={error:"Error 404_error__2ClYj"}},function(e,a,t){e.exports={span:"SuperEditableSpan_span__TqnG3"}},,function(e,a,t){e.exports=t(28)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(27),t(18)),s=t.n(o),u=t(6),i=t(1),m=t(19),E=t.n(m);var d=function(){return r.a.createElement("div",{className:E.a.error},r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},f=t(5),p=t.n(f),_=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{src:e.avatar,alt:"",className:p.a.avatar}),r.a.createElement("div",{className:p.a.angle}),r.a.createElement("div",{className:p.a.receive},r.a.createElement("div",{className:p.a.name},e.name," "),r.a.createElement("div",{className:p.a.text},e.message),r.a.createElement("div",{className:p.a.time},e.time)))},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Some Name",b="some text",g="22:00";var k=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:v,name:h,message:b,time:g}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=t(2),C=t(12),j=t.n(C);var x=function(e){return r.a.createElement("div",{className:j.a.affairs},r.a.createElement("div",{className:j.a.name},e.affair.name),r.a.createElement("div",{className:j.a.affair},e.affair.priority),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var O=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"),a)},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & y",priority:"middle"}];var w=function(){var e=Object(n.useState)(S),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),s=o[0],u=o[1],i=function(e,a){var t=e;return"all"===a?t:"high"===a?t=e.filter((function(e){return"high"===e.priority})):"middle"===a?t=e.filter((function(e){return"middle"===e.priority})):"low"===a?t=e.filter((function(e){return"low"===e.priority})):[]}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(O,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e=e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(21),T=t(10),I=t.n(T),A=t(4),F=t(13),B=t.n(F),H=function(e){var a=e.red,t=e.className,n=(e.label,Object(A.a)(e,["red","className","label"])),l="".concat(a?B.a.red:B.a.default," ").concat(t," ").concat(B.a.default);return r.a.createElement("button",Object.assign({className:l},n))},J=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?I.a.error:I.a.someClass;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o,onBlur:t}),r.a.createElement(H,{disabled:!a,onClick:n},"add"),r.a.createElement("span",{className:I.a.total},c)),r.a.createElement("span",{className:I.a.spanError},l))},P=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(N.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),i=Object(N.a)(u,2),m=i[0],E=i[1],d=a.length;return r.a.createElement(J,{name:o,setNameCallback:function(e){var a=e.currentTarget.value;a?(s(a),E("")):E("enter value")},addUser:function(){t(o),alert("Hello  ".concat(o,"!")),s("")},error:m,totalUsers:d})},M=t(30);var G=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(P,{users:t,addUserCallback:function(e){var a={_id:Object(M.a)(),name:e};l([].concat(Object(y.a)(t),[a]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},U=t(11),W=t.n(U),L=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(A.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(W.a.error," ").concat(s||""),m="".concat(W.a.superInput,"  ").concat(c?W.a.errorInput:W.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},X=t(14),D=t.n(X),K=t(15),Q=t.n(K),R=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Q.a.spanClassName},l))};var q=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t?"":"enter text",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(N.a)(s,2),i=u[0],m=u[1];return console.log("error= ",c),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(L,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(L,{className:D.a.blue}),r.a.createElement(H,null,"default"),r.a.createElement(H,{red:!0,onClick:o},"delete "),r.a.createElement(H,{disabled:!0},"disabled"),r.a.createElement(R,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(R,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(w,null),r.a.createElement(G,null),r.a.createElement(q,null))};var Y=function(){return r.a.createElement("div",null,"Junior")};var Z=function(){return r.a.createElement("div",null,"JuniorPLUS")},$="/pre-junior",V="/junior",ee="/junior-plus";var ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(z,null)}),r.a.createElement(i.a,{path:$,element:r.a.createElement(z,null)}),r.a.createElement(i.a,{path:V,element:r.a.createElement(Y,null)}),r.a.createElement(i.a,{path:ee,element:r.a.createElement(Z,null)}),r.a.createElement(i.a,{path:"/*",element:r.a.createElement(d,null)})))},te=t(7),ne=t.n(te);var re=function(){return r.a.createElement("div",{className:ne.a.block},r.a.createElement("div",{className:ne.a.navLink},r.a.createElement("div",{className:ne.a.nav},r.a.createElement("div",null,"   ",r.a.createElement(u.b,{to:$,className:ne.a.link},"PreJunior")),r.a.createElement("div",null,"   ",r.a.createElement(u.b,{to:V,className:ne.a.link},"Junior")),r.a.createElement("div",null,"   ",r.a.createElement(u.b,{to:ee,className:ne.a.link},"JuniorPlus")))))};var le=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(re,null),r.a.createElement(ae,null)))},ce=t(20),oe=t.n(ce),se=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(A.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(N.a)(o,2),u=s[0],i=s[1],m=l||{},E=m.children,d=m.onDoubleClick,f=m.className,p=Object(A.a)(m,["children","onDoubleClick","className"]),_="".concat(oe.a.span," ").concat(f);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(L,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),d&&d(e)},className:_},p),E||c.value))};function ue(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ie(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}ue("test",{x:"A",y:1});ie("test",{x:"",y:0});var me=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(se,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(H,{onClick:function(){ue("editable-span-value",t)}},"save"),r.a.createElement(H,{onClick:function(){l(ie("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ee=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(le,null),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.11530e31.chunk.js.map