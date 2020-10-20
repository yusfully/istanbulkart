export const navBarReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,

        count: state.count + 1,
        message: action.message,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
        message: action.message,
      };
    case "reset":
      return {
        ...state,

        count: 0,
        message: action.message,
      };
    default:
      return state;
  }
};
