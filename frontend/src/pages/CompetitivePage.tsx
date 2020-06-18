import React from 'react';
import NavigationBar from '../components/NavigationBar';
import TitleImage from '../components/TitleImage';
import CompetitiveImage from '../assets/images/competitive.jpg';
import theme from '../config/theme';
import PageBody from '../components/PageBody';
import WideContainer from '../components/WideContainer';
import Card from '../components/Card';
import Button from '../components/Button';

export default class HealthPage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <TitleImage image={CompetitiveImage}>
          <p style={styles.titleText}>COMPETITIVE</p>
        </TitleImage>
        <PageBody>
          <WideContainer>
            <Card>
              <p style={styles.infoText}>Brown Running Club offers a number of opportunities for competition in cross country, track and field, and road races. Our club is affiliated with the National Intercollegiate Running Club Association (NIRCA), through which we compete against other  schools in cross country and track. We also have participated in local non-NIRCA events ranging from 5K's to a 95 mile relay through RI, Massachusetts, and Connecticut. Most races are open to runners of all ability levels, so come out and rep BRC at our next meet!</p>
            </Card>
            <Card title="Joining the team">
              <p style={styles.bodyText}>The first step to competing with BRC is filling out our <a href="https://docs.google.com/forms/d/e/1FAIpQLSflxodn2_XaMCAeRWYK6loihpgJ6-NHYjMdghs_4b1SjjpzEg/viewform?usp=sf_link" style={styles.link}>competitive team interest form</a>.</p>
              <Button text="Fill out the interest form ➞"></Button>
              <p style={styles.bodyText}>Next, in order to race with us, you’ll need to be on our roster with the club sports department. Follow <a href="https://brownrec.com/sports/2018/8/14/club-sports-registrations-offerings.aspx" style={styles.link}>this link</a>, find Running, click Registration, and follow the instructions.</p>
              <Button text="Fill out the club sports waiver ➞"></Button>
              <p style={styles.bodyTextNoButton}>Running club charges dues for competitive runners to defray costs of travel, registration, and more. Dues are $30 per semester or $50 for the year if you pay in the first few weeks of the fall semester. Financial aid is available, no questions asked, as an option in the interest form. Dues can be paid by Venmo to <p style={styles.link}>@brownrunningclub</p> (preferred) or in cash to a leader.</p>
              <p style={styles.bodyText}>Finally, to be fair to all involved, anyone who wishes to compete must agree to our team policies by signing our <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYqwGNu57k3ANSWYkWYjALMUGi6kyvSV2HZA_s1x8mMIvDKA/viewform?usp=sf_link" style={styles.link}>competitive team contract</a>.</p>
              <Button text="Sign the contract ➞"></Button>
            </Card>
          </WideContainer>
        </PageBody>
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
  },
  infoText: {
    ...theme.typography.h4 as any,
    margin: 0,
  },
  link: {
    color: theme.palette.red,
    textDecoration: 'none' as 'none',
    display: 'inline',
  },
  bodyText: {
    ...theme.typography.body as any,
    margin: 0,
  },
  bodyTextNoButton: {
    ...theme.typography.body as any,
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
}