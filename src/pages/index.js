import React from 'react'
import Link from 'gatsby-link'
import styled, {keyframes} from 'styled-components'
import Scrollchor from 'react-scrollchor'
import FontAwesome from 'react-fontawesome';
import {media} from '../style-utils'
import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare, FaMapMarker} from 'react-icons/lib/fa'
import Fade from 'react-reveal/Fade';
import selfie from '../selfie/Head.png'
import Footer from '../components/Footer'
import Projects from '../projects'

//styling small to large

const TinyLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover{
    text-decoration: line-through;
  }
  &:visited{
    color: #f8f8ff;
    text-decoration: none;
  }
`;

const PulsateText = keyframes`
  0% {
    color: #191938;
  }
  50% {
    color: inherit;
  }
  100% {
    color: #191938;
  }
`;

const Panel = styled.div`
  ${media.handheld`
    font-family: 'Raleway', sans-serif;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px;
    `}
    ${media.desktop`
      `}
`;

const TitlePanel = Panel.extend`
  position: fixed;
  padding-top: 10vh;
`;

const Panel1= Panel.extend`
  ${media.handheld`
    position: relative;
    z-index: 2;
    background-color: #4f4fab;
    `}
  ${media.tablet`

    `}
  ${media.desktop`
    padding-bottom: 10vh;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const Subtitle = styled.p`
  ${media.handheld`
    margin-top:50px;
    padding-left: 6px;
    `}
  ${media.tablet`
    font-size: 23px;
    line-height: 1.1;
    `}
  ${media.desktop`
    font-size: 23px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;
    line-height: 1.1;
    `}
`;

const Bio = styled.p`
  ${media.handheld`
    text-align: center;
    padding-top: 20px;
    font-size: 17px;
    `}
  ${media.tablet`
    padding-top: 47px;
    font-size: 17px;
    line-height: 1.3;
    `}
  ${media.desktop`
    font-size: 18px;
    margin-bottom: 0px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  `}
`;

const Name = styled.h1`
  ${media.handheld`
    margin-top: 18vh
    color: cyan;
    font-weight: 100;
    font-family: inherit;
    font-size: 29px;
    margin-bottom: 10px;
    `}
  ${media.tablet`
    font-size: 40px;
    `}
  ${media.desktop`
    display: block;
    font-size: 80px;
    `}
`;

const ScrollAnimation = styled.div`
  ${media.handheld`
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    text-align: center;
    animation: ${PulsateText} 2s infinite;
    bottom: 40px;
    padding-top: 72px;
    `}
  ${media.tablet`
    `}
  ${media.desktop`
    `}
  `;

const HeyThere = styled.h1`
  color: cyan;
  margin-bottom: 0px;
  text-align: center;
`;

const EmailLink = TinyLink.extend`
  ${media.handheld`
    color: #f8f8ff;
  font-size: 16px;
  letter-spaceing: 3px;
    `}
    ${media.tablet`
      font-size: 22px;
      `}
  ${media.desktop`
    font-size: 28px;
    `}
`;

const Selfie = styled.img`
  ${media.handheld`
    height: 250px;
    float: none;
    `}
  ${media.tablet`
    `}
  ${media.desktop`
    margin-top: 70px;
    margin-bottom: 67px;
    `}
  ${media.extraBig`
    margin-top: 4vh;
    height: 500px;
    `}
`;

const SelfieDiv = styled.div`
  ${media.handheld`
    text-align: center;
    `}
  ${media.tablet`
    text-align: none;
    `}
`
const BioEmail = styled.span`
  ${media.handheld`
    margin-top: 5vh;
    display: block;
    `}
`;

const Container = styled.div`
  position: relative;
`;

const InvisiblePanel = Panel.extend`
  height: 100vh;
`;

const PanelHeader = styled.h4`
  text-align: center;
`;


class IndexPage extends React.Component  {

  render() {

    return (
  <Container id={'top'}>
    <TitlePanel>
      <Name>I&#39;m Scott O&#39;Toole.</Name>
      <Subtitle>I build websites and apps.
        <br /><br />
      </Subtitle>
      <ScrollAnimation>
        scroll
        <br />
        <FaAngleDoubleDown />
        <br />
      </ScrollAnimation>
    </TitlePanel>
    <InvisiblePanel>
    </InvisiblePanel>
    <Panel1 id={'about'}>
      <div>
        <PanelHeader>about</PanelHeader>
      </div>
      <SelfieDiv><Selfie src={selfie} /></SelfieDiv>
        <HeyThere>Hey there.</HeyThere>
        <br />
          <Bio>
            I like to do what's best for the project. I'm a fan of mobile-first development.
            <br /><br />
            My toolbox:<br />
            <b>Front-end:</b> ReactJS, Redux, Redux-Form, JQuery, CSS, HTML, styled-components, Gatsby, Netlify, Chrome DevTools
            <br />
            <b>Back-end:</b> Node, Express, mLab, Mongoose, MongoDB, Heroku, REST API
            <br />
            <b>Testing:</b> Mocha, Chai, Enzyme, Jest
            <br />
            <b>Version Control:</b> Git and Github
            <BioEmail>
            I am currently taking on new projects. Get in touch via my&nbsp;
            <EmailLink href={'mailto:scottmatthewotoole@gmail.com'} style={{textDecoration: 'underline', fontSize: 'inherit'}}>email.</EmailLink>
            </BioEmail>
            <br />
            Continue scrolling to see my work.
          </Bio>
      </Panel1>
      <Projects />
      <Footer />
  </Container>
)
}
}

export default IndexPage
