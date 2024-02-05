import React from "react"
import CompetitiveImage from "../images/competitive.jpg"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WideContainer from "../components/wide-container"
import Card from "../components/card"
import Button from "../components/button"
import Layout from "../components/layout"
import CharacterCard from "../components/character-card"
import { getSheetData } from "../api-calls"

export default () => (
  const [bios, setBios] = useState<Bio[] | undefined>(undefined);

 useEffect(() => {
    if (bios === undefined) getBios().then(setBios)
  })

  const cards = bios?.map(makeCaptainCard);
  <Layout title="Sprinting" image={CompetitiveImage}>
    <PageBody>
      <WideContainer>
        <Card>
          <p style={styles.infoText}>
            The Brown Running Club offers sprint practices during the fall and
            spring semesters and competes in sprint races during the Club Track
            and Field season in the spring semester. As for the rest of the
            Running Club, no prior experience is necessary to join and
            interested members may attend as often as they would like. We offer
            practices for track events ranging from 60m-800m. We also offer
            practices for hurdles, long jump, and high jump based on interest. 
            We usually practice Monday-Friday and alternate between track
            workouts in the OMAC and strength workouts in the Nelson. To keep
            up with sprinting practice times, locations, and events, please
            join our GroupMe!
          </p>
        </Card>
      </WideContainer>
    </PageBody>
  </Layout>
)

const SPRINTLEADERS_BIO_SHEET_ID = "1BwuMiYUPxoBmRQ3ScxsvXCx8gijp7xcgw6KnOaO781c/edit#gid=0";

type Bio = {
  name: string,
  class: string,
  concentration: string,
  hometown: string,
  image_link: string,
  bio: string,
}

async function getBios(): Promise<Bio[]> {
  const data = await getSheetData(SPRINTLEADERS_BIO_SHEET_ID, "Bios!A2:Z");
  return data.map(row => ({
    name: row[0],
    class: row[1],
    concentration: row[2],
    hometown: row[3],
    image_link: row[5],
    bio: row[6],
  }));
}

function makeCaptainCard(bio: Bio): JSX.Element {
  return <CharacterCard
    title={bio.name}
    image={bio.image_link}
    renderDetails={() => (
      <p style={styles.summaryText}>
        <b>Class:</b> {bio.class}<br></br>
        <b>Concentration:</b> {bio.concentration}<br></br>
        <b>Hometown:</b> {bio.hometown}<br></br>
      </p>
    )}
  >
    <p style={styles.summaryText}>{bio.bio}</p>
  </CharacterCard>
}

const styles = {
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
  link: {
    color: theme.palette.red,
    textDecoration: "none" as "none",
    display: "inline",
  },
  bodyText: {
    ...(theme.typography.body as any),
    margin: 0,
  },
  bodyTextNoButton: {
    ...(theme.typography.body as any),
    margin: 0,
    marginBottom: theme.spacing.unit * 2,
  },
  summaryText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    textAlign: "left" as "left",
  },
}
