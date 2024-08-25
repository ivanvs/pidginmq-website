---
sidebar_position: 3
---

# Repetable Job

If you need to execute a job regularly based on a cron schedule, you can use the scheduleJob method.

Scheduled job has all configuration like regular job with addition of `repeat` property that contains `limit` and `cron`.

- **limit** - how much times job should be executed
- **cron** - [cron expression](https://en.wikipedia.org/wiki/Cron) that is used to calculate when job should be executed next time

When job is schedule, two things will happen:

- job that should execute action will be created
- special job of queue will be created: `__pidginmq_scheduler` that will created next job for execution

## Example

This job will be created to run every 5 minutes, up to a total of 25 times.

```js
await client.scheduleJob({
  kind: "welcome-mail",
  queue: "email",
  repeat: {
    cron: '*/5 * * * *'
    limit: 25
  }
});
```
