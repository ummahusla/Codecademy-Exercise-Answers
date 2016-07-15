##1. Review of jQuery Events
```script.js
$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("input[name=message]").val();
        $('#messages').append("<p>"+toAdd+"</p>");
    });
});
```
##2. Cutting to the Chase
```script.js
$(document).ready(function() {
    $('div').fadeOut('fast');    
});
```
##3. Adding an Event Handler
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast')    
    });    
});
```
##4. Combining .click() and .hover()
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('fast')    
    });
    $('div').hover(function() {
        $(this).addClass('red');    
    });
});
```
##5. The .dblclick() Event
```script.js
$(document).ready(function() {
    $('div').dblclick(function() {
        $(this).fadeOut('fast');    
    });    
});
```
##6. Hover
```script.js
$(document).ready(function(){

  $('div').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');    
    }
  );

});
```
##7. Let's .focus()!
```script.js
$(document).ready(function() {
    $('input').focus(function() {
        $('input').css('outline-color', '#FF0000');    
    });    
});
```
##8. The .keydown() Event
```script.js
$(document).ready(function() {
    $(document).keydown(function() {
        $('div').animate({left: '+=10px'}, 500);
    });    
});
```
##9. Getting Ready
```script.js
$(document).ready(function() {
        
});
```
##10. Using .keydown()
```script.js
$(document).ready(function() {
    $(document).keydown(function(key) {
        
    });    
});
```
##11. Filling Out the Cases
```script.js
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});
```
##12. You Did It!
```script.js
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});
```