import React from 'react';
import theme from '../config/theme';

type Props = {
  text: string,
  box?: boolean,
}

export default class Button extends React.PureComponent<Props> {

  render() {
    if (this.props.box) {
      return (
        <div style={styles.button}>
          <p style={styles.text}>{this.props.text}</p>
        </div>
      )
    } else {
      return (
          <p style={styles.textNoBox}>{this.props.text}</p>
      )
    }
  }
}

const styles = {
  button: {
    display: 'inline-flex',
    padding: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    backgroundColor: theme.palette.red,
    borderRadius: theme.spacing.unit / 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    cursor: 'pointer' as 'pointer',
  },
  text: {
    margin: 0,
    ...theme.typography.h3,
    color: theme.palette.white,
  },
  textNoBox: {
    ...theme.typography.h2,
    color: theme.palette.red,
    alignSelf: 'flex-end',
    cursor: 'pointer' as 'pointer',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  }
}