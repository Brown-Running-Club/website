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
import { useMediaQuery } from "react-responsive"

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

function createData(event: string, name: string, time: string, year: string) {
  return { event, name, time, year }
}

const women_xc = [
  createData("5k", "Maura Driscoll", "19:59", "2019"),
  createData("6k", "Katie Chu", "23:27", "2018"),
]

const men_xc = [
  createData("5k", "Will Brockmueller", "16:11", "2017"),
  createData("8k", "Adam Janik", "25:54", "2018"),
]

const men_itrack = [
  createData("60m", "Chen Li", "7.795", "2020"),
  createData("60m Hurdles", "Tyler Jiang", "9.87", "2019"),
  createData("200m", "Kimber Brain", "25.5h", "2018"),
  createData("400m", "Kento Abeywardane", "53.50", "2019"),
  createData("800m", "Eliot Laidlaw", "2:01.2h", "2019"),
  createData("Mile", "Eliot Laidlaw", "4:27.0", "2018"),
  createData("3000m", "Eliot Laidlaw/Adam Janik", "8:50.1", "2018/9"),
  createData("5000m", "Adam Janik", "15:25.60", "2019"),
  createData(
    "4x400m",
    "I. Oda-Bayliss, E. Laidlaw, M. Heller, M. Vigilante",
    "3:43.3",
    "2019"
  ),
  createData(
    "4x800m",
    "J. Eveleth, T. McClure, M. Heller, E. Laidlaw",
    "8:14.60hc",
    "2020"
  ),
  createData(
    "DMR",
    "A. Janik, Z. Harris, M. Vigilante, E. Laidlaw",
    "10:57.49",
    "2019"
  ),
  createData("High Jump", "Duncan McManus", "5'4\"", "2020"),
]

const women_itrack = [
  createData("60m", "Julia McClellan", "10.15h", "2020"),
  createData("200m", "Julia McClellan", "34.24h", "2020"),
  createData("400m", "Renita Johnson", "25.5h", "2018"),
  createData("800m", "Elizabeth Healy", "2:36.9h", "2018"),
  createData("Mile", "Maura Driscoll", "5:31.0", "2019"),
  createData("3000m", "Maura Driscoll", "10:54.80", "2018/9"),
  createData("5000m", "Maura Driscoll", "19:36.08", "2020"),
  createData(
    "4x400m",
    "R. Johnson, J. McClellan, C. Nelson, G. Dorantes",
    "5:06.61hc",
    "2020"
  ),
  createData(
    "4x800m",
    "M. Driscoll, V. Sackett, G. Dorantes, C. Nelson",
    "11:00.05hc",
    "2020"
  ),
  createData(
    "DMR",
    "M. Driscoll, J. McClellan, J. Jiang, K. Chu",
    "13:50.07",
    "2019"
  ),
  createData("High Jump", "Julia McClellan", "4'0\"", "2019"),
]

const men_otrack = [
  createData("400m", "Kento Abeywardane", "54.36", "2019"),
  createData("800m", "Eliot Laidlaw", "2:00.84h", "2019"),
  createData("1500m", "Will Brockmueller", "4:11.74c", "2017"),
  createData("5000m", "Adam Janik", "15:09.0", "2019"),
  createData("10000m", "Adam Janik", "33:24.24", "2018"),
  createData("400m Hurdles", "Kento Abeywardane", "1:02.76h", "2019"),
  createData("3000m Steeplechase", "Adam Janik", "10:26.60", "2019"),
  createData(
    "4x100m",
    "T. Houchens, A. Janik, M. Vigilante, C. Wenzel",
    "52.36",
    "2019"
  ),
  createData(
    "4x400m",
    "I. Oda-Bayliss, E. Laidlaw, K. Abeywardane, M. Vigilante",
    "3:45.33",
    "2019"
  ),
  createData(
    "4x800m",
    "E. Laidlaw, M. Hornbuckle, I. Oda-Bayliss, M. Heller",
    "8:30.41",
    "2019"
  ),
]

const women_otrack = [
  createData("100m", "Renita Johnson", "14.02h", "2019"),
  createData("200m", "Renita Johnson", "30.76h", "2019"),
  createData("400m", "Renita Johnson", "1:11.28", "2019"),
  createData("800m", "Maura Driscoll", "2:36.0h", "2019"),
  createData("1500m", "Maura Driscoll", "5:09.61c", "2019"),
  createData("5000m", "Joy Jiang", "20:05.08", "2019"),
  createData("400m Hurdles", "Caroline Ribet", "1:45.24", "2019"),
  createData("3000m Steeplechase", "Julia McClellan", "13:23.11", "2019"),
  createData(
    "4x100m",
    "M. Driscoll, J. Jiang, J. McClellan, R. Johnson",
    "1:08.12h",
    "2019"
  ),
  createData(
    "4x400m",
    "J. McClellan, M. Driscoll, R. Johnson, J. Jiang ",
    "5:01.63",
    "2019"
  ),
  createData(
    "4x800m",
    "C. Ribet, J. Jiang, M. Driscoll, J. McClellan",
    "11:47.60",
    "2019"
  ),
]

const women_rr = [
  createData("5k", "Joy Jiang", "18:52", "2019"),
  createData("Half Marathon", "Maura Driscoll", "1:27:04", "2019"),
  createData("Full Marathon", "Maura Driscoll", "3:14:46", "2021"),
]

const men_rr = [
  createData("5k", "Adam Janik", "16:01", "2018"),
  createData("10k", "Adam Janik", "33:23", "2018"),
  createData("10 Mile", "Adam Janik", "55:54", "2018"),
  createData("Half Marathon", "Adam Janik", "1:11:40", "2019"),
  createData("Full Marathon", "Eliot Laidlaw", "2:54:45", "2021"),
]

interface RecordProps {
  season: string
}
export default function BasicTable(
  props: React.PropsWithChildren<RecordProps>
) {
  const isBigScreen = useMediaQuery({ query: '(min-width: 600px)' })
  const classes = isBigScreen ? useStyles() : useStylesMobile();
  let rows = women_xc

  switch (props.season) {
    case "men_xc": {
      rows = men_xc
      break
    }
    case "men_itrack": {
      rows = men_itrack
      break
    }
    case "women_itrack": {
      rows = women_itrack
      break
    }
    case "men_otrack": {
      rows = men_otrack
      break
    }
    case "women_otrack": {
      rows = women_otrack
      break
    }
    case "men_rr": {
      rows = men_rr
      break
    }
    case "women_rr": {
      rows = women_rr
      break
    }
    default: {
      rows = women_xc
      break
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.header} align="left">
              Event
            </TableCell>
            <TableCell className={classes.header} align="left">
              Name
            </TableCell>
            <TableCell className={classes.header} align="left">
              Time
            </TableCell>
            <TableCell className={classes.header} align="left">
              Year
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.year}>
              <TableCell className={classes.row} align="left">
                {row.event}
              </TableCell>
              <TableCell className={classes.row} align="left">
                {row.name}
              </TableCell>
              <TableCell className={classes.row} align="left">
                {row.time}
              </TableCell>
              <TableCell className={classes.row} align="left">
                {row.year}
              </TableCell>
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
