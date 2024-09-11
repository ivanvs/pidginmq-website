---
sidebar_position: 1
---

# States

Currently, jobs in PidginMQ have 7 possible states:

- **available** - a job is available for execution.
- **cancelled** - a job is cancelled.
- **completed** - a job is successfully completed.
- **discarded** - a job was stuck and reached the maximum number of attempts. Because of that, it was discarded.
- **retryable** - a job is ready to be retried.
- **running** - a job is currently being executed.
- **scheduled** - a job is scheduled for execution.

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
