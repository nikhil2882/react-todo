const initialState = {
  counter: 0,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return {
        counter: state.counter + 1,
      };

    case "DEC":
      return {
        counter: state.counter - 1,
      };

    case "DECBY10":
      return {
        counter: action.payload,
      };

    default:
      return state;
  }
}
