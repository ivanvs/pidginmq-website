---
sidebar_position: 1
---

# Introdction

PidginMQ is joq queuing library which uses PostgreSQL to store jobs and execute them on Node.js. The library allows you to process jobs in background with minimal need for configuration.

Many companies and startups rely on DB-based job queue systems like this in production, processing millions of jobs daily. If it's working well for them, it will likely meet your needs too.

PidginMQ use the SKIP LOCKED feature, designed specifically for message queues, to address record locking issues in relational databases. This ensures exactly-once delivery and guarantees atomic commits for safe and reliable asynchronous job processing.

## Requirements

The current version of PidginMQ requires:

- Node.js 18+
- PostgreSQL 11+

## Installation

```sh npm2yarn
npm install pidginmq
```
