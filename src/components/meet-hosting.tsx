import React from "react"
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
    <Card title="Meets">
      <div style={styles.allMeets}>
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
      </div>
    </Card>
  )
}


const Meet = (props: Props) => (
  <div style={styles.meetDiv}>
    <a href = {props.link} style={{textDecoration: "none"}}>
      <div>
        <p style={styles.title}>{props.season}</p>
        <img src={props.image} style={styles.image}></img>
        <p style={styles.title}>{props.name}</p>
      </div>
    </a>
  </div>
)

const styles = {
  image: {
    height: theme.spacing.unit * 25,
    width: theme.spacing.unit * 25,
  },
  allMeets: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap" as const,
  },
  meetDiv: {
    padding: theme.spacing.unit,
    width: theme.spacing.unit * 26,
  },
  title: {
    ...theme.typography.h2,
    color: theme.palette.brown,
    textAlign: "center" as const,
  }
}
