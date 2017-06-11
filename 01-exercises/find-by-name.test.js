// write a functon to find people by firstName or lastName
// signature: findByName(name)
// example: findByName("Smith") returns every person who has their first name or last name as "smith"
// improve it to to match the start of the word not the whole word (add a test first)

function findByFirstName(persons, firstName) {
    foundFirstname = [];
    for (var i = 0; i < persons.length; i++) {
        if (persons[i].firstName === firstName) {
            foundFirstname.push(persons[i]);
        }
    }
    return foundFirstname;

}


var persons = [
    {
        firstName: "Virginia",
        lastName: "Woolf",
        occupation: "writer",
        age: 59,
        alive: false
    },
    {
        firstName: "Zadie",
        lastName: "Smith",
        occupation: "writer",
        age: 41,
        alive: false
    },
    {
        firstName: "Jane",
        lastName: "Austen",
        occupation: "writer",
        age: 41,
        alive: false
    },
    {
        firstName: "bell",
        lastName: "hooks",
        occupation: "writer",
        age: 64,
        alive: false
    },
];

test("return the person with firstName Jane", function () {
    var finalResult = findByFirstName(persons, "Jane");
    expect(finalResult).toEqual([
        {
            firstName: "Jane",
            lastName: "Austen",
            occupation: "writer",
            age: 41,
            alive: false
        }

    ]);
});