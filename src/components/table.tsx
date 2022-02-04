import React, { useEffect, useState } from "react"
import { withStyles, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import theme from "../config/theme"
import { getSheetData } from "../api-calls"
import { useMediaQuery } from "react-responsive"

export type Headers = string[]
export type Row = JSX.Element[]

interface TableProps {
  header: Array<string>,
  body: Array<Row>,
  fontsize: number,
  padding: number,
}

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
  },
})

const useStylesMobile = makeStyles({
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
  },
})

export default function BasicTable(
  props: React.PropsWithChildren<TableProps>
) {
  const isBigScreen = useMediaQuery({ query: '(min-width: 600px)' })
  const classes = isBigScreen ? useStyles() : useStylesMobile();
  const styles = { fontSize: props.fontsize, padding: props.padding };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {props.header.map(cell => (
              <TableCell className={classes.header} align="left" style={styles}>
                {cell}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.body.map(row => (
            <TableRow>
              {row.map(cell =>
                <TableCell className={classes.row} align="left" style={styles}>
                  {cell}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  )
}
export { BasicTable as Table }

async function loadSheetData(sheetId: string, range: string): Promise<[Headers, Row[]]> {
  const data = await getSheetData(sheetId, range) ?? [];
  const headers = data[0] ?? [];
  const rows = data.slice(1).map(record => record.map(elt => <>{elt}</>));
  return [headers, rows];
}

export function GSheetsTable({ sheetId, range, fontsize, padding }: { sheetId: string; range: string; fontsize: number; padding: number }) {
  const empty: [Headers, Row[]] = [[], []];
  const [data, setData] = useState(empty);
  useEffect(() => {
    if (data === empty) loadSheetData(sheetId, range).then(setData)
  })
  return BasicTable({ header: data[0], body: data[1], fontsize, padding });
}