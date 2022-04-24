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
  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <ExpandableItems open={open} />
      </TableRow>

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
    </>
  );
};

export function Table() {
  const StyledTable = withStyles((theme) => ({
    root: {},
    table: {
      fontSize: "200pt",
    },
  }))(MuiTable);

  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontFamily: "Smart Finance Bold" }}>
              Date
            </TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell style={{ fontFamily: "Smart Finance Bold" }}>
              Amount
            </TableCell>
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
