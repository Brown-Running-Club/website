import React from 'react';
import NavigationBar from '../components/NavigationBar';
import TitleImage from '../components/TitleImage';
import KickoffImage from '../assets/images/kickoff.png';
import theme from '../config/theme';

export default class HealthPage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <TitleImage image={KickoffImage}>
          <p style={styles.titleText}>PAGE NOT FOUND</p>
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