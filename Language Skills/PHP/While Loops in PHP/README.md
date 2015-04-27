## 1. Looping the Loop
```php
<!DOCTYPE html>
<html>
    <head>
    	<link type='text/css' rel='stylesheet' href='style.css'/>
		<title>Coin Flips</title>
	</head>
	<body>
	<p>We are going to flip a coin until we get three heads in a row!</p>
	<?php
	$headCount = 0;
	$flipCount = 0;
	while ($headCount < 3) {
		$flip = rand(0,1);
		$flipCount ++;
		if ($flip){
			$headCount ++;
			echo "<div class=\"coin\">H</div>";
		}   else {
			$headCount = 0;
			echo "<div class=\"coin\">T</div>";
		}
	}
	echo "<p>It took {$flipCount} flips!</p>";
	?>
    </body>
</html>
```

```css
.coin {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: gray;
	text-align: center;
	font-weight: bold;
	font-family: sans-serif;
	color: white;
	margin: 10px;
	display: inline-block;
	line-height: 50px;
	font-size: 20px;
}
```

## 2. While Loop Syntax
```php
<!DOCTYPE html>
<html>
    <head>
		<title>Your First PHP while loop!</title>
	</head>
	<body>
    <?php
$loopCond = true;
while ($loopCond == true){
    //Echo your message that the loop is running below
    echo "<p>The loop is running.</p>";
    $loopCond = false;
}
echo "<p>And now it's done.</p>";
?>
    </body>
</html>
```

## 3. Your First While Loop
```php
<!DOCTYPE html>
<html>
    <head>
		<title>A loop of your own</title>
        <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
    <?php
    $loopCond = true;
    while ($loopCond == true){
        echo "<p>The loop is running.</p>";
        $loopCond = false;
    }
    echo "<p>And now it's done.</p>";
    ?>
    
    ?>
    </body>
</html>
```

```css
.coin {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: grey;
	text-align: center;
	font-weight: bold;
	font-family: sans-serif;
	color: white;
	margin: 10px;
	display: inline-block;
	line-height: 50px;
	font-size: 20px;
}
```

## 4. Using Endwhile
```php
<!DOCTYPE html>
<html>
    <head>
		<title>A loop of your own</title>
        <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
    <?php
    $loopCond = true;
    while ($loopCond == true):
        echo "<p>The loop is running.</p>";
        $loopCond = false;
    endwhile;
    echo "<p>And now it's done.</p>";
    ?>
    </body>
</html>
```

```css
.coin {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: grey;
	text-align: center;
	font-weight: bold;
	font-family: sans-serif;
	color: white;
	margin: 10px;
	display: inline-block;
	line-height: 50px;
	font-size: 20px;
}
```

## 5. How Do You Do-While?
```php
<!DOCTYPE html>
<html>
    <head>
    	<link type='text/css' rel='stylesheet' href='style.css'/>
		<title>More Coin Flips</title>
	</head>
	<body>
	<p>We will keep flipping a coin as long as the result is heads!</p>
	<?php
	$flipCount = 0;
	do {
		$flip = rand(0,1);
		$flipCount ++;
		if ($flip){
			echo "<div class=\"coin\">H</div>";
		}
		else {
			echo "<div class=\"coin\">T</div>";
		}
	} while ($flip);
	$verb = "were";
	$last = "flips";
	if ($flipCount == 1) {
		$verb = "was";
		$last = "flip";
	}
	echo "<p>There {$verb} {$flipCount} {$last}!</p>";
	?>
    </body>
</html>
```

```css
.coin {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: grey;
	text-align: center;
	font-weight: bold;
	font-family: sans-serif;
	color: white;
	margin: 10px;
	display: inline-block;
	line-height: 50px;
	font-size: 20px;
}
```

## 6. Completing the Loop
```php
<!DOCTYPE html>
<html>
    <head>
		<title>Much a do-while</title>
	</head>
	<body>
    <?php
		$loopCond = false;
		do {
		echo "<p>The loop ran even though the loop condition is false.</p>";
		} while ($loopCond); {
		echo "<p>Now the loop is done running.</p>";
		}
    ?>
    </body>
</html>
```

## 7. All On Your Own!
```php
<!DOCTYPE html>
<html>
    <head>
		<title>Your own do-while</title>
        <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
    <?php
        $loopCond = false;
    	do {
		echo "<p>The loop ran even though the loop condition is false.</p>";
		} while ($loopCond); {
		echo "<p>Now the loop is done running.</p>";
		}
    ?>
    </body>
</html>
```

```css
.coin {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  background-color: grey;
	text-align: center;
	font-weight: bold;
	font-family: sans-serif;
	color: white;
	margin: 10px;
	display: inline-block;
	line-height: 50px;
	font-size: 20px;
}
```
