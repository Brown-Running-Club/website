import React, { useEffect, useState } from "react"
import theme from "../config/theme"
import { getSheetData } from "../api-calls"

export type Headers = string[]
export type Row = JSX.Element[]

interface TableProps {
  header: Array<string>,
  body: Array<Row>,
  fontsize: number,
  padding: number,
}

export default function BasicTable({ header, body, fontsize, padding }: TableProps) {
  const cell = { ...cellBase, fontSize: fontsize, padding }
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            {header.map((text, i) => (
              <th key={i} style={{ ...cell, ...styles.header }}>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i}>
              {row.map((content, j) => (
                <td key={j} style={{ ...cell, ...styles.row }}>{content}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
    loadSheetData(sheetId, range).then(setData)
  }, [sheetId, range])
  return BasicTable({ header: data[0], body: data[1], fontsize, padding });
}

// Matches the look of the Material-UI table this replaced.
const cellBase = {
  fontFamily: theme.typography.body.fontFamily,
  textAlign: "left" as const,
  verticalAlign: "middle" as const,
  lineHeight: 1.43,
  borderBottom: "1px solid rgb(224, 224, 224)",
}

const styles = {
  container: {
    width: "100%",
    overflowX: "auto" as const,
    backgroundColor: "#fff",
    borderRadius: 4,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
  },
  header: {
    backgroundColor: theme.palette.brown,
    color: theme.palette.white,
    fontWeight: "normal" as const,
  },
  row: {
    color: theme.palette.black,
  },
}
