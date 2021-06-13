import React from "react"
import theme from "../config/theme"
import Card from "./card"
import "./season.css"
import {getSheetData} from "../api-calls.tsx"

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

async function getSeason(season) {
  return await getSheetData(SHEET_ID, encodeURIComponent(season + "!" + RANGE))
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
        <td>{meet.date}</td>
        <td>{
          meet.link === undefined
            ? meet.race
            : (<a href={meet.link}>{meet.race}</a>)
        }{
           meet.description === undefined
            ? <></>
            : <><br />{meet.description}</>
        }</td>
        <td>{meet.location}</td>
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
      <Card title={this.props.season} centeredTitle>
        <table>
          <tr>
            <th>Date</th>
            <th>Meet</th>
            <th>Location</th>
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
