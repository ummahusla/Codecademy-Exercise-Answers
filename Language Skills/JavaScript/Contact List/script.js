 var friends = {
    bill: {firstName: "Bill", 
        lastName: "Gates", 
        number: "(206) 555-5555", 
        address: ['One Microsoft Way','Redmond','WA','98052']},
    steve: {firstName: "Steve", 
        lastName: "Jobs", 
        number: "(510) 555-5555", 
        address: ['1 Infinite Loop','Cupertino','CA','95014']},
    tom: {firstName: "Tom", 
        lastName: "Smith", 
        number: "(817) 555-5555", 
        address: ['1234 Shore Drive','Pacifica','CA','95699']},
    dick: {firstName: "Dick", 
        lastName: "Jones", 
        number: "(972) 555-5555", 
        address: ['3456 34th Street','Oakland','Ca','96013']},
    harry: {firstName: "Harry", 
        lastName: "Robinson", 
        number: "(214) 555-5555", 
        address: ['6789 Main Avenue','Fremont','CA','94537']}
};

var list = function() {               // myFriends is a
    for (var myFriends in friends) { // *reference pointer* 
        console.log(myFriends);     // for the friends object.
    }
};

var search = function(name) {
    for ( var property in friends ) {
        if ( friends[property].firstName === name ) {
            console.log("First Name: " + 
                friends[property].firstName + 
                "\nLast Name: " + 
                friends[property].lastName + 
                "\nAddress: " + 
                friends[property].address[0] + " " + 
                friends[property].address[1] + " " + 
                friends[property].address[2] + " " + 
                friends[property].address[3] + 
                "\nPhone Number: " + 
                friends[property].number + 
                "\n");
            return friends[property];
        }
    }
};
list(friends);
search("Bill");
search("Steve");
search("Tom");
search("Dick");
search("Harry");