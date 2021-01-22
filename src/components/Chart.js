import React, { useState } from "react";
import ZingChart from "zingchart-react";
import "zingchart/es6";

function Chart(props) {
  const [data] = useState({
    config: {
      type: "line",
      series: [
        {
          values: props.values,
          "line-color": "#1565c0",
          "line-width": 3,
          marker: {
            "background-color": "#1565c0",
          },
        },
      ],
      "scale-y": {
        "line-color": "#fff",
        values: "0:50000:1000",
        guide: {
          "line-style": "dotted",
        },
      },
    },
  });
  return (
    <div style={{ marginTop: 25 }}>
      <h2 style={{ marginBottom: "-30px", zIndex: 1000, position: "relative" }}>
        {props.title}
      </h2>
      <ZingChart data={data.config} />
      <p className="description">Order Amount</p>
    </div>
  );
}

export default Chart;
