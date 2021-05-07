import React from "react"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
  title?: string
  centeredTitle?: boolean
  image: string
}

const CharacterCard = (props: Props) => (
  <div style={styles.card}>
    {props.title && (
      <p style={props.centeredTitle ? styles.centeredTitle : styles.title}>
        {props.title}
      </p>
    )}
    <div style={styles.floated}>
      <img src={props.image} style={styles.image} alt={props.title}></img>
    </div>
    <div style={styles.container}>{props.children}</div>
  </div>
)
export default CharacterCard

const styles = {
  card: {
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 2.5,
    paddingBottom: theme.spacing.unit * 2.5,
    backgroundColor: theme.palette.white,
    marginBottom: theme.spacing.unit * 2,
  },
  title: {
    ...theme.typography.h1,
    color: theme.palette.brown,
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
  centeredTitle: {
    ...theme.typography.h1,
    color: theme.palette.brown,
    margin: 0,
    textAlign: "center" as "center",
    marginBottom: theme.spacing.unit * 2,
  },
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  image: {
    height: theme.spacing.unit * 60,
    width: theme.spacing.unit * 60,
    opacity: "100%",
  },
  floated: {
    float: "left" as "left",
  },
}
