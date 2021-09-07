import React from "react"
import MediaQuery from "react-responsive"
import theme from "../config/theme"

type Props = {
  children: React.ReactNode
  title?: string
  centeredTitle?: boolean
  image: string
  renderDetails: () => React.ReactNode
}

const CharacterCard = (props: Props) => (
  <div style={styles.card}>
    {props.title && (
      <p style={props.centeredTitle ? styles.centeredTitle : styles.title}>
        {props.title}
      </p>
    )}
    <MediaQuery minWidth="900px">
      <div style={styles.innerContainer}>
        <div style={styles.imageContainer}>
          <img src={props.image} style={styles.image} alt={props.title}></img>
        </div>
        <div style={styles.spacer}/>
        <div style={styles.container}>
          {props.renderDetails()}
          <br/>
          {props.children}
        </div>
      </div>
    </MediaQuery>
    <MediaQuery minWidth="600px" maxWidth="899px">
      <div style={styles.innerContainer}>
        <div style={styles.imageContainer}>
          <img src={props.image} style={styles.image} alt={props.title}></img>
        </div>
        <div style={styles.spacer}/>
        <div style={styles.imageContainer}>
          {props.renderDetails()}
        </div>
      </div>
      <div style={styles.container}>
        <br/>
        {props.children}
      </div>
    </MediaQuery>
    <MediaQuery maxWidth="599px">
        
      <div style={styles.container}>
        <img src={props.image} style={styles.imageMobile} alt={props.title}></img>
        <br/>
        {props.renderDetails()}
        <br/>
        {props.children}
      </div>
    </MediaQuery>
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
  innerContainer: {
    display: 'flex' as const,
    flexDirection: 'row' as const,
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
  },
  image: {
    height: theme.spacing.unit * 40,
    width: theme.spacing.unit * 40,
    opacity: "100%",
    objectFit: "cover" as "cover",
  },
  imageMobile: {
    width: '100%',
    opacity: "100%",
  },
  imageContainer: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    justifyContent: 'center' as const,
  },
  spacer: {
    marginRight: theme.spacing.unit * 3,
  },
}
