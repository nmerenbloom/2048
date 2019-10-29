/*
Add your code for Game here
 */


export default class Game {

  toString() {
    let copy = this;
    console.table(this.to2d(copy.board));
    _t = true;
  }

  constructor(size) {
    this.gameState = {
      board: new Array,
      score: 0,
      won: false,
      over: false
    }

    this.board = new Array(size * size);
    this.score = 0;
    this.won = false;
    this.over = false;
    this.size = size;
    this.openSpaces = 14;

    this.onMoves = new Array;
    this. onWins = new Array;
    this.onLoses = new Array;

    // fills the board with 0's
    for (let i = 0; i < this.board.length; i++) { this.board[i] = 0; }
    // adds a 2 or a 4 at a random available location.
    this.addNum();
    this.addNum();
  }

  setupNewGame() {
    this.score = 0;
    this.won = false;
    this.over = false;
    for (let i = 0; i < this.board.length; i++) { this.board[i] = 0; }
    this.addNum();
    this.addNum();
    return this;
  }

  loadGame(gs) {
    this.board = gs.board;
    this.score = gs.score
    this.won = gs.won;
    this.over = gs.over;
    return this;
  }

  getGameState() {
    let result = new Object;
    result.board = this.board;
    result.score = this.score;
    result.won = this.won;
    result.over = this.over;
    return result;
  }

  onMove(callback) {
    this.onMoves.push(callback);
  }

  onWin(callback) {
    this.onWins.push(callback);
  }

  onLose(callback) {
    this.onLoses.push(callback);
  }


  move(direction) {
    let openSpacesCount = 0;

    var copy = new Array;
    var copy00 = new Array;
    for (let i = 0; i < this.board.length; i++) {
      copy[i] = this.board[i];
      copy00[i] = this.board[i];
    }

    var gridcopy = this.to2d(copy);
    var beforeMove = gridcopy;



    if (direction == "right") {
      console.log("right slide triggered");
      for (let i = 0; i < this.size; i++) {
        let arr0 = gridcopy[i];
        arr0 = slideDownRight(arr0);
        arr0 = this.addRowRight(arr0);
        arr0 = slideDownRight(arr0);
        gridcopy[i] = arr0;
        copy = this.to1d(gridcopy);
        this.board = copy;

      }

    }

    if (direction == 'left') {
      console.log("left slide triggered");
      for (let i = 0; i < this.size; i++) {
        let arr0 = gridcopy[i];
        arr0 = slideUpLeft(arr0);
        arr0 = this.addRow(arr0);
        arr0 = slideUpLeft(arr0);
        gridcopy[i] = arr0;
        copy = this.to1d(gridcopy);
        this.board = copy;
      }

    }
    //    similar to move left
    if (direction == "up") {
      console.log("up slide triggered");
      for (let i = 0; i < this.size; i++) {
        var col = gridcopy.map(function (value, index) { return value[i]; });
        col = slideUpLeft(col);
        col = this.addRow(col);
        col = slideUpLeft(col);
        gridcopy = setCol(gridcopy, i, col);
        copy = this.to1d(gridcopy);
        this.board = copy;

      }
    }
    // similar to right
    if (direction == "down") {
      console.log("down slide triggered");
      for (let i = 0; i < this.size; i++) {
        var col = gridcopy.map(function (value, index) { return value[i]; });
        col = slideDownRight(col);
        col = this.addRowRight(col);
        col = slideDownRight(col);
        gridcopy = setCol(gridcopy, i, col);
        copy = this.to1d(gridcopy);
        this.board = copy;

      }
    }
    // console.log(copy00);
    // console.log(copy);
    if (JSON.stringify(copy00) == JSON.stringify(copy)) {
      // console.log("Moving does not change the board so no new number is added");
    } else {
      this.addNum();
    }

    for(let x = 0; x < this.onMoves.length; x++){
      this.onMoves[x](this.gameState);
    }

    // checks if there is a 2048 tile -> this.won = true
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] == 2048) { 
        this.won = true; 
        console.log("GAME WON!") 
        for(let x = 0; x < this.onWins.length; x++){
          this.onWins[x](this.gameState);
        }
      }
    }
    // checks how many open spaces there are
    openSpacesCount = 0;
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] == 0) {
        openSpacesCount++;
      }
      this.openSpaces = openSpacesCount;
    }
    // checks if the game is lost
    if (this.openSpaces == 0) {
      if (this.checkLose()) {
        console.log("YOU LOSE!!!");
        this.over = true;
        for(let x = 0; x < this.onLoses.length; x++){
          this.onLoses[x](this.gameState);
        }
      }
    }

  }

  checkLose() {
    let g = new Array;
    g = this.to2d(this.board);
    let gameover = true;
    let curr, top, bottom;
    // let top;
    // let bottom;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        curr = g[i][j];
        // console.log("SIZE: " + this.size);
        if (i < this.size - 1) {
          top = g[i + 1][j];
          if (curr == top) { gameover = false; return gameover; }
        }
        if (i > 0) { bottom = g[i - 1][j]; }
        let left = g[i][j - 1];
        let right = g[i][j + 1];

        if (curr == 0) { gameover = false; return gameover; }
        // console.log(i);
        // console.log("TOP: " + top);
        // console.log("CURR: " + curr);

        if (curr == bottom || curr == right || curr == left) {
          // console.log("TT"); 
          // console.log(curr); 
          gameover = false;
          return gameover;
        }
      }
    }
    return gameover;
  }

  addNum() {
    let x = this.size * this.size;
    let options = new Array;
    // console.log(options);
    for (let i = 0; i < x; i++) {
      if (this.board[i] == 0) {
        options.push(i);
      }
    }
    if (options.length > 0) {
      let randomAvailableIndex = getRandomInt(0, options.length - 1);
      this.board[options[randomAvailableIndex]] = get2or4();
    } else {
      console.log("Game Over?");
    }

    // console.log(options);

  }

  to1d(double_array) {
    var newArr = [];
    for (var i = 0; i < double_array.length; i++) {
      newArr = newArr.concat(double_array[i]);
    }
    return newArr;
  }
  to2d(linearBoard) {
    var copy = new Array;
    for (let i = 0; i < linearBoard.length; i++) {
      copy[i] = linearBoard[i];
    }

    var newArr = [];
    var troy = Math.sqrt(copy.length);
    while (copy.length) { newArr.push(copy.splice(0, troy)); }
    return newArr;
  }
  addScore(r1, r2) {
    this.score += r1 + r2
  }

  addRowRight(row) {
    for (let i = row.length - 1; i > 0; i--) {
      let r1 = row[i];
      let r2 = row[i - 1];
      if (r1 == r2) {
        if (r1 == 0 || r2 == 0) { continue; }
        row[i] = r1 + r2;
        row[i - 1] = 0;
        this.addScore(r1, r2);
      }
    }
    return row;
  }

  addRow(row) {
    for (let i = 0; i < row.length - 1; i++) {
      let r1 = row[i];
      let r2 = row[i + 1];
      if (r1 == r2) {
        if (r1 == 0 || r2 == 0) { continue; }
        row[i] = r1 + r2;
        row[i + 1] = 0;
        this.addScore(r1, r2);
      }
    }
    return row;
  }

  // end of Game class
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function get2or4() {
  let x = getRandomInt(1, 10);
  let result;
  if (x <= 9) {
    result = 2;
  } else {
    result = 4;
  }
  return result;
}

function setCol(matrix, col_num, new_vals) {
  for (var i = 0; i < matrix.length; i++) {
    matrix[i][col_num] = new_vals[i];
  }
  return matrix;
}


function slideUpLeft(row) {
  let arr = row.filter(x => x);
  let m = row.length - arr.length;
  let zeros = Array(m).fill(0);
  arr = arr.concat(zeros);
  return arr;
}


function slideDownRight(row) {
  // console.log("before slide: " + row);
  let arr = row.filter(x => x);
  let m = row.length - arr.length;
  let zeros = Array(m).fill(0);
  arr = zeros.concat(arr);
  // console.log("after slide " + row);
  return arr;
}

// ---------------------------------------






