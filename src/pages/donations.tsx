import React from "react"
import TitleImage from "../images/donations.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import NarrowContainer from "../components/narrow-container"
import Button from "../components/button"
import Layout from "../components/layout"
import MediaQuery from "react-responsive"

export default () => {
  const donateCard = (
    <Card title="Donate" centeredTitle>
      <Button
        leftAlign
        text="Donate to the Brown Running Club ➞"
        link="https://bbis.advancement.brown.edu/BBPhenix/give-now"
      />
      Search for "Running Club".
      <p>If you would like to donate using an alternate method, please contact run@brown.edu.</p>
    </Card>
  );
  const donorsCard = (
    <Card title="Thank you to our donors!" centeredTitle>
      <p style={styles.donorsText}>Doug Chu <br />
        Christopher Cobb <br />
        Michael Hantke <br />
        Sally Healy <br />
        Doug & Sally Hunter <br />
        Kathy & John Kriz <br />
        Adam Janik <br />
        Cindy & Don Janik <br />
        Max Janik <br />
        Michael Janik <br />
        Sally Leete <br />
        Liz Martineau <br />
        Connie & Dick Mayer <br />
        Debra Mayer <br />
        Pamela Mayer <br />
        Lisa Nelson</p>
    </Card>
  );
  return (
    <Layout title="Donations" image={TitleImage}>
      <PageBody>
        <WideContainer>
          <MediaQuery maxWidth="1149px">
            {donateCard}
          </MediaQuery>
          <Card>
            <p style={styles.infoText}>
              The Brown Running Club is one of the largest club sports at Brown University,
              with a core competitive team of roughly 40 runners, and many dozens more who
              regularly take advantage of our recreational running offerings. We’re also
              increasingly competitive: the racing team has grown exponentially in recent years,
              and we have now qualified for the cross country national championships four times.
              We work hard to provide great training and racing opportunities for everyone, and
              we also want the club to be as accessible as possible to runners from all sorts
              of financial situations, so we try as hard as we can to keep costs and dues low for members.
              <br /><br />
              However, Running Club is not free: as we become more competitive and travel to
              more races, as well as championship meets which may be far away from Brown
              (cross country nationals this year were in Shelbyville, Indiana!), the cost of items
              like transportation, entry fees, lodging, and uniforms starts to add up! Additionally,
              as a club sport, only a fraction of our operating costs are covered by the Athletic
              Department. A significant portion of our funding comes through fundraising and semesterly
              membership dues, but this is generally not enough to cover our annual expenses. This
              is why we kindly ask for donations from friends and family of the Brown Running Club.
              These donations are always greatly appreciated, and you can be assured that all of the
              funds are directly supporting your athlete and their teammates.
            </p>
          </Card>
          <MediaQuery maxWidth="1149px">
            {donorsCard}
          </MediaQuery>
        </WideContainer>
        <MediaQuery minWidth="1150px">
          <NarrowContainer>
            {donateCard}
            {donorsCard}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )

}

const styles = {
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
  donorsText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
    fontSize: 17,
    textAlign: 'center',
  }
}
