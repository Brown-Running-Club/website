import * as React from "react"
import { Link } from "gatsby"
import theme from "../config/theme"

type MenuItem = {
  name: string
  link: string
}

const links: Array<MenuItem> = [
  {
    name: "donations",
    link: "/donations"
  },
  {
    name: "contact",
    link: "/contact",
  },
  {
    name: "newsletter",
    link: "/newsletter",
  },
]

function renderItem({name, link}) {
  return (
    <div
      style={styles.navigationMenu}>
      <Link to={link} {...theme.linkProps}>
        <p style={styles.navigationHeader}>
          {name.toUpperCase()}
        </p>
      </Link>
    </div>
  )
}

const Footer = () => (
  <div style={styles.bar}>
    {links.map(renderItem)}
  </div>
)
export default Footer

const styles = {
  bar: {
    display: "flex",
    position: "fixed" as "fixed",
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    bottom: 0,
    left: 0,
    height: theme.spacing.unit * 4,
    width: "100%",
    backgroundColor: theme.palette.brown,
    flex: 1,
    zIndex: 100,
    justifyContent: "center" as const,
  },
  navigationHeader: {
    ...(theme.typography.h3 as any),
    color: theme.palette.gray,
  },
  navigationMenu: {
    position: "relative" as "relative",
    marginLeft: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
}
