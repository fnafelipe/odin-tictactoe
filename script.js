

function createPlayer(mark) {
  const getMarker = () => mark;

  return { getMarker };
}

const gameBoard = (() => {
  let boardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const getBoardState = () => structuredClone(boardState);

  const changeBoardState = (mark, row, column) => {
    if (!isSpotMarked(row, column)) {
      boardState[row][column] = mark;
      return true;
    }
    return false;
  };

  const isSpotMarked = (row, column) => Boolean(boardState[row][column]);

  const resetboardState = () => {
    boardState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };

  return { getBoardState, changeBoardState, resetboardState };
})();

const gameController = (() => {
  const playerOne = createPlayer("X");
  const playerTwo = createPlayer("O");
  let currentPlayer = playerOne;
  let isGameOver = false;

  const getCurrentPlayer = () => currentPlayer;

  const getIsGameOver = () => isGameOver;

  const turnPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  const checkTie = (currentBoard) => {
    if (!currentBoard.flat().includes("")) {
      isGameOver = true;
      console.log("the game was tied!");
    }
  };

  const checkWin = () => {
    let currentBoard = gameBoard.getBoardState();
    let mark = currentPlayer.getMarker();

    if (
      (currentBoard[0][0] === mark &&
        currentBoard[1][1] === mark &&
        currentBoard[2][2] === mark) ||
      (currentBoard[0][2] === mark &&
        currentBoard[1][1] === mark &&
        currentBoard[2][0] === mark)
    ) {
      console.log(`${mark} won!`);
      isGameOver = true;
    }

    for (let i = 0; i < 3; i++) {
      if (
        (currentBoard[0][i] === mark &&
          currentBoard[1][i] === mark &&
          currentBoard[2][i] === mark) ||
        (currentBoard[i][0] === mark &&
          currentBoard[i][1] === mark &&
          currentBoard[i][2] === mark)
      ) {
        console.log(`${mark} won!`);
        isGameOver = true;
      }
    }

    if (!isGameOver) {
      checkTie(currentBoard);
    }
  };

  const makePlay = (row, column) => {
    if (!isGameOver) {
      if (gameBoard.changeBoardState(currentPlayer.getMarker(), row, column)) {
        checkWin();
        if (!isGameOver) {
          turnPlayer();
        } else {
          console.log("Game ended!");
        }
      }
    } else {
      console.log("Game already ended!");
    }
  };

  return { getCurrentPlayer, getIsGameOver, turnPlayer, makePlay };
})();



/*
pode ignorar daqui pra baixos, sao só testes

gameController.makePlay(0, 2);
console.table(gameBoard.getBoardState());

gameController.makePlay(0, 1);
console.table(gameBoard.getBoardState());


gameController.makePlay(0, 0);
console.table(gameBoard.getBoardState());

gameController.makePlay(1, 1);
console.table(gameBoard.getBoardState());

gameController.makePlay(1, 0);
console.table(gameBoard.getBoardState());


gameController.makePlay(2, 0);
console.table(gameBoard.getBoardState());

gameController.makePlay(1, 2);
console.table(gameBoard.getBoardState());

gameController.makePlay(2, 2);
console.table(gameBoard.getBoardState());


gameController.makePlay(2, 1);
console.table(gameBoard.getBoardState());
gameController.makePlay(0, 1);
console.table(gameBoard.getBoardState());
gameController.makePlay(0, 2);
console.table(gameBoard.getBoardState());
gameController.makePlay(1, 1);
console.table(gameBoard.getBoardState());
gameController.makePlay(0, 2);
console.table(gameBoard.getBoardState());
gameController.makePlay(2, 0);
console.table(gameBoard.getBoardState());
gameController.makePlay(2, 1);
console.table(gameBoard.getBoardState());
gameController.makePlay(1, 2);

console.log(gameBoard.getBoardState());

gameBoard.changeBoardState("X", 1, 2);
gameBoard.changeBoardState("O", 1, 2);
console.log(gameBoard.getBoardState());

gameBoard.changeBoardState("O", 0, 0);
console.log(gameBoard.getBoardState());

gameBoard.resetboardState();
console.log(gameBoard.getBoardState());

const playerOne = createPlayer("X");
const playerTwo = createPlayer("O");

console.table(playerOne);
console.log(playerOne.getMarker());
console.log(playerTwo.getMarker());

console.table(gameController);
console.log(gameController.getCurrentPlayer().getMarker());
gameController.turnPlayer();
console.log(gameController.getCurrentPlayer().getMarker());

*/
