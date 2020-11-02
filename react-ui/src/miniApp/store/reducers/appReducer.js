
export const ActionTypes = {
  scrolling: "scrolling",
  scrollingFinish: "finishScroll",
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.urlChange:
      return {
        ...state,
        prevLocation: state.location,
        location: action.location,
      };
    case ActionTypes.addPage:
      if (state.pages["id"] !== undefined) return state;
      return {
        ...state,
        pages: {
          ...state.pages,
          [action["id"]]: action.page,
        },
      };

    default:
      return state;
  }
};
