/*
    Write a function which will reverse the vowels in a string.
    Any characters which are not vowels should remain in their original position,
    i.e. only swap pairs of vowels - but they may not be at matching indexes!

    For example:
    "Tomatoes" => "Temotaos"
*/

function reverseVowels(reverseMe) {
//create a vowels array
//create a regex that matches vowels in the string into the vowels array
vow = reverseMe.match(/[aeiou]/g)  //vow = [o ,a, o, e] =>[e o a o] 
//replace every vowel in the string with the  last vowel (being popped in the vowels array)
return reverseMe.replace(/[aeiou]/g, () => vow.pop());  
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.reverseVowels = reverseVowels