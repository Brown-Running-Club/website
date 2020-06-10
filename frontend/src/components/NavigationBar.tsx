import React from 'react';
import theme from '../config/theme';
import BrownIvyB from '../assets/images/ivyblogo.png';
import { Link } from 'react-router-dom';

type MenuItem = {
  name: string,
  list: Array<MenuItem> | null,
  link: string,
}

const menus: Array<MenuItem> = [
  {
    name: 'info',
    list: [
      { name: 'about', list: null, link: '/about' },
      { name: 'announcements', list: null, link: '/announcements' },
    ],
    link: '/about',
  },
  {
    name: 'training',
    list: [
      { name: 'schedule', list: null, link: '/schedule' },
      { name: 'routes', list: null, link: '/routes' },
      { name: 'summer training', list: null, link: '/summer' },
      { name: 'health', list: null, link: '/health' },
    ],
    link: '/schedule',
  },
  {
    name: 'competitive',
    list: [
      { name: 'info', list: null, link: '/competitive' },
      { name: 'records', list: null, link: '/records' },
    ],
    link: '/competitive',
  },
  {
    name: 'outreach',
    list: [
    ],
    link: '/outreach',
  },
  {
    name: 'brown bear invitational',
    list: [],
    link: '/brown-bear-invitational',
  }
]

type State = {
  openMenu: string | null;
}

export default class NavigationBar extends React.Component<any, State> {

  constructor(props: any) {
    super(props)

    this.state = {
      openMenu: null,
    }
    
    this.renderMenu = this.renderMenu.bind(this);
  }

  renderMenu(menuItem: MenuItem) {
    return (
      <div
        style={styles.navigationMenu}
        onMouseEnter={() => {
          this.setState({ openMenu: menuItem.name })
        }}
        onMouseLeave={() => {
          this.setState({ openMenu: null })
        }}
      >
        <Link to={menuItem.link} {...theme.linkProps}>
          <p style={
            this.state.openMenu === menuItem.name
              ? styles.navigationHeaderHighlighted
              : styles.navigationHeader
            }
          >
            {menuItem.name.toUpperCase() + ' ▾'}
          </p>
        </Link>
        {this.state.openMenu === menuItem.name &&
          <div style={styles.navigationSubmenu}>
            {menuItem.list && menuItem.list.map((submenuItem) => (
              <Link to={submenuItem.link} {...theme.linkProps}>
                <div style={styles.navigationSubmenuItem}>
                  <p style={styles.navigationSubmenuItemText}>
                    {submenuItem.name.toUpperCase()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        }
      </div>
    )
  }

  render() {
    return (
      <>
        <div style={styles.bar}>
          <Link to="/" {...theme.linkProps}>
            <img src={BrownIvyB} alt="Brown Ivy B" style={styles.ivyB} />
          </Link>
          <Link to="/" {...theme.linkProps}>
            <p style={styles.title}>RUNNING CLUB</p>
          </Link>
          {menus.map(this.renderMenu)}
        </div>
        <div style={styles.spacer}/>
      </>
    )
  }
}

const styles = {
  bar: {
    display: 'flex',
    position: 'fixed' as 'fixed',
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    top: 0,
    left: 0,
    height: theme.spacing.unit * 8,
    width: '100%',
    backgroundColor: theme.palette.brown,
    flex: 1,
    zIndex: 100,
  },
  spacer: {
    height: theme.spacing.unit * 8,
  },
  ivyB: {
    height: theme.spacing.unit * 6,
    marginLeft: theme.spacing.unit * 3,
  },
  title: {
    ...theme.typography.h1,
    color: theme.palette.white,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit * 6,
  },
  navigationHeader: {
    ...theme.typography.h2 as any,
    color: theme.palette.gray,
  },
  navigationHeaderHighlighted: {
    ...theme.typography.h2 as any,
    color: theme.palette.white,
  },
  navigationMenu: {
    position: 'relative' as 'relative',
    marginRight: theme.spacing.unit * 3,
    cursor: 'pointer',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  navigationSubmenu: {
    position: 'absolute' as 'absolute',
    top: theme.spacing.unit * 7,
    left: -theme.spacing.unit,
    right: -theme.spacing.unit,
    backgroundColor: theme.palette.lightGray,
    border: '1px solid black',
    borderBottom: 'none',
    minWidth: theme.spacing.unit * 20,
  },
  navigationSubmenuItem: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 1.5,
    paddingTop: theme.spacing.unit * 1.5,
    ...theme.typography.h3 as any,
    color: theme.palette.brown,
    borderBottom: '1px solid black',
  },
  navigationSubmenuItemText: {
    margin: 0,
  }
}
