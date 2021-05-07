import React from "react"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
  title?: string
  centeredTitle?: boolean
}

const Card = (props: Props) => (
  <div style={styles.card}>
    {props.title && (
      <p style={props.centeredTitle ? styles.centeredTitle : styles.title}>
        {props.title}
      </p>
    )}
    <div style={styles.container}>{props.children}</div>
  </div>
)
export default Card

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
}
