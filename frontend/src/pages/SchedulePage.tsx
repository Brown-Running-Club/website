import React from 'react';
import NavigationBar from '../components/NavigationBar';
import theme from '../config/theme';
import PageBody from '../components/PageBody';

export default class SchedulePage extends React.Component {

  render() {
    return (
      <>
        <NavigationBar />
        <PageBody>
            <div>
        <iframe src="https://calendar.google.com/calendar/embed?mode=WEEK&amp;src=run%40brown.edu&amp;ctz=America%2FNew_York" width="1200" height="800" frameBorder="0" scrolling="no"></iframe>
        </div>
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
    textAlign: 'center' as 'center',
  }
}

