function dogCare(){
  alert("walk 9am, Feed at 4pm, walk at 10pm");
}

// add a parameter called chores
function doTwice(chores){
    alert ("calling the function you gave me the first time");
    chores();
    alert ("calling the function you gave me a second time");
    chores();
    return 1;
}

// call doTwice with dogCare function as an argument
doTwice(dogCare);
