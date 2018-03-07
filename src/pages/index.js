import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import js from '../icons/js.png'
// import html from '../icons/html5.png'
// import css from '../icons/css.svg.png'
// import jquery from '../icons/jquery.svg.png'
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

import piqnicShot from '../screenshots/piqnic.png'

import haikuMac from '../screenshots/haikuMac.png'
import haikuTablet from '../screenshots/haikuTablet.png'
import haikuPhone from '../screenshots/haikuIphone.png'

import Scrollchor from 'react-scrollchor'


const Button = styled.button`
  border-color: black;
  background-color: inherit;
  border-style: solid;
  border-width: 1px;
`;

const Panel = styled.div`
  font-family: 'Raleway', sans-serif;
`;

const Panel1= Panel.extend`
  padding-top: 2em;
`;

const ProjectTitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 0px;
  display: block;
  text-align: center;
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
  font-size: 20px;
  margin-top: 20px;
`;

const Bio = styled.p`
`

const Description = styled.p`
  margin-top: 20px;
  display: block;
  text-align: center;
`;

const Url = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Icon = styled.img`
  height: 30px;

`;

const Footer = styled.div`
  text-align: center;
`;

const FooterIcon = Icon.extend`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Name = styled.p`
  display: block;
  text-align: center;
  font-size: 2em;
  padding-top: 2em;
  padding-bottom: 1em;
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

const IndexPage = () => (
  <div>
    <Panel>
    <Name>
      Scott O'Toole, web-dev
    </Name>
    <Subtitle>
      Hey there! My name is Scott, and I'm your web developer.
    </Subtitle>
      <ButtonWrapper>
        <Scrollchor to='#work'>
          See my work
        </Scrollchor>
      </ButtonWrapper>
    </Panel>
    <Panel1>
      <Bio>
        I'm a recent graduate of the Front End
        Web Development bootcamp at Thinkful. I love how web development
        combines quantitative and qualitative problem solving skills, which
        is why I've chosen it as a career path. I'm excited by innovation,
        and always driven to find solutions that are efficient and artistic.
        <br /> <br />
        My curiosity has led me on adventures through several career fields
        including classical music performance, artistic administration, actuarial
        science, and now... coding! I feel most at home in front of my laptop, either
        learning a slick new library or designing the website for a business. At some
        point I drank the CrossFit kool-aid, so if my computer is off you can also find
        me in a local gym racking up some burpees!
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

       <Description>
        An app that helps you quickly plan a picnic.
      </Description>
      <IconWrapper>
        <Icon src={html} alt={'html logo'} />
        <Icon src={css} alt={'css logo'} />
        <Icon src={js} alt={'js logo'} />
        <Icon src={jquery} alt={'jquery logo'} />
      </IconWrapper>
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
      <div>


      <Imac src={haikuMac} />

      </div>
      <Description>
        An app that syllable-checks your haiku, and let's you post and vote on other haikus!
      </Description>
      <IconWrapper>
        <Icon src={html} alt={'html logo'} />
        <Icon src={css} alt={'css logo'} />
        <Icon src={js} alt={'js logo'} />
        <Icon src={jquery} alt={'jquery logo'} />
        <br />
        <Icon src={mocha} alt={'mocha logo'} />
        <Icon src={chai} alt={'chai logo'} />
        <Icon src={express} alt={'express logo'} />
        <Icon src={node} alt={'node logo'} />
      </IconWrapper>
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
      <Description>
        Leev uses a simple interface to help you track your group's leave data.
      </Description>
      <IconWrapper>
        <Icon src={html} alt={'html logo'} />
        <Icon src={styledcomponents} alt={'styled components logo'} />
        <Icon src={js} alt={'js logo'} />
        <Icon src={react} alt={'react logo'} />
        <Icon src={redux} alt={'redux logo'} />
        <Icon src={reduxForm} alt={'redux form logo'} />
        <br />
        <Icon src={mocha} alt={'mocha logo'} />
        <Icon src={jest} alt={'jest logo'} />
        <Icon src={chai} alt={'chai logo'} />
        <Icon src={express} alt={'express logo'} />
        <Icon src={node} alt={'node logo'} />
      </IconWrapper>
    </Panel>
    <hr />
    <Footer>
      <a href={'mailto:scottiedog45@gmail.com'}>
        Send me a message
      </a>
      <a
        href={'https://github.com/scottiedog45'}
        target={'_blank'}>
        <FooterIcon src={githublogo} alt={'github logo'} />
      </a>
    </Footer>
  </div>
)

export default IndexPage
