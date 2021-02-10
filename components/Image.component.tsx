import React, { useState, useEffect } from "react";
import { Image as Img } from "react-native";

const unit = 25;

export default function Image({ order, image, size }) {
  let left = 0,
    top = 0;
  switch (order % 10) {
    case 1:
      left = unit;
      break;
    case 2:
      top = unit;
      break;
    case 3:
      left = unit * 3;
      break;
    case 4:
      top = unit;
      left = unit * 3;
      break;
    case 5:
      top = unit * 2;
      break;
    case 6:
      top = unit * 2;
      left = unit * 2;
      break;
    case 7:
      top = unit * 2;
      left = unit * 3;
      break;
    case 8:
      top = unit * 3;
      left = unit * 2;
      break;
    case 9:
      top = unit * 3;
      left = unit * 3;
      break;
  }

  return (
    <Img
      source={{
        uri: image.previewURL,
      }}
      style={{
        backgroundColor: "#777",
        position: "absolute",
        left: `${left}%`,
        top: `${top}%`,
        width: `${unit * size}%`,
        height: `${unit * size}%`,
      }}
      resizeMode="contain"
    />
  );
}
