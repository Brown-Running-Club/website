import React, { useEffect, useState } from "react"
import theme from "../config/theme"
import Table from "../components/table"
import Card from "../components/card"
import { getSheetData } from "../api-calls"

const SHEET_ID = "1-0FhSZemh9iVF5bEOnqRGIH3ZFAHb9-ktbw5I2Zz9eE"
const RANGE = "A1:Z100"

type Headers = string[]
type Row = JSX.Element[]
type RecordData = {
  men: [Headers, Row[]]
  women: [Headers, Row[]]
}

async function getRecords(raceType: string): Promise<RecordData> {
  const records = [getRecordsForGender(raceType, "Men"), getRecordsForGender(raceType, "Women")];
  const [men, women] = await Promise.all(records);
  return { men, women }
}

async function getRecordsForGender(raceType: string, gender: string): Promise<[Headers, Row[]]> {
  const sheetName = raceType + " - " + gender;
  return await getSheetData(SHEET_ID, encodeURIComponent(sheetName + "!" + RANGE))
    .then(records => records ?? [])
    .then((records: string[][]) => {
      const headers = records[0];
      const rows = records.slice(1).map(record => record.map(elt => <>{elt}</>));
      return [headers, rows];
    });
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
      {Table({ header: records?.women[0] ?? [], body: records?.women[1] ?? [] })}
      <br />
      <p style={styles.summaryText}>
        <b>Men</b>
      </p>
      {Table({ header: records?.men[0] ?? [], body: records?.men[1] ?? [] })}
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
