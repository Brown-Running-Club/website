import React from "react"
import theme from "../config/theme"
import Card from "./card"
import "./season.css"

type Meet = {
  race: string
  description?: string
  date: Date
  link?: string
  location: string
}

type Schedule = Meet[]

const SHEET_ID = "1hvbRCCS-jP2bxBD9HoRZ3bKetfV-LiKb-ZT8a7Y5-NU"
const RANGE = "A2:E100"
const API_KEY = "AIzaSyB_4qRtTbmqHERuJLpTJAWOjkFwx4c2zMo"

async function getSeason(season) {
  const url =
    "https://sheets.googleapis.com/v4/spreadsheets/" +
    SHEET_ID +
    "/values/" +
    encodeURIComponent(season + "!" + RANGE) +
    "?key=" +
    API_KEY
  return await fetch(url)
    .then(res => res.json())
    .then(res => res.values)
    .then(meets => meets.map(meet => ({
      date: meet[0],
      race: meet[1],
      location: meet[2],
      description: meet[3],
      link: meet[4],
    })))
}

export default class Season extends React.Component<{ season: string, info?: string }, { schedule?: Schedule }> {
  renderMeet(meet: Meet) {
    return (
      <tr>
        <td style={styles.cell}>{meet.date}</td>
        <td style={styles.cell}>{
          meet.link === undefined
            ? meet.race
            : (<a href={meet.link}>{meet.race}</a>)
        }{
           meet.description === undefined
            ? <></>
            : <><br />{meet.description}</>
        }</td>
        <td style={styles.cell}>{meet.location}</td>
      </tr>
    )
  }

  render() {
    const schedule = this.state?.schedule
    let meets: JSX.Element[] = []
    if (schedule) {
      schedule.forEach(meet => meets.push(this.renderMeet(meet)))
    }
    return (
      <Card title={this.props.season}>
        <table style={styles.table}>
          <tr>
            <th style={styles.header}>Date</th>
            <th style={styles.header}>Meet</th>
            <th style={styles.header}>Location</th>
          </tr>
          {meets}
        </table>
        {this.props.info ? <p>{this.props.info}</p> : <></>}
      </Card>
    )
  }

  componentDidMount() {
    getSeason(this.props.season).then(schedule => this.setState({ schedule: schedule }))
  }
}

const styles = {
  cell: {
    whiteSpace: "pre-line",
    verticalAlign: "top",
    padding: "5px",
  },
  header: {
    textAlign: "left",
    backgroundColor: theme.palette.brown,
    color: theme.palette.white,
    padding: "5px",
  },
  table: {
    borderSpacing: 0
  }
}
