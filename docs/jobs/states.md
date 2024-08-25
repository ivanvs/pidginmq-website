---
sidebar_position: 1
---

# States

Currently jobs in PidginMQ have 7 possible states:

- available - job is available for execution
- cancelled - job is cancelled
- completed - job is successfully completed
- discarded - job was stuck and reached max number of attempts. Because of that it was discarded
- retryable - job is ready to be retried
- running - job is currently being executed
- scheduled - job is scheduled for execution

## State Diagram

```mermaid
stateDiagram-v2
    [*] --> available : Insert a job
    available --> running
    available --> cancelled : Cancel

    scheduled --> available
    scheduled --> cancelled : Cancel
    running --> scheduled : Snoozed
    running --> completed
    running --> available : Snoozed
    running --> cancelled : Cancel
    running --> cancelled : Max attempts reached
    running --> available : Execution error
    running --> retryable : Execution error
    running --> discarded : Max attempts reached

    retryable --> available
    retryable --> cancelled : Cancel

    cancelled --> [*] : Delete a job
    completed --> [*] : Delete a job
    discarded --> [*] : Delete a job



```
