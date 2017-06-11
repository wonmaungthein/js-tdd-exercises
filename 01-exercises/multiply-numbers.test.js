/*
    Similar to the add-numbers function, 
    write a function that multiplies any
    number of arguments passed to it.
    some expectations:
        multiply(4, 2)  // --> 8
        multiply(2, 2, 3)  // --> 18
    Write your implementation in TDD
        1. Add a Test (see it failing - RED)
        2. Write Code (to make it pass - GREEN)
        3. Refactor if needed
        4. REPEAT
 */



function multiplies() {
    var args = Array.prototype.slice.call(arguments);
    var result = 1;
    for (var i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}


test(' should return number when two numbers are multiplied', function(){
    var result = multiplies(1, 2);
    expect(result).toEqual(2);
});


test(' should return number when numbers are multiplied', function(){
    var result = multiplies(2,4);
    expect(result).toEqual(8);
    
});


test(' should return number when  numbers are multiplied', function(){
    var result = multiplies(2,2,3);
    expect(result).toEqual(12);
});

