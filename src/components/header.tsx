import * as React from "react"
import { Link } from "gatsby"
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
      { name: "race schedule", link: "/race-schedule" },
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
}

export default class NavigationBar extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      openMenu: null,
    }
    this.renderMenu = this.renderMenu.bind(this)
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
            {menus.map(this.renderMenu)}
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
}
