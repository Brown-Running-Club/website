import React from 'react';
import NavigationBar from '../components/NavigationBar';
import TitleImage from '../components/TitleImage';
import HealthImage from '../assets/images/health.jpg';
import theme from '../config/theme';
import PageBody from '../components/PageBody';
import Table from '../components/Table';
import Card from '../components/Card';
import WiderContainer from '../components/WiderContainer';


export default class RecordsPage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <TitleImage image={HealthImage}>
          <p style={styles.titleText}>RECORDS</p>
        </TitleImage>
        <PageBody>
        <WiderContainer>
        <Card>
        <p style={styles.summaryText}>Have a faster time? Submit a form <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0wNnun2CGI22-G20EvecTGuoWLsR9uvxZeA51b1zGxireQ/viewform">here</a>.
        <br/>
        Records in <b>bold</b> were set this year.
        </p>
        </Card>

        <Card title="Cross Country"> 
        <p style={styles.summaryText}><b>Women</b></p>
        <Table season="women_xc"></Table>
        <br/>
        <p style={styles.summaryText}><b>Men</b></p>
        <Table season="men_xc"></Table>
        </Card>
        

        <br/>
       
        <Card title="Indoor Track"> 
        <p style={styles.summaryText}><b>Women</b></p>
        <Table season="women_itrack"></Table>
        <br/>
        <p style={styles.summaryText}><b>Men</b></p>
        <Table season="men_itrack"></Table>
        </Card>

        <br/>

        <Card title="Outdoor Track"> 
        <p style={styles.summaryText}><b>Women</b></p>
        <Table season="women_otrack"></Table>
        <br/>
        <p style={styles.summaryText}><b>Men</b></p>
        <Table season="men_otrack"></Table>
        </Card>

        <br/>

        <Card title="Outdoor Track"> 
        <p style={styles.summaryText}><b>Women</b></p>
        <Table season="women_otrack"></Table>
        <br/>
        <p style={styles.summaryText}><b>Men</b></p>
        <Table season="men_otrack"></Table>
        </Card>

        <br/>

        <Card title="Road Races"> 
        <p style={styles.summaryText}><b>Women</b></p>
        <Table season="women_rr"></Table>
        <br/>
        <p style={styles.summaryText}><b>Men</b></p>
        <Table season="men_rr"></Table>
        </Card>
        </WiderContainer>

        {/* <Table /> */}
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
    margin: 2,
    textAlign: 'center' as 'center',
  },

  headerText: {
    ...theme.typography.h1,
    color: theme.palette.brown,
    margin: 0,
    textAlign: 'center' as 'center',
    marginBottom: theme.spacing.unit * 2,
  }

  
}

