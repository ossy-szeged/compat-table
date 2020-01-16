jobqueue.forEach(function(jobs) {
  for (var job of jobs) {
    job.cb(...job.cbarg);
  }
});

function onCloseAsyncCheck() {
  if (!asyncPassed) {
    print("Async[FAILURE]");
    throw "Async check failed";
  }
  print("[SUCCESS]")
}
