import React from 'react';
import theme from '../config/theme';

type Props = {
  children: React.ReactNode,
}

export default class WiderContainer extends React.PureComponent<Props> {

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
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    width: 1100,
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
}