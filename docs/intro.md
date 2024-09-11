---
sidebar_position: 1
---

# Introdction

PidginMQ is a job queuing library that leverages PostgreSQL to store and execute jobs within Node.js. This library facilitates job processing in the background with minimal configuration.

Numerous enterprises and startups rely on database-based job queue systems similar to this in their production environments, handling millions of jobs daily. If such systems are performing effectively for them, they are likely to adequately fulfill your requirements as well.

PidginMQ makes use of the SKIP LOCKED feature, purposefully engineered for message queues, to address record-locking issues in relational databases. This feature ensures exactly-once delivery and provides guarantees for atomic commits, thereby establishing a foundation for secure and dependable asynchronous job processing.

## Requirements

The current version of PidginMQ requires:

- Node.js 18+
- PostgreSQL 11+

## Installation

```sh npm2yarn
npm install pidginmq
```
