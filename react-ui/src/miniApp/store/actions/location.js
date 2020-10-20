import { useStore } from "../stores/GlobalProvider";

export const useChange = () => {
  const { state, dispatch } = useStore();

  return {
    path: state.location.path,
    onChangeLocation: (path) =>
      dispatch({ type: "locationChange", payload: path }),
  };
};
