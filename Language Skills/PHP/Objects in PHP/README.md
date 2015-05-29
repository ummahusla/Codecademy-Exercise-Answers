##1)
No changes are needed.
##2)
No changes are needed.
##3)
```php
<!DOCTYPE html>
<html>
	<head>
	  <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <?php 
         class person{
            
            }
            $teacher = new person();
            $student = new person();
        
        
        
        
        ?>
      </p>
    </body>
</html>
```
##4)
```php
<!DOCTYPE html>
<html>
	<head>
	  <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <?php 
         class person{
            public $isAlive = true;
            public $firstname, $lastname, $age;
            
            }
            $teacher = new person();
            echo $teacher->isAlive;
            $student = new person();
        
        
        
        
        ?>
      </p>
    </body>
</html>
```
##4)
```php
<!DOCTYPE html>
<html>
	<head>
	  <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <?php 
    class Person {
       public $isAlive = true;
        public $firstname;
        public $lastname;
        public $age;
        public function greet() {
        return "Hello, my name is ".$this->firstname." ".$this->lastname.". Nice to meet     you! :-)";
    }

      public  function __construct($firstname, $lastname, $age) {
        $this->firstname = $firstname;
       $this->lastname = $lastname;
        $this->age = $age;
      }
    }

  $teacher = new Person("boring", "12345", 12345);
  $student = new Person("Mike", "Ruderisch", 16);
  echo $teacher->isAlive;
  echo $student->age;
  echo $student->greet();
  echo $teacher->greet();

?>
        ?>
      </p>
    </body>
</html>
```
##5)
```php
<!DOCTYPE html>
<html>
	<head>
	  <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <?php 
    class Person {
       public $isAlive = true;
        public $firstname;
        public $lastname;
        public $age;
        public function greet() {
        return "Hello, my name is ".$this->firstname." ".$this->lastname.". Nice to meet     you! :-)";
    }

      public  function __construct($firstname, $lastname, $age) {
        $this->firstname = $firstname;
       $this->lastname = $lastname;
        $this->age = $age;
      }
    }

  $teacher = new Person("boring", "12345", 12345);
  $student = new Person("Mike", "Ruderisch", 16);
  echo $teacher->isAlive;
  echo $student->age;
  echo $student->greet();
  echo $teacher->greet();

?>
        ?>
      </p>
    </body>
</html>
```
##6)
```php
<!DOCTYPE html>
<html>
	<head>
	  <title>Reconstructing the Person Class</title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        <?php 
    class Person {
       public $isAlive = true;
        public $firstname;
        public $lastname;
        public $age;
        public function greet() {
        return "Hello, my name is ".$this->firstname." ".$this->lastname.". Nice to meet     you! :-)";
    }

      public  function __construct($firstname, $lastname, $age) {
        $this->firstname = $firstname;
       $this->lastname = $lastname;
        $this->age = $age;
      }
    }

  $teacher = new Person("boring", "12345", 12345);
  $student = new Person("Mike", "Ruderisch", 16);
  echo $teacher->isAlive;
  echo $student->age;
  echo $student->greet();
  echo $teacher->greet();

?>
        ?>
      </p>
    </body>
</html>
```
##7.)
```php
<!DOCTYPE html>
<html>
	<head>
	  <title> Practice makes perfect! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
        //<?php
        class Dog {
            public $numLegs = 4;
            public $name;
            public function __construct($name) {
                $this->name = $name;
            }
        }
        ?>
      </p>
    </body>
</html>
```
##8)
```php
<!DOCTYPE html>
<html>
	<head>
	  <title> Practice makes perfect! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
   <?php

    class Dog {

    public $numLegs=4;
    public $name;
    public function __construct($name) {
        $this->name = $name;
        }

    public function bark() {
        return "Woof!";
        }

    public function greet() {
        return "Hi this is" . $this->name . " " . "Is here for your service"; 
        }
    }

    $dog1 = new Dog("Barker");
    $dog2 = new Dog("Amigo");

    echo $dog1->bark();
    echo $dog2->greet();
    ?>
      </p>
    </body>
</html>
```
##9.)
```php
<!DOCTYPE html>
<html>
    <head>
	  <title> Challenge Time! </title>
      <link type='text/css' rel='stylesheet' href='style.css'/>
	</head>
	<body>
      <p>
       <?php
      // Your code here
    class Cat {
        public $isAlive = true;
        public $numLegs = 4;
        public $name;
        public function __construct ($name) {
            $this -> name = $name;
        }
        public function meow() {
            return "Meow meow";
        }
    }

    $cat1 = new Cat ("CodeCat");
    echo $cat1->meow();

    ?>
      </p>
    </body>
</html>
```
##10.)
```php
<!DOCTYPE html>
<html>
	<head>
	  <title> Review Time! </title>
	</head>
	<body>
      <p><?php /*Your code here */ 
      echo "Now I know the basics of OOP!"?></p>
    </body>
</html>
```
