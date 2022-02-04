import React, { useEffect, useState } from "react"
import theme from "../config/theme"
import Table from "../components/table"
import Card from "../components/card"
import { getSheetData } from "../api-calls"

const SHEET_ID = "1-0FhSZemh9iVF5bEOnqRGIH3ZFAHb9-ktbw5I2Zz9eE"
const RANGE = "A2:D100"

type RecordData = {
  men: JSX.Element[][]
  women: JSX.Element[][]
}

async function getRecords(raceType: string): Promise<RecordData> {
  return {
    men: await getRecordsForGender(raceType, "Men"),
    women: await getRecordsForGender(raceType, "Women"),
  }
}

async function getRecordsForGender(raceType: string, gender: string): Promise<JSX.Element[][]> {
  const sheetName = raceType + " - " + gender;
  return await getSheetData(SHEET_ID, encodeURIComponent(sheetName + "!" + RANGE))
    .then(records => records ?? [])
    .then((records: string[][]) => records.map(record => record.map(elt => <>{elt}</>)));
}

export const Records = ({ raceType, overrideHeaders }: { raceType: string; overrideHeaders?: string[]  }) => {
  const [records, setRecords] = useState<RecordData | undefined>(undefined);
  const headers = overrideHeaders ? overrideHeaders : ["Event", "Name", "Time", "Year"];

  useEffect(() => {
    if (records === undefined) getRecords(raceType).then(setRecords)
  })

  return (
    <Card title={raceType}>
      <p style={styles.summaryText}>
        <b>Women</b>
      </p>
      {Table({ header: headers, body: records?.women ?? [] })}
      <br />
      <p style={styles.summaryText}>
        <b>Men</b>
      </p>
      {Table({ header: headers, body: records?.men ?? [] })}
    </Card>
  )
}

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
