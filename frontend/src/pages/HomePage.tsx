import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import TitleImage from '../components/TitleImage';
import Kickoff from '../assets/images/kickoff.png';
import IvyBrownLogo from '../assets/images/ivybrownlogo.png';
import theme from '../config/theme';
import Card from '../components/Card';
import Button from '../components/Button';

type Event = {
  time: string,
  name: string,
  description?: string,
}

type Week = { [key: string] : Array<Event> }

const week: Week = {
  monday: [
    { time: '4:15p', name: 'Practice', description: 'Regular run' },
  ],
  tuesday: [
    { time: '4:15p', name: 'Practice', description: 'Workout' },
    { time: '8:00p', name: 'Aquajogging'},
  ],
  wednesday: [
    { time: '4:15p', name: 'Practice', description: 'Regular run' },
  ],
  thursday: [
    { time: '4:15p', name: 'Practice', description: 'Workout' },
    { time: '8:00p', name: 'Aquajogging'},
  ],
  friday: [
    { time: '4:15p', name: 'Practice', description: 'Fun sock Friday!' },
  ]
}

export default class HomePage extends Component {

  render(){
    return(
      <div>
        <NavigationBar />
        <TitleImage image={Kickoff}>
          <img src={IvyBrownLogo} style={styles.titleImage} alt="brown"/>
          <p style={styles.titleText}>RUNNING CLUB</p>
        </TitleImage>
        <div style={styles.container}>
          <div style={styles.mainContainer}>
            <Card>
              <p style={styles.welcomeText}>Welcome to the home of recreational and competitive running at Brown University! Whether you’re an undergrad, grad student, faculty, or staff member, we encourage you to join us for a run. We welcome runners of all levels! For those interested in running competitively, we compete in cross country races, indoor and outdoor track meets, and road races. We practice at <p style={theme.typography.semiboldInline}>4:15PM Mon-Fri and 10:00AM Sat-Sun</p> and meet at <p style={theme.typography.semiboldInline}>the bear statue outside the Nelson Fitness Center</p>.</p>
              <Button text="Learn more about Running Club ➞" />
            </Card>
            <Card title="Announcements">
              <Button text="More announcements ➞" />
            </Card>
          </div>
          <div style={styles.sideContainer}>
            <Card title="This Week" centeredTitle>
              {Object.keys(week).map((day) => (
                <>
                  <p style={styles.dayText}>{day.toUpperCase()}</p>
                  {week[day].map((event) => (
                    <div style={styles.eventContainer}>
                      <div style={styles.eventTimeContainer}>
                        <p style={styles.eventTime}>{event.time}</p>
                      </div>
                      <div>
                        <p style={styles.eventTime}>{event.name}</p>
                        {event.description && <p
                          style={styles.eventDescription}
                          >
                            {event.description}
                          </p>
                        }
                      </div>
                    </div>
                  ))}
                </>
              ))}
            </Card>
          </div>
        </div>
      </div>
    );
  }


}

const styles = {
  titleText: {
    ...theme.typography.title,
    color: theme.palette.white,
    marginTop: theme.spacing.unit * 2,
    textShadow: '0 0 15px #000000, 0 0 10px #000000',
  },
  titleImage: {
    height: theme.spacing.unit * 20,
    paddingRight: theme.spacing.unit * 2,
  },
  container: {
    backgroundColor: theme.palette.lightGray,
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'center' as 'center',
    height: 10000,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  mainContainer: {
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    width: 700,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
  sideContainer: {
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    width: 300,
    marginTop: theme.spacing.unit * 2,
  },
  welcomeText: {
    ...theme.typography.h4 as any,
    margin: 0,
  },
  dayText: {
    ...theme.typography.h2 as any,
    color: theme.palette.red,
    margin: 0,
    marginBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    borderTop: '1px solid ' + theme.palette.lightGray,
  },
  eventContainer: {
    display: 'flex',
    marginBottom: theme.spacing.unit,
  },
  eventTimeContainer: {
    width: theme.spacing.unit * 7,
  },
  eventTime: {
    ...theme.typography.h2 as any,
    margin: 0,
  },
  eventDescription: {
    ...theme.typography.h2 as any,
    fontWeight: 'normal' as 'normal',
    margin: 0,
  }
}