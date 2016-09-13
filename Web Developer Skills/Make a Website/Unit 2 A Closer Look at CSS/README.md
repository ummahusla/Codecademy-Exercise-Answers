##1. Why Use CSS?
##2. Link to a Stylesheet
    <!doctype html>
    <html>
    <head>
    	<title>Sprout</title>
    	<link rel="stylesheet" type="text/css" href="main.css"/>
    </head>
    <body>
    	<h1>Mystwood Publishers Ltd.</h1>
    	<div class="hero">
    		<h2>Sprout.</h2>
    		<p>A book by George Bedford Daniel.</p>
    		<a href="#">Read now.</a>
    	</div>
    	<p id = "footer">&copy; Mystwood Publishers Limited</p>
    </body>
    </html>
##3. Anatomy of a CSS Rule
    
##4. font-family
main.css

    body {
    	height: 100%;
    	margin: 0;
    	text-align: center;
    	width: 100%;
    }
    
    h1 {
    	font-size: 32px;
      font-family: Palatino, 'Palatino Linotype', serif;
    }
    
    h2 {
    	font-size: 32px;
    }
    
    
    .hero {
    	padding: 250px 0;
    	margin: 30px;
    }
    
    
    p {
    
    }
    
    .hero a {
    	color: #00FFAA;
    	font-size: 24px;
    	text-decoration: none;
    }
##5. color
main.css

    body {
    	height: 100%;
    	margin: 0;
    	text-align: center;
    	width: 100%;
    }
    
    h1 {
    	font-size: 32px;
      font-family: Palatino, 'Palatino Linotype', serif;
      color: rgb(46,105,163);
    }
    
    h2 {
    	font-size: 32px;
    }
    
    
    .hero {
    	padding: 250px 0;
    	margin: 30px;
    }
    
    
    p {
    
    }
    
    .hero a {
    	color: #00FFAA;
    	font-size: 24px;
    	text-decoration: none;
    }
##6. CSS Class Selectors
main.css

    body {
    	height: 100%;
    	margin: 0;
    	text-align: center;
    	width: 100%;
    }
    
    h1 {
    	font-size: 32px;
      font-family: Palatino, 'Palatino Linotype', serif;
      color: rgb(46,105,163);
    }
    
    h2 {
    	font-size: 32px;
    }
    
    
    .hero {
    	padding: 250px 0;
    	margin: 30px;
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    
    
    p {
    
    }
    
    .hero a {
    	color: #00FFAA;
    	font-size: 24px;
    	text-decoration: none;
    }
##7. font-size
main.css

    body {
    	height: 100%;
    	margin: 0;
    	text-align: center;
    	width: 100%;
    }
    
    h1 {
    	font-size: 32px;
      font-family: Palatino, 'Palatino Linotype', serif;
      color: rgb(46,105,163);
    }
    
    h2 {
    	font-size: 56px;
    }
    
    
    .hero {
    	padding: 250px 0;
    	margin: 30px;
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    
    
    p {
      font-size: 2rem;
    }
    
    .hero a {
    	color: #00FFAA;
    	font-size: 1.25em;
    	text-decoration: none;
    }
##8. A Background Image
main.css

    body {
    	height: 100%;
    	margin: 0;
    	text-align: center;
    	width: 100%;
    }
    
    h1 {
    	font-size: 32px;
      font-family: Palatino, 'Palatino Linotype', serif;
      color: rgb(46,105,163);
    }
    
    h2 {
    	font-size: 56px;
    }
    
    
    .hero {
    	padding: 250px 0;
    	margin: 30px;
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
      background-image:
        url("https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg");
     background-size: cover;
      color: #ffffff;
    }
    
    
    p {
      font-size: 2rem;
    }
    
    .hero a {
    	color: #00FFAA;
    	font-size: 1.25em;
    	text-decoration: none;
    }
##9. CSS id Selectors
index.html

    <!DOCTYPE html>
    <html>
    <head>
    	<title>Sprout</title>
    	<link rel="stylesheet" type="text/css" href="main.css"/>
    </head>
    <body>
    	<h1>Mystwood Publishers Ltd.</h1>
    	<div class="hero">
    		<h2>Sprout.</h2>
    		<p>A book by J. Daniel Bedford</p>
    		<a href="#">Read now.</a>
    	</div>
    	<p id="footer">&copy; Mystwood Publishers Limited</p>
    </body>
    </html>
    
main.css

    body {
    	height: 100%;
    	margin: 0;
    	text-align: center;
    	width: 100%;
    }
    
    h1 {
    	font-size: 32px;
      font-family: Palatino, 'Palatino Linotype', serif;
      color: rgb(46,105,163);
    }
    
    h2 {
    	font-size: 56px;
    }
    
    
    .hero {
    	padding: 250px 0;
    	margin: 30px;
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
      background-image:
        url("https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-2/bg.jpg");
     background-size: cover;
      color: #ffffff;
    }
    
    
    p {
      font-size: 2rem;
    }
    
    #footer {
      font-size: 0.75rem;
    }
    
    .hero a {
    	color: #00FFAA;
    	font-size: 1.25em;
    	text-decoration: none;
    }
##10. css-review
