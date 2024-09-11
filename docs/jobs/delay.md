---
sidebar_position: 5
---

# Delayed Job

Delayed jobs are not processed immediately but are handled after a specified amount of time has passed. Once processed, they are executed like regular jobs.

In PidginMQ, to delay a job, you can utilize the `scheduleAt` property, which is of type `Date`. This property allows you to specify the exact time when the job should be executed.

It's important to note that PidginMQ cannot guarantee that a job will be executed at the exact scheduled time, as this depends on various factors such as the worker's current load and availability.

## Example

```js
await client.addJob({
  kind: "welcome-mail",
  queue: "email",
  scheduleAt: new Date(2024, 8, 12, 9, 40, 40),
});
```
