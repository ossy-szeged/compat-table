var asyncPassed = false;

function asyncTestPassed() {
  asyncPassed = true;
}

function setTimeout(cb, time, ...cbarg) {
  if (!jobqueue[time]) {
    jobqueue[time] = [];
  }
  jobqueue[time].push({cb, cbarg});
}

var jobqueue = [];
