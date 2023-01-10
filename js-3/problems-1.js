/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/
//descending - largest to smallest 8 7 6
//ascending - smallest to largest 1 2 3 4
function isSortedAndHow(nums) {
    let isAscending = true
    let isDescending = true
    for (let i = 0; i< nums.length-1; i++){
        isDescending = isDescending && (nums[i]> nums[i+1])
        isAscending = isAscending && (nums[i] < nums[i+1])     
    }
    if(isDescending){
        return "yes, descending"
    }
    else if(isAscending){
        return "yes, ascending"
    }
    else{
        return "no"
    }
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow