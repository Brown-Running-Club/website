import React from "react"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
}

const WideContainer = (props: Props) => (
  <div style={styles.container}>{props.children}</div>
)
export default WideContainer

const styles = {
  container: {
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    width: 750,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
}
