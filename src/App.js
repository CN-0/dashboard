import { useState, useEffect } from "react";
import Tile from "./components/Tile";
import Chart from "./components/Chart";
import MyTable from "./components/MyTable";
import { Box, Grid } from "@material-ui/core";

const App = () => {
  const [dataFromServer, setDataFromServer] = useState(false);

  useEffect(() => {
    async function getDataFromServer() {
      const res = await fetch("http://localhost:5000/data");
      const data = await res.json();
      setDataFromServer(data);
    }
    getDataFromServer();
  }, []);

  return (
    <>
      {dataFromServer ? (
        <Box display="flex" flexDirection="column" width="75%" margin="auto">
          <h1 style={{ textAlign: "center", marginTop: "12px" }}>Dashboard</h1>
          <Grid
            container
            spacing={5}
            style={{ paddingLeft: "20px", margin: "12px" }}
          >
            {dataFromServer.Tiles.map((tile, index) => {
              return <Tile key={index} data={tile} index={index} />;
            })}
          </Grid>
          <Chart
            title="Daily Order Trend"
            values={dataFromServer.DailyOrderTrend}
          />
          <MyTable
            data={dataFromServer.Orders.Top5Orders}
            title={"Top 5 Order"}
          />
          <MyTable
            data={dataFromServer.Orders.Bottom5Orders}
            title={"Bottom 5 Orders"}
          />
          <MyTable
            data={dataFromServer.Users.Top5Users}
            title={"Top 5 Users"}
          />
          <MyTable
            data={dataFromServer.Users.Bottom5Users}
            title={"Bottom 5 Users"}
          />
          <MyTable
            data={dataFromServer.DetailOrderReport}
            title="Detail Order Report"
          />
        </Box>
      ) : (
        "Data is being fetched from server"
      )}
    </>
  );
};

export default App;
