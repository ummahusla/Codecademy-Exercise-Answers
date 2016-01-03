## 1. See It to Believe It
```script.js
$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
       $(this).toggle(1000);
   }); 
});
```
##2. The Document Object Model
```script.js
$(document).ready(function() {
    $('div').fadeOut(1000);
});
```
##3. Changing Targets
```script.js
$(document).ready(function() {
    $("#green").fadeOut(1000);
});
```
##4. What is jQuery?
```script.js
$(document).ready(function() {
    $("#notready").fadeOut(1000);
});
```
##5. Linking Your HTML and JavaScript Files
```index.html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script type="text/javascript" src="script.js"></script>
    </head>
    <body>
        <div></div>
    </body>
</html>
```
##6. Getting Started
```script.js
$(document).ready(function(){
  
});
```
##7. The Functional Approach
```script.js
$(document).ready(function(){
  
});
```
##8. Electr(on)ic Slide
```script.js
$(document).ready(function(){
    $('div').slideDown('slow');
});
```
##9. Mid-Lesson Breather
```script.js
//No Code Necessary
```
##10. At the Ready!
```index.html
<html>
	<head>
		<title>Button Magic</title>
        <link rel='stylesheet' type='text/css' href='stylesheet.css'/>
        <script type="text/javascript" src="script.js"></script>
	</head>
	<body>
     <div><br/><strong>Click Me!</strong></div>   
	</body>
</html>
```
```script.js
$(document).ready();
```
##11. Get Yourself In...
```script.js
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1.00);
    });
});
    
```
##12. ...and Get Yourself Out!
```script.js
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1.00);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast',0.5);
    });
});
```
##13. Eureka!
```script.js
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('slow',1.00);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('slow',0.5);
    });
});
```
