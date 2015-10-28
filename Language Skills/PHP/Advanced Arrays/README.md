##1.)
```php
<html>
  <head>
    <title>Array Review</title>
  </head>
  <body>
    <p>
      <?php
$fruits = array("bananas", "apples", "pears");
echo 'I love eating ' . $fruits[1] . ' too!';
?>
    </p>
  </body>
</html>
```
##2.)
[No change needed]
##3.)
```php
<html>
  <head>
    <title>Making the Connection</title>
  </head>
  <body>
    <p>
      <?php
        // This is an array using integers as the indices.
        // Add 'BMW' as the last element in the array!
        $car = array(2012, 'blue', 5, 'BMW');
        array_push($car,'BMW');


     // This is an associative array.
        // Add the make => 'BMW' key/value pair!
        $assocCar = array('year' => 2012,
                      'make' => 'BMW',
                      'colour' => 'blue',
                      'doors' => 5);

        // This code should output "BMW"...
        echo $car[3];
        echo '<br />';

        // ...and so should this!
        echo $assocCar['make'];
      ?>
    </p>
  </body>
</html>
```
##4.)
```php
<html>
  <head>
    <title>Accessing Associative Arrays</title>
  </head>
  <body>
    <p><?php
// This is an array using integers as the indices...
$myArray = array(2012, 'blue', 5, 'BMW');

    // ...and this is an associative array:
    $myAssocArray = array('year' => 2012,
                    'colour' => 'blue',
                    'doors' => 5,
                    'make' => 'BMW');

    // This code will output "blue".
    echo $myArray[1];
    echo '<br />';






    echo 'I have a ' . $myAssocArray['year'] . ' ' .  $myAssocArray['make'] . '. It is ' . $myAssocArray['colour'] . ' and has ' . $myAssocArray['doors'] . ' doors.';        
  ?>
    </p>
  </body>
</html>
```
##5.)
```php
<html>
  <head>
    <title>Iteration Nation</title>
  </head>
  <body>
    <p>
      <?php    
        $food = array('pizza', 'salad', 'burger');
        $salad = array('lettuce' => 'with',
                   'tomato' => 'without',
                   'onions' => 'with');
    
      // Looping through an array using "for".
      // First, let's get the length of the array!
      $length = count($food);
    
      // Remember, arrays in PHP are zero-based:
      for ($i = 0; $i < $length; $i++) {
        echo $food[$i] . '<br />';
      }
    
      echo '<br /><br />I want my salad:<br />';
    
      // Loop through an associative array using "foreach":
      foreach ($salad as $ingredient=>$include) {
        echo $include . ' ' . $ingredient . '<br />';
      }
    
      echo '<br /><br />';
      
      
      
     // Create your own array here and loop
  // through it using foreach!
    $music = array('classical', 'jazz', 'rock', 'blues', 'country' => 'except');
    $length = count($music);

    for ($i = 0; $i < $length; $i++) {
        echo $music[$i] . '<br />';
    }

    echo '<br />I like most styles of ';

    foreach ($music as $style=>$include) {
        echo ' ' . $include . '.<br />';
    }

  ?>
</p>
  </body>
</html>
```
##6.)
```php
<html>
  <head>
    <title>Blackjack!</title>
  </head>
  <body>
    <p><?php
$deck = array(array('2 of Diamonds', 2),
array('5 of Diamonds', 5),
array('7 of Diamonds', 7),
array('8 of Diamonds', 8));

  // Imagine the first chosen card was the 7 of Diamonds.
  // This is how we would show the user what they have:
  echo 'You have the ' . $deck[2][0] . '!';
  echo 'You have the ' . $deck[3][0] . '!';
  ?>
</p>
    </p>
  </body>
</html>
```
##7.)
```php
<html>
  <head>
    <title>I am the King of Arrays!</title>
  </head>
  <body>
    <p>
    <?php
    
    $myArray = array('lettuce' => 'green',
              'tomato' => 'red',
              'onions' => 'yellow');

    $length = count($myArray);

    echo($myArray['lettuce']);

    foreach($myArray as $i) {
      echo( $i );
    }

    ?>
    </p>
  </body>
</html>
```
