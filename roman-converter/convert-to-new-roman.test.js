function convertToNewRoman(number) {
    // ToDo: do the proper implementation using TDD
    return 'I';
}

/* write the tests */
test('convertToNewRoman should return I for 1', function() {
    var result = convertToNewRoman(1);
    expect(result).toBe('I');
});