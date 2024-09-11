---
sidebar_position: 3
---

# Repetable Job

If you need to schedule a job to run regularly based on a cron schedule, you can use the `scheduleJob` method.

A scheduled job has all the configurations of a regular job, with the addition of the repeat property that contains `limit` and `cron`.

- **limit** - how many times a job should be executed.
- **cron** - [cron expression](https://en.wikipedia.org/wiki/Cron) that is used to calculate when a job should be executed next time.

When a job is scheduled, two things will happen:

- a job that should execute the action will be created,
- special job of queue will be created: `__pidginmq_scheduler` that will create next job for execution.

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
