import React from "react"
import theme from "../config/theme"
import { Link } from "gatsby"

type Props = {
  text: string
  box?: boolean
  leftAlign?: boolean
  link?: string
}

const Button = (props: Props) => {
  let text = (
    <p style={props.box ? styles.text : styles.textNoBox}>{props.text}</p>
  )
  const inside = props.link ? (
    <Link to={props.link} {...theme.linkProps}>
      {text}
    </Link>
  ) : (
    text
  )
  let style
  if (props.box) {
    style = props.leftAlign ? styles.buttonLeft : styles.button
  } else {
    style = props.leftAlign ? styles.noBoxContainerLeft : styles.noBoxContainer
  }
  return <div style={style}>{inside}</div>
}
export default Button

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
