"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[481],{5226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=t(4848),s=t(8453);const i={sidebar_position:1},r="States",l={id:"jobs/states",title:"States",description:"Currently jobs in PidginMQ have 7 possible states:",source:"@site/docs/jobs/states.md",sourceDirName:"jobs",slug:"/jobs/states",permalink:"/docs/jobs/states",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jobs/states.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Migrations",permalink:"/docs/migrations"},next:{title:"Retry",permalink:"/docs/jobs/retry"}},c={},o=[{value:"State Diagram",id:"state-diagram",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"states",children:"States"})}),"\n",(0,a.jsx)(n.p,{children:"Currently jobs in PidginMQ have 7 possible states:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"available - job is available for execution"}),"\n",(0,a.jsx)(n.li,{children:"cancelled - job is cancelled"}),"\n",(0,a.jsx)(n.li,{children:"completed - job is successfully completed"}),"\n",(0,a.jsx)(n.li,{children:"discarded - job was stuck and reached max number of attempts. Because of that it was discarded"}),"\n",(0,a.jsx)(n.li,{children:"retryable - job is ready to be retried"}),"\n",(0,a.jsx)(n.li,{children:"running - job is currently being executed"}),"\n",(0,a.jsx)(n.li,{children:"scheduled - job is scheduled for execution"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"state-diagram",children:"State Diagram"}),"\n",(0,a.jsx)(n.mermaid,{value:"stateDiagram-v2\n    [*] --\x3e available : Insert a job\n    available --\x3e running\n    available --\x3e cancelled : Cancel\n\n    scheduled --\x3e available\n    scheduled --\x3e cancelled : Cancel\n    running --\x3e scheduled : Snoozed\n    running --\x3e completed\n    running --\x3e available : Snoozed\n    running --\x3e cancelled : Cancel\n    running --\x3e cancelled : Max attempts reached\n    running --\x3e available : Execution error\n    running --\x3e retryable : Execution error\n    running --\x3e discarded : Max attempts reached\n\n    retryable --\x3e available\n    retryable --\x3e cancelled : Cancel\n\n    cancelled --\x3e [*] : Delete a job\n    completed --\x3e [*] : Delete a job\n    discarded --\x3e [*] : Delete a job\n\n\n"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var a=t(6540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);