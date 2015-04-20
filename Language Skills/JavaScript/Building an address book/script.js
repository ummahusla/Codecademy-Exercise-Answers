var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777 - 7777",
    email: "bob.jones@example.com"
    },

    mary = {
    firstName: "Mary",
    lastName: "Johnson",

    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com"
    },

    contacts = new Array(bob, mary);

function printPerson (person) {
    console.log(person.firstName + " " + person.lastName);
}

function list(){
    var length = contacts.length,
        i;

    for (i = 0; i < length; i += 1) {
        printPerson(contacts[i]);
    }
}

// Create a search function then call it passing "Jones"
function search(lastName) {
    var length = contacts.length,
        i;

    for (i = 0; i < length; i += 1) {
        if (contacts[i].lastName === lastName) {
            printPerson(contacts[i]);
        }
    }
}

function add(firstName, lastName, email, telephone) {
    var newContact = {
        firstName: firstName,
        lastName: lastName,

        phoneNumber: telephone,
        email: email
    };

    contacts[contacts.length] = newContact;
}

add(prompt("Please enter your first name:"),
    prompt("Please enter your last name:"),
    prompt("Please enter your telephone number:"),
    prompt("Please enter your email address:"));

list();
//search("Johnson");