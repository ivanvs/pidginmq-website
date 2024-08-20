---
sidebar_position: 2
---

# Getting Started

In this section we will cover minimal examples of operation that are often used with PidginMQ client. Before starting client database schema needs to be initialized. More details can be found in [migration](./migrations.md) section.

## Starting Client

PidginMQ client provides interface for common interactions with queus and jobs. A client is created with database pool in order to improve performance. Here is a client working with one queue:

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

## Register Worker

Jobs are uniquely indentified by their `kind` string. Worker can be registered on star of client or when client is already started.

```js
client.addWorker("welcome-mail", async () => {
  console.info("Sending mail");
  // sending mail
});
```

## Add job

When we have client configured and started, worker registered, now we need to add job to queue.

```js
await client.addJob({
  kind: "welcome-mail",
  queue: "email",
});
```

## Stopping Client

The client should be stopped on program shutdown. This will ensure that leader for processing jobs is release. Other client can continue with processing jobs if there is any

```js
await client.stop();
```
