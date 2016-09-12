##1. CSS Frameworks
##2. Connecting to Bootstrap
index.html

    <!DOCTYPE html>
    <html>
    <head>
      <title>Skillfair</title>
      <meta charset="utf-8" />
    
    <link rel="stylesheet"  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
      <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    
    <body>
      <header class="container">
        <div class="row">
          <h1 class="col-sm-8">Skillfair</h1>
          <nav class="col-sm-4">
            <p>newest</p>
            <p>catalogue</p>
            <p>contact</p>
          </nav>
        </div>
      </header>
      <section class="jumbotron">
        <div class="container">
          <div class="row text-center">
            <h2>Homemade Goods</h2>
            <h3>This Year's Best</h3>
            <a class="btn btn-primary" href="#">See all</a>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="row">
          <div class="col-sm-6">
            <p>kitchen</p>
            <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg">
          </div>
          <div class="col-sm-6">
            <p>woodwork</p>
            <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/woodwork.jpg">
          </div>
          <div class="col-sm-6">
            <p>gifts</p>
            <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/gifts.jpg">
          </div>
          <div class="col-sm-6">
            <p>antiques</p>
            <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/antique.jpg">
          </div>
        </div>
        <div class="row text-center">
          <a class="btn btn-secondary" href="#">View Complete Catalogue</a>
        </div>
      </section>
      <footer class="container">
        <div class="row">
          <p class="col-sm-4">&copy; 2016 Skillfair</p>
          <ul class="col-sm-8">
            <li class="col-sm-1">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/twitter.svg">
            </li>
            <li class="col-sm-1">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/facebook.svg">
            </li>
            <li class="col-sm-1">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/instagram.svg">
            </li>
            <li class="col-sm-1">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/medium.svg">
            </li>
          </ul>
        </div>
      </footer>
    </body>
    
    </html>
##3. On the Grid
index.html

    <!DOCTYPE html>
    <html>
    <head>
      <title>Skillfair</title>
      <meta charset="utf-8"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
    	<header class="container">
      	<div class ="row">
        	<h1 class="col-sm-4">Skillfair</h1>
        	<nav class="col-sm-8 text-right">
        		<p>newest</p>
        		<p>catalogue</p>
        		<p>contact</p>
        	</nav>
      	</div>
      </header>
    </body>
    </html>
##4. Header/Navigation
index.html
    
    <!DOCTYPE html>
    <html>
    <head>
      <title>Skillfair</title>
      <meta charset="utf-8"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
    	<header class="container">
      <div class ="row">
        <h1 class="col-sm-4">Skillfair</h1>
        <nav class="col-sm-8 text-right">
        <p>newest</p>
        <p>catalogue</p>
        <p>contact</p>
        </nav>
      </div>
      </header>
    <section class="jumbotron">
      <div class="container">
        <div class="row text-center">
          <h2>Homemade Goods</h2>
          <h3>This Year's Best</h3>
          <a class="btn btn-primary" href="#" role="button">See all</a>
        </div>
      </div>
      </section>
    
    </body>
    </html>
##5. The Jumbotron
index.html

    <!DOCTYPE html>
    <html>
    <head>
      <title>Skillfair</title>
      <meta charset="utf-8"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
    	<header class="container">
      <div class ="row">
        <h1 class="col-sm-4">Skillfair</h1>
        <nav class="col-sm-8 text-right">
        <p>newest</p>
        <p>catalogue</p>
        <p>contact</p>
        </nav>
      </div>
      </header>
    <section class="jumbotron">
      <div class="container">
        <div class="row text-center">
          <h2>
            Homemade Goods
          </h2>
          <h3>
            This Year's Best
          </h3>
          <a class="btn btn-primary" href="#" role="button">See all</a>
        </div>
      </div>
      </section>
    </body>
    </html>
##6. Supporting Content
index.html

    <!DOCTYPE html>
    <html>
    <head>
      <title>Skillfair</title>
      <meta charset="utf-8"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
    	<header class="container">
      <div class ="row">
        <h1 class="col-sm-4">Skillfair</h1>
        <nav class="col-sm-8 text-right">
        <p>newest</p>
        <p>catalogue</p>
        <p>contact</p>
        </nav>
      </div>
      </header>
    <section class="jumbotron">
      <div class="container">
        <div class="row text-center">
          <h2>
            Homemade Goods
          </h2>
          <h3>
            This Year's Best
          </h3>
          <a class="btn btn-primary" href="#" role="button">See all</a>
        </div>
      </div>
      </section>
    <section class="container">
      <div class="row">
        <figure class="col-sm-6">
        <p>
          kitchen
          </p>
          <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
        </figure>
        <figure class="col-sm-6">
        <p>
          kitchen
          </p>
          <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
        </figure>
      </div>
      <div class="row">
        <figure class="col-sm-6">
        <p>
          kitchen
          </p>
          <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
        </figure>
        <figure class="col-sm-6">
        <p>
          kitchen
          </p>
          <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
        </figure>
      </div>
      </section>
    </body>
    </html>
##7. Footers
index.html

    <!DOCTYPE html>
    <html>
    <head>
      <title>Skillfair</title>
      <meta charset="utf-8"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,700' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
    	<header class="container">
      <div class ="row">
        <h1 class="col-sm-4">Skillfair</h1>
        <nav class="col-sm-8 text-right">
        <p>newest</p>
        <p>catalogue</p>
        <p>contact</p>
        </nav>
      </div>
      </header>
    <section class="jumbotron">
      <div class="container">
        <div class="row text-center">
          <h2>
            Homemade Goods
          </h2>
          <h3>
            This Year's Best
          </h3>
          <a class="btn btn-primary" href="#" role="button">See all</a>
        </div>
      </div>
      </section>
    <section class="container">
      <div class="row">
        <figure class="col-sm-6">
        <p>
          kitchen
          </p>
          <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
        </figure>
        <figure class="col-sm-6">
        <p>
          kitchen
          </p>
          <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
        </figure>
      </div>
      <div class="row">
        <figure class="col-sm-6">
        <p>
          kitchen
          </p>
          <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
        </figure>
        <figure class="col-sm-6">
        <p>
          kitchen
          </p>
          <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/kitchen.jpg"/>
        </figure>
      </div>
      </section>
      <footer class="container">
        <div class="row">
          <p class="col-sm-4">&copy; 2016 Skillfair</p>
        <ul class="col-sm-8">
      <li class="col-sm-1"> <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/twitter.svg"></li>
      <li class="col-sm-1"><img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/facebook.svg"></li>
      <li class="col-sm-1"> <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/instagram.svg"></li>
      <li class="col-sm-1"> <img src="https://s3.amazonaws.com/codecademy-content/projects/make-a-website/lesson-4/medium.svg"></li>
    	</ul>
        </div>
      </footer>
    </body>
    </html>
##8. Bootstrap Generalizations
