// (1) declare variable wed equal to toDo on 'wednesday'
var wed = toDo('wednesday');
// (2) call wed as a function
wed()
function toDo(day){
  if (day === 'saturday' || day === 'sunday'){
     return weekendChore;
  }
  else{
     return weekdayChore;
  }
}

function weekendChore(){
  alert("Weekend: walk 9am, feed at 4pm, walk at 10pm");
  return 1;
}

function weekdayChore(){
  alert("Weekday: feed at 12pm, walk at 1pm");
  return 0;
}
