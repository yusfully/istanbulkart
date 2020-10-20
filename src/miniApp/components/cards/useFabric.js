import React, { useRef, useCallback } from "react";
import { fabric } from "fabric";
const vector = ` <svg version="1.1" id="cardfront" x="0px" y="0px" viewBox="0 0 750 470">
<g id="Front">
  <g id="CardBackground">
    <rect fill="#000000" width="750" height="470"></rect>
  </g>
  <text
    transform="matrix(1 0 0 1 50 420)"
    id="svgnumber"
    class="st2 st3 st4"
  >
    {number}
  </text>
  <text
    transform="matrix(1 0 0 1 50 350)"
    id="svgname"
    class="st2 st5 st6"
  >
    {name}
  </text>

  <g transform="matrix(1 0 0 1 600 241.5)">
    <text transform="translate(100%,0)" class="st2 st10 st11 amount">
      {amount}
    </text>
  </g>
  <g transform="matrix(1 0 0 1 0 50)" id="logo">
    <svg width="400" height="100" viewBox="0 0 280 60">
      <g data-name="Group 1842">
        <path
          data-name="Path 77"
          d="M54.605 8.506a8.502 8.502 0 10-17.005 0 5.942 5.942 0 00.067.932h-.018l.049.2c.013.061.029.116.045.173a518.88 518.88 0 002.049 7.937 46.624 46.624 0 011.212 8.223v12.382a.246.246 0 00.246.246h9.7a.246.246 0 00.246-.246V25.969a46.793 46.793 0 011.212-8.223c.793-2.952 1.67-6.418 2-7.746a3.3 3.3 0 00.1-.4l.04-.159h-.014a6.188 6.188 0 00.071-.935zm-8.5 6.233a6.233 6.233 0 116.234-6.233 6.233 6.233 0 01-6.237 6.234z"
          fill="#ffbf00"
        />
        <path
          data-name="Path 78"
          d="M70.065 38.698c-9.7 0-11.515-5.706-11.1-12.19h7.832c0 3.579.157 6.589 4.463 6.589 2.645 0 3.942-1.713 3.942-4.255 0-6.743-15.77-7.159-15.77-18.312 0-5.861 2.8-10.53 12.346-10.53 7.625 0 11.412 3.424 10.893 11.256h-7.625c0-2.8-.468-5.653-3.632-5.653-2.542 0-4.047 1.4-4.047 3.995 0 7.106 15.771 6.485 15.771 18.259.001 9.699-7.112 10.841-13.073 10.841z"
          fill="#ffbf00"
        />
        <path
          data-name="Path 79"
          d="M111.188.623v6.224h-8.714v31.229h-7.832V6.847h-8.716V.623z"
          fill="#ffbf00"
        />
        <path
          data-name="Path 80"
          d="M109.969 38.076L120.344.623h10.322l10.169 37.453h-8.248l-2.076-8.3h-10.686l-2.128 8.3zm15.094-30.244h-.1l-3.579 16.185h7.469z"
          fill="#ffbf00"
        />
        <path
          data-name="Path 81"
          d="M144.669 38.076V.623h10.582l9.959 25.937h.1V.623h7.314v37.453h-10.319l-10.219-27.391h-.1v27.391z"
          fill="#ffbf00"
        />
        <path
          data-name="Path 82"
          d="M179.42 38.076V.623h13.9c5.966 0 10.9 1.711 10.9 9.7 0 4.306-2.129 7.417-6.382 8.248v.1c5.551.779 7 4.358 7 9.493 0 9.493-8.248 9.908-11.567 9.908zm7.832-22.151h5.24c1.713 0 4.1-1.14 4.1-4.772a4.488 4.488 0 00-4.513-4.774h-4.824zm0 16.393h4.358c1.661 0 5.4-.052 5.4-5.292 0-3.319-1.245-5.343-5.187-5.343h-4.566z"
          fill="#ffbf00"
        />
        <path
          data-name="Path 83"
          d="M236.494.623v26.56c0 5.6-3.164 11.515-12.709 11.515-8.611 0-12.761-4.461-12.761-11.515V.623h7.833v26.04c0 4.618 1.971 6.434 4.824 6.434 3.424 0 4.981-2.284 4.981-6.434V.623z"
          fill="#ffbf00"
        />
        <path
          data-name="Path 84"
          d="M242.928 38.076V.623h7.832v31.224h11.724v6.226z"
          fill="#ffbf00"
        />
        <g data-name="Group 22" fill="#fff">
          <path
            data-name="Path 85"
            d="M192.315 38.464h6.367l-7.749 12.429 7.749 15.269h-6.521l-6.636-14.194h-.078v14.194h-5.793v-27.7h5.793v11.856h.078z"
          />
          <path
            data-name="Path 86"
            d="M199.221 66.162l7.673-27.7h7.634l7.52 27.7h-6.1l-1.536-6.139h-7.9l-1.574 6.139zm11.164-22.366h-.078l-2.647 11.97h5.525z"
          />
          <path
            data-name="Path 87"
            d="M230.45 66.162h-5.794v-27.7h10.7c3.952 0 6.485 2.531 6.485 7.251 0 3.529-1.382 6.176-5.142 6.79v.076c1.267.154 5.026.461 5.026 5.447 0 1.765.116 6.983.652 8.134h-5.679c-.766-1.689-.614-3.568-.614-5.372 0-3.3.307-6.1-4.143-6.1h-1.5zm0-15.73h2.571c2.3 0 2.954-2.3 2.954-4.065 0-2.647-1.113-3.646-2.954-3.646h-2.571z"
          />
          <path
            data-name="Path 88"
            d="M262.599 38.464v4.6h-6.443v23.094h-5.792v-23.09h-6.445v-4.6z"
          />
        </g>
        <path
          data-name="Rectangle 10"
          fill="#ffbf00"
          d="M0 37.538h262.497v1.935H0z"
        />
      </g>
    </svg>
    <g>
      <g>
        <rect x="82" y="70" class="st12" width="1.5" height="60" />
      </g>
      <g>
        <rect x="167.4" y="70" class="st12" width="1.5" height="60" />
      </g>
      <g>
        <path
          class="st12"
          d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
        c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
        C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
        c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
        c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
        />
      </g>
      <g>
        <rect x="82.8" y="82.1" class="st12" width="25.8" height="1.5" />
      </g>
      <g>
        <rect x="82.8" y="117.9" class="st12" width="26.1" height="1.5" />
      </g>
      <g>
        <rect x="142.4" y="82.1" class="st12" width="25.8" height="1.5" />
      </g>
      <g>
        <rect x="142" y="117.9" class="st12" width="26.2" height="1.5" />
      </g>
    </g>
  </g>
</g>
</svg>`;
export const useFabric = (onChange) => {
  const fabricRef = useRef();
  const disposeRef = useRef();
  return useCallback((node) => {
    if (node) {
      fabricRef.current = new fabric.Canvas(node, {
        width: node.clientWidth,
        height: node.clientHeight,
      });
      if (onChange) {
        disposeRef.current = onChange(fabricRef.current);
      }
    } else if (fabricRef.current) {
      fabricRef.current.dispose();
      if (disposeRef.current) {
        disposeRef.current();
        disposeRef.current = undefined;
      }
    }

    fabric.loadSVGFromString(vector, function (objects, options) {
      var obj = fabric.util.groupSVGElements(objects, options);
      obj
        .scaleToHeight(fabricRef.current.height)
        .set({ left: 0, top: 0 })
        .setCoords();

      fabricRef.current.add(obj).renderAll();
    });
  }, []);
};
