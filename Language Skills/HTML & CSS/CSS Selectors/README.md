## 1. All HTML elements are selectors

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body></body>
</html>
```

```css
body{
    background-color: #C6E2FF;
}
```

## 2. Multiple Selectors

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h3>I'm plain old font!</h3>
		<div>
			<h3>Me, too!</h3>
			<div>
				<h3>Me three!</h3>
				<div>
					<h3>Forget you guys. I'm about to be red!</h3>
				</div>
			</div>
		</div>
	</body>
</html>
```

```css
div div div h3 {
    color:red;
}
```

## 3. One selector to rule them all

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h3>Boxes within boxes!</h3>
		<div>
			<p>Paragraph One</p>
		</div>
		<div>
			<p>Paragraph Two</p>
		</div>
		<div>
			<p>Paragraph Three</p>
		</div>
	</body>
</html>
```

```css
*{
    border: 1px dashed #3a5FCD;
}
```

## 4. Rock Your Selectors

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Strut Your Stuff!</title>
	</head>
	<body>
		<p>I'm about to become a lovely shade of teal.</p>
		<p>Me, too!</p>
		<p>I think I'll do the same.</p>
		<div>
			<p>We're going to become a truly striking scarlet!</p>
			<p>I was thinking more vermillion.</p>
			<p>No, crimson!</p>
		</div>
	</body>
</html>
```

```css
p{
    color: #00E5EE;
}

div p{
    color: #CC0000;
}

*{
    border: 1px solid #3A5FCD;
}
```

## 5. Branching

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>The Great Tree of HTML</title>
	</head>
	<body>
		<div id="p1">P</div>
		<div id="p2">P</div>
		<div id="p3">P</div>
		<div class="space"></div>
		<div id="title">Title</div>
		<div id="div">Div</div>
		<div class="space"></div>
		<div id="head">Head</div>
		<div id="body">Body</div>
		<div class="space"></div>
		<div id="html">HTML</div>
	</body>
</html>
```

```css
div {
	border-radius: 5px;
	border: 2px solid #6495ED;
	background-color: #BCD2EE;
	height: 18px;
	text-align: center;
	font-family: Garamond, serif;
}

#p1 {
	display: inline;
	position: relative;
	margin-left: 138px;
}

#p2 {
	display: inline;
	position: relative;
	margin-left: 10px;
}

#p3 {
	display: inline;
	position: relative;
	margin-left: 10px;
}

#div {
	display: inline;
	position: relative;
	margin-left: 70px;
	margin-top: 10px;
}

#title {
	display: inline;
	position: relative;
	margin-left: 50px;
}

#body {
	display: inline;
	position: relative;
	margin-left: 25px;
}

#head {
	display: inline;
	position: relative;
	margin-left: 65px;
}

#html {
	width: 50px;
	position: relative;
	margin-left: 93px;
}

.space {
	opacity: 0;
}
```

## 6. Parents, children, and siblings

```html
<!DOCTYPE html>
<html> <!--The trunk of the tree!-->
	<head> <!--Child of html, parent of title,
		   sibling of body-->
		<title></title> <!--Immediate child of head,
						child of head AND html-->
	</head>
	<body> <!--Child of html, parent of p,
		   sibling of head-->
		<p></p> <!--Immediate child of body,
				child of body AND html-->
	</body>
</html>
```

## 7. Swinging from branch to branch

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Linkapalooza</title>
	</head>
	<body>
		<a href="http://www.codecademy.com/">Codecademy!</a>
		<ul>
			<li>
				<a href="http://www.codecademy.com/learn">Learn</a>
			</li>
			<li>
				<a href="http://www.codecademy.com/create/creator">Teach</a>
			</li>
			<li>
				<a href="http://www.codecademy.com/edit_account/basic_info">Settings</a>
			</li>
		</ul>
	</body>
</html>
```

```css
li a{
    text-decoration: none;
    font-family: cursive;
}
```

## 8. Can you swing it?

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Ultimate Text Challenge</title>
	</head>
	<body>
		<p>Introduction: Cascading with CSS</p>
		<div>
			<p>Synopsis: When you set a property of a selector like 'p' to a certain value, that value applies to <em>all</em> p tags.
			If, however, you change that same property to a different value for a more specific instance of p,
			that change will <em>override</em> the 'general rule'.
			</p>
			<ul>
				<li><p>If you say p { font-family: Garamond}, all 'p's will have the font Garamond.</p></li>
				<li><p>BUT if you say li p {font-family: Verdana}, 'p's outside of 'li's will be
					   in Garamond, and 'p's INSIDE 'li's will be in Verdana.
				</p></li>
				<li><p>The more specific your selectors are, the higher importance CSS gives to the styling you apply!</p></li>
			</ul>
		</div>
		<p>Summary: Greater specificity makes CSS prioritize that particular styling.</p>
	</body>
</html>
```

```css
p {
    font-family: Garamond;
}

body > p {
    font-weight: bold;
}

div > p {
    color: #7AC5CD;
}
li > p{
    color: #000000;
    text-decoration: underline;
}
```

## 9. See it to believe it

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Ultimate Text Challenge</title>
	</head>
	<body>
		<p id="intro">Cascading with CSS</p>
		<div>
			<p>When you set a property of a selector like 'p' to a certain value, that value applies to <em>all</em> p tags.
			If, however, you change that same property to a different value for a more specific instance of p,
			that change will <em>override</em> the 'general rule'.
			</p>
			<ul>
				<li><p>If you say p { font-family: Garamond}, all 'p's will have the font Garamond.</p></li>
				<li><p class="list_item">BUT if you say li p {font-family: Verdana}, 'p's outside of 'li's will be
					   in Garamond, and 'p's INSIDE 'li's will be in Verdana.
				</p></li>
				<li><p class="list_item">The more specific your selectors are, the higher importance CSS gives to the styling you apply!</p></li>
			</ul>
		</div>
		<p id="summary">Greater specificity makes CSS prioritize that particular styling.</p>
	</body>
</html>
```

```css
p {
	font-family: Garamond, serif;
}

#intro {
	font-weight: bold;
	color: #000000;
}

div p {
	color: #7AC5CD;
}

li p {
	font-family: Verdana, sans-serif;
	color: #000000;
}

.list_item {
	font-family: Vivaldi, cursive;
}

#summary {
	font-size: 20px;
	color: #000000;
}
```

## 10. Beyond HTML elements

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h3 class="red">I'm an h3 header in the red class!</h3>
		<h3>I'm just a regular old h3 header.</h3>
		<p class="red">I'm a paragraph in the red class!</p>
		<p>I'm just a regular old paragraph.</p>
		<p id="rogue">I'm a rogue paragraph! I do what I want!</p>
	</body>
</html>
```

```css
.red {
	color: red;
}

#rogue {
	color: #FF00FF;
	font-weight: bold;
	font-family: cursive;
}
```

## 11. Keeping it classy

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<p class="fancy">fancy</p>
		
	</body>
</html>
```

```css
.fancy{
    font-family: cursive;
    color: #0000CD;
}
```

## 12. ID, please!

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
	<p id="serious">serious</p>
	</body>
</html>
```

```css
#serious {
    font-family: Courier;
    color: #CC0000;
}
```

## 13. Putting it all together

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h2 id="intro">Introduction</h2>
		<h3 class="standout">Classes and IDs in CSS</h3>
		<p class="standout">Classes and IDs are super easy in CSS. You're using them right now!</p>
		<h3>Regular HTML Selectors</h3>
		<p>If you don't bother with a class or ID, an HTML element just gets
		   the regular CSS styling for that element—or the default styling if you
		   don't specify any particular styling on the stylesheet.
		</p>
	</body>
</html>
```

```css
#intro {
    color: #B83C3A;
}

.standout {
    color: #F7AC5F;
    font-family: Verdana;
}
```

## 14. Even finer control

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
	<ul>
		<li><a href="http://www.codecademy.com/">Codecademy Home</a></li>
		<li><a href="http://www.codecademy.com/learn">Learn</a></li>
		<li><a href="http://www.codecademy.com/create/creator">Teach</a></li>
		<li><a href="http://www.codecademy.com/edit_account/basic_info">Settings</a></li>
	</ul>
	</body>
</html>
```

```css
a:hover {
	color: #cc0000;
	font-weight: bold;
	text-decoration: none;
}
```

## 15. Links

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
		<div>
			<a href="https://www.codecademy.com">codeacademy</a>
			<a href="https://www.codecademy.com">codeacademy</a>
			<a href="https://www.codecademy.com">codeacademy</a>
		</div>
	</body>
</html>
```

```css
a:link{
    text-decoration: none;
    color: #008B45;
}

a:hover{
    color: #00FF00;
}

a:visited{
    color: #EE9A00;
}
```

## 16. First child

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
		<div>
			<p>I'm the first child!</p>
			<p>We're not.</p>
			<p>We're not.</p>
			<p>We're not.</p>
			<p>We're not.</p>
			<p>We're not.</p>
			<p>We're not.</p>			
		</div>
	</body>
</html>
```

```css
p:first-child{
    font-family: cursive;
}
```

## 17. Nth child

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
		<div>
			<p>I'm the first child!</p>
			<p>We're not.</p>
			<p>We're not.</p>
			<p>We're not.</p>
			<p>We're not.</p>
			<p>We're not.</p>
			<p>We're not.</p>
		</div>
	</body>
</html>
```

```css
p:first-child{
    font-family: cursive;
}

p:nth-child(2){
    font-family: Tahoma;
}

p:nth-child(3){
    color: #CC0000;
}

p:nth-child(4){
    background-color: #00FF00;
}

p:nth-child(5){
    font-size: 22px;
}
```

## 18. Show it if you know it!

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
	<a href="https://www.codecademy.com">codeacademy</a>
	<a href="https://www.codecademy.com">codeacademy</a>
	<a href="https://www.codecademy.com">codeacademy</a>
	</body>
</html>
```

```css
a:hover{
    text-decoration: none;
}

a:first-child{
    color: #CDBE70;
}

a:nth-child(3){
    color: #FFC125;
}
```

## 19. Final section breather

```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

## 20. Multiple selectors

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
	<div>
		<ul>
			<li><p>Grab me!</p></li>
			<li><p>Me, too!</p></li>
		</ul>
	</div>
		<p>Don't grab me!</p>
	</body>
</html>
```

```css
li p{
    font-size: 30px;
}
```

## 21. Class selectors

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
	<h3 class="fancy">fancy</h3>
	<p class="fancy">fancy</p>
		
	</body>
</html>
```

```css
.fancy{
    font-family: cursive;
    color: violet;
}
```

## 22. ID selectors

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
	<h3 class="fancy">fancy</h3>
	<p class="fancy">fancy</p>
	<p id="serious">serious</p>
	</body>
</html>
```

```css
.fancy{
    font-family: cursive;
    color: violet;
}
#serious{
    font-family: Courier;
    color: #8C8C8C;
}
```

## 23. Pseudo selectors

```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
	<h3 class="fancy">fancy</h3>
	<p class="fancy">fancy</p>
	<p id="serious">serious</p>
	<p>nth-child</p>
	</body>
</html>
```

```css
.fancy{
    font-family: cursive;
    color: violet;
}
#serious{
    font-family: Courier;
    color: #8C8C8C;
}
p:nth-child(4){
    font-size: 26px;
}
```
