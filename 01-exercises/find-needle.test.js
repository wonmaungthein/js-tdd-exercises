function findNeedle(haystackArray) {
    // ToDo: Implement this function to make all the tests below pass
    // DO NOT Change the tests (you can add more tests though)
}


function findNeedle(haystack) {
    var position = -1;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            position = i;

        }
    }

    return position;
}


test('the function returns zero if the element is the first item', function () {
    var haystack = ['needle', 'hay', 'rabbit', 'hat'];
    var position = findNeedle(haystack);
    expect(position).toBe(0);
});

test('the function returns the array element where a needle is found', function () {
    var haystack = ['hay', 'rabbit', 'needle', 'hat'];
    var position = findNeedle(haystack);

    expect(position).toBe(2);
});

test('the function can find an element at the end of the array', function () {
    var haystack = ['hay', 'rabbit', 'hat', 'needle'];
    var position = findNeedle(haystack);

    expect(position).toBe(3);
});

test('the function returns -1 if the element is not found', function () {
    var haystack = ['hay', 'rabbit', 'hat'];
    var position = findNeedle(haystack);

    expect(position).toBe(-1);
});
