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

  const getCurrentPlayer = () => currentPlayer;

  const turnPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  const makePlay = (row, column) => {
    if (gameBoard.changeBoardState(currentPlayer.getMarker(), row, column)) {
      turnPlayer();
    }
  };

  return { getCurrentPlayer, turnPlayer, makePlay };
})();

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

/*
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
