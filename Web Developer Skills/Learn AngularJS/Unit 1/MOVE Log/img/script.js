/*jshint multistr:true */

var text = "Everyone knows how awesome Jonas is!";
var myName = "Jonas";
var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[0] === myName.substring(0,1)) {
        for (j = i; j <= myName.length + i; j++) {
            hits.push("text[j]");
            console.log(hits);
        }
    }
}
