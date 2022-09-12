import React from "react"
import CompetitiveImage from "../images/competitive.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import Button from "../components/button"
import Layout from "../components/layout"

export default () => (
  <Layout title="Competitive Team" image={CompetitiveImage}>
    <PageBody>
      <WideContainer>
        <Card>
          <p style={styles.infoText}>
            Brown Running Club offers a number of opportunities for competition
            in cross country, track and field, and road races. Our club is
            affiliated with the National Intercollegiate Running Club
            Association (NIRCA), through which we compete against other schools
            in cross country and track. We also have participated in local
            non-NIRCA events ranging from 5Ks to a 95 mile relay through Rhode
            Island, Massachusetts, and Connecticut. Most races are open to all
            runners, so come out and rep BRC at our next meet!
          </p>
        </Card>
        <Card title="Joining the team">
          <p style={styles.bodyText}>
            The first step to competing with BRC is filling out our competitive
            team interest form.
          </p>
          <Button
            text="Fill out the interest form ➞"
            link="https://docs.google.com/forms/d/e/1FAIpQLScf2eR0jeE0KdJfRTBCyIIQxPbC2PXXlqdTgDzU7XxtHImAgg/viewform?usp=sf_link"
          ></Button>
          <p style={styles.bodyText}>
            Next, in order to race with us, you’ll need to be on our roster with
            the club sports department. Follow the link below, find Running,
            click Registration, and follow the instructions.
          </p>
          <Button
            text="Fill out the club sports waiver ➞"
            link="https://brownrec.com/sports/2018/8/14/club-sports-registrations-offerings.aspx"
          ></Button>
          <p style={styles.bodyTextNoButton}>
            Running club charges dues for competitive runners to defray costs of
            travel, registration, and more. Dues are $30 per semester or $50 for
            the year if you pay in the first few weeks of the fall semester.
            Financial aid is available, no questions asked, as an option in the
            interest form. Dues can be paid by Venmo to{" "}
            <p style={styles.link}>@brownrunningclub</p> (preferred) or in cash
            to a leader.
          </p>
          <p style={styles.bodyText}>
            Finally, anyone who wishes to compete must agree to our team
            policies by signing our competitive team contract.
          </p>
          <Button
            text="Sign the contract ➞"
            link="https://docs.google.com/forms/d/e/1FAIpQLSdllVFcR4fijQruPOgqz6nyg_tVVKDwIeKNAr2WgANsZZSz0Q/viewform?usp=sf_link"
          ></Button>
        </Card>
      </WideContainer>
    </PageBody>
  </Layout>
)

const styles = {
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
  link: {
    color: theme.palette.red,
    textDecoration: "none" as "none",
    display: "inline",
  },
  bodyText: {
    ...(theme.typography.body as any),
    margin: 0,
  },
  bodyTextNoButton: {
    ...(theme.typography.body as any),
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
}
