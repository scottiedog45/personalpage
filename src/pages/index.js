import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

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

import {media} from './style-utils'

import {FaGithubSquare, FaEnvelope, FaLinkedinSquare} from 'react-icons/lib/fa'

const Button = styled.button`
  border-color: black;
  background-color: inherit;
  border-style: solid;
  border-width: 1px;
`;

const Panel = styled.div`
  font-family: 'Raleway', sans-serif;
  padding-top: 58px;
  padding-bottom: 80px;
  height: 100vh;
`;

const RadarPanel = Panel.extend`
  height: 100vh;
`;

const TitlePanel = Panel.extend`
  height: 100vh;
`;

const Panel1= Panel.extend`
  padding-top: 2em;
`;

const ProjectTitle = styled.h1`
  margin-bottom: 0px;
  display: block;
  text-align: center;
  ${media.handheld`
    font-size: 80px;
    `}
`;

const Panel2 = Panel.extend`
`;

const Panel3 = Panel.extend`
`;

const Panel4 = Panel.extend`
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 23px;
  width: 75%
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0px;
`;

const Bio = styled.p`
  font-size: 21px;
`;

const Description = styled.p`
  margin-top: 50px;
  display: block;
  text-align: center;
`;

const Url = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  text-align: center;
  padding-bottom: 80px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  bottom: 20px;
`;

const Icon = styled.img`
  height: 20px;
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
  font-size: 130px;
  font-family: 'Anton', sans-serif;
  margin-bottom: 0px;
  ${media.handheld`
    font-size: 80px;
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
`;

const ScrollAnimation = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Canvas = styled.canvas`
  height: 400px;
  width: 400px;
`;

const ContactFloater = styled.div`
  font-size: 40px;
  display: flex;
  margin-top: 70px;
  position: fixed;
  text-align: right;
  right: 10px;
  color: #e94889;
  justify-content: space-between;
  width: 45vw;
  bottom: 1vw;
`;

const ContactIcon = styled.img`
  height: 50px;
  margin-left: 20px;
`;

const HeyThere = styled.h1`
  margin-bottom: 0px;
`;

const IndexPage = () => (
  <div>
    <TitlePanel>
      <Welcome>Welcome! My name is</Welcome>
      <Name>Scott O'Toole.</Name>
      <Subtitle>
        I'm your web developer. I build engaging and delightful apps.
      </Subtitle>
      <ScrollAnimation>
        scroll
        <br />
        or
      </ScrollAnimation>
      <ButtonWrapper>
        <Scrollchor to='#work'>
          <Button>
            See my work
          </Button>
        </Scrollchor>
      </ButtonWrapper>
      <ContactFloater>
        <FaEnvelope />
        <FaGithubSquare />
        <FaLinkedinSquare />
      </ContactFloater>
    </TitlePanel>
    <Panel1>
      <HeyThere>Hey, there!</HeyThere>
      <h2>My goal is to connect people with beautiful solutions.</h2>
      <Bio>
        I'm a recent graduate of the Front End
        Web Development bootcamp at Thinkful. I love how web development
        combines quantitative and qualitative problem solving skills, which
        is why I've chosen it as a career path.
        <br /><br />
        I'm excited by innovation,
        and always driven to find solutions that are efficient and artistic.
        <br /> <br />
        At some
        point I drank the CrossFit kool-aid, so if my computer is off you can also find
        me in a local gym racking up some burpees!
        <br /><br />
        Continue scrolling to see examples of my work.
      </Bio>
    </Panel1>
    <hr />
    <Panel id={'work'}>
      <a id={'work'} />
      <ProjectTitle>
        Piqnic
      </ProjectTitle>
      <Url
      href={'https://diplomat-cat-50211.netlify.com/'}
      target={'_blank'}>
        www.piqnic.com
      </Url>
      <img src={piqnicMac} alt={'screenshot of piqnic app'} />
      <IconWrapper>
        <Icon src={html} alt={'html logo'} />
        <Icon src={css} alt={'css logo'} />
        <Icon src={js} alt={'js logo'} />
        <Icon src={jquery} alt={'jquery logo'} />
      </IconWrapper>
       <Description>
        An app that helps you quickly plan a picnic.
      </Description>
    </Panel>
    <hr />
    <Panel>
      <ProjectTitle>
        hai·koo
      </ProjectTitle>
      <Url
        href={'https://young-springs-68250.herokuapp.com/'}
        target={'_blank'}>
        www.haikoo.com
      </Url>
      <img src={haikuMac} alt={'screenshot of Haiku app'} />
      <IconWrapper>
        <Icon src={html} alt={'html logo'} />
        <Icon src={css} alt={'css logo'} />
        <Icon src={js} alt={'js logo'} />
        <Icon src={jquery} alt={'jquery logo'} />
        <Icon src={mocha} alt={'mocha logo'} />
        <Icon src={chai} alt={'chai logo'} />
        <Icon src={express} alt={'express logo'} />
        <Icon src={node} alt={'node logo'} />
      </IconWrapper>
      <Description>
        An app that syllable-checks your haiku, and let's you post and vote on other haikus!
      </Description>
    </Panel>
    <hr />
    <Panel>
      <ProjectTitle>
        Leev
      </ProjectTitle>
      <Url
        href={'https://xenodochial-pare-c355a0.netlify.com/'}
        target={'_blank'}>
        www.leev.com
      </Url>
      <img src={leevMac} alt={'screenshot of leev app'} />
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
        Leev uses a simple interface to help you track your group's leave data.
      </Description>
    </Panel>
  </div>
)

export default IndexPage
