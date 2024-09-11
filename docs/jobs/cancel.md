---
sidebar_position: 6
---

# Cancel Job

Sometimes, you may need to cancel a job before it finishes processing. You can do this by canceling the job. After cancellation, the job will stay in the database until the job cleaner permanently deletes it.

Jobs that can be canceled must be in one of the following states:

- running
- scheduled
- retryable
- available

## Example

To cancel a job, use the `cancelJob` method from the PidginMQ client, which accepts the job ID as a parameter.

To cancel a job, the user should use the `cancelJob` method from the PidginMQ client. This method accepts one parameter: the job ID:

```js
const jobId = 12345;

const canceledJob = await client.cancelJob(jobId);
```

Find instructions on how to initiate the PidginMQ client in the [Getting Started](../getting.started.md) section.
