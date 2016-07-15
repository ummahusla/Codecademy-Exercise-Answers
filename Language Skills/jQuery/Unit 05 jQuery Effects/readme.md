##1. You Know This!
```script.js
$(document).ready(function() {
    $('div').hide();
});
```
##2. More Practice with .animate()
```script.js
$(document).ready(function(){
    $('img').animate({top:'+=100px'},1000);
});
```
##3. Introducing: jQuery UI
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('explode');
    });    
});
```
##4. .bounce()
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('bounce',{times:3}, 500);
    });    
});
```
##5. .slide()
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).effect('slide');
    });    
});
```
##6. Special Effects
```script.js
$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});
```
##7. Drag Racing
```script.js
$(document).ready(function() {
    $('#car').draggable();    
});
```
##8. One Resize Fits All
```script.js
$(document).ready(function() {
    $('div').resizable();
});
```
##9. A Greater Selection
```script.js
$(document).ready(function() {
    $('ol').selectable();
});
```
##10. Let's Sort Things Out
```script.js
$(document).ready(function() {
    $('ol').sortable();
});
```
##11. jQuery UI, is There Anything You Can't Do?
```index.html
<!DOCTYPE html>
<html>
    <head>
		<title></title>
        <link rel='stylesheet' type='text/css' href='http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css'/>
        <script type='text/javascript' src='script.js'></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
	</head>
	<body>
        <div id="menu">
            <h3>Section 1</h3>
            <div>
                <p>I'm the first section!</p>
            </div>
            <h3>Section 2</h3>
            <div>
                <p>I'm the second section!</p>
            </div>
            <h3>Section 3</h3>
            <div>
                <p>I'm the third section!</p>
            </div>
        </div>
	</body>
</html>
```
##12. At the Ready
```script.js
$(document).ready(function(){ 
    
});
```
##13. Break Out Your .accordion()!
```script.js
$(document).ready(function(){ 
    $('#menu').accordion();
});
```
##14. Victory!
```script.js
$(document).ready(function(){ 
    $('#menu').accordion();
});
```