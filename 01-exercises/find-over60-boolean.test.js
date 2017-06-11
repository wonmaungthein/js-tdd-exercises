
// find person over 60s and alive or death.


function AliveOver60AndBoolean(persons, age, boolean) {
    var over60sAndAlive = [];
    var over60sAnddead = [];
    for (var i = 0; i < persons.length; i++) {
        if (persons[i].age > age && persons[i].alive === true ) {
            over60sAndAlive.push(persons[i]);
        } 
        else { over60sAnddead.push(persons[i])}
    }
    return over60sAndAlive;
}



test("return the person with over 60 and alive is true", function () {

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
        alive: true
    }
];


    var over60sAndAlive = AliveOver60AndBoolean(persons, 60, true);
    expect(over60sAndAlive).toEqual(
[
        {
            firstName: "bell",
            lastName: "hooks",
            occupation: "writer",
            age: 64,
            alive: true
        }
]
    )
});