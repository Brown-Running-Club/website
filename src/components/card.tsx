import React from "react"
import MediaQuery from "react-responsive"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
  title?: string
  centeredTitle?: boolean
}

const Card = (props: Props) => (
  <>
  <MediaQuery query="(min-width: 600px)">
    <div style={styles.card}>
      {props.title && (
        <p style={props.centeredTitle ? styles.centeredTitle : styles.title}>
          {props.title}
        </p>
      )}
      <div style={styles.container}>{props.children}</div>
    </div>
  </MediaQuery>
  <MediaQuery query="(max-width: 599px)">
    <div style={styles.card}>
      {props.title && (
        <p style={props.centeredTitle ? styles.centeredTitle : styles.title}>
          {props.title}
        </p>
      )}
      <div style={{...styles.container, ...styles.mobileContainer}}>{props.children}</div>
    </div>
  </MediaQuery>
</>
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
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
  },
  mobileContainer: {
    paddingLeft: -theme.spacing.unit,
    paddingRight: -theme.spacing.unit,
  }
}
