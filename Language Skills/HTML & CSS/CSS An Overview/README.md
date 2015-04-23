## 1. Seeing is believing
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
		<img src="http://www.thedailybalance.com/wp-content/uploads/angry-puppy.jpg"/>
		<p>I am the angriest puppy in the world. This has been scientifically proven in several clinical trials.</p>
		</div>
		<div id="right">
		<table>
			<th colspan="3">My Bros</th>
			<tr>
				<td><img src="http://thedoggiedish.com/uploads/pictures/1344463888_Puppies%20Training.jpg"/></td>
				<td><img src="http://www.humanesociety.org/assets/images/270x224/animals/dogs/dog_puppy_lookinup_270x224.jpg"/></td>
				<td><img src="http://funnycrave.frsucrave.netdna-cdn.com/wp-content/uploads/2011/03/puppy.png"/></td>
			</tr>
			<tr>
				<td><img src="http://2.bp.blogspot.com/_jZHHRfnq9F8/Sw5Kb1D2EhI/AAAAAAAAKkE/fuaDErPNDvU/s1600/Puppy+Training.jpg"/></td>
				<td><img src="http://4.bp.blogspot.com/-hvKDf0aMe1g/ToKckj6RZrI/AAAAAAAACf0/oZQNbyPtmns/s1600/cute-puppy-pictures.jpg"/></td>
				<td><img src="http://puppiespics.net/wp-content/uploads/2012/04/doberman-puppy5.jpg"/></td>
			</tr>
			<tr>
				<td><img id="bottom_left" src="http://dailypicksandflicks.com/wp-content/uploads/2011/03/Boo.jpg"/></td>
				<td><img src="http://24.media.tumblr.com/tumblr_m825unsFjm1qldzl2o2_500.jpg"></td>
				<td><img id="bottom_right" src="http://img.photobucket.com/albums/v649/deadxmansxhand/ewok-closeup.jpg"/></td>
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
	top:10px;
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
	border: 2px solid #000000;
	font-family: Futura, Tahoma, sans-serif;
	color: #ffffff;
	padding: 5px;
	border-radius: 5px 5px;
	background-color: #cc0323
}

#left{
	width: 45%;
	float: left;
}

p {
	font-family: Tahoma;
	font-size: 1em;
}

#right{
	width: 45%;
	float: right;
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
	clear: both;
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


## 2. What CSS is
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Fancy Fonts</title>
	</head>
	<body>
		<p>I'm a paragraph written in red font, but one of my words is <span>blue</span>!</p>
	</body>
</html>
```

```css
p {
	color: red;
}

span {
	color: blue
}
```


## 3. Why separate form from function?
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Even Fancier Fonts</title>
	</head>
	<body>
		<p>Much of this is regular text, but some of it is <span>fancy</span>!
		We can use our <span>newly fancified font</span> to add some
		<span>flair</span> to our website. It'd be a <span>royal pain</span> 
		to make each of these span tags <span>fancy</span> individually,
		but it's a cinch with <span>CSS</span>!</p>
	</body>
</html>
```

```css
span {
	font-family: cursive;
}
```

## 4. If it's in, it's out!
```html
<!DOCTYPE html>
<html>
	<head>
		<style>
			p {
				color: purple;
			}
		</style>
		<title>Result</title>
	</head>
	<body>
		<p>Check it out! I'm purple!</p>
	</body>
</html>
```


## 5. Link it up!
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
	</head>
    <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
	<body>
		<p>I want to be SIZE 44 font!</p>
	</body>
</html>
```

```css
p {
	font-size: 44px;
}
```

## 6. PSA: Self-closing tags
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
	</head>
    <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
	<body>
		<p>I want to be SIZE 44 font!</p>
	</body>
</html>
```

## 7. Syntax for the wintax
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<p>You're about to style this paragraph with CSS all on your own!</p>
	</body>
</html>
```

```css
p {
    color: green;
}
```

## 8. One selector, many properties
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<p>You're about to style this paragraph with CSS all on your own!</p>
	</body>
</html>
```

```css
p {
    font-family: Garamond;
    color: green;
    font-size: 24px;
}
```

## 9. Many selectors, many properties
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>I Know Kung Fu (er, CSS)</title>
	</head>
	<body>
		<div>
			<h3>What's CSS for?</h3>
			<p>CSS is for styling HTML pages!</p>
			<h3>Why use it?</h3>
			<p>It makes webpages look <span>really rad</span>.</p>
			<h3>What do I think of it?</h3>
			<p>It's awesome!</p>
		</div>
	</body>
</html>
```

```css
h3 {
    color: red;
}

p {
    font-family: Courier;
}

span {
    background-color: yellow;
}
```

## 10. The importance of semicolons
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h3>Recent Projects</h3>
		<p>I've started learning HTML and CSS. I hope to create my own website soon!</p>
	</body>
</html>
```

```css
h3 {
	font-family: Verdana;
	color: blue;
}

p {
	font-family: Garamond;
	font-size: 16px;
}
```

## 11. Color commentary
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<p>I'm currently red, but I'm about to become black!</p>
	</body>
</html>
```

```css

/*Comment in CSS
p {
	color:red;
}
*/

```

## 12. Check yourself before you wreck yourself
```html
<!DOCTYPE html>
<html>
	<head>
    <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h1>Change me to Verdana.</h1>
		<h3>Change me to Courier.</h3>
		<p>Make me purple!</p>
	</body>
</html>
```

```css
h1 {
    font-family: Verdana;
}

h3 {
    font-family: Courier;
}

p {
    color: purple;
}
/*Comment*/
```



## 13. Hexawhatnow?
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h1>I'm maroon!</h1>
		<h2>I'm coral!</h2>
		<h3>I'm goldenrod!</h3>
		<h4>I'm sea green!</h4>
		<h5>I'm royal blue!</h5>
		<h6>I'm plum!</h6>
	</body>
</html>
```

```css
h1 {
	color: #8B1C62;
}

h2 {
	color: #FF7256;
}

h3 {
	color: #FFC125;
}

h4 {
	color: #54FF9F;
}

h5 {
	color: #530EE8;
}

h6 {
	color: #8B668B;
}
```

## 14. Roses are red...
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h3>Roses are red.</h3>
		<h2>Violets are blue!</h2>
	</body>
</html>
```

```css
h3 {
	color: #cc6666;
}

h2 {
	color: #8a2be2;
}
```

## 15. Pixels and ems
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
	</head>
	<body>
		<p style="font-size: 1em">One em!</p>
		<p style="font-size: 0.5em">Half an em!</p>
		<p style="font-size: 2em">TWO EM!</p>
	</body>
</html>
```

```css

```

## 16. A font of knowledge
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h1>I'm going to be a serif font when I grow up!</h1>
		<h2>I'm going to be a sans-serif font.</h2>
		<h3>I'm going to be in cursive!</h3>
	</body>
</html>
```

```css
h1 {
    font-family: serif;
}
h2 {
    font-family: sans-serif;
}
h3 {
    font-family: cursive
}
```

## 17. Backup values
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<h1>I'm going to be a serif font when I grow up!</h1>
		<h2>I'm going to be a sans-serif font.</h2>
		<h3>I'm going to be in cursive!</h3>
	</body>
</html>
```

```css
h1 {
    font-family:  Times, serif;
}
h2 {
    font-family: Verdana, sans-serif;
}
h3 {
    font-family: Vivaldi, cursive;
}
```

## 18. Review
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Free Play!</title>
	</head>
	<body>
		<!--Go bananas!-->
		
	</body>
</html>
```

```css
/*Write your CSS below!*/
/*You can leave it empty as well!*/
```

## 19. Background color, height, and width
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
    background-color: #cc0000;
    height: 100px;
    width: 100px;
}
```

## 20. Bordering on insanity
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title></title>
	</head>
	<body>
		<table>
			<thead>
				<th colspan="3">Nine Blocks!</th>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	</body>
</html>
```

```css
td {
    height: 50px;
    border: 1px dashed blue;
}

table { 
    border: 1px solid black
}
```

## 21. Links and text decoration
```html
<!DOCTYPE html>
<html>
	<head>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
		<title>Result</title>
	</head>
	<body>
		<p>The below link goes to Google!</p>
		<a href="http://www.google.com/">Google</a>
	</body>
</html>
```

```css
a { 
    color: #cc0000;
    text-decoration: none;
}
```

## 21. HTML + CSS = BFFs
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
        
    <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
	</head>
	<body></body>
</html>
```

```css

```

## 23. Many selectors, many properties
```html
<!DOCTYPE html>
<html>
<head>
<title>Result</title>
    <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
	</head>
	<body>
     <h1>Anything I WANT</h1>  
     <p>ofefgtnhjmydxsxdfgbhnjmkjhgfdefgyhjm
     hfdzxr thbg dfrtghnj bvcdftgyhnjbv</p>
	</body>
</html>
```

```css
h1 { 
    color: #576D94;
    font-family: Verdana;
}

p {
    font-size: 18px;
    color:#4A4943;
}
```

## 24. Fall back!
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
        
    <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
	</head>
	<body>
     <h1>Anything I WANT</h1>  
     
	</body>
</html>
```

```css
h1 { 
    color: #576D94;
    font-family: Verdana, sans-serif;
}

p {
    font-family:Garamond, serif;
}
```

## 25. Size and borders
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
        
    <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
	</head>
	<body>
     <h1>Anything I WANT</h1>  
     <img src="http://cdn-production.codecademy.com/assets/logo/logo--teal-d10b21a45b84379f184aa74fbd19ab8c.svg">
	</body>
</html>
```

```css
h1 { 
    color: #576D94;
    font-family: Verdana, sans-serif;
}

p {
    font-family:Garamond, serif;
}

img {
    height:100px;
    width:300px;
    border: 1px solid #4682b4;
}
```

## 26. Links and text decoration
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
        
    <link type="text/css" rel="stylesheet" href="stylesheet.css"/>
	</head>
	<body>
     <h1>Anything I WANT</h1>  
     <img src="http://cdn-production.codecademy.com/assets/logo/logo--teal-d10b21a45b84379f184aa74fbd19ab8c.svg">
	<a href="hhtp:/www.facebook.com">OP</a>
        
	</body>
</html>
```

```css
h1 { 
    color: #576D94;
    font-family: Verdana, sans-serif;
}

p {
    font-family:Garamond, serif;
}

img {
    height:100px;
    width:300px;
    border: 1px solid #4682b4;
}

a {
    text-decoration: none;
    color: #cc0000;
}
```
