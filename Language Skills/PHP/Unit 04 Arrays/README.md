## 1. What's an Array?
```php
<html>
  <head>
    <title>Woot, Arrays!</title>
  </head>
  <body>
    <?php
      $array = array("Egg", "Tomato", "Beans");
    ?>    
  </body>
</html>
```

## 2. Array Syntax
```php
<html>
  <head>
    <title>Woot, More Arrays!</title>
  </head>
  <body>
    <p>
      <?php
        // Add your array elements after
        // "Beans" and before the final ")"
        $array = array("Egg", "Tomato", "Beans","Chips", "Sausage");        
      ?>
    </p>
  </body>
</html>
```

## 3. Creating Your First Array
```php
<html>
  <head>
    <title>My First Array</title>
  </head>
  <body>
    <p>
      <?php
        $friends = array("Anna", "Peter", "Wilkins");
      ?>
    </p>
  </body>
</html>
```

## 4. Access by Offset with [ ]
```php
<html>
  <head>
    <title>Accessing Elements</title>
  </head>
  <body>
    <p>
      <?php
        $tens = array(10, 20, 30, 40, 50);
        echo $tens[2];
      ?>
    </p>
  </body>
</html>
```

## 5. Access by Offset with { }
```php
<html>
  <head>
    <title>Accessing Elements</title>
  </head>
  <body>
    <p>
      <?php
        $tens = array(10, 20, 30, 40, 50);
        echo $tens{2};
      ?>
    </p>
  </body>
</html>
```

## 6. Modifying Array Elements
```php
<html>
  <head>
    <title>Modifying Elements</title>
  </head>
  <body>
    <p>
      <?php
        $languages = array("HTML/CSS",
        "JavaScript", "PHP", "Python", "Ruby");
        $languages[2] = "USELESS";
        print $languages;
      ?>
    </p>
  </body>
</html>
```

## 7. Deleting Array Elements
```php
<html>
  <head>
    <title>Modifying Elements</title>
  </head>
  <body>
    <p>
      <?php
        $languages = array("HTML/CSS",
        "JavaScript", "PHP", "Python", "Ruby");
        // Write the code to remove Python here!
        unset($languages[3]);
        
        
        // Write your code above this line. Don't
        // worry about the code below just yet; we're
        // using it to print the new array out for you!
        
        foreach($languages as $lang) {
          print "<p>$lang</p>";
        }
        
      ?>
    </p>
  </body>
</html>
```
