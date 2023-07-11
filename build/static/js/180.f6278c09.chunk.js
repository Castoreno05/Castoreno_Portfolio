"use strict";(self.webpackChunkmy_portfolio_app=self.webpackChunkmy_portfolio_app||[]).push([[180],{3180:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var i,a,r=t(168),s=t(9439),o=t(2791),l=t(6444),d=t(8793),c=t(8820),p=t(9126),h=t(7530),u=t(184),x=function(){var n=(0,o.useState)(""),e=(0,s.Z)(n,2),t=e[0],i=e[1],a=(0,o.useState)(""),r=(0,s.Z)(a,2),l=r[0],d=r[1],c=(0,o.useState)(""),p=(0,s.Z)(c,2),x=p[0],f=p[1];return(0,u.jsxs)(m,{children:[(0,u.jsxs)("div",{className:"body",children:[(0,u.jsxs)("div",{className:"info",children:[(0,u.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,u.jsx)("input",{type:"text",id:"name",value:t,onChange:function(n){return i(n.target.value)}})]}),(0,u.jsxs)("div",{className:"info",children:[(0,u.jsx)("label",{htmlFor:"email",children:"Your Email"}),(0,u.jsx)("input",{type:"text",id:"email",value:l,onChange:function(n){return d(n.target.value)}})]}),(0,u.jsxs)("div",{className:"info",children:[(0,u.jsx)("label",{htmlFor:"description",children:"Description"}),(0,u.jsx)("textarea",{id:"description",value:x,onChange:function(n){return f(n.target.value)}})]})]}),(0,u.jsx)("div",{className:"footer",children:(0,u.jsx)("div",{className:"buttonDiv",children:(0,u.jsx)("button",{onClick:function(n){n.preventDefault();var e={to_name:t,from_email:l,message:x};""===t||""===l||""===x?alert("All fields are required"):h.ZP.send("service_jw4ta39","template_p2hook7",e,"0f5Bq6CLKVad2P7ep").then((function(n){console.log(n.text),alert("Email has been sent"),i(""),d(""),f("")}),(function(n){console.log(n.text)}))},children:"Submit"})})})]})},m=l.ZP.div(i||(i=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  .body {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 1rem;\n    padding-bottom: 0;\n    .info {\n      display: flex;\n      flex-direction: column;\n      gap: 3px;\n      label {\n        font-size: 16px;\n      }\n      input {\n        padding: 0.25rem;\n        border: none;\n        border-radius: 5px;\n        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n      }\n      textarea {\n        border-radius: 5px;\n        border: none;\n        outline: none;\n        height: 100px;\n        resize: none;\n        padding: 0.25rem;\n        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);\n      }\n    }\n  }\n  .footer {\n    padding: 1rem;\n    padding-top: 0;\n    .buttonDiv {\n      padding: 1rem 0;\n      button {\n        width: 100%;\n        padding: 0.5rem;\n        background: none;\n        border-radius: 5px;\n        cursor: pointer;\n      }\n      button:hover {\n        background-color: black;\n        color: white;\n      }\n    }\n  }\n"])));var f=l.ZP.div(a||(a=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0.25rem;\n  padding-top: 2rem;\n  .header {\n    display: flex;\n    justify-content: center;\n    gap: 3px;\n    .imageDiv {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 3px;\n      img {\n        height: 125px;\n        width: 125px;\n        border-radius: 50%;\n        box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.42);\n      }\n      h1 {\n        white-space: nowrap;\n        font-size: 18px;\n      }\n    }\n    .info {\n      display: flex;\n      justify-content: center;\n      flex-direction: column;\n      gap: 3px;\n      .email,\n      .phone,\n      .map {\n        display: flex;\n        align-items: center;\n        gap: 5px;\n        svg {\n          margin: 0;\n          font-size: 14px;\n        }\n        span {\n          font-size: 14px;\n        }\n      }\n      .buttonDiv {\n        display: flex;\n        justify-content: center;\n        padding-top: 0.25rem;\n        gap: 5px;\n        a {\n          text-decoration: none;\n          border: solid black 1.5px;\n          color: inherit;\n          background: none;\n          padding: 0.25rem;\n          font-size: 14px;\n          border-radius: 5px;\n        }\n        a:hover {\n          background-color: black;\n          color: white;\n        }\n      }\n    }\n  }\n  .intro {\n    .title {\n      h2 {\n        font-size: 16px;\n        text-align: center;\n      }\n    }\n    .description {\n      p {\n        white-space: normal;\n      }\n    }\n  }\n  .contact {\n    .contactTitle {\n      h2 {\n        font-size: 16px;\n        text-align: center;\n      }\n    }\n  }\n  //   .serviceContainer {\n  //     .serviceTitle {\n  //       h2 {\n  //         font-size: 16px;\n  //         text-align: center;\n  //       }\n  //     }\n  //     .services {\n  //       display: grid;\n  //       grid-template-columns: repeat(2, 1fr);\n  //       .service {\n  //         h3 {\n  //           font-size: 14px;\n  //           text-align: center;\n  //         }\n  //       }\n  //     }\n  //   }\n"]))),v=function(){var n,e,t=(0,o.useState)(!1),i=(0,s.Z)(t,2),a=i[0],r=i[1],l="An experienced and dedicated professional with a proven ability to effectively communicate and display empathy in all interactions. These skills were honed through my rewarding career as a Process Operator in the Oil and Gas Industry. Seeking a full stack developer role in a collaborative and supportive work environment, where I can utilize my skills and knowledge to contribute to the success of the team. ",h=function(){r(!a)};return(0,u.jsxs)(f,{children:[(0,u.jsxs)("div",{className:"header",children:[(0,u.jsxs)("div",{className:"imageDiv",children:[(0,u.jsx)("img",{src:d,alt:"Matthew Castoreno"}),(0,u.jsx)("h1",{children:"Matthew Castoreno"})]}),(0,u.jsxs)("div",{className:"info",children:[(0,u.jsxs)("div",{className:"email",children:[(0,u.jsx)(c.Uh$,{}),(0,u.jsx)("span",{children:"matthew.castoreno@yahoo.com"})]}),(0,u.jsxs)("div",{className:"phone",children:[(0,u.jsx)(c.rJP,{}),(0,u.jsx)("span",{children:"(832) 433-4371"})]}),(0,u.jsxs)("div",{className:"map",children:[(0,u.jsx)(p.ln8,{}),(0,u.jsx)("span",{children:"Houston, Texas"})]}),(0,u.jsx)("div",{className:"buttonDiv",children:(0,u.jsx)("a",{href:"MatthewCastoreno.pdf",download:"MatthewCastoreno.pdf",children:"Download CV"})})]})]}),(0,u.jsxs)("div",{className:"intro",children:[(0,u.jsx)("div",{className:"title",children:(0,u.jsx)("h2",{children:"Full Stack Developer"})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsxs)("p",{children:[a?l:(n=l,e=180,n.length<=e?n:n.substr(0,n.lastIndexOf(" ",e))+"... "),a?(0,u.jsx)("a",{href:"#",onClick:h,children:"show less"}):(0,u.jsx)("a",{href:"#",onClick:h,children:"show more"})]})})]}),(0,u.jsxs)("div",{className:"contact",children:[(0,u.jsx)("div",{className:"contactTitle",children:(0,u.jsx)("h2",{children:"Contact Me"})}),(0,u.jsx)(x,{})]})]})}},7530:function(n,e,t){t.d(e,{ZP:function(){return d}});var i={_origin:"https://api.emailjs.com"},a=function(n,e,t){if(!n)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},r=t(9466),s=t(5671),o=(0,r.Z)((function n(e){(0,s.Z)(this,n),this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"})),l=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(a,r){var s=new XMLHttpRequest;s.addEventListener("load",(function(n){var e=n.target,t=new o(e);200===t.status||"OK"===t.text?a(t):r(t)})),s.addEventListener("error",(function(n){var e=n.target;r(new o(e))})),s.open("POST",i._origin+n,!0),Object.keys(t).forEach((function(n){s.setRequestHeader(n,t[n])})),s.send(e)}))},d={init:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";i._userID=n,i._origin=e},send:function(n,e,t,r){var s=r||i._userID;a(s,n,e);var o={lib_version:"3.10.0",user_id:s,service_id:n,template_id:e,template_params:t};return l("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},sendForm:function(n,e,t,r){var s=r||i._userID,o=function(n){var e;if(!(e="string"===typeof n?document.querySelector(n):n)||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e}(t);a(s,n,e);var d=new FormData(o);return d.append("lib_version","3.10.0"),d.append("service_id",n),d.append("template_id",e),d.append("user_id",s),l("/api/v1.0/email/send-form",d)}}},8793:function(n,e,t){n.exports=t.p+"static/media/MatthewC.141a4861914153c2d152.png"}}]);
//# sourceMappingURL=180.f6278c09.chunk.js.map