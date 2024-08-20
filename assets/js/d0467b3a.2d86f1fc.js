"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[2682],{8732:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=i(4848),r=i(8453);const s={sidebar_position:4},a="Migration",o={id:"migrations",title:"Migration",description:"PidginMQ needs database schema to setup in appropriate manner. PidginMQ provides command line tool which can help user to manage database schema for PostgreSQL.",source:"@site/docs/migrations.md",sourceDirName:".",slug:"/migrations",permalink:"/docs/migrations",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/migrations.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"States",permalink:"/docs/jobs/states"}},l={},d=[{value:"Apply Next Migration",id:"apply-next-migration",level:2},{value:"Undo Last Migration",id:"undo-last-migration",level:2},{value:"Current Migration",id:"current-migration",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"migration",children:"Migration"})}),"\n",(0,t.jsx)(n.p,{children:"PidginMQ needs database schema to setup in appropriate manner. PidginMQ provides command line tool which can help user to manage database schema for PostgreSQL."}),"\n",(0,t.jsx)(n.p,{children:"When you install the library, the CLI tool is installed automatically."}),"\n",(0,t.jsx)(n.p,{children:"CLI tool containse 3 commands:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"up"})," - running next migration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"down"})," - will undo last migration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"current"})," - return current migration version"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For all 3 commands we need to supply ",(0,t.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS",children:"database connection url"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["CLI tool is using ",(0,t.jsx)(n.a,{href:"https://knexjs.org/guide/migrations.html",children:"knex.js library"})," for working with database migrations."]}),"\n",(0,t.jsx)(n.h2,{id:"apply-next-migration",children:"Apply Next Migration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pidginmq up postgres://user:password@host:port/dbname\n"})}),"\n",(0,t.jsx)(n.p,{children:"CLI tool will apply next migration on database schema. If all migrations are already applied, no actions will be taken."}),"\n",(0,t.jsx)(n.h2,{id:"undo-last-migration",children:"Undo Last Migration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pidginmq down postgres://user:password@host:port/dbname\n"})}),"\n",(0,t.jsx)(n.p,{children:"CLI tool will undo last migration on database schema. If there is no migrations applied, no actions will be taken."}),"\n",(0,t.jsx)(n.h2,{id:"current-migration",children:"Current Migration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"pidginmq current postgres://user:password@host:port/dbname\n"})}),"\n",(0,t.jsx)(n.p,{children:"CLI tool will return last migration that has been applied."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);