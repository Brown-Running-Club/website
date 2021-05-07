import React from "react"
import theme from "../config/theme"
import { Link } from "gatsby"

type Props = {
  text: string
  box?: boolean
  leftAlign?: boolean
  link?: string
}

export default (props: Props) => {
  if (props.box) {
    let inside = <p style={styles.text}>{props.text}</p>
    if (props.link) {
      inside = (
        <Link to={props.link} {...theme.linkProps}>
          {inside}
        </Link>
      )
    }
    return (
      <div style={props.leftAlign ? styles.buttonLeft : styles.button}>
        {inside}
      </div>
    )
  } else {
    let inside = <p style={styles.textNoBox}>{props.text}</p>
    if (props.link) {
      inside = (
        <Link to={props.link} {...theme.linkProps}>
          {inside}
        </Link>
      )
    }
    return (
      <div
        style={
          props.leftAlign ? styles.noBoxContainerLeft : styles.noBoxContainer
        }
      >
        {inside}
      </div>
    )
  }
}

const styles = {
  button: {
    display: "inline-flex",
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    backgroundColor: theme.palette.red,
    borderRadius: theme.spacing.unit / 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    cursor: "pointer" as "pointer",
  },
  buttonLeft: {
    display: "inline-flex",
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    backgroundColor: theme.palette.red,
    borderRadius: theme.spacing.unit / 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    cursor: "pointer" as "pointer",
  },
  text: {
    margin: 0,
    ...theme.typography.h3,
    color: theme.palette.white,
  },
  textNoBox: {
    ...theme.typography.h2,
    color: theme.palette.red,
    alignSelf: "flex-end",
    cursor: "pointer" as "pointer",
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  noBoxContainer: {
    alignSelf: "flex-end",
  },
  noBoxContainerLeft: {
    alignSelf: "flex-start",
  },
}
