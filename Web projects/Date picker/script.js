$(document).ready(function() {
    $("#departing").datepicker();
    $("#returning").datepicker();
    $("button").click(function() {
    	var selected = $("#dropdown option:selected").text();
        var departing = $("#departing").val();
        var returning = $("#returning").val();
        if (departing === "" || returning === "") {
			alert("Please select departing and returning dates.");
        } else {
			confirm("Would you like to go to " + selected + " on " + departing + " and return on " + returning + "?");
        }
    });
});