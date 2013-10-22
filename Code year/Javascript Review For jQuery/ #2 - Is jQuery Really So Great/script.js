//ignore this stuff (it's for the tests):
$('document').ready(function(){

/*
 *Select an element from the page and make it invisible
 */

//javascript:
document.getElementById('myElement').style.display = "none";
//jquery:
$('#myElement').hide();


/*
 * Creating and adding a new heading to the body
 */
//javascript:
var newHeading = document.createElement("h1");
newHeading.innerHTML = "Javascript";
document.getElementsByTagName('body')[0].appendChild(newHeading);

//jQuery
$('body').append( $('<h1/>').html("jQuery") );


/*
 * Add a CSS class to every div that is the child of a link
 */
 //javascript
var links = document.getElementsByTagName('a');
var link;
for (i=0;i<links.length;i++) {
   link =  links[i];
   for (j=0;j<link.children.length;j++) {
       if (link.children[j].tagName === "DIV") {
           var currentClassName = link.children[j].className;
           var newClassName;
           if (currentClass === "") {
               newClassName = "newClass";
           } else {
               newClassName = currentClassName + " newClass";
           }
           link.children[j].className = newClassName;
       }
   }
}

//jquery
$('a > div').addClass("newClass");


// OK, now which one do you like better???
iPrefer = "jQuery";
alert("I prefer " + iPrefer +"!");
});
