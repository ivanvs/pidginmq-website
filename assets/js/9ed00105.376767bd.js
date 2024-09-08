"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[3873],{2163:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(4848),o=n(8453);const r={sidebar_position:3},s="Configuration",l={id:"configuration",title:"Configuration",description:"When creating PidginMQ client there are multiple options that can be configured. Here is a breakdown of options that can be configured:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting.started"},next:{title:"Migrations",permalink:"/docs/migrations"}},a={},c=[];function d(e){const i={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,t.jsx)(i.p,{children:"When creating PidginMQ client there are multiple options that can be configured. Here is a breakdown of options that can be configured:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"dbUri"})," - Database connection URI, detailed description can be found ",(0,t.jsx)(i.a,{href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS",children:"here"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"cancelledJobRetentionPeriod"})," - how long cancelled jobs are retained before removal - default 24 hours"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"completedJobRetentionPeriod"})," - how long completed jobs are retained before removal - default 24 hours"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"discardedJobRetentionPeriod"})," - how long discarded jobs are retained before removal - default 24 hours"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"fetchCoolDown"})," - minimum amount of time between two fetchs of jobs for execution. Default value is 200 miliseconds"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"fetchPollInterval"})," - amount of time between fetching jobs for execution. Default value is 500 miliseconds"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"id"})," - unique identifier of particular PidginMQ client. If not set value will be ",(0,t.jsx)(i.code,{children:"default"}),". It is used for leader election and identification who attemted to execute the job"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"jobTimeout"})," - the maximum duration allowed for a job to execute. Default value is 1 minute"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"rescueStuckJobsAfter"})," - the maximum amount of time that job can be in running state before it is being candiadate for state stuck. Default value is 1 hour"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"retryPolicy"})," - retry policy for jobs. There is two default retry policies: fixed and exponential. Additional retry policies could be implemented with method that satisfy type ",(0,t.jsx)(i.code,{children:"ClientRetryPolicy"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"schedulerInterval"})," - time interval between two runs of scheduler. Scheduler will move jobs from scheduled and retryable state to available state. Default value is 1 second"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"workers"})," - collection of executor that will execute jobs of given kind"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"queues"})," - map of queue names and configuration for specific queue. Currently only configuration is number of executors of queue"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"logLevel"})," - configuration which log should be written to console. Default is SILENT - nothing will be logged into console."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);