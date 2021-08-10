(this["webpackJsonpreact-my-bank-manager"]=this["webpackJsonpreact-my-bank-manager"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),s=(n(14),n(6)),u=n(7),i=n(2),l=n(0),d=function(t){var e=t.title;t.showAdd;return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:e})})};d.defaultProps={title:"My Bank Account Manager"};var j=d,b=function(t){var e=t.color,n=t.text,a=t.onClick;return Object(l.jsx)("button",{onClick:a,style:{backgroundColor:e},className:"btn",children:n})};b.defaultProps={color:"steelblue"};var m=b,h=function(t){var e=t.onAddDeposit,n=t.showAddDeposit,a=t.onAddWithdraw,c=t.showAddWithdraw,o=t.onEditInfo,r=t.showEditInfo,s=t.deleteAccount;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)(m,{color:n?"green":"grey",text:"Deposit",onClick:e}),Object(l.jsx)(m,{color:c?"green":"grey",text:"Withdraw",onClick:a}),Object(l.jsx)(m,{color:r?"green":"grey",text:"Edit Info",onClick:o}),Object(l.jsx)(m,{color:"grey",text:"Delete Account",onClick:s})]})},O=n(9),x=function(t){var e=t.transaction,n=t.onDelete;return Object(l.jsxs)("div",{className:"transaction",children:[Object(l.jsxs)("h3",{children:[e.transactionName," ",Object(l.jsx)(O.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(e.id)}})]}),Object(l.jsx)("p",{children:e.amount})]})},f=function(t){var e=t.transactionList,n=t.onDelete;return Object(l.jsx)(l.Fragment,{children:e.map((function(t){return Object(l.jsx)(x,{transaction:t,onDelete:n},t.id)}))})},N=function(t){for(var e=t.accountInfo,n=t.transactionList,a=0,c=0;c<n.length;c++)a+=parseFloat(n[c].amount);return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Account Name: ",e.accountName]}),Object(l.jsxs)("p",{children:["Account Number: ",e.accountNumber]}),Object(l.jsxs)("p",{children:["Total: ",a]})]})},p=function(t){var e=t.onAdd,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),d=u[0],j=u[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),o?d?isNaN(d)?alert("Deposit amount must be a number"):(e({transactionName:o,amount:d}),r(""),j("")):alert("Please add a deposit amount"):alert("Please add a deposit name")},children:[Object(l.jsxs)("dir",{className:"form-control",children:[Object(l.jsx)("label",{children:"Deposit"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Transaction Name",value:o,onChange:function(t){return r(t.target.value)}})]}),Object(l.jsxs)("dir",{className:"form-control",children:[Object(l.jsx)("label",{children:"Amount"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Amount",value:d,onChange:function(t){return j(t.target.value)}})]}),Object(l.jsx)("input",{type:"submit",value:"Save Deposit",className:"btn btn-block"})]})},v=function(t){var e=t.onAdd,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),d=u[0],j=u[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),o?d?isNaN(d)?alert("Withdraw amount must be a number"):(e({transactionName:o,amount:d}),r(""),j("")):alert("Please add a withdraw amount"):alert("Please add a withdraw name")},children:[Object(l.jsxs)("dir",{className:"form-control",children:[Object(l.jsx)("label",{children:"Withdraw"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Transaction Name",value:o,onChange:function(t){return r(t.target.value)}})]}),Object(l.jsxs)("dir",{className:"form-control",children:[Object(l.jsx)("label",{children:"Amount"}),Object(l.jsx)("input",{type:"text",placeholder:"Add Amount",value:d,onChange:function(t){return j(t.target.value)}})]}),Object(l.jsx)("input",{type:"submit",value:"Save Withdraw",className:"btn btn-block"})]})},g=function(t){var e=t.onAdd,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),d=u[0],j=u[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),o||d?(e({accountName:o,accountNumber:d}),r(""),j("")):alert("Please add a change before saved")},children:[Object(l.jsxs)("dir",{className:"form-control",children:[Object(l.jsx)("label",{children:"New Account Name"}),Object(l.jsx)("input",{type:"text",placeholder:"Add New Account Name",value:o,onChange:function(t){return r(t.target.value)}})]}),Object(l.jsxs)("dir",{className:"form-control",children:[Object(l.jsx)("label",{children:"New Account Number"}),Object(l.jsx)("input",{type:"text",placeholder:"Add New Account Number",value:d,onChange:function(t){return j(t.target.value)}})]}),Object(l.jsx)("input",{type:"submit",value:"Save",className:"btn btn-block"})]})},A=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),r=Object(i.a)(o,2),d=r[0],b=r[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),x=O[0],A=O[1],w=Object(a.useState)({accountName:"",accountNumber:""}),S=Object(i.a)(w,2),y=S[0],D=S[1],C=Object(a.useState)([{id:1,transactionName:"Withdraw",amount:"-1"},{id:2,transactionName:"Deposit",amount:"+1"}]),k=Object(i.a)(C,2),I=k[0],P=k[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{}),Object(l.jsx)(N,{accountInfo:y,transactionList:I}),Object(l.jsx)("br",{}),Object(l.jsx)(h,{onAddDeposit:function(){return c(!n)},showAddDeposit:n,onAddWithdraw:function(){return b(!d)},showAddWithdraw:d,onEditInfo:function(){return A(!x)},showEditInfo:x,deleteAccount:function(){return D({accountName:"",accountNumber:""}),void P([])}}),n&&Object(l.jsx)(p,{onAdd:function(t){var e=Math.floor(1e5*Math.random())+1,n=Object(u.a)({id:e},t);Number(n.amount)>=0&&(n.amount="+"+1*n.amount),P([].concat(Object(s.a)(I),[n]))}}),d&&Object(l.jsx)(v,{onAdd:function(t){var e=Math.floor(1e5*Math.random())+1,n=Object(u.a)({id:e},t);Number(n.amount)>=0?n.amount="-"+n.amount:n.amount="+"+-1*n.amount,P([].concat(Object(s.a)(I),[n]))}}),x&&Object(l.jsx)(g,{onAdd:function(t){0===t.accountName.length&&0!==t.accountNumber.length?t.accountName=y.accountName:0!==t.accountName.length&&0===t.accountNumber.length&&(t.accountNumber=y.accountNumber),D(t)}}),I.length>0?Object(l.jsx)(f,{transactionList:I,onDelete:function(t){P(I.filter((function(e){return e.id!==t})))}}):Object(l.jsx)("p",{className:"center",children:"No Transaciton To Show"})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),w()}},[[16,1,2]]]);
//# sourceMappingURL=main.d0f4a802.chunk.js.map