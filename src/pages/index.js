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
    color: #070729ed;
  }
  50% {
    color: inherit;
  }
  100% {
    color: #070729ed;
  }
`;

const Panel = styled.div`
  ${media.handheld`
    font-family: 'Raleway', sans-serif;
    padding-top: 58px;
    padding-bottom: 79px;
    min-height: 100vh;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
    `}
    ${media.desktop`
      width: 70vw;
      `}
`;

const RadarPanel = Panel.extend`
  height: 100vh;
`;

const TitlePanel = Panel.extend`
  min-height: 100vh;
`;

const Panel1= Panel.extend`
${media.desktop`
  padding-top: 20vh;
  `}
`;

const ProjectTitle = styled.h1`
  ${media.handheld`
    font-size: 55px;
    text-align: center;
    margin-bottom: 0px;
    display: block;
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
  text-align: center;
  `}
${media.tablet`
  font-size: 35px;
  line-height: 1.1;
  `}
${media.desktop`
  font-size: 23px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  line-height: 1.1;
  `}
`;

const Bio = styled.p`
  ${media.handheld`
    font-size: 17px;
    text-align: center;
    `}
  ${media.tablet`
    font-size: 30px;
    line-height: 1.3;
    `}
  ${media.desktop`
    font-size: 15px;
    margin-bottom: 0px;
  `}
`;

const Description = styled.p`
  ${media.handheld`
    display: block;
    text-align: justify;
  `}
  ${media.tablet`
    font-size: 23px;
  `}
  ${media.desktop`
    font-size: 16px;
  `}
`;

const Url = styled.a`
  cursor: pointer;
  margin-left: 5px;
  color: #f8f8ff;
  margin-right: 5px;
`;

const UrlWrapper = styled.div`
  text-align: center;
  margin-bottom: 10vh;
`;

const IconWrapper = styled.div`
  filter: grayscale(85%);
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  bottom: 20px;
  max-width: 90%;
  ${media.handheld`
    justify-content: space-around;
    `}
`;

const Icon = styled.img`
  height: 28px;
`;

const Footer = styled.div`
  text-align: center;
`;

const FooterIcon = Icon.extend`
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Name = styled.h1`
${media.handheld`
  font-family: inherit;
  text-align: center;
  font-size: 29px;
  margin-top: 50px;
  margin-bottom: 50px;
  `}
${media.tablet`
  font-size: 67px;
  `}
${media.desktop`
  display: block;
  font-size: 25px;
  `}
`;

const PicniqScreenshot = styled.img`
  height: 300px;
`;

const Imac = styled.img`
  height: 300px
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Tablet = styled.img`
  height: 200px;
`;

const Phone = styled.img`
  height: 250px;
`;

const Welcome = styled.p`
  text-align: center;
  margin-top: 15vh;
  margin-bottom: 0px;
  ${media.tablet`
    font-size: 35px;
    `}
  ${media.handheld`
    font-size: 30px;
    `}
`;

const ScrollAnimation = styled.div`
  ${media.handheld`
    margin-left: 18px;
    font-size: 20px;
    text-align: center;
    animation: ${PulsateText} 2s infinite;
    position: absolute;
    bottom: 40px;
    `}
  ${media.tablet`
    `}
  ${media.desktop`
    `}
  `;

const Canvas = styled.canvas`
  height: 400px;
  width: 400px;
`;

const HeyThere = styled.h1`
  margin-bottom: 0px;
`;

const Card = styled.div`
  color: #f8f8ff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 23px 16px;
  background-color: #01061f;
  border-radius: 8px;
`;

const Card1 = Card.extend`
  background-color: unset
  box-shadow: unset;
`;

const Screenshot = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 23px;
  max-width: 90%;
  border-radius: 8px;
`;

const Copyright = styled.p`
  display: block;
  text-align: center;
  font-family: 'Raleway', sans-serif;
`;

const ToTop = styled.button`
  font-family: 'Raleway', sans-serif;
  font-size: 26px;
  font-weight: bold;
  color: #f8f8ff;
  background-color: #01061f;
  border-radius: 50%;
  border: none;
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
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

const Scroller = styled.div`
  position: sticky;
  background-color: inherit;
  width: 10px;
  height: 80vh;
  float: right;
  right: 0px;
  top: 30px;
  margin: 0px;
  padding: 0px;
`;

const InnerScroller = styled.div`
  height: 0;
  width: 100%;
  background-color: white;
  margin: 0px;
  padding: 0px;
`;

class IndexPage extends React.Component  {

  componentDidMount() {
    window.addEventListener('scroll', ()=> {
      let fullHeight = document.body.scrollHeight;
      let positionOfTopOfWindow = window.scrollY;
      let heightOfWindow = window.innerHeight;
      console.log(fullHeight);
      console.log(positionOfTopOfWindow);
      console.log(heightOfWindow);
      document.getElementById('innerScroller').style.height =  (((((positionOfTopOfWindow+heightOfWindow)*(positionOfTopOfWindow/(fullHeight-heightOfWindow)))/fullHeight)*100).toFixed(2) + '%');
    })
  }

  render() {

    return (
  <div id={'top'}>
  <Scroller>
    <InnerScroller id={'innerScroller'}/>
  </Scroller>
    <TitlePanel>
      <Welcome>Welcome</Welcome>

      <Name>I&#39;m Scott O&#39;Toole.</Name>
      <Subtitle>I build engaging, fully responsive apps.
        <br /><br />
        <FaMapMarker />Atlanta, GA, USA.
      </Subtitle>
      <ScrollAnimation>
        scroll
        <br />
        <FaAngleDoubleDown />
        <br />
      </ScrollAnimation>
    </TitlePanel>
    <Panel1>
    <Card1>
      <Fade left>
        <HeyThere>Hey there.</HeyThere>
        <br />
        <h2>I connect people with beautiful and efficient solutions.</h2>
        </Fade>
        <Fade up>
          <Bio>
            My toolbox:<br />
            <b>Front-end:</b> React, Redux, Redux-Form, JQuery, CSS, HTML, styled-components
            <br />
            <b>Back-end:</b> Node, Express, MongoDB
            <br />
            <b>Testing:</b> Mocha, Chai, Enzyme, Jest
            <br />
            <b>Version Control:</b> Git and Github.
            <br /> <br />
            I am currently taking on new projects. Get in touch via email.
            <br /><br />
            Continue scrolling to see my work.
          </Bio>
        </Fade>
      </Card1>
    </Panel1>
    <Panel id={'work'}>
      <Card>
        <Fade left>
          <ProjectTitle>
            Piqnic
          </ProjectTitle>
          <UrlWrapper>
          <Url
            href={'https://diplomat-cat-50211.netlify.com/'}
            target={'_blank'}>
            Live Site
          </Url>
          <Url
            href={'https://github.com/scottiedog45/piqnic'}
            target={'_blank'}>
            Github Repo
          </Url>
          </UrlWrapper>
        </Fade>
        <Fade up>
          <Screenshot src={piqnicMac} alt={'screenshot of piqnic app'} />
          <IconWrapper>
            <Icon src={html} alt={'html logo'} />
            <Icon src={css} alt={'css logo'} />
            <Icon src={js} alt={'js logo'} />
            <Icon src={jquery} alt={'jquery logo'} />
          </IconWrapper>
          <p>
          Rundown:
          </p>
          <Description>
           This project is combines the Google Maps API and the Open Weather API. My goal was to create an 'as simple as possible' user input to get the maximum response. One only has to enter their zipcode, and piqnic will find local parks in the area, and also display the weather for the next two days (perfect for weekend planning!).
          </Description>
        </Fade>
      </Card>
    </Panel>
    <Panel>
      <Card>
        <Fade left>
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
        </Fade>
        <Fade up>
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
          <p>
          Rundown:
          </p>
          <Description>
            This app uses the Words API to check syllable count of written line, and allows the user to submit a haiku if the syllables follow a 5-7-5 count. I was a bit naive in choosing this subject matter, as it&#39;s well documented that computers don&#39;t do a great job of quantifing language (ex. 'library' and 'extraordinary' are both listed with multiple syllable counts in the Oxford Dictionary). So, my original concept of 'app that counts syllables' narrowed to 'how many syllables does this API think this line has?' :). Upon approval, the haiku will be displayed. Users can see past haiku submissions, and upvote their favorites.
          </Description>
        </Fade>
      </Card>
    </Panel>
    <Panel>
      <Card>
        <Fade left>
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
        </Fade>
        <Fade up>
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
          <p>
          Rundown:
          </p>
          <Description>
            This app began as a conversation between myself and an overworked personnel manager. This manager didn&#39;t have an efficient solution to tracking leave data for for their group. I made this app to help. You can create services, members, and reasons for a members leave. All a member&#39;s leave data is then collected and displayed in their individual profile. You can create an account, or use the demo to preview the app =).
          </Description>
        </Fade>
      </Card>
    </Panel>
    <Scrollchor to='#top'>
      <ToTop>top</ToTop>
    </Scrollchor>
    <Copyright>&copy; Scott O&#39;Toole</Copyright>
  </div>
)
}
}

export default IndexPage
