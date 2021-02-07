import React from "react";
import { View } from "react-native";
import Svg, { Path, Line } from "react-native-svg";
import { LineChart } from "react-native-svg-charts";

export default function Plot({ styles }) {
  const data = Array.from({ length: 101 }, (_, i) => (i - 50) ** 2);
  return (
    <View style={{ ...styles, alignItems: "center" }}>
      <Svg
        viewBox="0 0 321 322"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <Path
          d="M320.709 161.586C320.904 161.391 320.904 161.074 320.709 160.879L317.527 157.697C317.332 157.502 317.015 157.502 316.82 157.697C316.625 157.892 316.625 158.209 316.82 158.404L319.648 161.232L316.82 164.061C316.625 164.256 316.625 164.573 316.82 164.768C317.015 164.963 317.332 164.963 317.527 164.768L320.709 161.586ZM0.355469 161.732H320.355V160.732H0.355469V161.732Z"
          fill="black"
        />
        <Path
          d="M160.709 0.878868C160.514 0.683606 160.197 0.683606 160.002 0.878868L156.82 4.06085C156.625 4.25611 156.625 4.57269 156.82 4.76796C157.015 4.96322 157.332 4.96322 157.527 4.76796L160.355 1.93953L163.184 4.76796C163.379 4.96322 163.696 4.96322 163.891 4.76796C164.086 4.57269 164.086 4.25611 163.891 4.06085L160.709 0.878868ZM160.855 321.232L160.855 1.23242L159.855 1.23242L159.855 321.232L160.855 321.232Z"
          fill="black"
        />
        <Line
          x1="193.859"
          y1="157.232"
          x2="193.859"
          y2="165.232"
          stroke="black"
        />
        <Line
          x1="156.359"
          y1="128.73"
          x2="164.359"
          y2="128.73"
          stroke="black"
        />
      </Svg>
      <LineChart
        style={{ width: "50%", height: "50%" }}
        data={data}
        svg={{ stroke: "blue" }}
      ></LineChart>
    </View>
  );
}
