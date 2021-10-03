import React, { useEffect, useState } from "react"
import TitleImage from "../components/title-image"
import RoutesImage from "../images/schedule.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import NarrowContainer from "../components/narrow-container"
import Button from "../components/button"
import Layout from "../components/layout"
import { getSheetData } from "../api-calls"

const SHEET_ID = "1TXeyBP-qka8t8wsWUT8SxnyYWZ67JFQT2a9Mo7AzWl0"
const RANGE = "A2:D100"

type Route = {
  name: string,
  distance: string,
  link: string,
  description: string,
}

async function getRoutes(routeType: string): Promise<Route[]> {
  return await getSheetData(SHEET_ID, encodeURIComponent(routeType + "!" + RANGE))
    .then((routes: string[][]) => routes.map(route => ({
      name: route[0],
      distance: route[1],
      link: route[2],
      description: route[3],
    })))
}

function createRouteTable(routes: Route[]): JSX.Element {
  const data = [];
  for (const routes of routes) {
    const name = <>
      route.link === undefined
        ? route.name
        : (<a href={route.link}>{route.name}</a>)
    </>;
    data.push([name, <>{route.distance}</>, <>{route.description}</>]);
  }
  return <Table header={headers} body={data} />;
}

const Routes = ({ routeType }: { routeType: string }) => {
  const [routes, setRoutes] = useState<Route[] | undefined>(undefined);

  useEffect(() => {
    if (routes === undefined) getRoutes(routeType).then(setRoutes)
  })

  return createRouteTable(routes) ?? [];
}

export default () => (
  <Layout title="Routes" image={RoutesImage}>
    <PageBody>
      <WideContainer>
        <Card>
          <p>
            Check out our favorite places to run around Providence!
          </p>
        </Card>
        <Card title="Local Routes">
          <Routes routeType="Local"/>
        </Card>
        <Card title="Local Tracks">
          <Routes routeType="Tracks"/>
        </Card>
        <Card title="Travel Routes">
          <Routes routeType="Travel"/>
        </Card>
      </WideContainer>
    </PageBody>
  </Layout>
)

const styles = {
  titleText: {
    ...theme.typography.title,
    color: theme.palette.white,
    marginTop: theme.spacing.unit * 2,
    textShadow: "0 0 15px #000000, 0 0 10px #000000",
  },
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
  infoTextBottom: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
}
