import React from 'react';
import NavigationBar from '../components/NavigationBar';
import TitleImage from '../components/TitleImage';
import CompetitiveImage from '../assets/images/competitive.jpg';
import theme from '../config/theme';
import PageBody from '../components/PageBody';
import WideContainer from '../components/WideContainer';
import Card from '../components/Card';
import NarrowContainer from '../components/NarrowContainer';
import Button from '../components/Button';


export default class AboutPage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <TitleImage image={CompetitiveImage}>
          <p style={styles.titleText}>ABOUT</p>
        </TitleImage>
        <PageBody>
          <WideContainer>
            <Card>
              <p style={styles.infoText}>We’re the place for competitive and recreational running at Brown University. Whether you’re an undergrad, grad student, faculty, or staff member, we encourage you to join us for a run. We welcome runners of all levels! For those interested in running competitively, we compete in cross country races, indoor and outdoor track meets, and road races. If you want to check us out, stop by for a run! Additionally, you can find out more by looking around here, joining our <a href="https://www.facebook.com/groups/260972757349158/">Facebook group</a> or shooting us an email at run@brown.edu.</p>
              <p style={styles.infoTextBottom}>We meet up at the bear statue outside the Nelson Fitness Center every day of the week during the academic year, at 4:15pm on weekdays and 10:00am on weekends</p>
            </Card>
          </WideContainer>
          <NarrowContainer>
            <Card title="More Info" centeredTitle>
              <Button leftAlign text="Recent Running Club announcements ➞" link="announcements" />
              <Button leftAlign text="Running Club FAQ ➞" link="faq" />
              <Button leftAlign text="Learn about the competitive team ➞" link="competitive" />
              <Button
                leftAlign
                text="Learn about the current leadership team ➞"
                link="leadership" 
              />
            </Card>
          </NarrowContainer>
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
    marginBottom: theme.spacing.unit * 2,
  },
  infoTextBottom: {
    ...theme.typography.h4 as any,
    margin: 0,
  },
}