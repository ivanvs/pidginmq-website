"use strict";(self.webpackChunkpidginmq_website=self.webpackChunkpidginmq_website||[]).push([[849],{6164:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introdction","href":"/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Getting Started","href":"/docs/getting.started","docId":"getting.started","unlisted":false},{"type":"link","label":"Configuration","href":"/docs/configuration","docId":"configuration","unlisted":false},{"type":"link","label":"Migrations","href":"/docs/migrations","docId":"migrations","unlisted":false},{"type":"category","label":"Jobs","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"States","href":"/docs/jobs/states","docId":"jobs/states","unlisted":false},{"type":"link","label":"Retry","href":"/docs/jobs/retry","docId":"jobs/retry","unlisted":false},{"type":"link","label":"Repetable Job","href":"/docs/jobs/cron","docId":"jobs/cron","unlisted":false},{"type":"link","label":"Snooze Job","href":"/docs/jobs/snooze","docId":"jobs/snooze","unlisted":false},{"type":"link","label":"Delayed Job","href":"/docs/jobs/delay","docId":"jobs/delay","unlisted":false},{"type":"link","label":"Cancel Job","href":"/docs/jobs/cancel","docId":"jobs/cancel","unlisted":false}]},{"type":"category","label":"Advance","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Leader Election","href":"/docs/advance/leader.election","docId":"advance/leader.election","unlisted":false},{"type":"link","label":"Architecture","href":"/docs/advance/architecture","docId":"advance/architecture","unlisted":false}]},{"type":"link","label":"Queues","href":"/docs/queues","docId":"queues","unlisted":false},{"type":"link","label":"Backoff Strategy","href":"/docs/backoff","docId":"backoff","unlisted":false},{"type":"link","label":"Events","href":"/docs/events","docId":"events","unlisted":false}]},"docs":{"advance/architecture":{"id":"advance/architecture","title":"Architecture","description":"Inserting Jobs","sidebar":"tutorialSidebar"},"advance/leader.election":{"id":"advance/leader.election","title":"Leader Election","description":"PidginMQ includes an election system designed to ensure that only one client is responsible for processing jobs at a time.","sidebar":"tutorialSidebar"},"backoff":{"id":"backoff","title":"Backoff Strategy","description":"PidginMQ currently has two built-in strategy:","sidebar":"tutorialSidebar"},"configuration":{"id":"configuration","title":"Configuration","description":"When creating PidginMQ client there are multiple options that can be configured. Here is a breakdown of options that can be configured:","sidebar":"tutorialSidebar"},"events":{"id":"events","title":"Events","description":"Every time a job changes state during processing, it triggers an event that users can listen to via the subscribe method. To use the subscribe method, users need to provide three callback functions: one for handling events, one for handling error notifications, and one for handling the event when the client has finished processing events.","sidebar":"tutorialSidebar"},"getting.started":{"id":"getting.started","title":"Getting Started","description":"In this section we will cover minimal examples of operation that are often used with PidginMQ client. Before starting client database schema needs to be initialized. More details can be found in migration section.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introdction","description":"PidginMQ is joq queuing library which uses PostgreSQL to store jobs and execute them on Node.js. The library allows you to process jobs in background with minimal need for configuration.","sidebar":"tutorialSidebar"},"jobs/cancel":{"id":"jobs/cancel","title":"Cancel Job","description":"At times, you may need to remove a job before it completes processing. This can be done by canceling the job. After cancellation, the job will remain in the database until the job cleaner permanently deletes it.","sidebar":"tutorialSidebar"},"jobs/cron":{"id":"jobs/cron","title":"Repetable Job","description":"If you need to execute a job regularly based on a cron schedule, you can use the scheduleJob method.","sidebar":"tutorialSidebar"},"jobs/delay":{"id":"jobs/delay","title":"Delayed Job","description":"Delayed jobs are jobs that are not processed immediately. Instead, they are processed after a specified amount of time has passed, at which point they are handled like regular jobs.","sidebar":"tutorialSidebar"},"jobs/retry":{"id":"jobs/retry","title":"Retry","description":"During job processing, some of jobs will fail. In PidginMQ job is considered failed in this cases:","sidebar":"tutorialSidebar"},"jobs/snooze":{"id":"jobs/snooze","title":"Snooze Job","description":"During job execution, there may be instances where you need to pause the job because certain conditions are not met.","sidebar":"tutorialSidebar"},"jobs/states":{"id":"jobs/states","title":"States","description":"Currently jobs in PidginMQ have 7 possible states:","sidebar":"tutorialSidebar"},"migrations":{"id":"migrations","title":"Migrations","description":"PidginMQ needs database schema to setup in appropriate manner. PidginMQ provides command line tool which can help user to manage database schema for PostgreSQL.","sidebar":"tutorialSidebar"},"queues":{"id":"queues","title":"Queues","description":"PidginMQ can be configured to work with multiple queues, all of which are stored in a single database table. However, only the jobs from the queues that PidginMQ is specifically configured to process will be executed.","sidebar":"tutorialSidebar"}}}}')}}]);