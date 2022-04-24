import React from "react"
import BrownStadium from "../../images/brown-stadium.jpg"
import theme from "../../config/theme"
import Card from "../../components/card"
import PageBody from "../../components/page-body"
import WideContainer from "../../components/wide-container"
import Layout from "../../components/layout"
import { GSheetsTable } from "../../components/table"

const SHEET_ID = "1axEmDGc8Mb82oSlPZXs7Wb60ZSgCFChLE8VonnmICOc";

function getTable(name: string) {
  return (
    <>
      <p style={styles.summaryText}>
        <b>{name}</b>
      </p>
      <GSheetsTable
        sheetId={SHEET_ID}
        range={name}
        fontsize={15}
        padding={8}
      />
      <br />
    </>
  );
}

export default () => (
  <Layout title="Bruno's Backyard Classic Records" image={BrownStadium}>
    <PageBody>
      <WideContainer>
        <Card title="Bruno's Backyard Classic">
          {getTable("Women")}
          {getTable("Men")}
        </Card>
      </WideContainer>
    </PageBody>
  </Layout>
)

const styles = {
  summaryText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    textAlign: "left" as "left",
  },
}
