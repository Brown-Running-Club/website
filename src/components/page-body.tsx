import React from "react"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
}

const PageBody = (props: Props) => (
  <div style={styles.container}>{props.children}</div>
)
export default PageBody

const styles = {
  container: {
    backgroundColor: theme.palette.lightGray,
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "center" as const,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
}
