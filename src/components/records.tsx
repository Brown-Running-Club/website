import React, { useEffect, useState } from "react"
import theme from "../config/theme"
import { GSheetsTable } from "../components/table"
import Card from "../components/card"

const SHEET_ID = "1-0FhSZemh9iVF5bEOnqRGIH3ZFAHb9-ktbw5I2Zz9eE"

type RecordTables = {
  men: JSX.Element
  women: JSX.Element
}

function getRecords(raceType: string): RecordTables {
  return {
    men: getRecordsForGender(raceType, "Men"),
    women: getRecordsForGender(raceType, "Women"),
  }
}

function getRecordsForGender(raceType: string, gender: string): JSX.Element {
  const sheetName = raceType + " - " + gender;
  return GSheetsTable({ sheetId: SHEET_ID, range: sheetName, fontsize: 15, padding: 8 });
}

const Records = ({ raceType }: { raceType: string }) => {
  const records = getRecords(raceType);
  return (
    <Card title={raceType}>
      <p style={styles.summaryText}>
        <b>Women</b>
      </p>
      {records.women}
      <br />
      <p style={styles.summaryText}>
        <b>Men</b>
      </p>
      {records.men}
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
