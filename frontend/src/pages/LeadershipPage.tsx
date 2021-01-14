import React from 'react';
import NavigationBar from '../components/NavigationBar';
import TitleImage from '../components/TitleImage';
import HealthImage from '../assets/images/health.jpg';
import theme from '../config/theme';
import PageBody from '../components/PageBody';
import WiderContainer from '../components/WiderContainer';
import Card from '../components/Card';
import CharacterCard from '../components/CharacterCard';
import Julia from '../assets/images/julia.jpg';
import leadership from '../assets/images/leadership.jpg';
import Trevor from '../assets/images/trevor-leadership.jpg';
import Max from '../assets/images/max.jpg';
import Eliot from '../assets/images/eliot.jpg';
import Grace from '../assets/images/grace.jpg';
import Maura from '../assets/images/maura.jpg';


export default class LeadershipPage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <TitleImage image={leadership}>
          <p style={styles.titleText}>LEADERSHIP</p>
        </TitleImage>
        <PageBody>
          <WiderContainer>
          <CharacterCard title="Julia McClellan" image={Julia}>
          <p style={styles.summaryText}>
            <b>Focus:</b> General Operations and Race Coordination <br></br>
            <b>Class:</b> Senior<br></br>
            <b>Concentration:</b> Computer Science<br></br>
            <b>Hometown:</b> Carlisle, Massachusetts<br></br>
            <br></br>
            Julia, who has been in the club for four years and a leader for three, 
            is in charge of organizing race logistics and generally keeping the club running. 
            When she’s not high on LSD (long steady distance), Julia enjoys reading, knitting, and aquajogging. 
            She is good at showing up too early to things, so you can usually find her at the bear statue long before practice starts.
          </p>
          </CharacterCard>

          <CharacterCard title="Trevor Houchens" image={Trevor}>
          <p style={styles.summaryText}>
            <b>Focus:</b> Training <br></br>
            <b>Class:</b> Senior<br></br>
            <b>Concentration:</b> Computer Science<br></br>
            <b>Hometown:</b> South Burlington, Vermont<br></br>
            <br></br>
            
            In his third year on the leadership team, Trevor is in charge of planning weekly workouts. 
            Trevor enjoys photography, and often takes pictures at races. When he’s not running, biking, coding, 
            or chugging maple syrup straight from the bottle, he can often be seen wandering campus, lost and 
            late to his next obligation. If you see him, feel free to help out by giving directions, but be warned: he startles easily.
          </p>
          </CharacterCard>

          <CharacterCard title="Max Heller" image={Max}>
          <p style={styles.summaryText}>
            <b>Focus:</b> Meet Directing <br></br>
            <b>Class:</b> Junior<br></br>
            <b>Concentration:</b> Computer Science<br></br>
            <b>Hometown:</b> Albany, New York<br></br>
            <br></br>

            Max, a returning leader, is responsible for planning and directing our home meets.
             Max has been an advocate for cross training since his first semester and according 
             to his custom belt is the men’s NCAA aquajogging champion. One of his passions in 
             life is nut butters, of which his favorite is cashew. A believer in the importance 
             of hydration, Max takes great pride in his large water bottle, which he is rarely seen without.
          </p>
          </CharacterCard>

          <CharacterCard title="Eliot Laidlaw" image={Eliot}>
          <p style={styles.summaryText}>
            <b>Focus:</b> Finance <br></br>
            <b>Class:</b> Junior<br></br>
            <b>Concentration:</b> Computer Science<br></br>
            <b>Hometown:</b> Barrington, Rhode Island<br></br>
            <br></br>

            In his second year on the leadership team, Eliot is shifting from social chair 
            to managing our finances. A saxophone player and jazz enthusiast, Eliot is a 
            member of the popular campus band Orange Guava Passion (OGP). Seemingly impervious 
            to the cold, he can be found running in the middle of winter in his brightly colored short-shorts.
          </p>
          </CharacterCard>

          <CharacterCard title="Maura Driscoll" image={Maura}>
          <p style={styles.summaryText}>
            <b>Focus:</b> Social and Recruiting <br></br>
            <b>Class:</b> Junior<br></br>
            <b>Concentration:</b> Computer Science<br></br>
            <b>Hometown:</b> Portsmouth, Rhode Island<br></br>
            <br></br>
            
            Maura is in charge of planning social events and recruiting new runners 
            to the club. While this is her first year on leadership, she has been an 
            active member of the club competitively and socially since her freshmen year. 
            Maura loves dancing, especially if Ke$ha is playing. In a controversial view, 
            she believes that oats are the most versatile food.
          </p>
          </CharacterCard>

          <CharacterCard title="Grace Durantes" image={Grace}>
          <p style={styles.summaryText}>
            <b>Focus:</b> Communications<br></br>
            <b>Class:</b> Sophomore<br></br>
            <b>Concentration:</b> Economics<br></br>
            <b>Hometown:</b> Claremont, California<br></br>
            <br></br>
            
            A newcomer to the leadership team this year, Grace is responsible for 
            our club communications, including our weekly emails, Instagram, and 
            newsletter. Grace likes Maroon 5, watermelon, almond hershey’s kisses, and chewing 
            gum. In her first attempt, Grace became our women’s record holder in the semiannual 
            Hard To Chug Beverage Mile (HTCB).
          </p>
          </CharacterCard>
          
          </WiderContainer>
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
  summaryText: {
    ...theme.typography.h4 as any,
    margin: 0,
    textAlign: 'left' as 'left',
  }
}

