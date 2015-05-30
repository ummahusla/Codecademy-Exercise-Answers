##1.)
```php
<html>
  <head>
    <title>OOP Review</title>
  </head>
  <body>
    <p>
      <?php
      // Create a Person class here:
      class Person{
          
          }
          
          
          
          
          
          
          
      $me = new Person();
      
      ?>
    </p>
  </body>
</html>
```
##2.)
```php
<html>
  <head>
    <title>Class and Object Methods</title>
  </head>
  <body>
    <p>
      <?php
        class Person {
          public $isAlive = true;
          
          function __construct($name) {
              $this->name = $name;
          }
          
          public function dance() {
            return "I'm dancing!";
          }
        }
        
        $me = new Person("Shane");
        if (is_a($me, "Person")) {
          echo "I'm a person, ";
        }
        if (property_exists($me, "name")) {
          echo "I have a name, ";
        }
        if (method_exists($me, "dance")) {
          echo "and I know how to dance!";
        }
      ?>
    </p>
  </body>
</html>
```
##3)
```php
<html>
  <head>
    <title>The Shape of Things to Come</title>
  </head>
  <body>
    <p> <?php
    class Shape {
    public $hasSides = true;
    }

    class Square extends Shape {

    }

    $square = new Square();
    // Add your code below!\
    
    
    
    
    
    
    
    
    if (property_exists($square, "hasSides")) {
      echo "I have sides!";
    }
  ?>
</p>
  </body>
</html>
```
##4.)
```php
<html>
  <head>
    <title>Override!</title>
  </head>
  <body>
    <p>
      <?php
class Vehicle {
public function honk() {
return "HONK HONK!";
}
}
// Add your code below!
class Bicycle extends Vehicle {
public function honk(){
return "Beep beep!";
}
}
$bicycle = new Bicycle();
echo $bicycle->honk();

  ?>
    </p>
  </body>
</html>
```
##5.)
```php
<html>
  <head>
    <title>Override!</title>
  </head>
  <body>
    <p>
<?php
class Vehicle {
final public function honk() {
return ("HONK HONK!");
}
}
class Bicycle extends Vehicle {
public function honk(){
return ("Beep beep!");
}
}
$bicycle= new Bicycle();
echo ($bicycle->honk());
?>
    </p>
  </body>
</html>
```
##6.)
```php
<html>
  <head>
    <title>Scope it Out!</title>
  </head>
  <body>
    <p>
      <?php
      class Person {
      }
      class Ninja extends Person {
        // Add your code here...
        const stealth = "MAXIMUM";
      }
      // ...and here!
      echo Ninja::stealth;

      ?>
    </p>
  </body>
</html>
```
##7.)
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
class King {
// Modify the code on line 10...
public static function proclaim() {
echo "A kingly proclamation!";
}
}
// ...and call the method below!
King::proclaim();
?>
    </p>
  </body>
</html>
```
##8.)
```php
<html>
  <head>
    <title></title>
  </head>
  <body>
    <p>
      <?php
      class Person {
          public static function say(){
             echo "Here are my thoughts!";
            }
        }
        class Blogger extends Person {
            const cats = 50;
        }

        echo Blogger::say();
        echo Blogger::cats;
      ?>
    </p>
  </body>
</html>
```
