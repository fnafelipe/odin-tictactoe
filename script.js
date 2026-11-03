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

console.log(gameBoard.getBoardState());

gameBoard.changeBoardState("X", 1, 2);
gameBoard.changeBoardState("O", 1, 2);
console.log(gameBoard.getBoardState());

gameBoard.changeBoardState("O", 0, 0);
console.log(gameBoard.getBoardState());

gameBoard.resetboardState();
console.log(gameBoard.getBoardState());
