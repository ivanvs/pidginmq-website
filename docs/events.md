---
sidebar_position: 9
---

# Events

Every time a job changes state during processing, it triggers an event that users can listen to via the subscribe method. To use the subscribe method, users need to provide three callback functions: one for handling events, one for handling error notifications, and one for handling the event when the client has finished processing events.

The events are of type `Event` and contains:

- **job** - the event includes information about the job for which it was triggered
- **kind** - type of event(`JobCompleted`, `JobCancelled`, `JobSnoozed`, `JobFailed`)
- **stats** - the event also includes information about the time it took to process the job

## Stats

Stats contains three fields:

- **queueWaitDuration** - provides details on how long the job was waiting in the queue before processing began.
- **runDuration** - provides details on how much time the job spent in processing
- **completeDuration** - complete time for job processing(`queueWaitDuration + runDuration`)

## Example

```js
client.subscribe({
  onNext: (event) => {
    console.log(`Job: ${event.job.id}, type of event: ${event.kind}, stats: ${event.stats}`);
  },
  onError: (error) => console.error(error)
  onCompleted: ()=> console.log('Job processing has finished');
});
```
