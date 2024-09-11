---
sidebar_position: 2
---

# Getting Started

In this section we will cover minimal examples of operation that are often used with PidginMQ client. Before starting client database schema needs to be initialized. More details can be found in [migration](./migrations.md) section.

## Starting Client

PidginMQ client provides an interface for common interactions with queues and jobs. A client is created with a database pool to improve performance. Here is a client working with one queue:

```js
const queues = new Map<string, QueueConfig>();
queues.set('email', { maxWorkers: 1 });
const options = {
    workers: new Workers(),
    queues,
    dbUri: 'postgresql://user:secret@localhost:5432/pidginmq'
};
client = new Client(options);
await client.start();

```

## Register Worker

Jobs are uniquely identified by their `kind` string. A worker can be registered at the start of a client or when the client has already started.

```js
client.addWorker("welcome-mail", async () => {
  console.info("Sending mail");
  // sending mail
});
```

## Add job

When the client is configured and started, and the worker is registered, we need to add a job to the queue.

```js
await client.addJob({
  kind: "welcome-mail",
  queue: "email",
});
```

## Stopping Client

The client should be stopped on program shutdown. This will ensure that the leader for processing jobs is released. Other clients can continue processing jobs if there are any.

```js
await client.stop();
```
