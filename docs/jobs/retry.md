---
sidebar_position: 2
---

# Retry

During job processing, some of the jobs will fail. In PidginMQ, a job is considered failed in these cases:

- job is snoozed by throwing `SnoozeJobException`,
- job throws any kind of error,
- job is stuck.

## Retrying Failed Jobs

When a job encounters an error, the worker captures the error, increases the job's attempts count, and schedules the job to be tried again if the maximum number of attempts has not been reached.

To determine when the job should be retried, PidginMQ will utilize the configured [backoff strategy](../backoff.md). PidginMQ allows you to utilize predefined strategies or create custom ones for job retries. The default backoff strategy is a fixed strategy, in which the job will be retried after 5 seconds.

The retry policy is specified in the client's [configuration](../configuration.md).

## Example

The job's maximum number of retries is set when it is created and cannot be altered afterward.

```js
const insertedJob = await client.addJob({
  kind: "welcome_mail",
  maxAttempts: 25,
  queue: "email",
});
```
