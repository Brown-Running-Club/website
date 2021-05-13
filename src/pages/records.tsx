import React from 'react';
import NavigationBar from '../components/header';
import TitleImage from '../components/title-image';
import RecordsImage from '../images/records.jpg';
import theme from '../config/theme';
import PageBody from '../components/page-body';
import Table from '../components/table';
import Card from '../components/card';
import WiderContainer from '../components/wider-container';


export default class RecordsPage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <TitleImage image={RecordsImage}>
          <p style={styles.titleText}>RECORDS</p>
        </TitleImage>
        <PageBody>
        <WiderContainer>
        <Card>
        <p style={styles.summaryText}>Have a faster time? Submit a form <a href="https://docs.google.com/forms/d/e/1FAIpQLSdS0wNnun2CGI22-G20EvecTGuoWLsR9uvxZeA51b1zGxireQ/viewform">here</a>.
        <br/>
        
        Records may be set at any event or course as long as the athlete is in a Brown Running Club uniform. The athlete must be a full-time student at Brown University or Rhode Island School of Design. All records were set after the club’s affiliation with NIRCA. 
        Only new records will be accepted. New records must be submitted within one month of the performance date.
        <br/>
        <p style = {styles.disclaimerText}>
        <b>h</b> indicates a handtime for events 800m and shorter
        <br/>
        <b>c</b> indicates a conversion was used for this record
        </p>
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
  disclaimerText: {
    ...theme.typography.h2 as any,
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

