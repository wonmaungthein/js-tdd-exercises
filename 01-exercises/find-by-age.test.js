function findByAge(people, age) {
    var foundPeople = [];
    for (var i = 0; i < people.length; i++) {
        if (people[i].age > age) {
            foundPeople.push(people[i]);
        }
    }
    return foundPeople;
}



test("function should return a list of people over 60s", function () {
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

    var result = findByAge(persons, 50);


    expect(result).toEqual(
        [
            {
                firstName: "Virginia",
                lastName: "Woolf",
                occupation: "writer",
                age: 59,
                alive: false
            },

            {
                firstName: "bell",
                lastName: "hooks",
                occupation: "writer",
                age: 64,
                alive: false
            }
        ]
    );
});