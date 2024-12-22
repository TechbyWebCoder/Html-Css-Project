var sw = {
    etime: null, 
    erst: null, 
    ego: null, 
    init: function () {
      sw.etime = document.getElementById("sw-time");
      sw.erst = document.getElementById("sw-rst");
      sw.ego = document.getElementById("sw-go");
  
      sw.erst.addEventListener("click", sw.reset);
      sw.erst.disabled = false;
      sw.ego.addEventListener("click", sw.start);
      sw.ego.disabled = false;
    },
  
    timer: null, 
    now: 0, 
    tick: function () {
      sw.now++;
      var remain = sw.now;
      var hours = Math.floor(remain / 360000);
      remain -= hours * 360000;
      var mins = Math.floor(remain / 6000);
      remain -= mins * 6000;
      var secs = Math.floor(remain / 100);
      remain -= secs * 100;
      var msecs = remain;
  
      if (hours < 10) { hours = "0" + hours; }
      if (mins < 10) { mins = "0" + mins; }
      if (secs < 10) { secs = "0" + secs; }
      if (msecs < 10) { msecs = "0" + msecs; }
      sw.etime.innerHTML = hours + ":" + mins + ":" + secs + ":" + msecs;
    },
  
    start: function () {
      sw.timer = setInterval(sw.tick, 10);
      sw.ego.value = "Stop";
      sw.ego.removeEventListener("click", sw.start);
      sw.ego.addEventListener("click", sw.stop);
    },
  
    stop: function () {
      clearInterval(sw.timer);
      sw.timer = null;
      sw.ego.value = "Start";
      sw.ego.removeEventListener("click", sw.stop);
      sw.ego.addEventListener("click", sw.start);
    },
  
    reset: function () {
      if (sw.timer != null) { sw.stop(); }
      sw.now = -1;
      sw.tick();
    }
  };
  window.addEventListener("load", sw.init);
