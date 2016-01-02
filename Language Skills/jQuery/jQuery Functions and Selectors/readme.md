##1. Functions, Part I: $(document).ready
```script.js
$(document).ready(function() {
    $('div').hide();    
});
```
##2. Functions, Part II: Functions Explained 
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});
```
##3. Variables
```script.js
$(document).ready(function() {
var $target=$('li:last-child');
$target.fadeOut('fast');
});
```
##4. $p vs $('p')
```script.js
var $div = $('div');
```
##5. Using Functions to Select HTML Elements
```script.js
$(document).ready(function() {
    $('div').fadeIn('slow');
});
```
##6. Selecting by Class
```script.js
$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow');
    });
});
```
##7. Selecting by ID 
```script.js
$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});
```
##8. Flexible Selections
```script.js
$(document).ready(function() {
    $('.pink, .red').fadeTo('slow',0);    
});
```
##9. 'this' is important!
```script.js
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});
```
##10. Ready? 
```script.js
$(document).ready(function() {
    $(this).click();    
});
```
##11. Click and Pull
```script.js
$(document).ready(function() {
    $('.pull-me').click();    
});
```
##12. Toggling Our Panel
```script.js
$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');    
    });    
});
```
##13. Well Done!
```script.js
$(document).ready(function() {
    $('.pull-me').click(function() {
        $('.panel').slideToggle('slow');    
    });    
});
```