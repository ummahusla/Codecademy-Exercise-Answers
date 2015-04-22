## 1. PHP in Action
```php
<!DOCTYPE html>
<html>
  <head>
    <link type='text/css' rel='stylesheet' href='style.css'/>
    <title>PHP!</title>
  </head>
  <body>
    <img src="http://i1061.photobucket.com/albums/t480/ericqweinstein/php-logo_zps408c82d7.png"/>
    <div class="header"><h1>
      <?php
      $welcome = "Let's get started with PHP!";
      echo $welcome;
      ?>
    </h1></div>
    <p><strong>Generate a list:</strong>
      <?php
      for ($number = 1; $number <= 10; $number++) {
        if ($number <= 9) {
            echo $number . ", ";
        } else {
            echo $number . "!";
        }
      }; ?>
    </p>
    <p><strong>Things you can do:</strong>
      <?php
        $langs = array("Talk to databases",
        "Send cookies", "Evaluate form data",
        "Build dynamic webpages");
        foreach ($langs as $lang) {
            echo "<li>$lang</li>";
        }
        
        unset($lang);
      ?>
    </p>
    <p><strong>This jumbled sentence will change every time you click Submit!<strong></p>
    <p>
      <?php
        $words = array("the ", "quick ", "brown ", "fox ",
        "jumped ", "over ", "the ", "lazy ", "dog ");
        shuffle($words);
        foreach ($words as $word) {
            echo $word;
        };
        
        unset($word);
      ?>
    </p>
  </body>
</html>
```

## 2. Why Learn PHP?
```php
<!DOCTYPE html>
<html>
    <head>
	</head>
	<body>
        <p>
          <?php
            echo "My first line of PHP!"; 
          ?>
        </p>
	</body>
</html>
```

## 3. PHP and HTML?
```php
<!DOCTYPE html>
<html>
	<head>
        <link type="text/css" rel="stylesheet" href="style.css"/>
		<title>Summing Things Up</title>
	</head>
	<body>
        <p>
         <?php echo 40 + 2; ?> .
        </p>   
	</body>
</html>
```

## 4. PHP Files
```php
<!DOCTYPE html>
<html>
	<head>
        <link type="text/css" rel="stylesheet" href="style.css"/>
		<title>Summing Things Up</title>
	</head>
	<body>
        <p>
         <?php echo 40 + 2; ?> 
        </p>   
	</body>
</html>
```

## 5. Echo
```php
<!DOCTYPE html>
<html>
    <head>
	</head>
	<body>
        <h1>
            <?php
              echo "I'm learning PHP";
            ?>
        </h1>
	</body>
</html>
```

## 6. Strings
```php
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
        <p>
            <?php
              echo "Hello, world!";
            ?>
        </p>
	</body>
</html>
```

## 7. Arithmetic
```php
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
        <p>
          <?php
            echo 17 * 123;
          ?>
        </p>
	</body>
</html>
```

## 8. Variables
```php
<!DOCTYPE html>
<html>
	<head>
		<title>Variable Magic</title>
	</head>
	<body>
        <!-- Add your PHP code between the <p></p> tags! -->
        <p><?php $myName = "Edvins"; echo $myName; ?></p>
    </body>
</html>
```

## 9. Semicolons
```php
<!DOCTYPE html>
<html>
	<head>
		<title>Oh No!</title>
	</head>
	<body>
        <p><?php
            echo "Oh, the humanity!";
          ?></p>
    </body>
</html>
```

```css
p {
    font-family: Garamond, serif;
}
```

## 10. Comments
```php
<!DOCTYPE html>
<html>
	<head>
		<title>Oh No!</title>
	</head>
	<body>
        <p><?php
           // echo "Oh, the humanity!";
          ?></p>
    </body>
</html>
```

```css
p {
    font-family: Garamond, serif;
}
```

## 11. Creating a Variable
```php
<!DOCTYPE html>
<html>
    <head>
        <link type='text/css' rel='stylesheet' href='style.css'/>
		<title>PHP FTW!</title>
	</head>
	<body>
        <!-- Write your PHP code below!-->
        <p>
            <?php $myName = "Edvins"; ?>
        </p>   
	</body>
</html>
```

```css
p {
    font-family: Garamond, serif;
}
```

## 12. Let the Machine Do the Math
```php
<!DOCTYPE html>
<html>
    <head>
        <link type='text/css' rel='stylesheet' href='style.css'/>
		<title>PHP FTW!</title>
	</head>
	<body>
        <!-- Write your PHP code below!-->
        <p>
            <?php 
            $myName = "Edvins"; 
            $myAge = 23;
            ?>
        </p>   
	</body>
</html>
```

## 13. Let the Machine Do the Math
```php
<!DOCTYPE html>
<html>
    <head>
        <link type='text/css' rel='stylesheet' href='style.css'/>
		<title>PHP FTW!</title>
	</head>
	<body>
        <!-- Write your PHP code below!-->
        <p>
            <?php 
            $myName = "Edvins"; 
            $myAge = 23;
            ?>
        </p>   
	</body>
</html>
```
