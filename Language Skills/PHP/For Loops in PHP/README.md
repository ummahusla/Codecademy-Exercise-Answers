## 1. What's a Loop?
```php
<html>
  <head>
    <title>Leap Years</title>
  </head>
  <body>
    <?php
      for ($leap = 2004; $leap < 2050; $leap = $leap + 4) {
        echo "<p>$leap</p>";
      }
    ?>
  </body>
</html>
```

## 2. 'For' Loop Syntax
```php
<html>
  <head>
    <title>For Loops</title>
  </head>
  <body>
    <p>
      <?php
        // Echoes the first five even numbers
        for ($i = 2; $i < 11; $i = $i + 2) {
          echo $i;
        }
      ?>
    </p>
  </body>
</html>
```

## 3. Writing Your First 'For' Loop
```php
<html>
  <head>
    <title>Solo For Loop!</title>
  </head>
  <body>
    <p>
      <?php
      // Write your for loop below!
      for ($i = 10; $i < 110; $i=$i+10) {
         echo $i;
        }
      
         
      ?>
    </p>
  </body>
</html>
```

## 4. When to Use 'For'
```php
<html>
  <head>
    <title>Solo For Loop!</title>
  </head>
  <body>
    <p>
      <?php
      // Write your for loop below!
      for ($i = 50; $i>1; $i=$i-5) {
         echo $i;
        }
      
         
      ?>
    </p>
  </body>
</html>
```

## 5. Loops + Arrays = ForEach
```php
<html>
  <head>
    <link rel="stylesheet" href="stylesheet.css" />
    <title>Codecademy Languages</title>
  </head>
  <body>
    <h1>Languages you can learn on Codecademy:</h1>
    <div class="wrapper">
      <ul>
        <?php
          $langs = array("JavaScript",
          "HTML/CSS", "PHP",
          "Python", "Ruby");
        
          foreach ($langs as $lang) {
              echo "<li>$lang</li>";
          }
        
          unset($lang);
        ?>
      </ul>
    </div>
  </body>
</html>
```

```css
h1 {
    font-family: Verdana, sans-serif;
    font-size: 18px;
}

ul {
    list-style-type: decimal-leading-zero;
    font-family: Tahoma, sans-serif;
}

.wrapper {
    height: 100px;
    border-radius: 5px;
    background-color: #C3E9FA;
}
```

## 6. Practicing with ForEach
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        $sentence = array("I'm ", "learning ", "PHP!");
        
        foreach ($sentence as $word) { 
            echo $word;
        }
      ?>
    </p>
  </body>
</html>
```

## 7. All On Your Own!
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
        $yardlines = array("The 50... ", "the 40... ",
        "the 30... ", "the 20... ", "the 10... ");
        // Write your foreach loop below this line
        foreach($yardlines as $yard) {
        echo "$yard";
        }
        
        // Write your foreach loop above this line
        echo "touchdown!";
      ?>
    </p>
  </body>
</html>
```
