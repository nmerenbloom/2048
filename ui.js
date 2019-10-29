import Game from "./game.js"



export const zoinks = function (game) {

    const $root = $('#root');
    let empty = "";
    let message = `<p>Have Fun, Homie</p>`;
    let b = `<button type="button" class="b">Restart/New Game</button>`;
    let grid = `<div class="grid">`;
    for (let i = 0; i < game.size * game.size; i++) {
        if (game.board[i] == 0) {
            grid += `<div class="grid-container">
                    <div class="grid-item-0">~</div>
                    </div>`; 
                    continue;
        }

        if (game.board[i] == 4) {
            grid += `<div class="grid-container">
                    <div class="grid-item-4">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }

        if (game.board[i] == 8) {
            grid += `<div class="grid-container">
                    <div class="grid-item-8">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }

        if (game.board[i] == 16) {
            grid += `<div class="grid-container">
                    <div class="grid-item-16">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }

        if (game.board[i] == 32) {
            grid += `<div class="grid-container">
        <div class="grid-item-32">${game.board[i]}</div>
      </div>`; continue;
        }

        if (game.board[i] == 64) {
            grid += `<div class="grid-container">
                    <div class="grid-item-64">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }
        if (game.board[i] == 128) {
            grid += `<div class="grid-container">
                    <div class="grid-item-128">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }
        if (game.board[i] == 256) {
            grid += `<div class="grid-container">
                    <div class="grid-item-256">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }
        if (game.board[i] == 512) {
            grid += `<div class="grid-container">
                    <div class="grid-item-512">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }
        if (game.board[i] == 1024) {
            grid += `<div class="grid-container">
                    <div class="grid-item-1024">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }
        if (game.board[i] == 2048) {
            grid += `<div class="grid-container">
                    <div class="grid-item-2048">${game.board[i]}</div>
                    </div>`; 
                    continue;
        }

        grid += `<div class="grid-container">
        <div class="grid-item-2">${game.board[i]}</div>
      </div>`

    }
    let score = `<div class="score">Current Score: ${game.score}</div>`
    if (game.won == true) {
        message = `<p>Great Job! You Won!</p>`
    }
    if (game.over == true) {
        message = `<p>YOU LOST!</p>`
    }

    $root.html(game)
    $root.append(score)
    $root.append(grid)
    $root.append(b)
    $root.append(message);

    // $(document).on('click',`.b`,handleButtonPress);


}

$(function () {
    let game = new Game(4);
    zoinks(game);
    $(document).on('click', `.b`, function () {
        game.setupNewGame();

        const $root = $('#root');
        let message = `<p>Have Fun, Homie</p>`;
        let b = `<button type="button" class="b">Restart/New Game</button>`
        let grid = `<div class="grid">`;
        for (let i = 0; i < game.size * game.size; i++) {
            if (game.board[i] == 0) {
                grid += `<div class="grid-container">
            <div class="grid-item-0">~</div>
          </div>`; continue;
            }

            if (game.board[i] == 4) {
                grid += `<div class="grid-container">
        <div class="grid-item-4">${game.board[i]}</div>
      </div>`; continue;
            }

            if (game.board[i] == 8) {
                grid += `<div class="grid-container">
        <div class="grid-item-8">${game.board[i]}</div>
      </div>`; continue;
            }

            if (game.board[i] == 16) {
                grid += `<div class="grid-container">
        <div class="grid-item-16">${game.board[i]}</div>
      </div>`; continue;
            }

            if (game.board[i] == 32) {
                grid += `<div class="grid-container">
        <div class="grid-item-32">${game.board[i]}</div>
      </div>`; continue;
            }
            if (game.board[i] == 64) {
                grid += `<div class="grid-container">
                        <div class="grid-item-64">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 128) {
                grid += `<div class="grid-container">
                        <div class="grid-item-128">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 256) {
                grid += `<div class="grid-container">
                        <div class="grid-item-256">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 512) {
                grid += `<div class="grid-container">
                        <div class="grid-item-512">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 1024) {
                grid += `<div class="grid-container">
                        <div class="grid-item-1024">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 2048) {
                grid += `<div class="grid-container">
                        <div class="grid-item-2048">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }

            grid += `<div class="grid-container">
            <div class="grid-item-2">${game.board[i]}</div>
          </div>`

        }
        // for(let i=0; i<game.size * game.size; i++){
        //     grid += `<div class="grid-container">
        //     <div class="grid-item" >${game.board[i]}</div>

        //   </div>`
        // }
        let score = `<div class="score">Current Score: ${game.score}</div>`
        if (game.won == true) {
            message = `<p>Great Job! You Won!</p>`
        }
        if (game.over == true) {
            message = `<p>YOU LOST!</p>`
        }
        $root.html(game)
        $root.append(score)
        $root.append(grid)
        $root.append(b)
        $root.append(message)
    }
    );
    $(document).on('keydown', function (x) {
        x.preventDefault();
        if (x.keyCode == '38') { game.move('up'); }
        if (x.keyCode == '40') { game.move('down'); }
        if (x.keyCode == '39') { game.move('right'); }
        if (x.keyCode == '37') { game.move('left'); }

        const $root = $('#root');
        let message = `<p>Have Fun, Homie</p>`;
        let b = `<button type="button" class="b">Restart/New Game</button>`
        let grid = `<div class="grid">`;
        for (let i = 0; i < game.size * game.size; i++) {
            if (game.board[i] == 0) {
                grid += `<div class="grid-container">
            <div class="grid-item-0">~</div>
          </div>`; continue;
            }

            if (game.board[i] == 4) {
                grid += `<div class="grid-container">
        <div class="grid-item-4">${game.board[i]}</div>
      </div>`; continue;
            }

            if (game.board[i] == 8) {
                grid += `<div class="grid-container">
        <div class="grid-item-8">${game.board[i]}</div>
      </div>`; continue;
            }

            if (game.board[i] == 16) {
                grid += `<div class="grid-container">
        <div class="grid-item-16">${game.board[i]}</div>
      </div>`; continue;
            }

            if (game.board[i] == 32) {
                grid += `<div class="grid-container">
        <div class="grid-item-32">${game.board[i]}</div>
      </div>`; continue;
            }
            if (game.board[i] == 64) {
                grid += `<div class="grid-container">
                        <div class="grid-item-64">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 128) {
                grid += `<div class="grid-container">
                        <div class="grid-item-128">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 256) {
                grid += `<div class="grid-container">
                        <div class="grid-item-256">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 512) {
                grid += `<div class="grid-container">
                        <div class="grid-item-512">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 1024) {
                grid += `<div class="grid-container">
                        <div class="grid-item-1024">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }
            if (game.board[i] == 2048) {
                grid += `<div class="grid-container">
                        <div class="grid-item-2048">${game.board[i]}</div>
                        </div>`; 
                        continue;
            }

            grid += `<div class="grid-container">
            <div class="grid-item-2">${game.board[i]}</div>
          </div>`

        }

        let score = `<div class="score">Current Score: ${game.score}</div>`
        if (game.won == true) {
            message = `<p>Great Job! You Won!</p>`
        }
        if (game.over == true) {
            message = `<p>YOU LOST!</p>`
        }


        $root.html(game)
        $root.append(score)
        $root.append(grid)
        $root.append(b)
        $root.append(message)

    });
});
