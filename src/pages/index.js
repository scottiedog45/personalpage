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

import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare} from 'react-icons/lib/fa'

import Fade from 'react-reveal/Fade';

const Button = styled.button`
  font-size: 18px;
  color: white;
  background-color: #e94889;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  cursor: pointer;
  width: 300px;
  height: 70px;
  ${media.handheld`
    width: 140px;
    height: 50px;
    font-size: 18px;
    `}
  ${media.tablet`
      font-size: 25px;
      width: 200px;
      `}
`;

const PulsateText = keyframes`
  0% {
    color: #e94889;
  }
  50% {
    color: black;
  }

  100% {
    color: #e94889;
  }
`;

const Panel = styled.div`
  font-family: 'Raleway', sans-serif;
  padding-top: 58px;
  padding-bottom: 80px;
  min-height: 100vh;
`;

const RadarPanel = Panel.extend`
  height: 100vh;
`;

const TitlePanel = Panel.extend`
  min-height: 100vh;
`;

const Panel1= Panel.extend`
  padding-top: 2em;
`;

const ProjectTitle = styled.h1`
  margin-bottom: 0px;
  display: block;
  text-align: center;
  font-size: 70px;
  ${media.handheld`
    font-size: 90px;
    `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 23px;
  width: 75%
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
  line-height: 1.1;
  ${media.tablet`
    font-size: 35px;
    line-height: 1.1;
    `}
`;

const Bio = styled.p`
  font-size: 17px;
  text-align: justify;
  ${media.tablet`
    font-size: 30px;
    line-height: 1.3;
    `}
`;

const Description = styled.p`
  margin-top: 50px;
  display: block;
  text-align: justify;
  ${media.tablet`
    font-size: 23px;
    `}
`;

const Url = styled.a`
  cursor: pointer;
  margin-left: 10px;
  color: #e94889;
`;

const UrlWrapper = styled.div`
  text-align: center;
  margin-bottom: 10vh;
`;

const IconWrapper = styled.div`
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
  height: 47px;
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
  display: block;
  text-align: center;
  font-size: 75px;
  font-family: 'Anton', sans-serif;
  margin-bottom: 0px;
  ${media.handheld`
    font-size: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    `}
  ${media.tablet`
    font-size: 67px;
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
  margin-top: 5vh;
  margin-bottom: 0px;
  ${media.tablet`
    font-size: 35px;
    `}
  ${media.handheld`
    font-size: 30px;
    `}
`;

const ScrollAnimation = styled.div`
  text-align: center;
  animation: ${PulsateText} 1s infinite;
  ${media.tablet`
    font-size: 30px;
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 23px 16px;
  background-color: white;
`;

const Screenshot = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 23px;
  max-width: 90%;
`;

const Copyright = styled.p`
  display: block;
  text-align: center;

`;

const IndexPage = () => (
  <div>
    <TitlePanel>
      <Welcome>Welcome! My name is</Welcome>
      <Name>Scott O&#39;Toole.</Name>
      <Subtitle>I&#39;m your web developer. I build engaging and delightful apps.</Subtitle>
      <ButtonWrapper>
        <Scrollchor to='#work'>
          <Button>
            see my work
          </Button>
        </Scrollchor>
        <a href={'mailto:scottiedog45@gmail.com'}>
          <Button>
            get in touch
          </Button>
        </a>
      </ButtonWrapper>
      <ScrollAnimation>
        scroll
        <br />
        <FaAngleDoubleDown />
        <br />
      </ScrollAnimation>
    </TitlePanel>
    <Panel1>
    <Card>
      <Fade left>
        <HeyThere>Hey, there!</HeyThere>
        <br />
        <h2>My goal is to connect people with beautiful solutions.</h2>
        </Fade>
        <Fade up>
          <Bio>
            I&#39;m a recent graduate of the Full Stack
            Web Development program at Thinkful. I love how web development
            combines quantitative and qualitative problem solving skills, which
            is why I&#39;ve chosen it as a career path.
            <br /><br />
            I&#39;m excited by innovation,
            and always driven to find solutions that are efficient and artistic.
            <br /> <br />
            <b>Front-end:</b> React, Redux, Redux-Form, Jquery, Css, Html, Styled-components
            <br />
            <b>Back-end:</b> Node, Express
            <br />
            <b>Testing:</b> Mocha, Chai, Enzyme, Jest
            <br /> <br />
            At some
            point I drank the CrossFit kool-aid, so if my computer is off you can also find
            me in a local gym racking up some burpees!
            <br /><br />
            Continue scrolling to see examples of my work.
          </Bio>
        </Fade>
      </Card>
    </Panel1>
    <hr />
    <Panel id={'work'}>
      <a id={'work'} />
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
          <Description>
           This project is combines the Google Maps API and the Open Weather API. My goal was to create an 'as simple as possible' user input to get the maximum response. One only has to enter their zipcode, and piqnic will find local parks in the area, and also display the weather for the next two days (perfect for weekend planning!).
          </Description>
        </Fade>
      </Card>
    </Panel>
    <hr />
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
          <Description>
            This app uses the Words API to check syllable count of written line, and allows the user to submit a haiku if the syllables follow a 5-7-5 count. I was a bit naive in choosing this subject matter, as it&#39;s well documented that computers don&#39;t do a great job of quantifing language (ex. 'library' and 'extraordinary' are both listed with multiple syllable counts in the Oxford Dictionary). So, my original concept of 'app that counts syllables' narrowed to 'how many syllables does this API think this line has?' :). Upon approval, the haiku will be displayed. Users can see past haiku submissions, and upvote their favorites.
          </Description>
        </Fade>
      </Card>
    </Panel>
    <hr />
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
          <Description>
            This app began as a conversation between myself and an overworked personnel manager. This manager didn&#39;t have an efficient solution to tracking leave data for for their group. I made this app to help. You can create services, members, and reasons for a members leave. All a member&#39;s leave data is then collected and displayed in their individual profile. You can create an account, or use the demo to preview the app =).
          </Description>
        </Fade>
      </Card>
    </Panel>
    <Copyright>&copy; Scott O&#39;Toole</Copyright>
  </div>
)

export default IndexPage
