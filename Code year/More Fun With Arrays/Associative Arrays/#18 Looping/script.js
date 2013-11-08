//This is an associative array of the results of the student roll call.
//If the value of the key is false, then the student was absent.
var students = {"robert":false,"joe":true,"sharon":true};

//Loop over the students associative array. If the student was present
//output their name to the console
for(var key in students){
    if(students[key]===true)
    console.log(key);
}
