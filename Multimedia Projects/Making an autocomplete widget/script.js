$(document).ready(function() {
  var languages = [
    "C",
    "C++",
    "C#",
    "Java",
    "JavaScript",
    "Lisp",
    "Objective-C",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "SQL"];
  $("#tags").autocomplete({
    source: languages
  });
});