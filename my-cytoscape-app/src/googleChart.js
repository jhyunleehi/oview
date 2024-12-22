import { Chart } from "react-google-charts";

function MyChart(props) {
  return (
    <Chart
      chartType="ScatterChart"
      data={[
        ["Age", "Weight"],
        [4, 16],
        [8, 25],
        [12, 40],
        [16, 55],
        [20, 70],
      ]}
      options={{
        title: "Average Weight by Age",
      }}
      legendToggle
    />
  );
}

export default MyChart; // MyChart를 기본 내보내기
