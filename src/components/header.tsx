import * as React from "react"
import { Link } from "gatsby"
import MediaQuery from "react-responsive"
import { slide as BurgerMenu } from "react-burger-menu"
import theme from "../config/theme"
import BrownIvyB from "../images/ivyblogo.png"

type Menu = {
  name: string
  list?: Array<MenuItem>
  link?: string
}
type MenuItem = {
  name: string
  link: string
}

const menus: Array<Menu> = [
  {
    name: "info",
    list: [
      { name: "about", link: "/about" },
      { name: "announcements", link: "/announcements" },
      { name: "faq", link: "/faq" },
      { name: "leadership", link: "/leadership" },
    ],
    link: "/about",
  },
  {
    name: "training",
    list: [
      { name: "routes", link: "/routes" },
      { name: "summer training", link: "/summer" },
      { name: "health", link: "/health" },
    ],
  },
  {
    name: "competitive",
    list: [
      { name: "info", link: "/competitive" },
      { name: "race schedule", link: "/schedule" },
      { name: "records", link: "/records" },
    ],
    link: "/competitive",
  },
  {
    name: "recreation",
    list: [
      { name: "events", link: "/events" },
      { name: "photos", link: "/photos" },
    ],
  },
  {
    name: "invitationals",
    list: [
      {
        name: "brown bear invitational",
        link: "/brown-bear-invitational",
      },
      {
        name: "billy brockmueller invitational",
        link: "/billy-brockmueller-invitational",
      },
    ],
  },
]

type State = {
  openMenu: string | null
  burgerMenuOpen: boolean,
}

export default class NavigationBar extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      openMenu: null,
      burgerMenuOpen: false,
    }
    this.renderMenu = this.renderMenu.bind(this)
    this.renderHamburgerMenu = this.renderHamburgerMenu.bind(this);
  }

  renderMenu(menu: Menu) {
    const elt = (
      <p
        style={
          this.state.openMenu === menu.name
            ? styles.navigationHeaderHighlighted
            : styles.navigationHeader
        }
      >
        {menu.name.toUpperCase() + " ▾"}
      </p>
    )
    return (
      <div
        style={styles.navigationMenu}
        onMouseEnter={() => {
          this.setState({ openMenu: menu.name })
        }}
        onMouseLeave={() => {
          this.setState({ openMenu: null })
        }}
      >
        {menu.link ? (
          <Link to={menu.link} {...theme.linkProps}>
            {elt}
          </Link>
        ) : (
          <div style={{ cursor: "default" }}>{elt}</div>
        )}
        {this.state.openMenu === menu.name && (
          <div style={styles.navigationSubmenu}>
            {menu.list &&
              menu.list.map(submenuItem => (
                <Link to={submenuItem.link} {...theme.linkProps}>
                  <div style={styles.navigationSubmenuItem}>
                    <p style={styles.navigationSubmenuItemText}>
                      {submenuItem.name.toUpperCase()}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        )}
      </div>
    )
  }

  renderHamburgerMenu() {
    const content = menus.map((menu) => {
      const elt = (
        <p
          style={
            this.state.openMenu === menu.name
              ? styles.navigationHeaderHighlightedBurger
              : styles.navigationHeaderBurger
          }
        >
          {menu.name.toUpperCase()}
        </p>
      )
      return (
        <div
          style={styles.navigationMenuBurger}
          onMouseDown={() => {
            this.setState({ openMenu: menu.name })
          }}
        >
          <div style={{ cursor: "pointer" }}>{elt}</div>
          {this.state.openMenu === menu.name && (
            <div style={styles.navigationSubmenuBurger}>
              {menu.list &&
                menu.list.map(submenuItem => (
                  <Link to={submenuItem.link} {...theme.linkProps}>
                      <p style={styles.navigationSubmenuItemTextBurger}>
                        {submenuItem.name.toUpperCase()}
                      </p>
                  </Link>
                ))}
            </div>
          )}
        </div>
      )
    });
    return (
      <div>
        <MediaQuery query="(min-width: 600px)">
          <BurgerMenu right styles={styles.burgerMenu}>
            {content}
          </BurgerMenu>
        </MediaQuery>
        <MediaQuery query="(max-width: 599px)">
          <BurgerMenu width="100%" right styles={styles.burgerMenu}>
            {content}
          </BurgerMenu>
        </MediaQuery>
      </div>
    )
  }

  render() {
    return (
      <>
        <header>
          <div style={styles.bar}>
            <Link to="/" {...theme.linkProps}>
              <img src={BrownIvyB} alt="Brown Ivy B" style={styles.ivyB} />
            </Link>
            <Link to="/" {...theme.linkProps}>
              <p style={styles.title}>RUNNING CLUB</p>
            </Link>
            <MediaQuery query="(min-width: 1150px)">
              {menus.map(this.renderMenu)}
            </MediaQuery>
            <MediaQuery query="(max-width: 1149px)">
              {this.renderHamburgerMenu()}
            </MediaQuery>
          </div>
          <div style={styles.spacer} />
        </header>
      </>
    )
  }
}

const styles = {
  bar: {
    display: "flex",
    position: "fixed" as "fixed",
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    top: 0,
    left: 0,
    height: theme.spacing.unit * 8,
    width: "100%",
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
    ...(theme.typography.h2 as any),
    color: theme.palette.gray,
  },
  navigationHeaderHighlighted: {
    ...(theme.typography.h2 as any),
    color: theme.palette.white,
  },
  navigationMenu: {
    position: "relative" as "relative",
    marginRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  navigationSubmenu: {
    position: "absolute" as "absolute",
    top: theme.spacing.unit * 7,
    left: -theme.spacing.unit,
    right: -theme.spacing.unit,
    backgroundColor: theme.palette.lightGray,
    border: "1px solid black",
    borderBottom: "none",
    minWidth: theme.spacing.unit * 20,
  },
  navigationSubmenuItem: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 1.5,
    paddingTop: theme.spacing.unit * 1.5,
    ...(theme.typography.h3 as any),
    color: theme.palette.brown,
    borderBottom: "1px solid black",
  },
  navigationSubmenuItemText: {
    margin: 0,
  },
  burgerMenu: {
    bmBurgerButton: {
      position: 'fixed',
      width: `${theme.spacing.unit * 3}px`,
      height: `${theme.spacing.unit * 3}px`,
      right: `${theme.spacing.unit * 3}px`,
      top: `${theme.spacing.unit * 2.5}px`,
    },
    bmBurgerBars: {
      background: theme.palette.gray,
    },
    bmBurgerBarsHover: {
      opacity: 1,
      background: theme.palette.white,
    },
    bmCrossButton: {
      position: 'fixed',
      right: `${theme.spacing.unit * 3}px`,
      top: `${theme.spacing.unit * 1.5}px`,
    },
    bmCross: {
      background: theme.palette.gray,
      width: `${theme.spacing.unit * 0.5}px`,
      height: `${theme.spacing.unit * 3.5}px`,
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: 0,
    },
    bmMenu: {
      background: theme.palette.brown,
      padding: `${theme.spacing.unit * 2}`,
    },
    bmItemList: {
      background: theme.palette.brown,
      marginTop: `${theme.spacing.unit * 8}px`,
      height: null,
    },
    bmItem: {
    },
    bmOverlay: {
      display: 'none',
    }
  },
  navigationMenuBurger: {
    outline: 'none',
  },
  navigationSubmenuItemTextBurger: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    ...(theme.typography.h3 as any),
    color: theme.palette.brown,
    textAlign: 'right',
    margin: 0,
  },
  navigationSubmenuBurger: {
    backgroundColor: theme.palette.lightGray,
    width: '100%',
    padding: 0,
  },
  navigationHeaderBurger: {
    ...(theme.typography.h2 as any),
    color: theme.palette.gray,
    paddingRight: theme.spacing.unit * 4,
    textAlign: 'right',
    margin: 0,
    paddingBottom: theme.spacing.unit * 1.5,
    paddingTop: theme.spacing.unit * 1.5,
  },
  navigationHeaderHighlightedBurger: {
    ...(theme.typography.h2 as any),
    color: theme.palette.white,
    paddingRight: theme.spacing.unit * 4,
    textAlign: 'right',
    margin: 0,
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
}
