import React, { useEffect, useState } from "react"
import theme from "../config/theme"
import Card from "./card"
import "./season.css"
import { getSheetData } from "../api-calls"
import Table from "./table"

type Meet = {
  race: string
  description?: string
  date: string
  link?: string
  location: string
}

type Schedule = Meet[]

const SHEET_ID = "1hvbRCCS-jP2bxBD9HoRZ3bKetfV-LiKb-ZT8a7Y5-NU"
const RANGE = "A2:E100"

async function getSeason(season: string) {
  return await getSheetData(SHEET_ID, encodeURIComponent(season + "!" + RANGE))
    .then((meets: string[]) => meets.map(meet => ({
      date: meet[0],
      race: meet[1],
      location: meet[2],
      description: meet[3],
      link: meet[4],
    })))
}

function createMeetTable(schedule: Schedule) {
  const headers = ["Date", "Meet", "Location"];
  const data = [];
  for (const meet of schedule) {
    const name = <>{
      meet.link === undefined
        ? meet.race
        : (<a href={meet.link}>{meet.race}</a>)
    }{
        meet.description === undefined
          ? <></>
          : <><br />{meet.description}</>
      }</>;

    data.push([<>{meet.date}</>, name, <>{meet.location}</>]);
  }
  return Table({ header: headers, body: data });
}

const Season = ({ season, info }: { season: string, info?: string }) => {
  const [schedule, setSchedule] = useState<Schedule | undefined>(undefined);
  useEffect(() => {
    if (schedule === undefined) getSeason(season).then(setSchedule)
  })
  return (
    <Card title={season} centeredTitle>
      {createMeetTable(schedule ?? [])}
      {info ? <p>{info}</p> : <></>}
    </Card>
  )

}
export default Season
