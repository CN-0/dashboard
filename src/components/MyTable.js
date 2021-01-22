import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function MyTable(props) {
  return (
    <div style={{ marginTop: 30 }}>
      <h2>{props.title}</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(props.data[0]).map((item) => (
                <TableCell key={item} align="center">
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((order, index) => (
              <TableRow key={index}>
                {Object.keys(order).map((item) => (
                  <TableCell key={item} align="center">
                    {order[item]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MyTable;
