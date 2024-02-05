import React from "react"
import CompetitiveImage from "../images/competitive.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import Button from "../components/button"
import Layout from "../components/layout"

export default () => (
  <Layout title="Sprinting" image={CompetitiveImage}>
    <PageBody>
      <WideContainer>
        <Card>
          <p style={styles.infoText}>
            The Brown Running Club offers sprint practices during the fall and
            spring semesters and competes in sprint races during the Club Track
            and Field season in the spring semester. As for the rest of the
            Running Club, no prior experience is necessary to join and
            interested members may attend as often as they would like. We offer
            practices for track events ranging from 60m-800m. We also offer
            practices for hurdles, long jump, and high jump based on interest. 
            We usually practice Monday-Friday and alternate between track
            workouts in the OMAC and strength workouts in the Nelson. To keep
            up with sprinting practice times, locations, and events, please
            join our GroupMe!
          </p>
        </Card>
      </WideContainer>
    </PageBody>
  </Layout>
)
