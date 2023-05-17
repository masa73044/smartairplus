import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const StatisticsChart = () => {
  const option = {
    color: ["var(--orange)"],

    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    legend: {
      data: ["PM2.5", "PM10"],
    },

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(0,0,0,0.59)",
      borderWidth: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
      show: false,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "PM2.5",
        type: "line",
        color: "red",
        smooth: false,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(229,104,100)",
              //   color: "red",
            },
            {
              offset: 1,
              // color: "rgb(181,221,113)",
              color: "rgb(229,104,100)",

              //   color: "green",
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              //   color: "#FE4C00",

              // color: "rgb(229,104,100)",
              color: "red",
            },
            {
              offset: 1,
              //   color: "rgb(181,221,113)",
              color: "rgba(255,144,70,0.1)",

              //   color: "green",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        showSymbol: false,
        data: [30, 31, 30, 20, 11, 32, 18],
      },
      {
        name: "PM10",
        type: "line",
        color: "orange",
        smooth: false,
        lineStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              // color: "rgb(229,104,100)",
              //   color: "red",
              color: "orange",
            },
            {
              offset: 1,
              // color: "rgb(181,221,113)",
              color: "orange",

              //   color: "green",
            },
          ]),
          width: 4,
        },
        areaStyle: {
          opacity: 0.5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
            {
              offset: 0,
              //   color: "#FE4C00",

              // color: "rgb(229,104,100)",
              color: "orange",
              //   color: "red",
            },
            {
              offset: 1,
              //   color: "rgb(181,221,113)",
              color: "rgba(255,144,70,0.1)",

              //   color: "green",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        showSymbol: false,
        data: [30, 32, 33, 34, 35, 35, 35],
      },
    ],
  };

  return <ReactECharts option={option} />;
};

export default StatisticsChart;
