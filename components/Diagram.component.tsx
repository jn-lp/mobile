import React from "react";
import { PieChart } from "react-native-svg-charts";

export default function Diagram({ styles }) {
  const data = [
    {
      key: 1,
      value: 35,
      svg: { fill: "seagreen" },
    },
    {
      key: 2,
      value: 40,
      svg: { fill: "gold" },
    },
    {
      key: 3,
      value: 25,
      svg: { fill: "crimson" },
    },
  ];

  return <PieChart style={styles} innerRadius={"50%"} data={data} />;
}
