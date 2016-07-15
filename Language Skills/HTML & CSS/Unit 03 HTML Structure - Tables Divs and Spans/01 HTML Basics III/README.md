## 1. Introduction
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Table Time</title>
	</head>
	<body>
		<h1 style="color:red; font-family:Arial">Tables Are Mega Sweet</h1>
		<img src="http://cdn-production.codecademy.com/assets/logo/logo--teal-d10b21a45b84379f184aa74fbd19ab8c.svg">
		<a href="hhtp:/facebook.com"><img src="http://cdn-production.codecademy.com/assets/logo/logo--teal-d10b21a45b84379f184aa74fbd19ab8c.svg"></a>
	</body>
</html>
```

## 2. What are tables?
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    <body>
        <table></table>
    </body>
</html>
```

## 3. Rows of information
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    <body>
        <table>
            <tr></tr>
            <tr></tr>
            <tr></tr>
        </table>
    </body>
</html>
```

## 4. A single column
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    <body>
        <table border="1px">
            <tr>
                <td>One</td>
            </tr>
            
            <tr>
                <td>Two</td>
            </tr>
                
            <tr>
                <td>Three</td>        
            </tr>
        </table>
    </body>
</html>
```

## 5. Adding a second column
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    <body>
        <table border="1px">
            <tr>
                <td>King Kong</td>
                <td>1933</td>     
            </tr>
            
            <tr>
                <td>Dracula</td>
                <td>1897</td>
            </tr>
            
            <tr>
                <td>Bride of Frankenstein</td>
                <td>1935</td>
            </tr>
        </table>
    </body>
</html>
```

## 6. Head of the table
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    <body>
        <tbody border="1px">
            
                <tbody>
                    <td>King Kong</td>
                    <td>1933</td>     
                </tr>
                
                <tbody>
                    <td>Dracula</td>
                    <td>1897</td>
                </tr>
                
                <tbody>
                    <td>Bride of Frankenstein</td>
                    <td>1935</td>
                </tr>
        </table>
    </body>
</html>
```

## 7. Table Heads
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    
    <body>
        
        <table border="1px">
            <thead>
                <tr>
                <th>Famous Monster</th>
                <th>Birth Year</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>King Kong</td>
                    <td>1933</td>     
                </tr>
                
                <tr>
                    <td>Dracula</td>
                    <td>1897</td>
                </tr>
                
                <tr>
                    <td>Bride of Frankenstein</td>
                    <td>1935</td>
                </tr>
            </tbody>
        </table>
        
    </body>

</html>
```

## 8. Naming your table
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    
    <body>
        
        <table border="1px">
            <thead>
                <tr>
                    <th colspan="2">Famous Monsters by Birth Year</th>
                </tr>
                <tr>
                    <th>Famous Monster</th>
                    <th>Birth Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>King Kong</td>
                    <td>1933</td>     
                </tr>
                
                <tr>
                    <td>Dracula</td>
                    <td>1897</td>
                </tr>
                
                <tr>
                    <td>Bride of Frankenstein</td>
                    <td>1935</td>
                </tr>
            </tbody>
        </table>
        
    </body>

</html>
```

## 9. Style that head!
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    
    <body>
        
        <table style="border-collapse:collapse;">
            <thead>
                <tr>
                    <th colspan="2" style="font-size:12px; color: red;">Famous Monsters by Birth Year</th>
                </tr>
                <tr style="border-bottom:1px solid black;">
                    <th style="padding:5px;"><em>Famous Monster</em></th>
                    <th style="padding:5px;border-left:1px solid black;"><em>Birth Year</em></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:5px;">King Kong</td>
                    <td style="padding:5px;border-left:1px solid black;">1933</td>     
                </tr>
                
                <tr>
                    <td style="padding:5px;">Dracula</td>
                    <td style="padding:5px;border-left:1px solid black;">1897</td>
                </tr>
                
                <tr>
                    <td style="padding:5px;">Bride of Frankenstein</td>
                    <td style="padding:5px;border-left:1px solid black;">1944</td>
                </tr>
            </tbody>
        </table>
        
    </body>

</html>
```

## 10. Recap
```html
<html>
    <head>
        <title>Table Time</title>
    </head>
    <!-- COMMENT -->
    <body>
        <table style="border-collapse:collapse;">
            <thead>
                <tr>
                    <th colspan="2"  aling="right;"style="font-size:12px; color: red;">Famous Monsters by Birth Year</th>
                </tr>
                <tr style="border-bottom:1px solid black;">
                    <th style="padding:5px;"><em>Famous Monster</em></th>
                    <th style="padding:5px;border-left:1px solid black;"><em>Birth Year</em></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:5px;">King Kong</td>
                    <td style="padding:5px;border-left:1px solid black;">1933</td>     
                </tr>
                
                <tr>
                    <td style="padding:5px;">Dracula</td>
                    <td style="padding:5px;border-left:1px solid black;">1897</td>
                </tr>
                
                <tr>
                    <td style="padding:5px;"><strong>Bride of Frankenstein</strong></td>
                    <td style="padding:5px;border-left:1px solid black;"><em>1944</em></td>
                </tr>
            </tbody>
        </table>
        
        
        <ol>
            <li style="color:red">123</li>
            <li style="size: 12px">312</li>
        </ol>
        
        <ul>
            <li>123</li>
            <li>312</li>    
        </ul>
    </body>
</html>
```

## 11. 'Div'ide and conquer
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
	</head>
	<body>
		<div style="width:50px; height:50px; background-color:red"></div>
		<div style="width:50px; height:50px; background-color:blue"></div>
		<div style="width:50px; height:50px; background-color:green"></div>
		<div style="width:50px; height:50px; background-color:yellow"></div>
	</body>
</html>
```

## 12. Link it!
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
	</head>
	<body>
		<div style="width:50px; height:50px; background-color:red"></div>
		<div style="width:50px; height:50px; background-color:blue"></div>
		<div style="width:50px; height:50px; background-color:green"></div>
		<a href="hhtp:/www.facebook.com"><div style="width:50px; height:50px; background-color:yellow"></div></a>
	</body>
</html>
```

## 13. Spantastic
```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body>
		<p>This text is black, except for the word <span style="color:red">red</span>!</p>
	</body>
</html>
```

## 14. Span is the man
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Result</title>
	</head>
	<body>
		<p>My favorite font is <span style="font-family:Impact">Impact</span>!</p>
	</body>
</html>
```

## 15. Recap
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Ye Olde Fancye Booke</title>
		<link type="text/css" rel="stylesheet" href="stylesheet.css"/>
	</head>
	<body>
		<h3>Ye Olde Storye</h3>
		<p><span>A</span> long time ago there was an intrepid young student who wanted to learn CSS...</p>
	</body>
</html>
```
