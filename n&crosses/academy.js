// Make your changes to store and update game state in this file
let board = [[null, null, null], 
[null, null, null], 
[null, null, null]]
let isNought = true
// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    if (isNought && board[row][column] == null){
        counter += 1
        board[row][column] = "nought"
        isNought = false
    }
    else if (board[row][column] == null){
        counter += 1
        board[row][column] = "cross"
        isNought = true
    }
    console.log("takeTurn was called with row: "+row+", column:"+column);
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
let counter = 0
function checkWinner() {
    console.log("checkWinner was called");
    //let's create a function that does the easy work for us
    function theSame(x,y,z){
        return (x!= null && x==y && y==z)
    }
    //check that the rows match
    for(let i = 0; i<3; i++){
        if(theSame(board[i][0], board[i][1], board[i][2])){
           let winner = board[i][0] 
           if (winner == "cross"){
            return "crosses"
           }
           else{
            return "noughts"
           }
        }
    }

    //check that the columns match
    for(let i = 0; i<3; i++){
        if(theSame(board[0][1], board[1][i], board[2][i])){
           let winner = board[0][i] 
           if (winner == "cross"){
            return "crosses"
           }
           else{
            return "noughts"
           }
        }
    }
    //check that the diagonals match
    //this will be 2 sides
    //left diagonal side
    if(theSame(board[0][0], board[1][1], board[2][2])){
        let winner = board[0][0] 
        if (winner == "cross"){
        return "crosses"
        }
        else{
        return "noughts"
        }
    }
    //right diagonal side
    if(theSame(board[0][2], board[1][1], board[2][0])){
        let winner = board[0][2] 
        if (winner == "cross"){
        return "crosses"
        }
        else{
        return "noughts"
        }
    }
    //if they draw then the nobody has won
    if(counter >= 9){
        return "nobody"
    }
    //no conditions are met here
    return null;
}


// Set the game state back to its original state to play another game.
function resetGame() {
    isNought = true
    counter = 0
    board = [[null, null, null], [null, null, null], [null, null, null]]
    console.log("resetGame was called");
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
