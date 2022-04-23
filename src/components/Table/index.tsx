import React from "react";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { Table as MuiTable } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { TableExpandableItem } from "./sytles";

const Teste = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow>
        <TableCell colSpan={4}>June</TableCell>
        <TableCell style={{ padding: 0, marginLeft: "auto" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      {/* <Collapse in={open}> */}
      {open && (
        <>
          <TableRow>
            <TableCell>11/06/1992</TableCell>
            <TableCell>Prestacao Volvo</TableCell>
            <TableCell>Carro</TableCell>
            <TableCell>FixExpenses</TableCell>
            <TableCell>200$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>11/06/1992</TableCell>
            <TableCell>Prestacao Volvo</TableCell>
            <TableCell>Carro</TableCell>
            <TableCell>FixExpenses</TableCell>
            <TableCell>200$</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>11/06/1992</TableCell>
            <TableCell>Prestacao Volvo</TableCell>
            <TableCell>Carro</TableCell>
            <TableCell>FixExpenses</TableCell>
            <TableCell>200$</TableCell>
          </TableRow>
        </>
      )}
      {/* </Collapse> */}
    </>
  );
};

export function Table() {
  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Teste></Teste>
          <Teste></Teste>
          <Teste></Teste>
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
