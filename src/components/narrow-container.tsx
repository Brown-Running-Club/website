import React from "react"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
}

const NarrowContainer = (props: Props) => (
  <div style={styles.container}>{props.children}</div>
)
export default NarrowContainer

const styles = {
  container: {
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    width: 300,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
}
