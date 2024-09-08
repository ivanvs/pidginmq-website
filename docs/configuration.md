---
sidebar_position: 3
---

# Configuration

When creating PidginMQ client there are multiple options that can be configured. Here is a breakdown of options that can be configured:

- **dbUri** - Database connection URI, detailed description can be found [here](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING-URIS)
- **cancelledJobRetentionPeriod** - how long cancelled jobs are retained before removal - default 24 hours
- **completedJobRetentionPeriod** - how long completed jobs are retained before removal - default 24 hours
- **discardedJobRetentionPeriod** - how long discarded jobs are retained before removal - default 24 hours
- **fetchCoolDown** - minimum amount of time between two fetchs of jobs for execution. Default value is 200 miliseconds
- **fetchPollInterval** - amount of time between fetching jobs for execution. Default value is 500 miliseconds
- **id** - unique identifier of particular PidginMQ client. If not set value will be `default`. It is used for leader election and identification who attemted to execute the job
- **jobTimeout** - the maximum duration allowed for a job to execute. Default value is 1 minute
- **rescueStuckJobsAfter** - the maximum amount of time that job can be in running state before it is being candiadate for state stuck. Default value is 1 hour
- **retryPolicy** - retry policy for jobs. There is two default retry policies: fixed and exponential. Additional retry policies could be implemented with method that satisfy type `ClientRetryPolicy`
- **schedulerInterval** - time interval between two runs of scheduler. Scheduler will move jobs from scheduled and retryable state to available state. Default value is 1 second
- **workers** - collection of executor that will execute jobs of given kind
- **queues** - map of queue names and configuration for specific queue. Currently only configuration is number of executors of queue
- **logLevel** - configuration which log should be written to console. Default is SILENT - nothing will be logged into console.
