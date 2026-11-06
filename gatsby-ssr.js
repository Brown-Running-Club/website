const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" })
  setHeadComponents([
    <link key="gf-pre" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link key="gf-pre-static" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    <link
      key="gf"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Graduate&family=Open+Sans:wght@400;700&display=swap"
    />,
  ])
}
