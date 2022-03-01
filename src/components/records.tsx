import React, { useEffect, useState } from "react"
import theme from "../config/theme"
import { getSheetData } from "../api-calls"
import Table from "../components/table"
import Card from "../components/card"

const SHEET_ID = "1-0FhSZemh9iVF5bEOnqRGIH3ZFAHb9-ktbw5I2Zz9eE"

type Record = {
  event: string
  name: string
  time: string
  year: string
  race: string
  link?: string
  current?: string
}

type RecordTables = {
  men: Record[]
  women: Record[]
}

async function getRecords(raceType: string): RecordTables {
  const records = [getRecordsForGender(raceType, "Men"), getRecordsForGender(raceType, "Women")];
  const [men, women] = await Promise.all(records);
  return { men, women }
}

async function getRecordsForGender(raceType: string, gender: string): JSX.Element {
  const sheetName = raceType + " - " + gender;
  return await getSheetData(SHEET_ID, sheetName)
    .then((records) => records.slice(1).map(record => ({
      event: record[0],
      name: record[1],
      time: record[2],
      year: record[3],
      race: record[4],
      link: record.length > 5 ? record[5] : undefined,
      current: record.length > 6 ? record[6] : undefined
    })));
}

function createRecordsTable(records: Record[]) {
  const headers = ["Event", "Name", "Time", "Year", "Race"];
  const data = [];
  for (const r of records) {
    const race = <>{
      (r.link === undefined || r.link === "")
        ? r.race
        : (<a href={r.link}>{r.race}</a>)
    }</>;

    let row = [<>{r.event}</>, <>{r.name}</>, <>{r.time}</>, <>{r.year}</>, race];
    // bold results from the current year, as listed in the sheet
    if (r.current !== undefined && r.current === "yes") {
       row = row.map(cell => <b>{cell}</b>);
    }
    data.push(row);
  }
  return Table({ header: headers, body: data, fontsize: 15, padding: 8 });
}

const Records = ({ raceType }: { raceType: string }) => {
  const [records, setRecords] = useState<RecordData | undefined>(undefined);

  useEffect(() => {
    if (records === undefined) getRecords(raceType).then(setRecords)
  })

  return (
    <Card title={raceType}>
      <p style={styles.summaryText}>
        <b>Women</b>
      </p>
      {createRecordsTable(records?.women ?? [])}
      <br />
      <p style={styles.summaryText}>
        <b>Men</b>
      </p>
      {createRecordsTable(records?.men ?? [])}
    </Card>
  )
}

export default Records

const styles = {
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
  summaryText: {
    ...(theme.typography.h4 as any),
    margin: 2,
  },
  disclaimerText: {
    ...(theme.typography.h2 as any),
    margin: 2,
  },
  headerText: {
    ...theme.typography.h1,
    color: theme.palette.brown,
    margin: 0,
    textAlign: "center" as "center",
    marginBottom: theme.spacing.unit * 2,
  },
}
