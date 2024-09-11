"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[3873],{2163:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(4848),o=i(8453);const r={sidebar_position:3},s="Configuration",l={id:"configuration",title:"Configuration",description:"When creating a PidginMQ client, there are multiple options that can be configured. Here is a breakdown of the configurable options:",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting.started"},next:{title:"Migrations",permalink:"/docs/migrations"}},a={},d=[];function c(e){const t={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"configuration",children:"Configuration"})}),"\n",(0,n.jsx)(t.p,{children:"When creating a PidginMQ client, there are multiple options that can be configured. Here is a breakdown of the configurable options:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"dbUri"})," - Database connection URI, detailed description can be found ",(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"cancelledJobRetentionPeriod"})," - how long canceled jobs are retained before removal - default 24 hours."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"completedJobRetentionPeriod"})," - how long completed jobs are retained before removal - default 24 hours."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"discardedJobRetentionPeriod"})," - how long discarded jobs are retained before removal - default 24 hours."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fetchCoolDown"})," - minimum amount of time between two fetches of jobs for execution. The default value is 200 milliseconds."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fetchPollInterval"})," - amount of time between fetching jobs for execution. The default value is 500 milliseconds."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"id"})," - unique identifier of a particular PidginMQ client. If not set, the value will be default. It is used for leader election and to identify who attempted to execute the job."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"jobTimeout"})," - the maximum duration allowed for a job to execute. The default value is 1 minute."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"rescueStuckJobsAfter"})," - the maximum amount of time that job can be in running state before it is being a candidate for state stuck. The default value is 1 hour."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"retryPolicy"})," - retry policy for jobs. There are two default retry policies: fixed and exponential. Additional retry policies could be implemented with a method that satisfies the type ",(0,n.jsx)(t.code,{children:"ClientRetryPolicy"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"schedulerInterval"})," - time interval between two runs of the scheduler. The scheduler will move jobs from the scheduled and retriable state to the available state. The default value is 1 second."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"workers"})," - a collection of executors that will execute jobs of a given kind."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"queues"})," - map of queue names and configuration for specific queues. Currently, the only configuration is a number of executors of the queue."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"logLevel"})," - configuration in which the log should be written to the console. The default is ",(0,n.jsx)(t.code,{children:"SILENT"})," - nothing will be logged into the console."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);