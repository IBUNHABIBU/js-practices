// const wordSearch = (board, word) => {
//     const wordLength = word.length;
//     const boardLength = board.length;
//     const boardWidth = board[0].length;
    
//     for (let i = 0; i < boardLength; i++) {
//         for (let j = 0; j < boardWidth; j++) {
//         if (wordSearchHelper(board, word, i, j, 0)) {
//             return true;
//         }
//         }
//     }
//     return false;
// }

// const wordSearchHelper = (board, word, i, j, index) => {
//     if (index === word.length) {
//         return true;
//     }
//     if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) {
//         return false;
//     }
//     board[i][j] = '*';
//     const found = wordSearchHelper(board, word, i + 1, j, index + 1) || wordSearchHelper(board, word, i - 1, j, index + 1) || wordSearchHelper(board, word, i, j + 1, index + 1) || wordSearchHelper(board, word, i, j - 1, index + 1);
//     board[i][j] = word[index];
//     return found;
// }

const wordSearch = (board, word) => {
    // a map to keep track of visited cells
    
}