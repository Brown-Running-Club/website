import React from "react"
import BackgroundImage from "../../images/about-billy.jpg"
import Billy from "../../images/billy.jpg"
import Card from "../../components/card"
import PageBody from "../../components/page-body"
import WideContainer from "../../components/wide-container"
import NarrowContainer from "../../components/narrow-container"
import MediaQuery from "react-responsive"
import Layout from "../../components/layout"

export default () => {
  const billyPic = <img style={styles.image} src={Billy} alt="Billy Brockmueller"></img>
  return (
    <Layout title="Remembering Billy" image={BackgroundImage}>
      <PageBody>
        <WideContainer>
          <Card>
            <p>
              In December 2018, former Brown Running Club athlete Billy Brockmueller was involved in a ski accident which caused life-threatening injuries.
              After several days of surgeries, Billy passed away on December 10th. Our annual indoor track meet is named in his memory.
              <br />
              <br />
              Billy graduated with a Master's degree in Physics from Brown University in spring of 2018.
              He began school at the University of Colorado at Boulder in the fall of 2018 to obtain his PhD.
              <br />
              <br />
              Billy played an important role on the Brown Running Club; not only was he was an incredibly gifted runner
              (highlighted by his individual win at the 2017 NIRCA Northeast Regional Championships), but he used this gift to bring joy to the lives of everyone around him.
              Billy lived a life of discipline, sportsmanship, and positivity, which made him the perfect role model for every athlete on the team.
              <br />
              <br />
              While attending college, Billy was passionately involved in organizations such as the Fellowship of Christian Athletes and the Graduate Christian Fellowship.
              He served on the <a href="https://www.simbaministries.com">Simba Ministries</a> board and participated in two mission trips to Kenya through the organization
              While in Kenya, Billy taught math at a school and led the construction project of a running track where young students now have a place to train and compete.
              <br />
              <br />
              Simba's mission is to promote education, health, and wellness for Kenyan youth through mission trips for college students.
              The organization offers education, medical, and athletic themed sponsorship for students to share their skills in Kenyan communities.
              Proceeds from concessions sold at the Billy Brockmueller Invitational go to Simba in Billy's honor.
            </p>
          </Card>
          <MediaQuery query="(max-width: 799px)">
            {billyPic}
          </MediaQuery>
        </WideContainer>
        <MediaQuery query="(min-width: 800px)">
          <NarrowContainer>
            {billyPic}
          </NarrowContainer>
        </MediaQuery>
      </PageBody>
    </Layout>
  )
}

const styles = {
  image: {
    width: '100%',
    height: 'auto'
  }
}
