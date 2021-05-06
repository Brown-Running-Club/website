import React from 'react';
import theme from '../config/theme';

type Props = {
  children: React.ReactNode,
  image: string,
}

export default class TitleImage extends React.PureComponent<Props> {

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.overlayContainer}>
          {this.props.children}
        </div>
        <img src={this.props.image} style={styles.image} alt="cover"/>
      </div>
    )
  }

}

const styles = {
  container: {
    overflow: 'hidden' as 'hidden',
    width: '100%',
    height: theme.spacing.unit * 50,
    display: 'flex' as 'flex',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  image: {
    height: theme.spacing.unit * 50,
    width: '100%',
    opacity: '70%',
    objectFit: 'cover' as 'cover',
  },
  overlayContainer: {
    position: 'absolute' as 'absolute',
    display: 'flex' as 'flex',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
    flexDirection: 'column' as 'column',
    zIndex: 1,
  }
}
