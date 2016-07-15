## 1. What you'll be building
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
		<div class="friend" id="best_friend"><p>Arthur</p></div>
		<div class="friend"><p>Batmanuel</p></div>
		<div class="friend"><p>Captain Liberty</p></div>
		<div class="friend"><p>The City</p></div>
		<div class="friend"><p>Justice</p></div>
		<div class="family"><p>Mom</p></div>
		<div class="family"><p>Dad</p></div>
		<div class="family"><p>Bro</p></div>
		<div class="family"><p>Sis</p></div>
		<div class="family"><p>Rex</p></div>
		<div class="enemy"><p>Baron Violent</p></div>
		<div class="enemy"><p>The Breadmaster</p></div>
		<div class="enemy"><p>The Deadly Nose</p></div>
		<div class="enemy"><p>Dinosaur Neil</p></div>
		<div class="enemy" id="archnemesis"><p>Chairface</p></div>
	</body>
</html>
```

```css
div {
	position: relative;
	display: inline-block;
	height: 100px;
	width: 100px;
	border-radius: 100%;
	border: 2px solid black;
	margin-left: 5px;
	margin-top: 5px;
	text-align: center;
}

div p {
	position: relative;
	margin-top: 40px;
	font-size: 12px;
}

.friend {
	border: 2px dashed green;
}

.family {
	border: 2px dashed blue;
}

.enemy {
	border: 2px dashed red;
}

#best_friend {
	border: 4px solid #00C957;
}

#archnemesis {
	border: 4px solid #cc0000;
}
```

## 2. Divide and conquer
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>My Social Network</title>
	</head>
	<body>
		<div>1</div>
		<div>2</div>
        <div>3</div>
	</body>
</html>
```

```css
/*Add your CSS below!*/

div {
	display: inline-block;
	margin-left: 5px;
	
}
```

## 3. Style those divs!
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>My Social Network</title>
	</head>
	<body>
		<div>1</div>
		<div>2</div>
        <div>3</div>
	</body>
</html>
```

```css
/*Add your CSS below!*/

div {
	display: inline-block;
	margin-left: 5px;
	height: 100px;
    width: 100px;
    border: 2px solid black;
    border-radius: 100%;
}
```

## 4. Classify
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>My Social Network</title>
	</head>
	<body>
		<div class="friend">1</div>
		<div class="family">2</div>
        <div class="enemy">3</div>
	</body>
</html>
```

```css
/*Add your CSS below!*/

div {
	display: inline-block;
	margin-left: 5px;
	height: 100px;
    width: 100px;
    border: 2px solid black;
}
```

## 5. Use classes to add class
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>My Social Network</title>
	</head>
	<body>
		<div>1</div>
		<div>2</div>
        <div>3</div>
	</body>
</html>
```

```css
/*Add your CSS below!*/

div {
	display: inline-block;
	margin-left: 5px;
	height: 100px;
    width: 100px;
    border: 2px solid black;
    border-radius: 100%;
}

.friend {
    border: 2px dashed #008000;
}

.family {
    border: 2px dashed #0000FF;
}

.enemy { 
    border: 2px dashed #FF0000;
}
```

## 6. No ID, no entry
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>My Social Network</title>
	</head>
	<body>
    <div id="best_friend" class="friend">1</div>
    <div class="family">2</div>
    <div id="archnemesis" class="enemy">3</div>
	</body>
</html>
```

```css
/*Add your CSS below!*/

div {
	display: inline-block;
	margin-left: 5px;
	height: 100px;
    width: 100px;
    border: 2px solid black;
    border-radius: 100%;
}

.friend {
    border: 2px dashed #008000;
}

.family {
    border: 2px dashed #0000FF;
}

.enemy { 
    border: 2px dashed #FF0000;
}
```

## 7. Identify your IDs
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>My Social Network</title>
	</head>
	<body>
        <div id="best_friend" class="friend">1</div>
    	<div class="family">2</div>
        <div id="archnemesis" class="enemy">3</div>
	</body>
</html>
```

```css
#best_friend { 
    border: 4px solid #00C957;
}

#archnemesis {
    border: 4px solid #CC0000;
}


div {
	display: inline-block;
	margin-left: 5px;
	height: 100px;
    width: 100px;
    border: 2px solid black;
    border-radius: 100%;
}

.friend {
    border: 2px dashed #008000;
}

.family {
    border: 2px dashed #0000FF;
}

.enemy { 
    border: 2px dashed #FF0000;
}
```

## 8. You've done it!
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>My Social Network</title>
	</head>
	<body>
    <div id="best_friend" class="friend">1</div>
    <div class="family">2</div>
    <div id="archnemesis" class="enemy">3</div>
	</body>
</html>
```

```css
#best_friend { 
    border: 4px solid #00C957;
}

#archnemesis {
    border: 4px solid #CC0000;
}

div {
	display: inline-block;
	margin-left: 5px;
	height: 100px;
    width: 100px;
    border: 2px solid black;
    border-radius: 100%;
}

.friend {
    border: 2px dashed #008000;
}

.family {
    border: 2px dashed #0000FF;
}

.enemy { 
    border: 2px dashed #FF0000;
}
```
