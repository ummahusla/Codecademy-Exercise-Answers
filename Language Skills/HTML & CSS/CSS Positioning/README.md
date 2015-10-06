## 1. See it to believe it
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h3>The Box Model</h3>
		<img src="https://s3.amazonaws.com/codecademy-blog/assets/ae09140c.png"/>
		<p>Image courtesy of www.w3.org!</p>
	</body>
</html>
```

```css
*{
    border: 1px dashed #0000FF;
}
```

## 2. Taking up space
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="one"></div>
		<div id="two"></div>
		<div id="three"></div>
		<div id="four"></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed blue;
}

div {
	height: 50px;
	width: 100px;
	border: 2px solid black;
	border-radius: 5px;
	display: block;
}

#one {
	background-color: #FF0000;
}

#two {
	background-color: #0000FF;
}

#three {
	background-color: #FFD700;
}

#four {
	background-color: #308014;
}
```

## 3. Inline-block
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="one"></div>
		<div id="two"></div>
		<div id="three"></div>
		<div id="four"></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed blue;
}

div {
	height: 50px;
	width: 100px;
	border: 2px solid black;
	border-radius: 5px;
	display: inline-block;
}

#one {
	background-color: #FF0000;
}

#two {
	background-color: #0000FF;
}

#three {
	background-color: #FFD700;
}

#four {
	background-color: #308014;
}
```

## 4. Inline
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="one"></div>
		<div id="two"></div>
		<div id="three"></div>
		<div id="four"></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed blue;
}

div {
	height: 50px;
	width: 100px;
	border: 2px solid black;
	border-radius: 5px;
	display: inline;
}

#one {
	background-color: #FF0000;
}

#two {
	background-color: #0000FF;
}

#three {
	background-color: #FFD700;
}

#four {
	background-color: #308014;
}
```

## 5. None!
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="one"></div>
		<div id="two"></div>
		<div id="three"></div>
		<div id="four"></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed blue;
}

div {
	height: 50px;
	width: 100px;
	border: 2px solid black;
	border-radius: 5px;
	display: none;
}

#one {
	background-color: #FF0000;
}

#two {
	background-color: #0000FF;
}

#three {
	background-color: #FFD700;
}

#four {
	background-color: #308014;
}
```

## 6. Sketching it out
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h3>The Box Model</h3>
		<img src="https://s3.amazonaws.com/codecademy-blog/assets/ae09140c.png"/>
		<p>Image courtesy of www.w3.org!</p>
	</body>
</html>
```

## 7. Margin
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed black;
}

div {
	height: 50px;
	width: 100px;
	border: 2px solid black;
	border-radius: 5px;
	background-color: #308014;
	margin: auto;
}
```

## 8. Margin top, right, bottom, left
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed black;
}

div {
	height: 50px;
	width: 100px;
	border: 2px solid black;
	border-radius: 5px;
	background-color: #308014;
	margin: 20px 50px 10px 5px;
}
```

## 9. Borders
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed black;
}

div {
	height: 50px;
	width: 100px;
	border: 4px solid #FF0000;
	border-radius: 5px;
	background-color: #308014;
	margin: 20px 50px 10px 5px;
}
```

## 10. Padding
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed black;
}

div {
	height: 50px;
	width: 100px;
	border: 4px solid #FF0000;
	border-radius: 5px;
	background-color: #308014;
	margin: 20px 50px 10px 5px;
	padding: 40px 40px 40px 40px;
}
```

## 11. Negative values
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

```css
* {
	border: 1px dashed black;
}

div {
	height: 50px;
	width: 100px;
	border: 4px solid #FF0000;
	border-radius: 5px;
	background-color: #308014;
	margin: 20px 50px 10px 5px;
	margin-top: -20px;
	padding: 40px 40px 40px 40px;
}
```

## 12. Review
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

```css
div {
    border: 1px solid black;
    background-color: #CC0000;
    margin: 10px 5px 5px 50px;
    padding: 0px 30px 0px 10px;
}
```

## 13. To the right!
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

```css
div {
	height: 300px;
	width: 100px;
	border: 2px solid black;
	border-radius: 5px;
	background-color: #308014;
	float:right;
}
```

## 14. To the left!
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
	</body>
</html>
```

```css
div {
	height: 300px;
	width: 100px;
	border: 2px solid black;
	border-radius: 5px;
	background-color: #308014;
	float:left;
}
```

## 15. Float for two
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div></div>
		<p>Check it out! I'm a block of text, but the &lt;div&gt; and I can live in harmony. Boats on a sea, man. Boats on a sea.</p>
	</body>
</html>
```

```css
div {
	height: 300px;
	width: 300px;
	border: 2px solid black;
	border-radius: 5px;
	background-color: #308014;
	float: right;
}

p {
	font-family: Verdana, sans-serif;
	font-size: 20px;
	width: 280px;
	float: left;
}
```

## 16. Clearing elements
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="header"></div>
		<div class="left"></div>
		<div class="right"></div>
		<div id="footer"></div>
	</body>
</html>
```

```css
div {
	border-radius: 5px;
}

#header {
	height: 50px;
	background-color: #F38630;
	margin-bottom: 10px;
}

.left {
	height: 300px;
	width: 150px;
	background-color: #A7DBD8;
	float: left;
	margin-bottom: 10px;
}

.right {
	height: 300px;
	width: 450px;
	background-color: #E0E4CC;
	float: right;
	margin-bottom: 10px;
}

#footer {
	height: 50px;
	background-color: #69D2E7;
	clear: both;
}
```

## 17. Static by default
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="outer"><div id="inner"></div></div>
	</body>
</html>
```

```css
div {
	height: 100px;
	width: 100px;
	border-radius: 5px;
	border: 2px solid black;
}

#inner {
	height: 75px;
	width: 75px;
	background-color: #547980;
	/*Add your CSS here!*/
	
}

#outer {
	height: 1500px;
	width: 150px;
	background-color: #45ADA8;
	position: absolute;
	margin-left: 100px;
}
```

## 18. Absolute positioning
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="outer"><div id="inner"></div></div>
	</body>
</html>
```

```css
div {
	height: 100px;
	width: 100px;
	border-radius: 5px;
	border: 2px solid black;
}

#inner {
	height: 75px;
	width: 75px;
	background-color: #547980;
	position: absolute;
	margin-left: 20px;
}

#outer {
	height: 1500px;
	width: 150px;
	background-color: #45ADA8;
	position: absolute;
	margin-left: 100px;
}
```

## 19. Relative positioning
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="outer"><div id="inner"></div></div>
	</body>
</html>
```

```css
div {
	height: 100px;
	width: 100px;
	border-radius: 5px;
	border: 2px solid black;
}

#inner {
	height: 75px;
	width: 75px;
	background-color: #547980;
	position: relative;
	margin-left: 200px;
}

#outer {
	height: 1500px;
	width: 150px;
	background-color: #45ADA8;
	position: absolute;
	margin-left: 100px;
}
```

## 20. Fixed Positioning
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="outer"><div id="inner"></div></div>
	</body>
</html>
```

```css
div {
	height: 100px;
	width: 100px;
	border-radius: 5px;
	border: 2px solid black;
}

#inner {
	height: 75px;
	width: 75px;
	background-color: #547980;
	position: fixed;
	margin-left: 200px;
}

#outer {
	height: 1500px;
	width: 150px;
	background-color: #45ADA8;
	position: absolute;
	margin-left: 100px;
}
```

## 21. The story so far
```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

## 22. Navigation bar, where are you?
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="header">
			<div id="navbar">
				<ul>
					<li>Home</li>
					<li>About Me</li>
					<li>Plans for World Domination</li>
					<li>Contact</li>
				</ul>
			</div>
			<h2>About Me</h2>
		</div>
		<div id="left">
		<img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-main_zps26d178c5.jpg"/>
		<p>I am the angriest puppy in the world. This has been scientifically proven in several clinical trials.</p>
		</div>
		<div id="right">
		<table>
			<th colspan="3">My Bros</th>
			<tr>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-1_zps5666b8e7.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-2_zps1539e6b2.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-3_zps4692eafa.png"/></td>
			</tr>
			<tr>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-4_zps63ff5aa8.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-5_zps0ee0d2c8.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-6_zpsc4450a60.jpg"/></td>
			</tr>
			<tr>
				<td><img id="bottom_left" src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-7_zps26e8a8d9.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-8_zps9a1469be.jpg"></td>
				<td><img id="bottom_right" src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-9_zps3bab7732.jpg"/></td>
			</tr>
		</table>
		</div>
		<div id="footer">
			<div id="button">
				<p>Send me an <span class="bold">e-mail</span>!</p>
			</div>
		</div>
	</body>
</html>
```

```css
body {
	background-color: #b7d1c4
}

h2 {
	font-family: Verdana;
	font-weight: bold;
	text-align: center;
	padding-top: 25px;
	padding-bottom: 25px;
	color: #acd1b2;
}

img {
	height: 170px;
	width: 170px;
	box-shadow: rgba(0,0,0,0.2) 10px 10px;

}

#navbar {
    position: fixed;
    margin-top: -10px;
	left:50%;
	margin-left:-254px;
}

#header {
	position: relative;
	top: -10px;
	background-color: #3c4543;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}

ul{
	list-style-type: none;
	position: fixed;
	margin: -10px;
}

li {
	/*Add your CSS here!*/
	
	border: 2px solid #000000;
	font-family: Futura, Tahoma, sans-serif;
	color: #ffffff;
	border-radius: 5px 5px;
	background-color: #cc0323
}

#left{
	/*Add your CSS here!*/
	
}

p {
	font-family: Tahoma;
	font-size: 1em;
}

#right{
	/*Add your CSS here!*/
	
}

table {
	border: #000000 1px solid;
	background-color: #acd1b2;
	float: right;
	margin-right: 10px;
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 15px;
}

td {
	height: 75px;
	width: 75px;
}

td img {
	height: 75px;
	width: 75px;
	box-shadow: none;
}

th {
	font-family: Verdana;
	font-size: 1em;
	font-weight: normal;
	color: #3c4543
}

#bottom_left{
	border-bottom-left-radius: 15px;
}

#bottom_right{
	border-bottom-right-radius: 15px;
}

#footer{
	/*Add your CSS here!*/
	
	position: relative;
	bottom: -20px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	height: 75px;
	background-color: #3c4543;
}

#button{
	border: 2px solid #000000;
	float:left;
	position: relative;
	left: 229px;
	bottom: -20px;
	border-radius: 5px;
	background-color: #cc0323;
	height: 30px;
	width: 150px;
	
}

#button p{
	position: relative;
	bottom: 10px;
	font-size: 0.8em;
	color: #acd1b2;
	text-align: center;
}

.bold{
	font-family: tahoma;
	font-weight: bold;
	font-size: 1.2em;
	font-variant: small-caps;
	color: #ffffff;
}
```

## 23. Displaying it properly
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="header">
			<div id="navbar">
				<ul>
					<li>Home</li>
					<li>About Me</li>
					<li>Plans for World Domination</li>
					<li>Contact</li>
				</ul>
			</div>
			<h2>About Me</h2>
		</div>
		<div id="left">
		<img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-main_zps26d178c5.jpg"/>
		<p>I am the angriest puppy in the world. This has been scientifically proven in several clinical trials.</p>
		</div>
		<div id="right">
		<table>
			<th colspan="3">My Bros</th>
			<tr>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-1_zps5666b8e7.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-2_zps1539e6b2.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-3_zps4692eafa.png"/></td>
			</tr>
			<tr>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-4_zps63ff5aa8.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-5_zps0ee0d2c8.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-6_zpsc4450a60.jpg"/></td>
			</tr>
			<tr>
				<td><img id="bottom_left" src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-7_zps26e8a8d9.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-8_zps9a1469be.jpg"></td>
				<td><img id="bottom_right" src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-9_zps3bab7732.jpg"/></td>
			</tr>
		</table>
		</div>
		<div id="footer">
			<div id="button">
				<p>Send me an <span class="bold">e-mail</span>!</p>
			</div>
		</div>
	</body>
</html>
```

```css
body {
	background-color: #b7d1c4
}

h2 {
	font-family: Verdana;
	font-weight: bold;
	text-align: center;
	padding-top: 25px;
	padding-bottom: 25px;
	color: #acd1b2;
}

img {
	height: 170px;
	width: 170px;
	box-shadow: rgba(0,0,0,0.2) 10px 10px;

}

#navbar {
    position: fixed;
    margin-top: -10px;
	left:50%;
	margin-left:-254px;
}

#header {
	position: relative;
	top: -10px;
	background-color: #3c4543;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}

ul{
	list-style-type: none;
	position: fixed;
	margin: -10px;
}

li {
    display: inline;
    padding: 5px;
	border: 2px solid #000000;
	font-family: Futura, Tahoma, sans-serif;
	color: #ffffff;
	border-radius: 5px 5px;
	background-color: #cc0323
}

#left{
	/*Add your CSS here!*/
	
}

p {
	font-family: Tahoma;
	font-size: 1em;
}

#right{
	/*Add your CSS here!*/
	
}

table {
	border: #000000 1px solid;
	background-color: #acd1b2;
	float: right;
	margin-right: 10px;
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 15px;
}

td {
	height: 75px;
	width: 75px;
}

td img {
	height: 75px;
	width: 75px;
	box-shadow: none;
}

th {
	font-family: Verdana;
	font-size: 1em;
	font-weight: normal;
	color: #3c4543
}

#bottom_left{
	border-bottom-left-radius: 15px;
}

#bottom_right{
	border-bottom-right-radius: 15px;
}

#footer{
	/*Add your CSS here!*/
	
	position: relative;
	bottom: -20px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	height: 75px;
	background-color: #3c4543;
}

#button{
	border: 2px solid #000000;
	float:left;
	position: relative;
	left: 229px;
	bottom: -20px;
	border-radius: 5px;
	background-color: #cc0323;
	height: 30px;
	width: 150px;
	
}

#button p{
	position: relative;
	bottom: 10px;
	font-size: 0.8em;
	color: #acd1b2;
	text-align: center;
}

.bold{
	font-family: tahoma;
	font-weight: bold;
	font-size: 1.2em;
	font-variant: small-caps;
	color: #ffffff;
}
```

## 24. Floating right along
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="header">
			<div id="navbar">
				<ul>
					<li>Home</li>
					<li>About Me</li>
					<li>Plans for World Domination</li>
					<li>Contact</li>
				</ul>
			</div>
			<h2>About Me</h2>
		</div>
		<div id="left">
		<img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-main_zps26d178c5.jpg"/>
		<p>I am the angriest puppy in the world. This has been scientifically proven in several clinical trials.</p>
		</div>
		<div id="right">
		<table>
			<th colspan="3">My Bros</th>
			<tr>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-1_zps5666b8e7.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-2_zps1539e6b2.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-3_zps4692eafa.png"/></td>
			</tr>
			<tr>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-4_zps63ff5aa8.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-5_zps0ee0d2c8.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-6_zpsc4450a60.jpg"/></td>
			</tr>
			<tr>
				<td><img id="bottom_left" src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-7_zps26e8a8d9.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-8_zps9a1469be.jpg"></td>
				<td><img id="bottom_right" src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-9_zps3bab7732.jpg"/></td>
			</tr>
		</table>
		</div>
		<div id="footer">
			<div id="button">
				<p>Send me an <span class="bold">e-mail</span>!</p>
			</div>
		</div>
	</body>
</html>
```

```css
body {
	background-color: #b7d1c4
}

h2 {
	font-family: Verdana;
	font-weight: bold;
	text-align: center;
	padding-top: 25px;
	padding-bottom: 25px;
	color: #acd1b2;
}

img {
	height: 170px;
	width: 170px;
	box-shadow: rgba(0,0,0,0.2) 10px 10px;

}

#navbar {
    position: fixed;
    margin-top: -10px;
	left:50%;
	margin-left:-254px;
}

#header {
	position: relative;
	top: -10px;
	background-color: #3c4543;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}

ul{
	list-style-type: none;
	position: fixed;
	margin: -10px;
}

li {
    display: inline;
    padding: 5px;
	border: 2px solid #000000;
	font-family: Futura, Tahoma, sans-serif;
	color: #ffffff;
	border-radius: 5px 5px;
	background-color: #cc0323
}

#left{
    float: left;
    width: 45%;
}

p {
	font-family: Tahoma;
	font-size: 1em;
}

#right{
    float: right;
    width: 45%;
}

table {
	border: #000000 1px solid;
	background-color: #acd1b2;
	float: right;
	margin-right: 10px;
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 15px;
}

td {
	height: 75px;
	width: 75px;
}

td img {
	height: 75px;
	width: 75px;
	box-shadow: none;
}

th {
	font-family: Verdana;
	font-size: 1em;
	font-weight: normal;
	color: #3c4543
}

#bottom_left{
	border-bottom-left-radius: 15px;
}

#bottom_right{
	border-bottom-right-radius: 15px;
}

#footer{
    clear:both;
	position: relative;
	bottom: -20px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	height: 75px;
	background-color: #3c4543;
}

#button{
	border: 2px solid #000000;
	float:left;
	position: relative;
	left: 229px;
	bottom: -20px;
	border-radius: 5px;
	background-color: #cc0323;
	height: 30px;
	width: 150px;
	
}

#button p{
	position: relative;
	bottom: 10px;
	font-size: 0.8em;
	color: #acd1b2;
	text-align: center;
}

.bold{
	font-family: tahoma;
	font-weight: bold;
	font-size: 1.2em;
	font-variant: small-caps;
	color: #ffffff;
}
```

## 25. You've done it!
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<div id="header">
			<div id="navbar">
				<ul>
					<li>Home</li>
					<li>About Me</li>
					<li>Plans for World Domination</li>
					<li>Contact</li>
				</ul>
			</div>
			<h2>About Me</h2>
		</div>
		<div id="left">
		<img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-main_zps26d178c5.jpg"/>
		<p>I am the angriest puppy in the world. This has been scientifically proven in several clinical trials.</p>
		</div>
		<div id="right">
		<table>
			<th colspan="3">My Bros</th>
			<tr>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-1_zps5666b8e7.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-2_zps1539e6b2.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-3_zps4692eafa.png"/></td>
			</tr>
			<tr>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-4_zps63ff5aa8.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-5_zps0ee0d2c8.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-6_zpsc4450a60.jpg"/></td>
			</tr>
			<tr>
				<td><img id="bottom_left" src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-7_zps26e8a8d9.jpg"/></td>
				<td><img src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-8_zps9a1469be.jpg"></td>
				<td><img id="bottom_right" src="https://s3.amazonaws.com/codecademy-blog/assets/puppy-9_zps3bab7732.jpg"/></td>
			</tr>
		</table>
		</div>
		<div id="footer">
			<div id="button">
				<p>Send me an <span class="bold">e-mail</span>!</p>
			</div>
		</div>
	</body>
</html>
```

```css
body {
	background-color: #b7d1c4
}

h2 {
	font-family: Verdana;
	font-weight: bold;
	text-align: center;
	padding-top: 25px;
	padding-bottom: 25px;
	color: #acd1b2;
}

img {
	height: 170px;
	width: 170px;
	box-shadow: rgba(0,0,0,0.2) 10px 10px;

}

#navbar {
    position: fixed;
    margin-top: -10px;
	left:50%;
	margin-left:-254px;
}

#header {
	position: relative;
	top: -10px;
	background-color: #3c4543;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
}

ul{
	list-style-type: none;
	position: fixed;
	margin: -10px;
}

li {
    display: inline;
    padding: 5px;
	border: 2px solid #000000;
	font-family: Futura, Tahoma, sans-serif;
	color: #ffffff;
	border-radius: 5px 5px;
	background-color: #cc0323
}

#left{
    float: left;
    width: 45%;
}

p {
	font-family: Tahoma;
	font-size: 1em;
}

#right{
    float: right;
    width: 45%;
}

table {
	border: #000000 1px solid;
	background-color: #acd1b2;
	float: right;
	margin-right: 10px;
	border-bottom-right-radius: 15px;
	border-bottom-left-radius: 15px;
}

td {
	height: 75px;
	width: 75px;
}

td img {
	height: 75px;
	width: 75px;
	box-shadow: none;
}

th {
	font-family: Verdana;
	font-size: 1em;
	font-weight: normal;
	color: #3c4543
}

#bottom_left{
	border-bottom-left-radius: 15px;
}

#bottom_right{
	border-bottom-right-radius: 15px;
}

#footer{
    clear:both;
	position: relative;
	bottom: -20px;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	height: 75px;
	background-color: #3c4543;
}

#button{
	border: 2px solid #000000;
	float:left;
	position: relative;
	left: 229px;
	bottom: -20px;
	border-radius: 5px;
	background-color: #cc0323;
	height: 30px;
	width: 150px;
	
}

#button p{
	position: relative;
	bottom: 10px;
	font-size: 0.8em;
	color: #acd1b2;
	text-align: center;
}

.bold{
	font-family: tahoma;
	font-weight: bold;
	font-size: 1.2em;
	font-variant: small-caps;
	color: #ffffff;
}
```

