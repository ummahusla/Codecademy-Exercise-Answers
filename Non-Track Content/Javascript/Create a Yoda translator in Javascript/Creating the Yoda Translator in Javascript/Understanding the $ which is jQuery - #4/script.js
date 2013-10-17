$(document).ready(function () {
    $("#btnTrigger").on('click', function () {
        $.ajax({
            url: 'https://yoda.p.mashape.com/yoda', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: {sentence: $("#boxArea").val()}, // Parameters go here
            datatype: 'json',
            success: function (data) {
                alert(data);
            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "<Key in your mashape key here>"); // Enter your Mashape key here
            }
        });
    });
});
