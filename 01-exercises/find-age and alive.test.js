
function AliveOver60(persons, age) {
    var over60sAndAlive = [];
    for (var i = 0; i < persons.length; i++) {
        if (persons[i].age > age && persons[i].alive === true) {
            over60sAndAlive.push(persons[i]);
        }
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


    var over60sAndAlive = AliveOver60(persons, 60);
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