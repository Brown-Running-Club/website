export default {
  linkProps: {
    style: {
      textDecoration: "none" as const,
    },
  },
  palette: {
    brown: "#4E3629",
    red: "#ED1C24",
    white: "#FBFBFB",
    lightGray: "#EDEDED",
    gray: "#DDDDDD",
    black:"#000000"
  },
  spacing: {
    unit: 8,
  },
  typography: {
    semiboldInline: {
      display: "inline",
      fontWeight: "bold" as const,
    },
    title: {
      fontFamily: "Graduate",
      fontSize: 45,
    },
    h1: {
      fontFamily: "Graduate",
      fontSize: 25,
    },
    h2: {
      fontFamily: "Open Sans",
      fontSize: 16,
      fontWeight: "bold" as const,
    },
    h3: {
      fontFamily: "Open Sans",
      fontSize: 13,
      fontWeight: "bold" as const,
    },
    h4: {
      fontFamily: "Open Sans",
      fontSize: 20,
    },
    body: {
      fontFamily: "Open Sans",
      fontSize: 16,
    },
  },
}
