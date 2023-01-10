/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

//find the 2 smallest numbers in the array and add them
//you can sort the array from smallest to largest - ascending order 
//then get the 1st 2 smallest and add them up 
function sumTwoSmallestNumbers(nums) {
    nn = nums.sort((a,b)=> a -b) // sorts in ascending order
    //console.log(nums)
    return nn[0] + nn[1]
    
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers