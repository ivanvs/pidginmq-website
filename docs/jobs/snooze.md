---
sidebar_position: 4
---

# Snooze Job

During a job execution, there might be times when you need to pause it because certain conditions are not met.

In PidginMQ, you can do this by throwing a `SnoozeJobException`. This exception allows you to specify a duration in seconds, indicating the number of seconds after which the job should be attempted again.

An execution that has been snoozed is considered a failed execution.

## Example

```js
client.addWorker("welcome-mail", async () => {
  console.info("Sending mail");

  throw new SnoozeJobException(5_000, "Mail is not ready to be sent!");
});
```
