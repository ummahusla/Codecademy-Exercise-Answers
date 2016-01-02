##1. Creating HTML Elements
```script.js
$(document).ready(function() {
    $h1 = $("<h1>Hello</h1>");    
});
```
##2. Inserting Elements
```script.js
$(document).ready(function() {
    $('body').append("<p>I'm a paragraph</p>");    
});
```
##3. Before and After
```script.js
$(document).ready(function() {
    $('div #one').after("<p>Hello!</p>");    
});
```
##4. Moving Elements Around
```script.js
$(document).ready(function() {
    $('div #one').after("<p>Hello!</p>");
    $("div #two").after($("p"));
});
```
##5. Removing Elements
```script.js
$(document).ready(function() {
    $('div #one').after("<p>Hello!</p>");
    $("div #two").after($("p"));
    $("p").remove();
});
```
##6. Adding and Removing Classes
```script.js
$(document).ready(function() {
    $('#text').click(function() {
        $(this).addClass('highlighted');
    });
});
```
##7. Toggling Classes
```script.js
$(document).ready(function() {
    $('#text').click(function() {
        $(this).toggleClass('highlighted');
    });
});
```
##8. Changing Your Style
```script.js
$(document).ready(function() {
    $('div').width("200px");
    $('div').height("200px");
    $('div').css("border-radius","10px");
});
```
##9. Modifying Content
```script.js
$(document).ready(function() {
    $('p').html("jQuery magic in action!");    
});
```
##10. Set Up
```script.js
$(document).ready(function() {
    
});
```
##11. Click Da Button! Do it Naoughw!
```script.js
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();    
    });
});
```
##12. Append to Body
```script.js
$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});
```
##13. Remove What's Been Clicked
```script.js
$(document).ready(function() {
    $(document).on('click','.item', function() {
        $(this).remove();    
    });
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});
```
##14. You Did It!
```script.js
$(document).ready(function() {
    $(document).on('click','.item', function() {
        $(this).remove();    
    });
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });
});
```