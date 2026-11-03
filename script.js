const gameBoard = (() => {
  let boardState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const getBoardState = () => boardState;

  return { getBoardState };
})();

console.log(gameBoard.getBoardState());
