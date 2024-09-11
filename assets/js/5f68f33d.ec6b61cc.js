"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[6984],{8549:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});var s=t(4848),o=t(8453);const d={sidebar_position:5},i="Delayed Job",n={id:"jobs/delay",title:"Delayed Job",description:"Delayed jobs are not processed immediately but are handled after a specified amount of time has passed. Once processed, they are executed like regular jobs.",source:"@site/docs/jobs/delay.md",sourceDirName:"jobs",slug:"/jobs/delay",permalink:"/docs/jobs/delay",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jobs/delay.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Snooze Job",permalink:"/docs/jobs/snooze"},next:{title:"Cancel Job",permalink:"/docs/jobs/cancel"}},r={},c=[{value:"Example",id:"example",level:2}];function l(e){const a={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"delayed-job",children:"Delayed Job"})}),"\n",(0,s.jsx)(a.p,{children:"Delayed jobs are not processed immediately but are handled after a specified amount of time has passed. Once processed, they are executed like regular jobs."}),"\n",(0,s.jsxs)(a.p,{children:["In PidginMQ, to delay a job, you can utilize the ",(0,s.jsx)(a.code,{children:"scheduleAt"})," property, which is of type ",(0,s.jsx)(a.code,{children:"Date"}),". This property allows you to specify the exact time when the job should be executed."]}),"\n",(0,s.jsx)(a.p,{children:"It's important to note that PidginMQ cannot guarantee that a job will be executed at the exact scheduled time, as this depends on various factors such as the worker's current load and availability."}),"\n",(0,s.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-js",children:'await client.addJob({\n  kind: "welcome-mail",\n  queue: "email",\n  scheduleAt: new Date(2024, 8, 12, 9, 40, 40),\n});\n'})})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);