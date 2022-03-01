import React from "react"
import Omac from "../../images/omac.jpg"
import theme from "../../config/theme"
import Card from "../../components/card"
import PageBody from "../../components/page-body"
import WideContainer from "../../components/wide-container"
import Layout from "../../components/layout"
import { GSheetsTable } from "../../components/table"

const SHEET_ID = "1n0Juq4mnMg3nU94fI3OPxBRd3fhXLD0Z_AlshD5hm0Q";

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
  <Layout title="Billy Brockmueller Invitational Records" image={Omac}>
    <PageBody>
      <WideContainer>
        <Card title="Billy Brockmueller Invitational">
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
