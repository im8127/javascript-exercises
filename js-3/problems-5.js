/*
    return the only unique number from an array.
    All numbers in the input array are present twice, except for one.

    Example:
    In the array [ 1, 8, 4, 4, 6, 1, 8 ], all numbers are present twice except 6
    You should return 6
*/
//loop through the array
//create a hashmap storing occurrences [1:2,8:2,4:2,6:1]
//
function findUnique(input) {
    UCount = {}
    input.forEach( char => {
       UCount[char] = (UCount[char] || 0) + 1
    });
    for (char in UCount){
        if(UCount[char]==1){
            return parseInt(char)
        }
    }
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.findUnique = findUnique