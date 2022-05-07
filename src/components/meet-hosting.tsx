import React from "react"
import MediaQuery from "react-responsive"
import theme from "../config/theme"
import BrownBear from "../images/brown-bear-logo.png"
import BillyBrockmueller from "../images/sillhouttes-small.png"
import BrunoBackyard from "../images/brown-stadium-small.jpg"
import Card from "../components/card"

type Props = {
  name: string
  season: string
  image: string
  link: string
}

export default () => {
  return (
    <Card title="Meet Hosting">
      <>
        <Meet
          name="Brown Bear Classic"
          season="Cross Country"
          image={BrownBear}
          link="/brown-bear-invitational"
        />
        <Meet
          name="Billy Brockmueller Classic"
          season="Indoor Track"
          image={BillyBrockmueller}
          link="/billy-brockmueller-invitational"
        />
        <Meet
          name="Bruno's Backyard Classic"
          season="Outdoor Track"
          image={BrunoBackyard}
          link="/brunos-backyard-classic"
        />
      </>
    </Card>
  )
}


const Meet = (props: Props) => (
  <div style={styles.meetDiv}>
    <a href = {props.link}>
      <div>
        <h3 style={styles.title}>{props.season}</h3>
        <img src={props.image} style={styles.image}></img>
        <h3 style={styles.title}>{props.name}</h3>
      </div>
    </a>
  </div>
)

const styles = {
  image: {
    height: theme.spacing.unit * 25,
    width: theme.spacing.unit * 25,
    opacity: "100%",
    objectFit: "cover" as "cover",
  },
  imageMobile: {
    width: '100%',
    opacity: "100%",
  },
  meetDiv: {
    display: "inline-block",
    padding: theme.spacing.unit,
  },
  title: {
    ...theme.typography.h3,
    color: theme.palette.brown,
    textAlign: "center" as "center",
  }
}
