import React from "react"
import TitleImage from "../components/title-image"
import HealthImage from "../images/health.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WiderContainer from "../components/wider-container"
import Card from "../components/card"
import Layout from "../components/layout"

export default () => (
  <Layout title="Health">
    <TitleImage image={HealthImage}>
      <p style={styles.titleText}>HEALTH</p>
    </TitleImage>
    <PageBody>
      <WiderContainer>
        <Card>
          <p style={styles.summaryText}>
            Running is a celebration of the abilities of our bodies, not a
            punishment to strengthen our misperceived weaknesses. It is crucial
            to listen to your body’s needs and know when a break is
            necessitated. Whether it be taking an extra day off in the week,
            stopping a workout when the pain hurts in the wrong kind of way, or
            taking an extended period of time off to recover from a more serious
            injury, it is important to be honest with yourself about how you are
            feeling, physically and mentally, and use the resources you have
            available to diagnose and recover.
          </p>
        </Card>
        <Card title="Mental Health">
          <p style={styles.infoText}>
            Running may be easily mistaken as a physical sport, but a
            significant component to training and competing at your best
            requires mental strength far beyond what is normally required for
            other sports. In running, our success is defined by our ability to
            perform, and underperformance or injury can be mentally and
            emotionally defeating. On the other hand, busy schedules, difficult
            classes, relationships, and other academic or social pressures can
            add additional stresses to our bodies. High levels of stress can
            lead to heightened physical fatigue and bodily function failure
            which impair our ability to perform at the highest level. Since
            mental health is such a crucial aspect of this sport, it is
            important to routinely take time to check-in on yourself.
            <br></br>
            <br></br>
            It is always acceptable to reach out to a leader that you trust to
            discuss any issue related to mental health. Brown offers counseling
            and other mental health services through{" "}
            <a href="https://www.brown.edu/campus-life/support/counseling-and-psychological-services/">
              CAPS
            </a>
            . It is easy to schedule a session with them and we encourage you to
            do so if you need support for your mental wellbeing.
          </p>
        </Card>
        <Card title="Recovery and Injury Prevention">
          <p style={styles.infoText}>
            Only you know your body the best, so be sure to listen to it! It is
            only through recovery that you can grow stronger. Taking time off
            from running is not only recommended, but is actually required by
            our bodies.
            <br></br>
            <br></br>
            It is always important to stretch and to warm up before workouts. If
            you’re planning on running more than you have been, always build up
            slowly instead of suddenly increasing your mileage. Also, be sure
            that you’re wearing proper running shoes. If you have any questions
            about shoes, you can definitely talk to the captains!
            <br></br>
            <br></br>
            Running can make you feel pain sometimes. It is normal and good for
            your muscles to feel sore when you run farther or harder than you
            normally do, because it means that you’re pushing yourself and are
            improving. However, if the pain is only on one side of your body or
            doesn’t go away, it could be due to injury. Common running injuries
            include shin splints, runner’s knee, stress fractures, Achilles
            tendinitis, and plantar fasciitis.
            <br></br>
            <br></br>
            It can be tempting to replace taking time off and taking care of
            your injuries with painkillers, but overdoing this will just make
            the situation worse, as you will push yourself before your body is
            ready.
            <br></br>
            <br></br>
            Cross training can be good for injury prevention and to stay in
            shape while injured. Many members of running club bike and aquajog
            regularly, so ask us if you’re interested in cross training with
            other people and check the calendar for updates.
          </p>
        </Card>

        <Card title="Nutrition">
          <p style={styles.infoText}>
            Whether or not you are running consistently, eating right is
            important so that your body and mind can perform their best. Not
            having a balanced diet can make you more susceptible to injury.
            <br></br>
            <br></br>
            On race days, our advice is to not change what you normally eat.
            <br></br>
            <br></br>
            For some specific information and advice, check out Brown’s
            information on{" "}
            <a href="https://www.brown.edu/campus-life/health/services/promotion/nutrition-eating-concerns-sports-nutrition/sports-nutrition">
              sports nutrition
            </a>
            . You can also make a free appointment with the{" "}
            <a href="https://www.brown.edu/campus-life/health/services/nutrition-counseling">
              {" "}
              Brown dietician
            </a>{" "}
            to discuss individual concerns.
            <br></br>
            <br></br>
            Always remember, staying hydrated is key.{" "}
            <b>Hydrate or diedrate!</b>
          </p>
        </Card>
      </WiderContainer>
    </PageBody>
  </Layout>
)

const styles = {
  titleText: {
    ...theme.typography.title,
    color: theme.palette.white,
    marginTop: theme.spacing.unit * 2,
    textShadow: "0 0 15px #000000, 0 0 10px #000000",
  },
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
  summaryText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    textAlign: "center" as "center",
  },
}
