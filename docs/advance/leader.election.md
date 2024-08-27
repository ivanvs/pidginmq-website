---
sidebar_position: 1
---

# Leader Election

PidginMQ includes an election system designed to ensure that only one client is responsible for processing jobs at a time.

When a client starts, it will attempt to declare itself as the leader. Only one leader can exist at any given time. Only the leader is allowed to process messages in the queue.

When the leader shuts down, it notifies other clients using PostgreSQL's LISTEN/NOTIFY mechanism. This triggers the other clients to attempt to become the new leader. If no other client is active, there will be no leader.

If the leader is not shut down correctly, it will remain the leader for a specified time-to-live (TTL) period. The default TTL is 10 seconds. Other clients will attempt to become the leader every 5 seconds.
