(this["webpackJsonpfirebase-chat-app"]=this["webpackJsonpfirebase-chat-app"]||[]).push([[0],{66:function(e,t,a){},67:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t),a.d(t,"Context",(function(){return D}));var n=a(2),c=a.n(n),s=a(32),r=a.n(s),o=(a(66),a(67),a(31)),i=a(15),j=a(45),l=a.n(j),d=a(53),u=a(24),b=a(100),h=a(27),m=a(28),O=a(5),p=c.a.memo((function(){var e=Object(n.useContext)(D).auth,t=Object(m.a)(e);if(Object(u.a)(t,1)[0])return Object(O.jsx)(i.a,{to:"/chat"});var a=function(){var t=Object(d.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new h.a.auth.GoogleAuthProvider,t.next=3,e.signInWithPopup(a);case 3:n=t.sent,n.user;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"login",children:Object(O.jsx)(b.a,{onClick:a,variant:"contained",color:"primary",className:"login__button",children:"Log-in with google"})})})),x=a(104),f=a(103),g=a(101),v=a(105),_=a(99),N=a(58),y=a(98),C=c.a.memo((function(){return Object(O.jsx)("div",{className:"progress",children:Object(O.jsx)(y.a,{size:100})})})),I=function(e){var t=e.messageUID,a=e.userUID,n=e.photoURL,c=e.text,s=e.displayName;return Object(O.jsxs)("div",{className:"message chat__message ".concat(t===a?"chat__message_from-me":""),children:[Object(O.jsx)("img",{src:n,alt:"",className:"message__user-photo"}),Object(O.jsxs)("div",{className:"message__body",children:[Object(O.jsx)("p",{className:"message__username",children:s}),Object(O.jsx)("p",{className:"message__text",children:c})]})]})},k=c.a.memo((function(){var e=Object(n.useContext)(D),t=e.auth,a=e.firestore,c=Object(m.a)(t),s=Object(u.a)(c,1)[0],r=Object(n.useState)(""),o=Object(u.a)(r,2),j=o[0],l=o[1],d=Object(N.a)(a.collection("messages").orderBy("createdAt")),p=Object(u.a)(d,2),y=p[0],k=p[1],F=Object(n.useRef)(null);Object(n.useEffect)((function(){var e;null===(e=F.current)||void 0===e||e.scrollTo({behavior:"smooth",top:F.current.scrollHeight})}),[y]);var U=function(){a.collection("messages").add({uid:s.uid,displayName:s.displayName,photoURL:s.photoURL,text:j,createdAt:h.a.firestore.FieldValue.serverTimestamp()}),l("")};return s?k?Object(O.jsx)(C,{}):Object(O.jsxs)("section",{className:"chat",children:[Object(O.jsxs)("div",{ref:F,className:"chat__messages",children:[y.map((function(e,t){return Object(O.jsx)(I,{displayName:e.displayName,userUID:s.uid,messageUID:e.uid,text:e.text,photoURL:e.photoURL},t)})),Object(O.jsx)("span",{className:"scrollTo"})]}),Object(O.jsx)("div",{className:"chat__controls",children:Object(O.jsxs)(x.a,{variant:"outlined",fullWidth:!0,children:[Object(O.jsx)(f.a,{htmlFor:"outlined-adornment-message",children:"Message"}),Object(O.jsx)(g.a,{onChange:function(e){return l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&U()},value:j,fullWidth:!0,id:"outlined-adornment-message",endAdornment:Object(O.jsx)(v.a,{position:"end",children:Object(O.jsx)(b.a,{onClick:U,variant:"contained",color:"primary",endIcon:Object(O.jsx)(_.a,{children:"send"}),children:"Send"})}),labelWidth:70})]})})]}):Object(O.jsx)(i.a,{to:"/login"})})),F=a(102),U=c.a.memo((function(e){var t=Object(n.useContext)(D).auth,a=Object(m.a)(t),c=Object(u.a)(a,1)[0];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("header",{children:Object(O.jsx)("nav",{className:"navbar",children:c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(F.a,{className:"user-avatar",src:c.photoURL}),Object(O.jsx)(b.a,{onClick:function(){return t.signOut()},className:"navbar__link",variant:"contained",color:"secondary",children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(O.jsx)(b.a,{className:"navbar__link",variant:"contained",color:"secondary",component:o.b,to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})})})})})),L=c.a.memo((function(e){var t=Object(n.useContext)(D).auth,a=Object(m.a)(t),c=Object(u.a)(a,3),s=(c[0],c[1]);c[2];return s?Object(O.jsx)(C,{}):Object(O.jsx)(O.Fragment,{children:e.children})}));var w=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(L,{children:[Object(O.jsx)(U,{}),Object(O.jsx)("main",{children:Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{exact:!0,path:"/login",component:p}),Object(O.jsx)(i.b,{exact:!0,path:"/chat",component:k})]})})]})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(78),a(79);h.a.initializeApp({apiKey:"AIzaSyCDoeY_OPEmje0hYhb_9yNbTbNFB882Yhc",authDomain:"chat-app-7804e.firebaseapp.com",projectId:"chat-app-7804e",storageBucket:"chat-app-7804e.appspot.com",messagingSenderId:"312475671256",appId:"1:312475671256:web:216fd867818b69ef8fd5ad",measurementId:"G-0121KC8CJC"});var D=Object(n.createContext)(null),P=h.a.auth(),R=h.a.firestore();r.a.render(Object(O.jsx)(D.Provider,{value:{firebase:h.a,auth:P,firestore:R},children:Object(O.jsx)(w,{})}),document.getElementById("root")),A()}},[[80,1,2]]]);
//# sourceMappingURL=main.0469fedc.chunk.js.map