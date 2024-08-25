---
sidebar_position: 5
---

# Delayed Job

Delayed jobs are jobs that are not processed immediately. Instead, they are processed after a specified amount of time has passed, at which point they are handled like regular jobs.

To delay a job in PidginMQ, you can use the `scheduleAt` property, which is of type Date. This property allows you to specify the exact time when the job should be executed.

Please note that PidginMQ cannot guarantee that a job will be executed at the exact scheduled time, as this depends on various factors, such as the worker's current load and availability.

## Example

```js
await client.addJob({
  kind: "welcome-mail",
  queue: "email",
  scheduleAt: new Date(2024, 8, 12, 9, 40, 40),
});
```
