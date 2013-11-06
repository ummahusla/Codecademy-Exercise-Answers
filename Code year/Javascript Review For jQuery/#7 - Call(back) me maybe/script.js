//my click callback
function louisCallback() {
    alert('Mwahahah you will never learn callbacks!');
}

//replace it with a callback that isn't so mean
function myCallback() {
    alert('You will learn callbacks if you believe you can!');
}

$(document).ready(function() {

    //and then change this code so that your callback gets run
    //when the button gets clicked instead of mine.
    // **by the way, this is jQuery!
    $('#clickme').click(myCallback);
});
