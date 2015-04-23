## 1. Glance at the Past!
```php
<!DOCTYPE html>
<html>
    <head>
		<title></title>
	</head>
	<body>
    <?php
        if (1 > 0) {
            echo "1 > 0";
        } elseif (0 > 1) {
            echo "0 > 1";
        } else {
            echo " Else";
        }
    ?>
    </body>
</html>
```

## 2. Dipping Your Toe into Switch statements
```php
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
    <?php
    switch (2) {
        case 0:
            echo 'The value is 0';
            break;
        case 1:
            echo 'The value is 1';
            break;
        case 2:
            echo 'The value is 2';
            break;
        default:
            echo "The value isn't 0, 1 or 2";
    }
    ?>
    </body>
</html>
```

## 3. Switch Syntax
```php
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
    <?php
    $fruit = "Apple";
    
      switch ($fruit) {
        case 'Apple':
            echo "Yummy.";
            break;
        default : "I want a banana!";
      }
    
    ?>
    </body>
</html>
```

## 4. Multiple Cases. Falling Through!
```php
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
    <?php
    $i = 5;
    
    switch ($i) {
        case 0:
            echo '$i is 0.';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            echo '$i is somewhere between 1 and 5.';
            break;
        case 6:
        case 7:
            echo '$1 is either 6 or 7.';
            break;
        default:
            echo "I don't know how much \$i is";
            break;
    }
    ?>
    </body>
</html>
```

## 5. Using "Endswitch". Syntactic Sugar!
```php
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
    <?php
    $i = 5;
    
    switch ($i):
        case 0:
            echo '$i is 0.';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            echo '$i is somewhere between 1 and 5.';
            break;
        case 6:
        case 7:
            echo '$1 is either 6 or 7.';
            break;
        default:
            echo "I don't know how much \$i is";
            break;
    endswitch;
    ?>
    </body>
</html>
```

## 6. All On Your Own!
```php
<!DOCTYPE html>
<html>
    <head>
		<title></title>
	</head>
	<body>
    <?php
    switch ($i) :
        case 0:
            echo '$i is 0.';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            echo '$i is somewhere between 1 and 5.';
            break;
        case 6:
        case 7:
            echo '$1 is either 6 or 7.';
            break;
        default:
            echo "I don't know how much \$i is";
            break;
    endswitch;
    ?>
	</body>
</html>
```
