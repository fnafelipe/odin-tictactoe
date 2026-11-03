const gameBoard = (() => {
  let boardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const getBoardState = () => boardState;

  const changeBoardState = (mark, row, column) => {
    if (!isSpotMarked(row, column)) {
      boardState[row][column] = mark;
    }
  };

  const isSpotMarked = (row, column) => Boolean(boardState[row][column]);

  return { getBoardState, changeBoardState };
})();

console.log(gameBoard.getBoardState());

gameBoard.changeBoardState("X", 1, 2);
gameBoard.changeBoardState("X", 0, 0);
console.log(gameBoard.getBoardState());

gameBoard.changeBoardState("O", 1, 2);
console.log(gameBoard.getBoardState());
