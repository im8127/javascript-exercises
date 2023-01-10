/*
    The goal of this exercise is to convert a string to a new string where each character in the new string is "("
    if that character appears only once in the original string, or ")" if that character appears more than once in
    the original string. Ignore capitalization when determining if a character is a duplicate.

    For example:
    "recede"   =>  "()()()"
*/
//convert the string to lowercase and to a list
//white space is a character too
//Success => )())()) s u c c e s s
// {s:3,
// u:1,
//c:2
//e:1}

function duplicateEncode(word) {
    letters = word.toLowerCase().split("") // ["r","e","c","e","d","e"]
    //create an empty obj/dict that keeps count of occurrence of chars
    lCount = {}
    //loop through the arr add their occurrences count to the object
    letters.forEach(letter => {
        lCount[letter] = (lCount[letter] || 0) + 1
    });
    //if count/occurrence in dict is 1 returns ( else )
    return letters.map((letter)=>{
        return lCount[letter] == 1 ? "(" : ")"
    }).join("")
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.duplicateEncode = duplicateEncode