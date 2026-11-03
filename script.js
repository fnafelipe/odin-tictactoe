function createPlayer(mark) {
  const getMarker = () => mark;

  return { getMarker };
}

const gameController = (() => {
  const playerOne = createPlayer("X");
  const playerTwo = createPlayer("O");
  let currentPlayer = playerOne;

  const getCurrentPlayer = () => currentPlayer;

  const turnPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  return { getCurrentPlayer, turnPlayer };
})();


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

console.table(gameController);
console.log(gameController.getCurrentPlayer().getMarker());
gameController.turnPlayer();
console.log(gameController.getCurrentPlayer().getMarker());
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
*/
