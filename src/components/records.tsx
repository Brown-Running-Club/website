import React, { useEffect, useState } from "react"
import theme from "../config/theme"
import { tableFromSheet, Table } from "../components/table"
import Card from "../components/card"

const SHEET_ID = "1-0FhSZemh9iVF5bEOnqRGIH3ZFAHb9-ktbw5I2Zz9eE"

type RecordTables = {
  men: JSX.Element
  women: JSX.Element
}

async function getRecords(raceType: string): Promise<RecordTables> {
  const records = [getRecordsForGender(raceType, "Men"), getRecordsForGender(raceType, "Women")];
  const [men, women] = await Promise.all(records);
  return { men, women }
}

async function getRecordsForGender(raceType: string, gender: string): Promise<JSX.Element> {
  const sheetName = raceType + " - " + gender;
  return tableFromSheet(SHEET_ID, sheetName);
}

const Records = ({ raceType }: { raceType: string }) => {
  const [records, setRecords] = useState<RecordTables | undefined>(undefined);

  useEffect(() => {
    if (records === undefined) getRecords(raceType).then(setRecords)
  })

  return (
    <Card title={raceType}>
      <p style={styles.summaryText}>
        <b>Women</b>
      </p>
      {records?.women ?? Table({ header: [], body: [] })}
      <br />
      <p style={styles.summaryText}>
        <b>Men</b>
      </p>
      {records?.men ?? Table({ header: [], body: [] })}
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
