<head>
    <style type="text/css">
    * {
        padding:0px;
        margin:0px;
    }
   .tree ul {
        position: relative;
        margin:5px;
    }
.tree li {
      text-align:center;
      list-style-type:none;
      position:relative;
      padding:20px 5px 0 5px;
    }
    .tree li::before, .tree li::after, ; {
  content:'';
  position:absolute;
  top:0;
  right:50%;
  border-top: 1px solid #CCC;
  width: 100px;
  height: 20px;
}
#first {
    border:0px;
}
.tree li::after {
  right:auto;
  left:50%;
  border-left: 1px solid #CCC;
}

.tree li:only-child::after, .tree li:only-child::before {
  display:none;
}

.tree li:only-child {
  padding-top: 0;
}

.tree li:first-child::before, .tree li:last-child::after {
  border: 0 none;
}
.tree li:last-child::before {
  border-right: 1px solid #ccc;
  border-radius: 0 5px 0 0 ;
  -webkit-border-radius: 0 5px 0 0 ;
  -moz-border-radius: 0 5px 0 0 ;
}
.tree li:first-child::after {
  border-radius: 5px 0 0 0;
  -webkit-border-radius: 5px 0 0 0;
  -moz-border-radius: 5px 0 0 0;
}
.tree ul ul::before {
  content: '';
  position: absolute; top: 0; left: 5%;
  border-right: 1px solid #ccc;
  width: 0; height: 20px;
}
</style>
</head>

<h2>Codecademy useful stuff</h2>

Answers to Codecademy exercises

In this repo I tried to collect in all interesting exercises where people can be stucked, while going through Codecademy tasks.
I hope that can help a lot of people. If you think you have something interesting what you can add here, just do it :)


<strong>Existing tracking languege or library:</strong>
<ul>
<li>Web fundamentals</li>
<li>jQuery</li>
<li>PHP</li>
<li>Python</li>
<li>Ruby</li>m
<li>Web projects</li>
<li>APIs</li>
<li>Multimedia projects</li>
</ul>

<div class="tree" id="first">
<ul>
    <li>Track
    <div class="tree">
        <ul>
        <li>Section
        <div class="tree">
            <ul>
                <li>Lesson Name
                <div class="tree">
                    <ul>
                        <li>Exercise Name - #1</li>
                        <li>Exercise Name - #2</li>
                        <li>Exercise Name - #3</li>
                        </ul>
                        </div>
        </li>
        </ul>
        </div>
    </li>
    </ul>
    </div>
</li>
</ul>
</div>
