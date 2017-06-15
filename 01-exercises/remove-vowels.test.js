/**
 * This function is supposed to remove vowels from a phrase
 * Add tests to prove that it functions properly with these examples at least:
 *         shortcut("goodbye")  // --> "gdby"
 *         shortcut("nodegirls")  // --> "nd grls"
 *         shortcut('how are you today?') // --> "hw r y tdy?"
 * Consider EDGE cases (how the function behaves if you pass undefined, or a number etc..)
 * Then add a test that contains CAPITAL vowel letters (hEllo for example)
 *      - It should expect the E to be removed
 *      - Run the tests and see you new test fail (RED)
 *      - Change the implementatino to remove the letter (capital and small letters)
 *       (maybe Google Case Insensitive Regular Expressions and read about regular expressions and see how you can use them)
//  */

// function shortcut(phrase) {
//     return phrase.replace(/[aeiou]/g, '');
// }



function shortcut(word) {
    var result = '';
    for (var i = 0; i < word.length; i++) {
        if (word[i] !== 'o' && word[i] !== 'e' && word[i] !== 'i'
            && word[i] !== 'a' && word[i] !== 'u' && word[i] !== 'O'&& word[i] !== 'E' && word[i] !== 'I' && word[i] !== 'A' && word[i] !== 'U') {
            result = result + word[i];
        }
    }  
    return result;

};



test('shortcut should remove the Os', function(){
    var result = shortcut('Tom');
    expect(result).toBe('Tm');
});


test('shortcut should remove the Os and e', function(){
    var result = shortcut('goodbye');
    expect(result).toBe('gdby');
});


test('shortcut should remove the Os', function(){
    var result = shortcut('nodegirls');
    expect(result).toBe('ndgrls');
});


test('shortcut should remove the Os', function(){
    var result = shortcut('how are you today?');
    expect(result).toBe('hw r y tdy?');
});


test('shortcut should remove the Os', function(){
    var result = shortcut('HEllo');
    expect(result).toBe('Hll');
});


// var word = 'goodbye';
// var otherWord = 'nodegirls';
// var howRu = 'how are you today?';
// console.log(shortcut(word));
// console.log(shortcut(otherWord));
// console.log(shortcut(howRu));
