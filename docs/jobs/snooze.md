---
sidebar_position: 4
---

# Snooze Job

During job execution, there may be instances where you need to pause the job because certain conditions are not met.

In PidginMQ, this can be achieved by throwing a `SnoozeJobException`. This exception accepts a duration in seconds, indicating the number of seconds after which the job should be attempted again.

A snoozed execution is counted as a failed execution.

## Example

```js
client.addWorker("welcome-mail", async () => {
  console.info("Sending mail");

  throw new SnoozeJobException(5_000, "Mail is not ready to be sent!");
});
```
