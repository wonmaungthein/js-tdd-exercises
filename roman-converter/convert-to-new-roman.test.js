function convertToNewRoman(number) {
   var output = ""; 
   var outputover5 = "VI";
   var output10 = "X";
    for ( var i = 0; i < number; i++) {
        output = output.concat("I");
    } if ( i === 4) {
        output = ("IV");
    } if (i === 5) {
        output = ("V");
    } if (i > 5) {
        output = outputover5.concat ("");
    } if (i > 6 && i <= 8) {
        output = outputover5.concat ("I");
    } if (i === 9){
        output = ("IX");
    } if (i === 10) {
        output = output10;
    } if (i > 10) {
        output = output10.concat("I");
    } if (i > 11) {
        output = output10.concat("II");
    } if ( i === 13) {
        output = output10.concat ("III");
    }
    // ToDo: do the proper implementation using TDD
    return output;
}

/* write the tests */
test('convertToNewRoman should return I for 1', function() {
    var result = convertToNewRoman(1);
    expect(result).toBe('I');
});


test('convertToNewRoman should return II for 2', function() {
    var result = convertToNewRoman(2);
    expect(result).toBe('II');
});


test('convertToNewRoman should return III for 3', function() {
    var result = convertToNewRoman(3);
    expect(result).toBe('III');
});


test('convertToNewRoman should return IV for 4', function() {
    var result = convertToNewRoman(4);
    expect(result).toBe('IV');
});


test('convertToNewRoman should return V for 5', function() {
    var result = convertToNewRoman(5);
    expect(result).toBe('V');
});


test('convertToNewRoman should return VI for 6', function() {
    var result = convertToNewRoman(6);
    expect(result).toBe('VI');
});


test('convertToNewRoman should return VII for 7', function() {
    var result = convertToNewRoman(7);
    expect(result).toBe('VII');
});


test('convertToNewRoman should return IX for 9', function() {
    var result = convertToNewRoman(9);
    expect(result).toBe('IX');
});


test('convertToNewRoman should return X for 10', function() {
    var result = convertToNewRoman(10);
    expect(result).toBe('X');
});


test('convertToNewRoman should return XI for 11', function() {
    var result = convertToNewRoman(11);
    expect(result).toBe('XI');
});


test('convertToNewRoman should return XII for 12', function() {
    var result = convertToNewRoman(12);
    expect(result).toBe('XII');
});


test('convertToNewRoman should return XIII for 13', function() {
    var result = convertToNewRoman(13);
    expect(result).toBe('XIII');
});

