"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[6984],{8549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var s=a(4848),o=a(8453);const n={sidebar_position:5},i="Delayed Job",r={id:"jobs/delay",title:"Delayed Job",description:"Delayed jobs are jobs that are not processed immediately. Instead, they are processed after a specified amount of time has passed, at which point they are handled like regular jobs.",source:"@site/docs/jobs/delay.md",sourceDirName:"jobs",slug:"/jobs/delay",permalink:"/docs/jobs/delay",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jobs/delay.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Snooze Job",permalink:"/docs/jobs/snooze"},next:{title:"Cancel Job",permalink:"/docs/jobs/cancel"}},d={},c=[{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"delayed-job",children:"Delayed Job"})}),"\n",(0,s.jsx)(t.p,{children:"Delayed jobs are jobs that are not processed immediately. Instead, they are processed after a specified amount of time has passed, at which point they are handled like regular jobs."}),"\n",(0,s.jsxs)(t.p,{children:["To delay a job in PidginMQ, you can use the ",(0,s.jsx)(t.code,{children:"scheduleAt"})," property, which is of type Date. This property allows you to specify the exact time when the job should be executed."]}),"\n",(0,s.jsx)(t.p,{children:"Please note that PidginMQ cannot guarantee that a job will be executed at the exact scheduled time, as this depends on various factors, such as the worker's current load and availability."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'await client.addJob({\n  kind: "welcome-mail",\n  queue: "email",\n  scheduleAt: new Date(2024, 8, 12, 9, 40, 40),\n});\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var s=a(6540);const o={},n=s.createContext(o);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);