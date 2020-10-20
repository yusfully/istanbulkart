import React from "react";
import { useFabric } from "./useFabric";
import { fabric } from "fabric";
import Template from "./Template";
import "./cardfront.scss";

const Fabric = () => {
  const ref = useFabric((fabricCanvas) => {
    var path = fabric.loadSVGFromString(vector, function (objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      obj
        .scaleToHeight(fabricCanvas.height)
        .set({ left: 50, top: 0 })
        .setCoords();

      fabricCanvas.add(obj).renderAll();
    });
  });
  return <canvas ref={ref} width={270} height={150} />;
};

export default Fabric;
