//students actually in the class
var students = ["sharon","robert"];

//students on the roll
var roll = ["robert","joe","sharon"];

//the number of students present
var numPresent = 0;

//Write code that loops over every student in the students array.
//For each student, loop over every name in the roll array until
//you find the student's name.
//Whenever you find a student that is present, increment the numPresent
//counter by 1
for(i=0;i<students.length;i++){
    for(j=0;j<roll.length;j++){
        if(students[i]===roll[j]){
            numPresent++;
        }
    }
}
