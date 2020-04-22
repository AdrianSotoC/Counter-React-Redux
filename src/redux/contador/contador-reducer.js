const contador = (previousState = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log(previousState);
      return previousState + 1;
    case "INCREMENT_TWO":
      console.log(previousState);
      return previousState + 2;
    case "DECREASE":
      console.log(previousState);
      return previousState - 1;
    case "DECREASE_TWO":
      console.log(previousState);
      return previousState - 2;
    case "RESET":
      console.log(previousState);
      return (previousState = 0);
    default:
      return previousState;
  }
};

export default contador;
