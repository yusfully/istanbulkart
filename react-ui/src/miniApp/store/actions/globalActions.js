import { useStore } from "../stores/GlobalProvider";

export const useGlobal = () => {
  const { stateGlobal, dispatchGlobal } = useStore();

  return {
    dimension: stateGlobal.dimension,
    width: stateGlobal.width,
    height: stateGlobal.height,
    deviceModel: stateGlobal.deviceModel,
    resolution: stateGlobal.resolution,
    os: stateGlobal.os,
    osVersion: stateGlobal.osVersion,
    screenSize: stateGlobal.screenSize,
    landscape: stateGlobal.landscape,
    onSize: (size) => dispatchGlobal({ type: "size", payload: size }),
    onRouter: (path) => dispatchGlobal({ type: "size", payload: path }),
    onDevice: (device) => dispatchGlobal({ type: "device", payload: device }),
    onLandscape: (lanscape) =>
      dispatchGlobal({ type: "landscape", payload: lanscape }),
  };
};
