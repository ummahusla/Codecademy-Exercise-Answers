//students on the roll
var roll = ["robert","joe","sharon"];

//students actually in the class
var students = {"sharon":true, "robert":true};

//Loop over the roll array. For each name in the roll array, check if
//that name exists in the students associate array.
//Whenever you find a student that is present, increment the numPresent
//counter by 1
var numPresent = 0;
for(i=0;i<roll.length;i++){
    if(students[roll[i]]){
        numPresent++;
    }
}
