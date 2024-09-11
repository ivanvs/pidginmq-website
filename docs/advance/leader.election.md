---
sidebar_position: 1
---

# Leader Election

PidginMQ is equipped with an election system that ensures only one client is responsible for processing jobs at a time.

When a client starts, it will try to declare itself as the leader. Only one leader can exist at any given time, and only the leader is allowed to process messages in the queue.

If the leader shuts down, it will notify other clients using PostgreSQL's LISTEN/NOTIFY mechanism. This will prompt other clients to try to become the new leader. If no other client is active, there will be no leader.

If the leader does not shut down correctly, it will remain the leader for a specified time-to-live (TTL) period. The default TTL is 10 seconds. Other clients will try to become the leader every 5 seconds.
