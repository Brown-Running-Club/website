import React from "react"
import RecordsImage from "../images/records.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import Table from "../components/table"
import Card from "../components/card"
import WiderContainer from "../components/wider-container"
import Layout from "../components/layout"

const SHEET_ID = "1-0FhSZemh9iVF5bEOnqRGIH3ZFAHb9-ktbw5I2Zz9eE"
const RANGE = "A2:D100"

type RecordData = {
  men: string[][]
  women: string[][]
}

async function getRecords(raceType: string): RecordData {
  return {
    men: getRecordsForGender(raceType, "Men"),
    women: getRecordsForGender(raceType, "Women"),
  }
}

async function getRecordsForGender(raceType: string, gender: string): string[][] {
  const sheetName = raceType + " - " + gender;
  return await getSheetData(SHEET_ID, encodeURIComponent(sheetName + "!" + RANGE));
}

class Records extends React.Component<{ raceType: string }, { records?: RecordData }> {
  render() {
    const records = this.state?.records;
    const headers = ["Event", "Name", "Time", "Year"];
    return (
      <Card title={this.props.raceType}>
        <p style={styles.summaryText}>
          <b>Women</b>
        </p>
        {records ? Table({header: headers, body: records.women}) : <></>}
        <br />
        <p style={styles.summaryText}>
          <b>Men</b>
        </p>
        {records ? Table({header: headers, body: records.men}) : <></>}
      </Card>
    )
  }

  componentDidMount() {
    getRecords(this.props.raceType).then(records => this.setState({ records: records }))
  }
}

export default () => (
  <Layout title="Records" image={RecordsImage}>
    <PageBody>
      <WiderContainer>
        <Card>
          <p style={styles.summaryText}>
            Have a faster time? Submit a form{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0wNnun2CGI22-G20EvecTGuoWLsR9uvxZeA51b1zGxireQ/viewform">
              here
            </a>
            .
            <br />
            Records may be set at any event or course as long as the athlete is
            in a Brown Running Club uniform. The athlete must be a full-time
            student at Brown University or Rhode Island School of Design. All
            records were set after the club’s affiliation with NIRCA. Only new
            records will be accepted. New records must be submitted within one
            month of the performance date.
            <br />
            <p style={styles.disclaimerText}>
              <b>h</b> indicates a handtime for events 800m and shorter
              <br />
              <b>c</b> indicates a conversion was used for this record
            </p>
          </p>
        </Card>

        <Records raceType="Cross Country" />
        <Records raceType="Indoor Track" />
        <Records raceType="Outdoor Track" />
        <Records raceType="Road Races" />
      </WiderContainer>
    </PageBody>
  </Layout>
)

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
