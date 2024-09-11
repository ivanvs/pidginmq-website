"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[2247],{6768:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=o(4848),t=o(8453);const i={sidebar_position:3},r="Repetable Job",l={id:"jobs/cron",title:"Repetable Job",description:"If you need to schedule a job to run regularly based on a cron schedule, you can use the scheduleJob method.",source:"@site/docs/jobs/cron.md",sourceDirName:"jobs",slug:"/jobs/cron",permalink:"/docs/jobs/cron",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jobs/cron.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Retry",permalink:"/docs/jobs/retry"},next:{title:"Snooze Job",permalink:"/docs/jobs/snooze"}},c={},a=[{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"repetable-job",children:"Repetable Job"})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to schedule a job to run regularly based on a cron schedule, you can use the ",(0,s.jsx)(n.code,{children:"scheduleJob"})," method."]}),"\n",(0,s.jsxs)(n.p,{children:["A scheduled job has all the configurations of a regular job, with the addition of the repeat property that contains ",(0,s.jsx)(n.code,{children:"limit"})," and ",(0,s.jsx)(n.code,{children:"cron"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"limit"})," - how many times a job should be executed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cron"})," - ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cron",children:"cron expression"})," that is used to calculate when a job should be executed next time."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"When a job is scheduled, two things will happen:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a job that should execute the action will be created,"}),"\n",(0,s.jsxs)(n.li,{children:["special job of queue will be created: ",(0,s.jsx)(n.code,{children:"__pidginmq_scheduler"})," that will create next job for execution."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This job will be created to run every 5 minutes, up to a total of 25 times."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'await client.scheduleJob({\n  kind: "welcome-mail",\n  queue: "email",\n  repeat: {\n    cron: \'*/5 * * * *\'\n    limit: 25\n  }\n});\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);