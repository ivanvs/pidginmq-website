"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[3005],{1470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(4848),s=t(8453);const r={sidebar_position:2},o="Getting Started",a={id:"getting.started",title:"Getting Started",description:"In this section we will cover minimal examples of operation that are often used with PidginMQ client. Before starting client database schema needs to be initialized. More details can be found in migration section.",source:"@site/docs/getting.started.md",sourceDirName:".",slug:"/getting.started",permalink:"/docs/getting.started",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting.started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introdction",permalink:"/docs/intro"},next:{title:"Configuration",permalink:"/docs/configuration"}},d={},c=[{value:"Starting Client",id:"starting-client",level:2},{value:"Register Worker",id:"register-worker",level:2},{value:"Add job",id:"add-job",level:2},{value:"Stopping Client",id:"stopping-client",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,i.jsxs)(n.p,{children:["In this section we will cover minimal examples of operation that are often used with PidginMQ client. Before starting client database schema needs to be initialized. More details can be found in ",(0,i.jsx)(n.a,{href:"/docs/migrations",children:"migration"})," section."]}),"\n",(0,i.jsx)(n.h2,{id:"starting-client",children:"Starting Client"}),"\n",(0,i.jsx)(n.p,{children:"PidginMQ client provides interface for common interactions with queus and jobs. A client is created with database pool in order to improve performance. Here is a client working with one queue:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const queues = new Map<string, QueueConfig>();\nqueues.set('email', { maxWorkers: 1 });\nconst options = {\n    workers: new Workers(),\n    queues,\n    dbConfig: {\n    host: 'localhost',\n    port: 5432,\n    user: 'pidginmq',\n    password: 'Password1',\n    database: 'pidginmq',\n    ssl: false,\n    },\n};\nclient = new Client(options);\nawait client.start();\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"register-worker",children:"Register Worker"}),"\n",(0,i.jsxs)(n.p,{children:["Jobs are uniquely indentified by their ",(0,i.jsx)(n.code,{children:"kind"})," string. Worker can be registered on star of client or when client is already started."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'client.addWorker("welcome-mail", async () => {\n  console.info("Sending mail");\n  // sending mail\n});\n'})}),"\n",(0,i.jsx)(n.h2,{id:"add-job",children:"Add job"}),"\n",(0,i.jsx)(n.p,{children:"When we have client configured and started, worker registered, now we need to add job to queue."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'await client.addJob({\n  kind: "welcome-mail",\n  queue: "email",\n});\n'})}),"\n",(0,i.jsx)(n.h2,{id:"stopping-client",children:"Stopping Client"}),"\n",(0,i.jsx)(n.p,{children:"The client should be stopped on program shutdown. This will ensure that leader for processing jobs is release. Other client can continue with processing jobs if there is any"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"await client.stop();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);