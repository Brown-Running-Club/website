import React from 'react'
import theme from '../config/theme'

type Props = {
  children: React.ReactNode,
  title?: string | undefined,
  centeredTitle?: boolean,
  image: string
}

export default class CharacterCard extends React.PureComponent<Props> {

  render() {
    return (
      <div style={styles.card}>
        {this.props.title && <p 
          style={this.props.centeredTitle ? styles.centeredTitle : styles.title}
          >
            {this.props.title}
          </p>
        }
        <div style = {styles.floated}>
        <img src={this.props.image} style = {styles.image}></img>
        </div>
        <div style={styles.container}>
        
          {this.props.children}
          
        </div>
      </div>
    )
  }

}

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
    textAlign: 'center' as 'center',
    marginBottom: theme.spacing.unit * 2,
  },
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },

  image:{
    height: theme.spacing.unit * 60,
    width: theme.spacing.unit * 60,
    opacity: '100%',
  },
  floated:{
      float:"left" as 'left',
  }
  
}