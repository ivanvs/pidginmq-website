---
sidebar_position: 3
---

# Configuration

When creating a PidginMQ client, there are multiple options that can be configured. Here is a breakdown of the configurable options:

- **dbUri** - Database connection URI, detailed description can be found [here](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS).
- **cancelledJobRetentionPeriod** - how long canceled jobs are retained before removal - default 24 hours.
- **completedJobRetentionPeriod** - how long completed jobs are retained before removal - default 24 hours.
- **discardedJobRetentionPeriod** - how long discarded jobs are retained before removal - default 24 hours.
- **fetchCoolDown** - minimum amount of time between two fetches of jobs for execution. The default value is 200 milliseconds.
- **fetchPollInterval** - amount of time between fetching jobs for execution. The default value is 500 milliseconds.
- **id** - unique identifier of a particular PidginMQ client. If not set, the value will be default. It is used for leader election and to identify who attempted to execute the job.
- **jobTimeout** - the maximum duration allowed for a job to execute. The default value is 1 minute.
- **rescueStuckJobsAfter** - the maximum amount of time that job can be in running state before it is being a candidate for state stuck. The default value is 1 hour.
- **retryPolicy** - retry policy for jobs. There are two default retry policies: fixed and exponential. Additional retry policies could be implemented with a method that satisfies the type `ClientRetryPolicy`.
- **schedulerInterval** - time interval between two runs of the scheduler. The scheduler will move jobs from the scheduled and retriable state to the available state. The default value is 1 second.
- **workers** - a collection of executors that will execute jobs of a given kind.
- **queues** - map of queue names and configuration for specific queues. Currently, the only configuration is a number of executors of the queue.
- **logLevel** - configuration in which the log should be written to the console. The default is `SILENT` - nothing will be logged into the console.
