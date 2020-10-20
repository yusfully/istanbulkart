export const appReducer = (state, action) => {
  switch (action.type) {
    case "locationChange":
      return {
        location: action.payload,
      };

    default:
      return state;
  }
};
