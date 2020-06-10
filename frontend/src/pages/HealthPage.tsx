import React from 'react';
import NavigationBar from '../components/NavigationBar';
import TitleImage from '../components/TitleImage';
import HealthImage from '../assets/images/health.jpg';
import theme from '../config/theme';

export default class HealthPage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <TitleImage image={HealthImage}>
          <p style={styles.titleText}>HEALTH</p>
        </TitleImage>
      </>
    )
  }

}

const styles = {
  titleText: {
      ...theme.typography.title,
      color: theme.palette.white,
      marginTop: theme.spacing.unit * 2,
      textShadow: '0 0 15px #000000, 0 0 10px #000000',
  }
}