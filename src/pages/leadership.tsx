import React from "react"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WiderContainer from "../components/wider-container"
import CharacterCard from "../components/character-card"
import Lauren from "../images/lauren.jpg"
import leadership from "../images/leadership.jpg"
import Max from "../images/max.jpg"
import Eliot from "../images/eliot.jpg"
import Grace from "../images/grace.jpg"
import Maura from "../images/maura.jpg"
import Layout from "../components/layout"

export default () => (
  <Layout title="Leadership" image={leadership}>
    <PageBody>
      <WiderContainer>

        <CharacterCard
          title="Max Heller"
          image={Max}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> Meet Directing <br></br>
              <b>Class:</b> Senior<br></br>
              <b>Concentration:</b> Computer Science<br></br>
              <b>Hometown:</b> Albany, New York<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            Max is responsible for planning and directing
            our home meets. Max has been an advocate for cross training since
            his first semester and according to his custom belt is the men’s
            NCAA aquajogging champion. One of his passions in life is nut
            butters, of which his favorite is cashew. A believer in the
            importance of hydration, Max takes great pride in his large water
            bottle, which he is rarely seen without.
          </p>
        </CharacterCard>

        <CharacterCard
          title="Eliot Laidlaw"
          image={Eliot}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> Finance <br></br>
              <b>Class:</b> Senior<br></br>
              <b>Concentration:</b> Computer Science<br></br>
              <b>Hometown:</b> Barrington, Rhode Island<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            In his third year on the leadership team, Eliot is in charge of
            keeping our budget on track and handling gear orders.
            A saxophone player and jazz enthusiast, Eliot is a member of the
            popular campus band Orange Guava Passion (OGP). Seemingly impervious
            to the cold, he can be found running in the middle of winter in his
            brightly colored short-shorts.
          </p>
        </CharacterCard>

        <CharacterCard
          title="Maura Driscoll"
          image={Maura}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> Social and Recruiting <br></br>
              <b>Class:</b> Senior<br></br>
              <b>Concentration:</b> Computer Science<br></br>
              <b>Hometown:</b> Portsmouth, Rhode Island<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            Maura is in charge of planning social events and recruiting new
            runners to the club, and has been an active member of the club
            competitively and socially since her freshmen year. Maura loves
            dancing, especially if Ke$ha is playing. In a controversial view,
            she believes that oats are the most versatile food.
          </p>
        </CharacterCard>

        <CharacterCard
          title="Grace Dorantes"
          image={Grace}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> General Operations and Race Coordination<br></br>
              <b>Class:</b> Junior<br></br>
              <b>Concentration:</b> Computer Science: Economics<br></br>
              <b>Hometown:</b> Claremont, California<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            Grace is charge of organizing race logistics and generally keeping
            the club running by coordinating training plans. Grace likes
            Maroon 5, watermelon, almond hershey’s kisses, and chewing gum.
            Grace was excited to visit New Hampshire and Vermont for the first
            time this fall, but still needs to go to Maine to see all of New
            England.
          </p>
        </CharacterCard>

        <CharacterCard
          title="Lauren Chiu"
          image={Lauren}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> Communications <br></br>
              <b>Class:</b> Freshman<br></br>
              <b>Concentration:</b> Undecided (Leaning Biology) <br></br>
              <b>Hometown:</b> Mahattan Beach, California <br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            A newcomer to the leadership team, Lauren is responsible for our
            club communications and for assisting with meet hosting.
            Lauren likes caramel ribbon crunch frappuccinos, napping, and crewnecks.
            She is also part of Brown's Cooking Club and writes for Spoon
            University, so be sure you're there if she brings something to a team dinner.
          </p>
        </CharacterCard>
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
    margin: 0,
    textAlign: "left" as "left",
  },
}
