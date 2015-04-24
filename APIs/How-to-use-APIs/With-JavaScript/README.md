## 1. You've Already Been Introduced
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://edvinsantonovs.co.uk/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
```

## 2. The Client/Server Relationship
```javascript
              							//////////
              							//Server//
              							//////////
                      //    //////////       \\
                    //      //////////         \\
                  //            ||               \\
                //       //     ||     \\          \\
       //////////       //      ||      \\          //////////
       //Client//      //       ||       \\         //Client//
       //////////     //        ||        \\        //////////
                  ////////// ////////// //////////
                  //Client// //Client//	//Client//
                  ////////// ////////// //////////
```

##3. No REST for the Wicked
```javascript
// You (the client) make an HTTP request. What sends the response?

// A: The Internet
// B: The World Wide Web
// C: The server
// D: The waiter

var answer =  "c";
```


## 4. A RESTful API
```javascript
// {
//   "myBlog": {
//     "pageViews": "4720",
//     "subscribers": "1711",
//     "numberOfPosts": "37",
//     "mostRecentPost": "2013-01-04",
//   }
// }
```

## 5. Making a Request
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
// Add your code below!

xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
```

## 6. The Four Verbs
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
xhr.send();
console.log(xhr);
```

## 7. Anatomy of a Request
```javascript
// POST /codecademy/learn-http HTTP/1.1
// Host: www.codecademy.com
// Content-Type: text/html; charset=UTF-8

// Name=Eric&Age=26
```

## 8. Endpoints
```javascript
// What are the four commonly used HTTP methods ("verbs")?

// A: FIND, SEND, UPDATE, REMOVE
// B: CREATE, READ, UPDATE, DELETE
// C: GET, SEND, PUT, DELETE
// D: GET, POST, PUT, DELETE

var answer = "d";
```

## 9. Authentication & API Keys
```javascript
var apiKey = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9";
```

## 10. HTTP Status Codes
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/doesnt_exist", false);
xhr.send();
// Add your code below!

console.log(xhr.status);
```

## 11. Anatomy of a Response
```javascript
// HTTP/1.1 200 OK
// Content-Type: text/xml; charset=UTF-8

// <?xml version="1.0" encoding="utf-8"?>
// <string xmlns="http://www.codecademy.com/">Accepted</string>
```
## 12. Parsing XML
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
```

## 13. Parsing JSON
```javascript
var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);
```

## 14. XML or JSON?
```javascript
//Empty
```

## 15. REST Constraints & Requirements
```javascript
// 1. HTTP is a protocol that connects clients and ______.
var answer1 = "servers"

// 2. The four HTTP methods are GET, POST, ___, and DELETE.
var answer2 = "PUT"

// 3. A ___ error means the server goofed up. (200, 300, 400, or 500)
var answer3 = 500
```

## 16. Requests
```javascript
// Add your code below this line!
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);

// Add your code above this line!

xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
```

## 17. Authentication & API Keys
```javascript
// What's an API key?

// A: An alphanumeric string used to identify you to an API
// B: An OAuth token
// C: An All-Purpose Internet key
// D: The tool used to unlock an API gate

var answer = "a"
```

## 18. XML & JSON
```javascript
// What data format is shown below? Set answer
// equal to 'XML' for XML and 'JSON' for JSON.

// {
//   "Cartoon Foxes": {
//     {
//       "Name": "Fox Tall",
//       "Job": "Bein' tall"
//     },
//     {
//       "Name": "Fox Small",
//       "Job": "Bein' small"
//     }
//   }
// }

var answer = 'JSON'
```

## 19. You Did It!
```javascript
// Empty
```
