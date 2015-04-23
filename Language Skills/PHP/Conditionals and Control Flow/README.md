## 1. Comparisons
```php
<html>
  <head>
    <title>Comparing Numbers</title>
  </head>
  <body>
    <p>
      <?php
        6 < 7
        7 > 6
        2 == 2
        2 <= 3
        3 >= 2
        6 != 3
      ?>
    </p>
  </body>
</html>
```

## 2. If statements
```php
<html>
  <head>
    <title>Our Shop</title>
  </head>
  <body>
    <p>
      <?php
        $items =  15; 
        if ($items > 5) {
          echo "You get a 10% discount!";
        }
      ?>
    </p>
  </body>
</html>
```

## 3. Adding an Else
```php
<html>
  <head>
    <title>Our Shop</title>
  </head>
  <body>
    <p>
      <?php
        $items =  15; 
        if ($items > 5) {
            echo "You get a 10% discount!";
        } else { 
            echo "You get a 5% discount!";
        }
      ?>
    </p>
  </body>
</html>
```

## 4. All Together Now!
```php
<html>
  <head>
    <title>If, Elseif, and Else</title>
  </head>
  <body>
    <p>
      <?php
         if(10 < 3) {
            echo "The condition is true";
          } else {
            echo "The condition is false";
          }
      ?>
    </p>
  </body>
</html>
```
