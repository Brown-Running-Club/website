import React from "react"
import MediaQuery from "react-responsive"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
  image: string
}

const TitleImage = (props: Props) => (
  <>
    <MediaQuery query="(min-width: 600px)">
      <div style={styles.container}>
        <div style={styles.overlayContainer}>{props.children}</div>
        <img src={props.image} style={styles.image} alt="cover" />
      </div>
    </MediaQuery>
    <MediaQuery query="(max-width: 599px)">
      <div style={{...styles.container, ...styles.mobile}}>
        <div style={styles.overlayContainer}>{props.children}</div>
        <img src={props.image} style={{...styles.image, ...styles.mobile}} alt="cover" />
      </div>
    </MediaQuery>
  </>
)
export default TitleImage

const styles = {
  container: {
    overflow: "hidden" as "hidden",
    width: "100%",
    height: theme.spacing.unit * 50,
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
  },
  image: {
    height: theme.spacing.unit * 50,
    width: "100%",
    opacity: "70%",
    objectFit: "cover" as "cover",
  },
  mobile: {
    height: theme.spacing.unit * 35,
  },
  overlayContainer: {
    position: "absolute" as "absolute",
    display: "flex" as "flex",
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    flexDirection: "column" as "column",
    zIndex: 1,
  },
}
