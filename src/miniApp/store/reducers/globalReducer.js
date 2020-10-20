export const globalReducer = (state, action) => {
  switch (action.type) {
    case "size":
      return {
        ...state,
        dimension: action.payload.dimension,
        width: action.payload.width,
        height: action.payload.height,
      };
    case "device":
      return {
        ...state,
        deviceModel: action.payload.device,
        resolution: action.payload.res,
        os: action.payload.os,
        osVersion: action.payload.osVersion,
        screenSize: action.payload.screenSize,
      };
    case "router":
      return {
        ...state,

        path: action.payload.path,
      };
    case "landscape":
      return {
        ...state,

        landscape: action.payload.landscape,
      };
    default:
      return state;
  }
};
