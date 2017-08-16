##2. Linking JavaScript
```main.js
alert('Hello JavaScript!');
```
```index.html
<!DOCTYPE html>
<html>
<head>
  <link rel='stylesheet' type='text/css' href='css/styles.css'>
  <script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
</head>

<body>

  <h1>Proficient in:</h1>
  <div class='skillset'>
    <div class='skill-html'>
      <h1>HTML &amp; CSS</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Broadway</li>
          <li>MOVE</li>
        </ul>
      </p>
    </div>

    <div class='skill-js'>
      <h1>JavaScript</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Password Validator</li>
          <li>Whale Talk</li>
        </ul>
      </p>
    </div>

    <div class='skill-jquery'>
      <h1>jQuery</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Coming soon...</li>
        </ul>
      </p>
    </div>
  </div>
  <script src="js/main.js"></script>
</body>

</html>
```
##3. Document Object Model
```main.js
var skillset = document.getElementsByClassName('skillset');
alert(skillset);
```
##4. jQuery
```index.html
<!DOCTYPE html>
<html>
<head>
  <link rel='stylesheet' type='text/css' href='css/styles.css'>
</head>

<body>

  <h1>Proficient in:</h1>
  <div class='skillset'>
    <div class='skill-html'>
      <h1>HTML &amp; CSS</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Broadway</li>
          <li>MOVE</li>
        </ul>
      </p>
    </div>

    <div class='skill-js'>
      <h1>JavaScript</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Password Validator</li>
          <li>Whale Talk</li>
        </ul>
      </p>
    </div>

    <div class='skill-jquery'>
      <h1>jQuery</h1>
      <p class='description'>
        <div class='projects-button'>Recent Projects</div>
        <ul class='projects'>
          <li>Coming soon...</li>
        </ul>
      </p>
    </div>
  </div>
  <script src='https://code.jquery.com/jquery-3.1.0.min.js'></script>
  <script src="js/main.js"></script>
</body>

</html>
```
```main.js
function main() {

};
$(document).ready(main);
```
##5. jQuery Selectors
```main.js
function main() {
  $skillset = $('.skillset');
  alert($skillset);
};
$(document).ready(main);
```
##6. hide
```main.js
function main() {
  $('.skillset').hide();
};
$(document).ready(main);
```
##7. fadeIn
```main.js
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
};
$(document).ready(main);
```
##8. click
```main.js
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    
  });
};
$(document).ready(main);
```
##9. show
```main.js
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').show();
  });
};
$(document).ready(main);
```
##10. toggle
```main.js
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').toggle();
  });
};
$(document).ready(main);
```
##11. toggleClass
```main.js
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').toggle();
    $('.projects-button').toggleClass('active');
  });
};
$(document).ready(main);
```
##12. this
```main.js
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $('.projects').toggle();
    $(this).toggleClass('active');
  });
};
$(document).ready(main);
```
##13. next
```main.js
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $(this).next().toggle();
    $(this).toggleClass('active');
  });
};
$(document).ready(main);
```
##14. text
```main.js
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    $(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  });
};
$(document).ready(main);
```
##15. slideToggle
```main.js
function main() {
 $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
		$(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  });
};

$(document).ready(main);
```
