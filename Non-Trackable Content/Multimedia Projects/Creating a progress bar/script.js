$(document).ready(function() {
    $("#progressbar").progressbar({value: 10});
    var progress = setInterval(function() {
       var currentVal = $("#progressbar").progressbar("option", "value");
       var nextVal = currentVal + 1;
       if (nextVal > 100) {
           clearInterval(progress);
       } else {
           $("#progressbar").progressbar({value: nextVal});
       }
    }, 1000);
});