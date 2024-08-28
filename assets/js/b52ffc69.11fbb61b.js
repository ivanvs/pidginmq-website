"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[1414],{4229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(4848),s=n(8453);const r={sidebar_position:8},a="Backoff Strategy",o={id:"backoff",title:"Backoff Strategy",description:"PidginMQ currently has two built-in strategy:",source:"@site/docs/backoff.md",sourceDirName:".",slug:"/backoff",permalink:"/docs/backoff",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backoff.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Queues",permalink:"/docs/queues"},next:{title:"Events",permalink:"/docs/events"}},c={},l=[{value:"Fixed",id:"fixed",level:2},{value:"Exponential",id:"exponential",level:2},{value:"Custom Backoff Stretegy",id:"custom-backoff-stretegy",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"backoff-strategy",children:"Backoff Strategy"})}),"\n",(0,i.jsx)(t.p,{children:"PidginMQ currently has two built-in strategy:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"fixed"}),"\n",(0,i.jsx)(t.li,{children:"exponential"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"fixed",children:"Fixed"}),"\n",(0,i.jsxs)(t.p,{children:["With the fixed backoff strategy, a job will be retried after a ",(0,i.jsx)(t.code,{children:"delay"})," specified in milliseconds."]}),"\n",(0,i.jsx)(t.p,{children:"This strategy is configured when starting the PidginMQ client, as shown in the example below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"\nconst options = {\n    ...\n    retryPolicy: RetryPolicies.fixed(2_000)\n};\nclient = new Client(options);\nawait client.start();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"exponential",children:"Exponential"}),"\n",(0,i.jsxs)(t.p,{children:["With the exponential backoff strategy, a job will be retried after a delay calculated using the formula ",(0,i.jsx)(t.code,{children:"2 ^ (attempt - 1) * delay"}),". Here, attempt refers to the current retry ",(0,i.jsx)(t.code,{children:"attempt"})," number, and ",(0,i.jsx)(t.code,{children:"delay"})," is the base number of milliseconds to be multiplied."]}),"\n",(0,i.jsx)(t.p,{children:"This strategy is configured when starting the PidginMQ client, as shown in the example below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"\nconst options = {\n    ...\n    retryPolicy: RetryPolicies.exponential(2_000)\n};\nclient = new Client(options);\nawait client.start();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"custom-backoff-stretegy",children:"Custom Backoff Stretegy"}),"\n",(0,i.jsx)(t.p,{children:"You can also define your own custom backoff strategy by providing a function."}),"\n",(0,i.jsx)(t.p,{children:"The custom backoff strategy function needs to implement the following interface:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"(job: Job) => Date;"})}),"\n",(0,i.jsx)(t.p,{children:"The input argument for the custom backoff strategy is the job for which you need to calculate the next execution time. The return value should indicate the time when the job should be executed next."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);