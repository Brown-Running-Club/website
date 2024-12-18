import React, { useEffect, useState } from "react"
import theme from "../config/theme"
import PageBody from "../components/page-body"
import WiderContainer from "../components/wider-container"
import CharacterCard from "../components/character-card"
import leadership from "../images/leadership.png"
import Layout from "../components/layout"
import { getSheetData } from "../api-calls"

const LEADERSHIP_BIO_SHEET_ID = "1_BMe2MuP4Of2hg7GQnDBmRjfObFpzgH96SceWpu1Lnw";

type Bio = {
  name: string,
  focus: string,
  class: string,
  concentration: string,
  hometown: string,
  image_link: string,
  bio: string,
}

async function getBios(): Promise<Bio[]> {
  const data = await getSheetData(LEADERSHIP_BIO_SHEET_ID, "Bios!A2:Z");
  return data.map(row => ({
    name: row[0],
    focus: row[1],
    class: row[2],
    concentration: row[3],
    hometown: row[4],
    image_link: row[6],
    bio: row[7],
  }));
}

function makeCaptainCard(bio: Bio): JSX.Element {
  return <CharacterCard
    title={bio.name}
    image={bio.image_link}
    renderDetails={() => (
      <p style={styles.summaryText}>
        <b>Focus:</b> {bio.focus}<br></br>
        <b>Class:</b> {bio.class}<br></br>
        <b>Concentration:</b> {bio.concentration}<br></br>
        <b>Hometown:</b> {bio.hometown}<br></br>
      </p>
    )}
  >
    <p style={styles.summaryText}>{bio.bio}</p>
  </CharacterCard>
}

export default () => {
  const [bios, setBios] = useState<Bio[] | undefined>(undefined);

  useEffect(() => {
    if (bios === undefined) getBios().then(setBios)
  })

  const cards = bios?.map(makeCaptainCard);

  return <Layout title="Leadership" image={leadership}>
    <PageBody>
      <WiderContainer>
        {cards}
      </WiderContainer>
    </PageBody>
  </Layout>
}

const styles = {
  infoText: {
    ...(theme.typography.h4 as any),
    margin: 0,
  },
  summaryText: {
    ...(theme.typography.h4 as any),
    margin: 0,
    textAlign: "left" as "left",
  },
}
