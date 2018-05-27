import React from 'react'
import styled from 'styled-components'
import { media } from '../style-utils'
import selfie from '../selfie/Head.png'

const Panel = styled.div`
  ${media.handheld`
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px;
    `}
    ${media.desktop`

      `}
`;

const Selfie = styled.img`
  ${media.handheld`
    height: 250px;
    min-width: 250px;
    float: none;
    `}
  ${media.tablet`
    `}
  ${media.desktop`
    margin-top: 50px;
    `}
  ${media.extraBig`
    margin-top: 4vh;
    height: 500px;
    `}
`;

const BiographyText = styled.p`
  ${media.handheld`
  text-align: justify;`}
  ${media.tablet`
  text-align: justify;`}
  ${media.desktop`
    text-align: justify;
    padding: 40px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  `}
`

const SelfieDiv = styled.div`
  ${media.handheld`
    text-align: center;
    `}
  ${media.tablet`
    text-align: none;
    `}
    ${media.desktop`
    position: relative;
    text-align: none;
    margin-left: 20px;
    margin-right: 20px;
    `}
`

const PanelHeader = styled.h4`
  text-align: center;
  font-family: Montserrat;
`;

class Bio extends React.Component{
  render() {
    return(
      <Panel id={'bio'}>
      <PanelHeader>about</PanelHeader>
        <SelfieDiv><Selfie src={selfie} /></SelfieDiv>
        <BiographyText>
          I’m not your average fullstack developer- I have a background in classical percussion performance and actuarial science. After traveling the world playing recitals and burying my head in mathbooks, I now build websites and apps that look great on your phone, tablet, laptop, desktop, tv, and watch. I’ve unearthed a passion for coding within myself, and I’m completely addicted to it. I collaborate with  buisiness and individuals to help them build their unique digital presence. I call Atlanta home, and fill my free-time with crossfit and non-profit work.<br /><br />
          My curiosity is currently tantalized by AI and machine learning. This rabbit hole is threatening the few precious hours I’m able to carve out for my social life.<br /><br />
          Are you looking for a communicative fullstack developer, that will deliver your project on time? That’s me. I can build fully responsive web and mobile apps, with a user-first design. For a limited time only, I’m available for hire. Feel free to *get in touch*!
        </BiographyText>
      </Panel>
    )
  }
}

export default Bio