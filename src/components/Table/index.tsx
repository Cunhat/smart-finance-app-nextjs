import React from "react";
import { Table as MuiTable } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { TableExpandableItem } from "./sytles";
import { withStyles } from "@material-ui/core/styles";
import { TextInput } from "./Inputs";

type ExpandableItemsProps = {
  open: boolean;
};

function ExpandableItems(props: ExpandableItemsProps) {
  return (
    <>
      <TableCell colSpan={5} style={{ padding: "0px" }}>
        <TableExpandableItem>
          <p>June 2022</p>
          {props.open ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </TableExpandableItem>
      </TableCell>
    </>
  );
}

const Teste = () => {
  const [open, setOpen] = React.useState(false);

  const StyledTableCell = withStyles((theme) => ({
    root: {
      fontFamily: "Smart Finance Regular",
      fontSize: "14px",
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:hover": {
        background: "#f9f9f9",
        cursor: "pointer",
      },
    },
  }))(TableRow);

  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <ExpandableItems open={open} />
      </TableRow>

      {open && (
        <>
          <StyledTableRow>
            <StyledTableCell>11/06/1992</StyledTableCell>
            <StyledTableCell>
              <TextInput text="Volvo" />
            </StyledTableCell>
            <StyledTableCell>Carro</StyledTableCell>
            <StyledTableCell>FixExpenses</StyledTableCell>
            <StyledTableCell>200$</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>11/06/1992</StyledTableCell>
            <StyledTableCell>Prestacao Volvo</StyledTableCell>
            <StyledTableCell>Carro</StyledTableCell>
            <StyledTableCell>FixExpenses</StyledTableCell>
            <StyledTableCell>200$</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell>11/06/1992</StyledTableCell>
            <StyledTableCell>Prestacao Volvo</StyledTableCell>
            <StyledTableCell>Carro</StyledTableCell>
            <StyledTableCell>FixExpenses</StyledTableCell>
            <StyledTableCell>200$</StyledTableCell>
          </StyledTableRow>
        </>
      )}
    </>
  );
};

const StyledTable = withStyles((theme) => ({
  root: {},
}))(MuiTable);

const StyledTableCell = withStyles((theme) => ({
  root: {
    fontFamily: "Smart Finance Bold",
    fontSize: "18px",
  },
}))(TableCell);

export function Table() {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Tags</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Teste></Teste>
          <Teste></Teste>
          <Teste></Teste>
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
