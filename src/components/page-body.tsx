import React from "react"
import MediaQuery from "react-responsive"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
}

const PageBody = (props: Props) => (
  <>
    <MediaQuery query="(min-width: 600px)">
      <div style={styles.container}>{props.children}</div>
    </MediaQuery>
    <MediaQuery query="(max-width: 599px)">
      <div style={{...styles.container, ...styles.containerMobile}}>{props.children}</div>
    </MediaQuery>
  </>
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
    paddingBottom: theme.spacing.unit * 5,
  },
  containerMobile: {
    paddingLeft: 0,
    paddingRight: 0,
  }
}
