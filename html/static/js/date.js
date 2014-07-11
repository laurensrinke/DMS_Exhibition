say('hello');
say('Time will be added!');

function startTime() {
    var today=new Date();
    var hours=today.getHours();
    var minute=today.getMinutes();
    var seconds=today.getSeconds();
    hours = checkTime(hours);
    minute = checkTime(minute);
    seconds = checkTime(seconds);
    document.getElementById('time').innerHTML = hours+":"+minute+":"+seconds;
    // Date
    var day=today.getDay();
    var month=today.getMonth();
    var year=today.getYear();
    day = checkTime(day);
    month = checkTime(month);
    document.getElementById('date').innerHTML = day+"."+month+"."+year;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


// Date
