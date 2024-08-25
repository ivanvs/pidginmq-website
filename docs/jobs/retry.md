---
sidebar_position: 2
---

# Retry

During job processing, some of jobs will fail. In PidginMQ job is considered failed in this cases:

- job is snoozed by throwing `SnoozeJobException`
- job throws any kind of error
- job is stucked

## Retrying Failed Jobs

When a job throws an exception, the worker catches it, increments the job's attempts count, and reschedules the job if the maximum number of attempts has not been reached.

In order to decide when next time the job needs to be run, PidginMQ will use configured [backoff strategy](../backoff.md). PidginMQ allows you to use built-in strategies or define custom ones for job retries. The default backoff strategy is a fixed strategy, where the job will be retried after 5 seconds.

Retry policy is specified on client [configuration](../configuration.md).

## Example

The maximum number of retries is specified when the job is created. Once the job is created, the maximum number of attempts cannot be changed.

```js
const insertedJob = await client.addJob({
  kind: "welcome_mail",
  maxAttempts: 25,
  queue: "email",
});
```
