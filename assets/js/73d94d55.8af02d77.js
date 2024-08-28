"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[4010],{6590:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=i(4848),s=i(8453);const a={sidebar_position:1},r="Leader Election",o={id:"advance/leader.election",title:"Leader Election",description:"PidginMQ includes an election system designed to ensure that only one client is responsible for processing jobs at a time.",source:"@site/docs/advance/leader.election.md",sourceDirName:"advance",slug:"/advance/leader.election",permalink:"/docs/advance/leader.election",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advance/leader.election.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cancel Job",permalink:"/docs/jobs/cancel"},next:{title:"Architecture",permalink:"/docs/advance/architecture"}},c={},l=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"leader-election",children:"Leader Election"})}),"\n",(0,n.jsx)(t.p,{children:"PidginMQ includes an election system designed to ensure that only one client is responsible for processing jobs at a time."}),"\n",(0,n.jsx)(t.p,{children:"When a client starts, it will attempt to declare itself as the leader. Only one leader can exist at any given time. Only the leader is allowed to process messages in the queue."}),"\n",(0,n.jsx)(t.p,{children:"When the leader shuts down, it notifies other clients using PostgreSQL's LISTEN/NOTIFY mechanism. This triggers the other clients to attempt to become the new leader. If no other client is active, there will be no leader."}),"\n",(0,n.jsx)(t.p,{children:"If the leader is not shut down correctly, it will remain the leader for a specified time-to-live (TTL) period. The default TTL is 10 seconds. Other clients will attempt to become the leader every 5 seconds."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);