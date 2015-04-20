function toDo(day){
  // 1. check IF day is saturday OR sunday
  day=day.toUpperCase();
  if(day.charAt(0)==="S") {
  // 2. return the weekendChore function
      return weekendChore();
  }
  else{
   // 3. otherwise return the weekdayChore function.
      return weekdayChore();
  }
}
      // These are the functions we will return:
function weekendChore(){
  alert("Weekend: walk 9am, feed at 4pm, walk at 10pm");
  return 1;
}

function weekdayChore(){
  alert("Weekday: feed at 12pm, walk at 1pm");
  return 0;
}
