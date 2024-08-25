---
sidebar_position: 6
---

# Cancel Job

At times, you may need to remove a job before it completes processing. This can be done by canceling the job. After cancellation, the job will remain in the database until the job cleaner permanently deletes it.

Jobs eligible for cancellation must be in one of the following states:

- running
- scheduled
- retryable
- available

## Example

To cancel a job, the user should use the `cancelJob` method from the PidginMQ client. This method accepts one parameter: the job ID:

```js
const jobId = 12345;

const canceledJob = await client.cancelJob(jobId);
```

Instructions on how to initiate the PidginMQ client can be found in the [Getting Started](../getting.started.md) section.
