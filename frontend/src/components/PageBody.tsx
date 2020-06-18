import React from 'react';
import theme from '../config/theme';

type Props = {
  children: React.ReactNode,
}

export default class PageBody extends React.PureComponent<Props> {

  render() {
    return (
      <div style={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  container: {
    backgroundColor: theme.palette.lightGray,
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'center' as 'center',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
}