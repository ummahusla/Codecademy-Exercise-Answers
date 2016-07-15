# 1. What you'll be building

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
		<div id="header">
			<p id="name">Your Name Here</p>
			<a href="mailto:you@yourdomain.com"><p id="email">you@yourdomain.com</p></a>
		</div>
		<div class="left"></div>
		<div class="right">
			<h4>Objective</h4>
			<p>To take a position as a software engineer.</p>
			<h4>Experience</h4>
			<p>Junior Developer, Software Company (2010 - Present)</p>
			<ul>
				<li>Designed and implemented end-user features for Flagship Product</li>
				<li>Wrote third-party JavaScript and Ruby libraries</li>
			</ul>
			<h4>Skills</h4>
			<p>Languages: C#, JavaScript, Python, Ruby</p>
			<p>Frameworks: .NET, Node.js, Django, Ruby on Rails</p>
			<h4>Education</h4>
			<p>BS, Economics, My University</p>
			<ul>
				<li>Award for best senior thesis</li>
				<li>GPA: 3.8</li>
			</ul>
		</div>
		<div id="footer">
			<p>123 Your Street, Anytown, State 12345-6789 | Tel: (555) 555-5555</p>
		</div>
	</body>
</html>
```

```css
div {
	border-radius: 5px;
}

#header {
	z-index: 1;
	position: fixed;
	width: 97.5%;
	margin-top: -20px;
	height: 60px;
	background-color: #668284;
	margin-bottom: 10px;
}

#name {
	float:left;
	margin-left: 5px;
	padding-top: 5px;
	font-size: 16px;
	font-family: Verdana, sans-serif;
	color: #ffffff;
}

#email{
	float:right;
	margin-right: 5px;
	padding-top: 5px;
	font-size: 16px;
	font-family: Verdana, sans-serif;
	color: #ffffff;
}

h4 {
	margin-left: 5px;
	margin-bottom: 15px;
	font-family: Verdana, sans-serif;
}

.right p {
	margin-left: 5px;
	margin-right: 5px;
	margin-top: -10px;
	font-family: Garamond, serif;
	color: #000000;
}

li {
	list-style-type: square;
}

a:hover {
	font-weight: bold;
}

.left {
	position: relative;
	float: left;
	margin-top: 50px;
	width: 10%;
	height: 400px;
	background-color: #B9D7D9;
	margin-bottom: 10px;
}

.right {
	position: relative;
	float: right;
	margin-top: 50px;
	width: 88%;
	height: 400px;
	background-color: #F4EBC3;
	margin-bottom: 10px;
}

#footer {
	position: relative;
	height: 50px;
	background-color: #668284;
	clear: both;
	font-family: Verdana, sans-serif;
	font-size: 14px;
	text-align: center;
	color: #ffffff;
}

#footer p {
	position: relative;
	padding-top: 15px;
}
```

# 2. Laying out your divs

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
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
    border: 1px solid black;
    border-radius: 5px;
}
```

# 3. Sizing and color

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
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
    border: 1px solid black;
    border-radius: 5px;
    height: 10px;
    width: 10px;
    background-color: white;
}
```

# 4. Fixing your header

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
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
    border: 1px solid black;
    border-radius: 5px;
    height: 10px;
    width: 10px;
    background-color: white;
}

#header {
    position: fixed;
    z-index: 1;
}
```

# 5. Floating left and right

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
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
    border: 1px solid black;
    border-radius: 5px;
    height: 10px;
    width: 10px;
    background-color: white;
}

#header {
    position: fixed;
    z-index: 1;
}

.left {
    float: left;
}

.right {
    float: right;
}
```

# 6. Clearing the footer

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
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
    border: 1px solid black;
    border-radius: 5px;
    height: 10px;
    width: 10px;
    background-color: white;
}

#header {
    position: fixed;
    z-index: 1;
}

.left {
    float: left;
}

.right {
    float: right;
}

#footer {
    clear: both;
}
```

# 7. Headings, paragraphs, and lists

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
	<div id="header">
	<h3>header</h3>
	</div>
	<div class="left">
	<p>paragraph</p>
	</div>
	<div class="right">
	<ul>
	<li>list item</li>
	<li>list item</li>
	</ul>
	</div>
	<div id="footer"></div>
	</body>
</html>
```

```css
div {
    border: 1px solid black;
    border-radius: 5px;
    height: 10px;
    width: 10px;
    background-color: white;
}

#header {
    position: fixed;
    z-index: 1;
}

.left {
    float: left;
}

.right {
    float: right;
}

#footer {
    clear: both;
}
```

# 8. Victory!

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
	<div id="header">
	<h3>header</h3>
	</div>
	<div class="left">
	<p>paragraph</p>
	</div>
	<div class="right">
	<ul>
	<li>list item</li>
	<li>list item</li>
	</ul>
	</div>
	<div id="footer"></div>
	</body>
</html>
```

```css
div {
    border: 1px solid black;
    border-radius: 5px;
    height: 10px;
    width: 10px;
    background-color: white;
}

#header {
    position: fixed;
    z-index: 1;
}

.left {
    float: left;
}

.right {
    float: right;
}
```

