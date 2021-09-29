import React from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import theme from "../config/theme"
import MediaQuery from "react-responsive"

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.white,
    },
  },
  new: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.white,
    },
  },
}))(TableRow)

const bigScreen = {
  header: {
    ...(theme.typography.h4 as any),
    backgroundColor: theme.palette.brown,
    color: theme.palette.white,
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
  row: {
    ...(theme.typography.h4 as any),
    color: theme.palette.black,
    fontSize: 18,
  },
};
const useStyles = makeStyles({
  header: {
    ...(theme.typography.h4 as any),
    backgroundColor: theme.palette.brown,
    color: theme.palette.white,
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
  row: {
    ...(theme.typography.h4 as any),
    color: theme.palette.black,
    fontSize: 18,
  },
})

interface TableProps {
  header: Array<string>,
  body: Array<Array<JSX.Element>>,
}

const mobile = {
  header: {
    ...(theme.typography.h4 as any),
    backgroundColor: theme.palette.brown,
    color: theme.palette.white,
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
    fontSize: 13,
    padding: theme.spacing.unit,
  },
  row: {
    ...(theme.typography.h4 as any),
    color: theme.palette.black,
    fontSize: 12,
    padding: theme.spacing.unit,
  },
};
const useStylesMobile = makeStyles({
  header: {
    ...(theme.typography.h4 as any),
    backgroundColor: theme.palette.brown,
    color: theme.palette.white,
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
    fontSize: 13,
    padding: theme.spacing.unit,
  },
  row: {
    ...(theme.typography.h4 as any),
    color: theme.palette.black,
    fontSize: 12,
    padding: theme.spacing.unit,
  },
})

export default function BasicTable(
  props: React.PropsWithChildren<TableProps>
) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.header.map(cell => (
              <>
                <MediaQuery query="(min-width: 600px)">
                  <TableCell className={bigScreen.header} align="left">
                    {cell}
                  </TableCell>
                </MediaQuery>
                <MediaQuery query="(max-width: 599px)">
                  <TableCell className={mobile.header} align="left">
                    {cell}
                  </TableCell>
                </MediaQuery>
              </>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.body.map(row => (
            <TableRow>
              {row.map(cell =>
                <>
                  <MediaQuery query="(min-width: 600px)">
                    <TableCell className={bigScreen.row} align="left">
                      {cell}
                    </TableCell>
                  </MediaQuery>
                  <MediaQuery query="(max-width: 599px)">
                    <TableCell className={mobile.row} align="left">
                      {cell}
                    </TableCell>
                  </MediaQuery>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const styles = {
  card: {
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2.5,
    paddingBottom: theme.spacing.unit * 2.5,
    backgroundColor: theme.palette.white,
    marginBottom: theme.spacing.unit * 2,
  },
  title: {
    ...theme.typography.h1,
    color: theme.palette.brown,
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
  centeredTitle: {
    ...theme.typography.h1,
    color: theme.palette.brown,
    margin: 0,
    textAlign: "center" as "center",
    marginBottom: theme.spacing.unit * 2,
  },
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
}
