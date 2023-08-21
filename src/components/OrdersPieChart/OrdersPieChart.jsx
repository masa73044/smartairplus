import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const OrdersPieChart = () => {
  const option = {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          // color: "#1158E2",
          color: "green",
        },
        {
          offset: 1,
          color: "#42B5F2",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        // { offset: 0, color: "#BC1FD7" },
        { offset: 0, color: "yellow" },

        {
          offset: 1,
          // color: "#7F1DD1",
          color: "yellow",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        // { offset: 0, color: "#E8A618" },
        { offset: 0, color: "orange" },

        {
          offset: 1,
          // color: "#EB6B36",
          color: "orange",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        // { offset: 0, color: "#D131BE" },
        { offset: 0, color: "red" },

        {
          offset: 1,
          // color: "#BF1575",
          color: "red",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        // { offset: 0, color: "#D131BE" },
        { offset: 0, color: "purple" },

        {
          offset: 1,
          // color: "#BF1575",
          color: "purple",
        },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        // { offset: 0, color: "#D131BE" },
        { offset: 0, color: "maroon" },

        {
          offset: 1,
          // color: "#BF1575",
          color: "maroon",
        },
      ]),
    ],
    series: [
      {
        name: "Item",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 50,
          borderColor: "black",
          borderWidth: 5,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        data: [
          { value: 10, name: "0-50" },
          { value: 10, name: "51-100" },
          { value: 25, name: "101-150" },
          { value: 25, name: "151-200" },
          { value: 15, name: "201-300" },
          { value: 25, name: "300+" },
        ],
      },
    ],
  };
  return (
    <ReactECharts style={{ height: 140, marginTop: "1rem" }} option={option} />
  );
};

export default OrdersPieChart;
