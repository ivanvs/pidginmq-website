---
sidebar_position: 7
---

# Queues

PidginMQ can be configured to work with multiple queues, all of which are stored in a single database table. However, only the jobs from the queues that PidginMQ is specifically configured to process will be executed.

A queue can be configured either during the creation of the PidginMQ client or later using the client's `addQueue` method.

Example with constructor:

```js
const queues = new Map<string, QueueConfig>();
queues.set('email', { maxWorkers: 1 });
const options = {
    workers: new Workers(),
    queues,
    dbConfig: {
    host: 'localhost',
    port: 5432,
    user: 'pidginmq',
    password: 'Password1',
    database: 'pidginmq',
    ssl: false,
    },
};
client = new Client(options);
await client.start();

```

Example with adding queue through `addQueue` method:

```js
client.addQueue("email", { maxWorkers: 1 });
```

## Pause Queue

PidginMQ can pause processing jobs for specific queue without stopping a client.

Method for pausing queue processing is `pauseQueue`:

```js
const pasuedQueue = await client.pauseQueue("emial");
```

## Resume Queue

When queue is paused, processing can be restored by calling `resumeQueue` method:

```js
const resumedQueue = await client.resumeQueue("email");
```
