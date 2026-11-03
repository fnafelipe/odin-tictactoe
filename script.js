const gameBoard = (() => {
  let boardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const getBoardState = () => boardState;

  const changeBoardState = (mark, row, column) => {
    if (!boardState[row][column]) {
      boardState[row][column] = mark;
    }
  };

  return { getBoardState, changeBoardState };
})();

console.log(gameBoard.getBoardState());

gameBoard.changeBoardState("X", 1, 2);
console.log(gameBoard.getBoardState());
