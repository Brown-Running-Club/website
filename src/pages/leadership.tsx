import React from "react"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WiderContainer from "../components/wider-container"
import CharacterCard from "../components/character-card"
import Julia from "../images/julia.jpg"
import leadership from "../images/leadership.jpg"
import Trevor from "../images/trevor-leadership.jpg"
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
          title="Julia McClellan"
          image={Julia}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> General Operations and Race Coordination <br></br>
              <b>Class:</b> Senior<br></br>
              <b>Concentration:</b> Computer Science<br></br>
              <b>Hometown:</b> Carlisle, Massachusetts<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            Julia, who has been in the club for four years and a leader for
            three, is in charge of organizing race logistics and generally
            keeping the club running. When she’s not high on LSD (long steady
            distance), Julia enjoys reading, knitting, and aquajogging. She is
            good at showing up too early to things, so you can usually find her
            at the bear statue long before practice starts.
          </p>
        </CharacterCard>

        <CharacterCard
          title="Trevor Houchens"
          image={Trevor}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> Training <br></br>
              <b>Class:</b> Senior<br></br>
              <b>Concentration:</b> Computer Science<br></br>
              <b>Hometown:</b> South Burlington, Vermont<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            In his third year on the leadership team, Trevor is in charge of
            planning weekly workouts. Trevor enjoys photography, and often takes
            pictures at races. When he’s not running, biking, coding, or
            chugging maple syrup straight from the bottle, he can often be seen
            wandering campus, lost and late to his next obligation. If you see
            him, feel free to help out by giving directions, but be warned: he
            startles easily.
          </p>
        </CharacterCard>

        <CharacterCard
          title="Max Heller"
          image={Max}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> Meet Directing <br></br>
              <b>Class:</b> Junior<br></br>
              <b>Concentration:</b> Computer Science<br></br>
              <b>Hometown:</b> Albany, New York<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            Max, a returning leader, is responsible for planning and directing
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
              <b>Class:</b> Junior<br></br>
              <b>Concentration:</b> Computer Science<br></br>
              <b>Hometown:</b> Barrington, Rhode Island<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            In his second year on the leadership team, Eliot is shifting from
            social chair to managing our finances. A saxophone player and jazz
            enthusiast, Eliot is a member of the popular campus band Orange
            Guava Passion (OGP). Seemingly impervious to the cold, he can be
            found running in the middle of winter in his brightly colored
            short-shorts.
          </p>
        </CharacterCard>

        <CharacterCard
          title="Maura Driscoll"
          image={Maura}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> Social and Recruiting <br></br>
              <b>Class:</b> Junior<br></br>
              <b>Concentration:</b> Computer Science<br></br>
              <b>Hometown:</b> Portsmouth, Rhode Island<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            Maura is in charge of planning social events and recruiting new
            runners to the club. While this is her first year on leadership, she
            has been an active member of the club competitively and socially
            since her freshmen year. Maura loves dancing, especially if Ke$ha is
            playing. In a controversial view, she believes that oats are the
            most versatile food.
          </p>
        </CharacterCard>

        <CharacterCard
          title="Grace Dorantes"
          image={Grace}
          renderDetails={() => (
            <p style={styles.summaryText}>
              <b>Focus:</b> Communications<br></br>
              <b>Class:</b> Sophomore<br></br>
              <b>Concentration:</b> Economics<br></br>
              <b>Hometown:</b> Claremont, California<br></br>
            </p>
          )}
        >
          <p style={styles.summaryText}>
            A newcomer to the leadership team this year, Grace is
            responsible for our club communications, including our weekly
            emails, Instagram, and newsletter. Grace likes Maroon 5, watermelon,
            almond hershey’s kisses, and chewing gum. In her first attempt,
            Grace became our women’s record holder in the semiannual Hard To
            Chug Beverage Mile (HTCB).
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
