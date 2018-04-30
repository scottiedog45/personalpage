import React from 'react'
import Link from 'gatsby-link'

import styled, {keyframes} from 'styled-components'

import chai from '../icons/chai.png'
import css from '../icons/css.png'
import express from '../icons/expressjslogo.png'
import styledcomponents from '../icons/styled-components.png'
import githublogo from '../icons/github-512 (1).png'
import html from '../icons/html5.png'
import jest from '../icons/jest.png'
import jquery from '../icons/jquery.png'
import js from '../icons/js.png'
import redux from '../icons/redux.png'
import mocha from '../icons/mocha (1).png'
import node from '../icons/node.png'
import react from '../icons/react.png'
import reduxForm from '../icons/redux form.png'

import haikuMac from '../screenshots/haikuMac.png'
import leevMac from '../screenshots/leevMac.png'
import piqnicMac from '../screenshots/piqnicMac.png'

import Scrollchor from 'react-scrollchor'
import FontAwesome from 'react-fontawesome';

import {media} from '../style-utils'

import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare, FaMapMarker} from 'react-icons/lib/fa'

import Fade from 'react-reveal/Fade';

import selfie from '../selfie/Head.png'

import Footer from '../components/Footer'

//styling small to large

const Button = styled.button`
  ${media.handheld`
    width: 140px;
    height: 50px;
    font-size: 18px;
    background-color: #e94889;
    color: white;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    cursor: pointer;
    `}
  ${media.tablet`
    font-size: 25px;
    width: 200px;
    `}
  ${media.desktop`
    font-size: 18px;
    width: 200px;
    height: 50px;
    `}
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

const RadarPanel = Panel.extend`
  height: 100vh;
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

const ProjectTitle = styled.h1`
  ${media.handheld`
    font-size: 55px;
    text-align: center;
    margin-bottom: 0px;
    display: block;
    grid-area: title;
    `}
  ${media.desktop`
    text-align: center;
    font-size: 65px;
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
  `}
`;

const Description = styled.p`
  ${media.handheld`
    text-align: center;
    grid-area: description;
    font-size: 16px;
  `}
  ${media.tablet`
    font-size: 16px;
  `}
  ${media.desktop`
    font-size: 16px;
  `}
`;

const Url = styled.a`
  cursor: pointer;
  margin-left: 5px;
  color: cyan;
  margin-right: 5px;
`;

const UrlWrapper = styled.div`
  text-align: center;
  grid-area: url;
`;

const IconWrapper = styled.div`
  ${media.handheld`
    justify-content: space-around;
    filter: grayscale(85%);
    display: flex;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    bottom: 20px;
    max-width: 90%;
    grid-area: icons;
    `}
    ${media.tablet`
    justify-content: space-between;
      `}
    ${media.desktop`
    justify-content: space-between;
    grid-area: icons;
      `}
`;

const Icon = styled.img`
  ${media.handheld`
    height: 28px;
    `}
  ${media.tablet``}
  ${media.desktop`
    `}
`;

const FooterIcon = Icon.extend`
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
    margin-top: 20vh
    bottom: 40px;
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

const Screenshot = styled.img`
  ${media.handheld`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 23px;
    max-width: 50%;
    grid-area:img;

    `}
  ${media.tablet`
    `}
  ${media.desktop`
    `}
    ${media.extraBig`

      `}
`;

const Copyright = styled.p`
  display: block;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  margin-top: 10vh;
`;

const MyLocation = styled.p`
  margin-top: 10px;
`;

const MarkerDiv = styled.div`
  margin-top: -5px;
  display: inline;
`;

const PlaceDiv = styled.div`
  display: inline-block;
`;



const Tool = styled.div`
  display: inline;
  border: 1px solid white;
`;

const TinyMenuWrapper = styled.div`
  font-size: 13px;
  letter-spacing: 3px;
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
`;

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

const Hr = styled.hr`
  ${media.handheld`
background-color: #f8f8ff;
height: 2px;

    `}

`;

const ContactPanel = Panel.extend`
${media.handheld`
    position: relative;
    z-index: 2;
    min-height: 0;
    background-color: #070729;
    overflow: auto;
  `}
${media.tablet`
    min-height: 0;
  `}
${media.desktop`
    min-height: 0;
  `}
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

const ContactPanelContent = styled.div`
  text-align: center;
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

const WorkPanel = Panel.extend`
  z-index: 2;
  position: relative;
  background-color: #242454;

`;

const ProjectPanel = styled.div`
  padding-top: 50px
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: .5fr .25fr auto .5fr .5fr;
  grid-template-areas:
    "title"
    "url"
    "img"
    "description"
    "icons";
`;

const LiveUrl = Url.extend`
  grid-area: url;
`;

const GitUrl = Url.extend`
  grid-area: url2;
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
        <Hr />
      </div>
      <SelfieDiv><Selfie src={selfie} /></SelfieDiv>
        <HeyThere>Hey there.</HeyThere>
        <br />
          <Bio>
            I like to do what's best for the project. I'm a fan of mobile-first, test-driven development.
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
      <WorkPanel id={'work'}>
      <div>
        <PanelHeader>work</PanelHeader>
        <Hr />
      </div>
        <ProjectPanel>
            <ProjectTitle>
              piqnic
            </ProjectTitle>
            <UrlWrapper>
            <LiveUrl
              href={'https://diplomat-cat-50211.netlify.com/'}
              target={'_blank'}>
              Live Site
            </LiveUrl>
            <GitUrl
              href={'https://github.com/scottiedog45/piqnic'}
              target={'_blank'}>
              Github Repo
            </GitUrl>
            </UrlWrapper>
            <Screenshot src={piqnicMac} alt={'screenshot of piqnic app'} />
            <IconWrapper>
              <Icon src={html} alt={'html logo'} />
              <Icon src={css} alt={'css logo'} />
              <Icon src={js} alt={'js logo'} />
              <Icon src={jquery} alt={'jquery logo'} />
            </IconWrapper>
            <Description>
             Google Maps API + OpenWeather API + a dash of jQuery = piqnic. Hungry yet?
            </Description>
  </ProjectPanel>
        <ProjectPanel>
            <ProjectTitle>
              hai·koo
            </ProjectTitle>
            <UrlWrapper>
            <Url
              href={'https://young-springs-68250.herokuapp.com/'}
              target={'_blank'}>
              Live Site
            </Url>
            <Url
              href={'https://github.com/scottiedog45/haiku'}
              target={'_blank'}>
              Github Repo
            </Url>
            </UrlWrapper>
            <Screenshot src={haikuMac} alt={'screenshot of Haiku app'} />
            <IconWrapper>
              <Icon src={html} alt={'html logo'} />
              <Icon src={css} alt={'css logo'} />
              <Icon src={js} alt={'js logo'} />
              <Icon src={mocha} alt={'mocha logo'} />
              <Icon src={chai} alt={'chai logo'} />
              <Icon src={jquery} alt={'jquery logo'} />
              <Icon src={express} alt={'express logo'} />
              <Icon src={node} alt={'node logo'} />
            </IconWrapper>
            <Description>
              I tried to count syllables of English words with the Words API. Turns out it's almost possible.
            </Description>
            </ProjectPanel>
        <ProjectPanel>
            <ProjectTitle>
              Leev
            </ProjectTitle>
            <UrlWrapper>
            <Url
              href={'https://xenodochial-pare-c355a0.netlify.com/'}
              target={'_blank'}>
              Live Site
            </Url>
            <Url
              href={'https://github.com/scottiedog45/haiku'}
              target={'_blank'}>
              Github Repo
            </Url>
            </UrlWrapper>
                    <Screenshot src={leevMac} alt={'screenshot of leev app'} />
            <IconWrapper>
              <Icon src={html} alt={'html logo'} />
              <Icon src={styledcomponents} alt={'styled components logo'} />
              <Icon src={js} alt={'js logo'} />
              <Icon src={react} alt={'react logo'} />
              <Icon src={redux} alt={'redux logo'} />
              <Icon src={reduxForm} alt={'redux form logo'} />
              <Icon src={mocha} alt={'mocha logo'} />
              <Icon src={jest} alt={'jest logo'} />
              <Icon src={chai} alt={'chai logo'} />
              <Icon src={express} alt={'express logo'} />
              <Icon src={node} alt={'node logo'} />
            </IconWrapper>
            <Description>
              This app began as a conversation between myself and an overworked personnel manager. Use the demo login to preview the app.
            </Description>
            </ProjectPanel>
      </WorkPanel>
      <ContactPanel id={'contact'}>
        <PanelHeader>contact</PanelHeader>
        <ContactPanelContent>
        <Hr />
        <p>like what you see? let's work together.</p>
        <EmailLink href={'mailto:scottmatthewotoole@gmail.com'}>scottmatthewotoole@gmail.com</EmailLink>
          <Footer />
        </ContactPanelContent>
        <Copyright>&copy; Scott O&#39;Toole</Copyright>
      </ContactPanel>
  </Container>
)
}
}

export default IndexPage
