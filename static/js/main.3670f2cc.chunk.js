(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),a=n.n(r),i=(n(10),n(2)),s=n(0),o=function(e){var t=e.title,n=e.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:t}),n]})},b=n(5),u=n.n(b),d=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(s.jsx)("div",{children:t.map((function(e){return Object(s.jsx)("button",{className:u.a.btnFeedback,type:"button",onClick:function(){return n(e)},children:e},e)}))})},j=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Good: ",t]}),Object(s.jsxs)("li",{children:["Neutral: ",n]}),Object(s.jsxs)("li",{children:["Bad: ",c]}),Object(s.jsxs)("li",{children:["Total: ",r]}),Object(s.jsxs)("li",{children:["Positive feedback: ",a,"%"]})]})},l=function(e){var t=e.message;return Object(s.jsx)("p",{children:t})},h=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),b=Object(i.a)(a,2),u=b[0],h=b[1],O=Object(c.useState)(0),f=Object(i.a)(O,2),x=f[0],k=f[1],g=function(){return[n,u,x].reduce((function(e,t){return e+t}),0)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{title:"Please leave feedback",children:Object(s.jsx)(d,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":r((function(e){return e+1}));break;case"neutral":h((function(e){return e+1}));break;case"bad":k((function(e){return e+1}))}}})}),Object(s.jsx)(o,{title:"Statistics",children:g()?Object(s.jsx)(j,{good:n,neutral:u,bad:x,total:g(),positivePercentage:Math.round(n/g()*100)}):Object(s.jsx)(l,{message:"No feedback given"})})]})};a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))},5:function(e,t,n){e.exports={btnFeedback:"FeedbackOptions_btnFeedback__ib03t"}}},[[12,1,2]]]);
//# sourceMappingURL=main.3670f2cc.chunk.js.map