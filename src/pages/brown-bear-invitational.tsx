import React from "react"
import Kickoff from "../images/kickoff.jpg"
import theme from "../config/theme"
import Card from "../components/card"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import NarrowContainer from "../components/narrow-container"
import MediaQuery from "react-responsive"
import Photo1 from "../images/brown-bear-invitational/course-photo-1.jpg"
import Photo2 from "../images/brown-bear-invitational/course-photo-2.jpg"
import Photo3 from "../images/brown-bear-invitational/course-photo-3.jpg"
import Map6k from "../images/brown-bear-invitational/6k.jpg"
import Map8k from "../images/brown-bear-invitational/8k.jpg"
import Layout from "../components/layout"
import Results from "../components/brown-bear-invitational/results"

export default () => {
  const results =
    <Card title="Results">
      <Results />
    </Card>;
  return (
    <Layout title="Brown Bear Invitational" image={Kickoff}>
      <PageBody>
        <WideContainer>
          <Card>
            <p style={styles.welcomeText}>
              <b>Date:</b> Saturday, September 30, 2023 <br />
              <br />
              <b>Location:</b> Highland Park, 104 Mechanic Street, Attleboro, MA
              02703 <br />
              <br />
              <b>Registration Opens:</b> 12:00 am, Tuesday, August 1 <br />
              <b>Registration Closes:</b> 11:59 pm, Wednesday, September 27 <br />
              <br />
              <br />
              <b>Registration:</b>
              <ul style={{ listStyleType: "none" }}>
                <li>NIRCA: <a href="https://clubrunning.org/races/race_info.php?race=1108">clubrunning.org</a></li>
                <li>All other entries: <a href="https://www.directathletics.com/meets/xc/21393.html">DirectAthletics</a></li>
              </ul>
              <b>Entry Fee:</b> $17/athlete for NIRCA clubs, max $250/gender for NIRCA/high school
              teams. $25/open athletes. Max $300/gender for all other teams. $35/day of. <br />
              <b>Refunds:</b> We are unable to offer refunds for any reason. 
              <br />
              <b>Race Day Registration:</b> Available for $30 until the start of the meet or one hour before the desired 
              event, whichever is earlier. We are unable to refund entry fees for any reason including inclement weather, 
              meet cancellation, athlete conflict, scratches, or over-payment.
              <br />
              <b>Spectator Admission:</b> Free <br />
              <br />
              <b>Race Start Times:</b>
              <ul style={{ listStyleType: "none" }}>
                <li>11:00 am: Women’s 6K</li>
                <li>12:00 pm: Men’s 8K</li>
              </ul>
              <b>Check-in:</b> Teams may arrive no earlier than 11:00 am
              <br />
              <br />
              <b>Awards:</b> Medals awarded to top five finishers and first in
              each age group. Plaques to top three men and women NIRCA teams and
              first men and women non-NIRCA teams. The awards ceremony will begin
              at 1:00 pm.
              <br />
              <br />
              <b>Live Results:</b> Available on MileSplit and clubrunning.org on race day.
              <br />
              <br />
              <b>Payment Options:</b>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <b><a href="https://payment.brown.edu/C20460_ustores/web/product_detail.jsp?PRODUCTID=3987&SINGLESTORE=true">TouchNet</a> Invoice:</b> Pay invoice online before arrival
                </li>
                <li>
                  <b>Check:</b> Make payable to {'"'}Brown Club Sports – Running
                  Club{'"'}, mail to {'"'}Brown Club Sports, 225 Hope St. Box
                  1933, Providence, RI 02912{'"'}
                </li>
              </ul>
              <br />
              <br />
              <b>Contact:</b> Sydney Roberts, Meet Director:{" "}
              <a href="mailto:run@brown.edu">run@brown.edu</a> (preferred) or
              415-866-5446
            </p>
          </Card>
          <MediaQuery query="(max-width: 799px)">
            {results}
          </MediaQuery>
          <Card title="Course Photos">
            <img style={styles.image} src={Photo1} alt="Highland Park XC Course"></img>
            <br />
            <img style={styles.image} src={Photo2} alt="Highland Park XC Course"></img>
            <br />
            <img style={styles.image} src={Photo3} alt="Highland Park XC Course"></img>
            <br />
            <img style={styles.image} src={Map6k} alt="Highland Park 6k XC Course"></img>
            <br />
            <img style={styles.image} src={Map8k} alt="Highland Park 8k XC Course"></img>
            <br />
            <div style={styles.videoContainer}>
              <iframe
                style={styles.video}
                src="https://www.youtube.com/embed/yRjvYiw_eNs"
                title="Highland Park 5k XC course recording"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Card>
        </WideContainer>
        <MediaQuery query="(min-width: 800px)">
          <NarrowContainer>
            {results}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )
}

const styles = {
  welcomeText: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
  dayText: {
    ...(theme.typography.h2 as any),
    color: theme.palette.red,
    margin: 0,
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    borderTop: "1px solid " + theme.palette.lightGray,
  },
  eventContainer: {
    display: "flex",
    marginBottom: theme.spacing.unit,
  },
  eventTimeContainer: {
    width: theme.spacing.unit * 7,
  },
  eventTime: {
    ...(theme.typography.h2 as any),
    margin: 0,
  },
  eventDescription: {
    ...(theme.typography.h2 as any),
    fontWeight: "normal" as "normal",
    margin: 0,
  },
  videoContainer: {
    position: 'relative' as const,
    width: '100%',
    height: 0,
    paddingBottom: '56.25%',
  },
  video: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 'auto'
  }
}
