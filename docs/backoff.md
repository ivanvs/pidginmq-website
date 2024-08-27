---
sidebar_position: 8
---

# Backoff Strategy

PidginMQ currently has two built-in strategy:

- fixed
- exponential

## Fixed

With the fixed backoff strategy, a job will be retried after a `delay` specified in milliseconds.

This strategy is configured when starting the PidginMQ client, as shown in the example below.

```js

const options = {
    ...
    retryPolicy: RetryPolicies.fixed(2_000)
};
client = new Client(options);
await client.start();
```

## Exponential

With the exponential backoff strategy, a job will be retried after a delay calculated using the formula `2 ^ (attempt - 1) * delay`. Here, attempt refers to the current retry `attempt` number, and `delay` is the base number of milliseconds to be multiplied.

This strategy is configured when starting the PidginMQ client, as shown in the example below.

```js

const options = {
    ...
    retryPolicy: RetryPolicies.exponential(2_000)
};
client = new Client(options);
await client.start();
```

## Custom Backoff Stretegy

You can also define your own custom backoff strategy by providing a function.

The custom backoff strategy function needs to implement the following interface:

`(job: Job) => Date;`

The input argument for the custom backoff strategy is the job for which you need to calculate the next execution time. The return value should indicate the time when the job should be executed next.
