import keypress from 'keypress';
import Game from "./engine/game";

keypress(process.stdin);


/**
 * The code in this file is used to run your game in the console. Use it
 * to help develop your game engine.
 *
 */

 

let game = new Game(4);
// console.log(game.toString());

// console.table(game.board);
// game.move('right');
// console.table(game.board);
// console.log(game.getGameState());


let gs = { 
    // board: [ 4, 16, 16, 16, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0 ],
    board: [ 16,  8,  2,  8,
        2,  128,  16,  32,
         4,  32,  8,  2,
         1024,  1024,  16,  77],
    //  board: [ 0, 0, 8, 3, 4, 0, 0, 1024, 0, 2, 0, 16, 0, 0, 2, 0, 5, 2, 6, 2, 6, 2, 0, 8, 18 ],
    score: 422,
    won: false,
    over: false 
}
// var z = 4 % 7;
// // console.log(z);
// // console.log(game.loadGame(gs));
// game.loadGame(gs);
// // // game.addNum();
// // // game.setupNewGame();
// // console.log(game.over);
// // console.table(game.to2d(game.board));
// game.move("left");
// // console.table(game.to2d(game.board));
// // console.log(game.over);
// game.move("down");
// // console.table(game.to2d(game.board));
// // console.log(game.over);
// game.move("left");
// // console.table(game.to2d(game.board));
// // console.log(game.over);
// game.move("down");
// // console.table(game.to2d(game.board));
// // console.log(game.over);
// game.move("down");
// // console.table(game.to2d(game.board));
// game.move("down");  
// // console.table(game.to2d(game.board));
// game.move("down");
// console.table(game.to2d(game.board));
// game.move("down");
// console.table(game.to2d(game.board));
// game.move("down");
// console.table(game.to2d(game.board));
// var two_d = [[1,2,3],[4,5,6],[7,8,9]];
// console.table(two_d);
// var col = two_d.map(function (value, index) { return value[2]; });
// console.log(col);
// var new_col = [420, 69, 13];

// function setCol(matrix, col_num, new_vals){
//     // var column = [];
//     for(var i=0; i<matrix.length; i++){
//        matrix[i][col_num] = new_vals[i];
//     }
//     return matrix;
//   }

//   console.table(setCol(two_d, 2, new_col));



game.onMove(gameState => {
    console.log(game.toString());
    console.log(game.gameState);
});

game.onWin(gameState => {
    console.log('You won with a gameState of...', gameState)
});

game.onLose(gameState => {
    console.log('You lost! :(', gameState)
    console.log(`Your score was ${gameState.score}`);
});

process.stdin.on('keypress', function (ch, key) {
    switch (key.name) {
        case 'right':
            game.move('right');
            break;
        case 'left':
            game.move('left');

            break;
        case 'down':
            game.move('down');

            break;
        case 'up':
            game.move('up');
            break;
    }
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});


process.stdin.setRawMode(true);
process.stdin.resume();

