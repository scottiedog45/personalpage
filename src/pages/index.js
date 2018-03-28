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
  padding-top: 10vh;
`;

const Panel1= Panel.extend`
${media.tablet`
  min-height: 60vh;
  `}
${media.desktop`
  padding-top: 10vh;
  padding-bottom: 10vh;
  min-height: 100vh;
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
  margin-top:50px;
  text-align: center;
  `}
${media.tablet`
  font-size: 23px;
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
    padding-top: 20px;
    font-size: 17px;
    text-align: center;
    `}
  ${media.tablet`
    padding-top: 47px;
    font-size: 20px;
    line-height: 1.3;
    `}
  ${media.desktop`
    font-size: 20px;
    margin-bottom: 0px;
  `}
`;

const Description = styled.p`
  ${media.handheld`
    display: block;
    text-align: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
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
  color: cyan;
  margin-right: 5px;
`;

const UrlWrapper = styled.div`
  text-align: center;
  margin-bottom: 5vh;
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
    `}
    ${media.tablet`
    justify-content: space-between;
    max-width: 75%;
      `}
    ${media.desktop`
    justify-content: space-between;
    max-width: 60%;
      `}
`;

const Icon = styled.img`
  height: 28px;
`;

const Footer = styled.div`
  text-align: center;
  color: cyan;
`;

const FooterIcon = Icon.extend`
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Name = styled.h1`
${media.handheld`
  color: cyan;
  font-weight: 100;
  font-family: inherit;
  text-align: center;
  font-size: 29px;
  margin-top: 50px;
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
  color: cyan;
  margin-bottom: 0px;
`;

const Card = styled.div`
  color: #f8f8ff;
  padding: 23px 16px;
  border-radius: 8px;
`;

const Card1 = Card.extend`
  background-color: unset
  box-shadow: unset;
`;

const Screenshot = styled.img`
  ${media.handheld`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 23px;
    max-width: 90%;
    border-radius: 8px;
    `}
  ${media.tablet`
    max-width: 75%;
    `}
  ${media.desktop`
    max-width: 60%;
    `}
`;

const Copyright = styled.p`
  display: block;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  margin-top: 10vh;
`;

const ToTop = styled.button`
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
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
  background-color: cyan;
  margin: 0px;
  padding: 0px;
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
    padding-top: 5vh;
    min-height: 0;
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
    height: 190px;
    float: none;
    margin-left: 20px;
    `}
  ${media.tablet`
    float: right;
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



class IndexPage extends React.Component  {

  componentDidMount() {
    window.addEventListener('scroll', ()=> {
      let fullHeight = document.body.scrollHeight;
      let positionOfTopOfWindow = window.scrollY;
      let heightOfWindow = window.innerHeight;
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
      <TinyMenuWrapper><Scrollchor to='#about' animate={{ offset: 0, duration: 800}}>about</Scrollchor><Scrollchor to='#work'>work</Scrollchor><Scrollchor to='#contact'>contact</Scrollchor></TinyMenuWrapper>
      <Subtitle>I build websites and apps.
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
    <Card1 id={'about'}>
      <Fade left>
      <h4>about</h4>
      <Hr />
      <SelfieDiv><Selfie src={selfie} /></SelfieDiv>
        <HeyThere>Hey there.</HeyThere>
        <br />
        <h2>I connect people with beautiful and efficient solutions.</h2>
        </Fade>
        <Fade up>
          <Bio>
            I like to do what's best for the project. Mobile-first? Test driven development? Let's do it.
            <br /><br />
            My toolbox:<br />
            <b>Front-end:</b> ReactJS, Redux, Redux-Form, JQuery, CSS, HTML, styled-components, Gatsby
            <br />
            <b>Back-end:</b> Node, Express, MongoDB, Heroku
            <br />
            <b>Testing:</b> Mocha, Chai, Enzyme, Jest
            <br />
            <b>Version Control:</b> Git and Github
            <br /> <br />
            I am currently taking on new projects. Get in touch via my email:<br />
            <EmailLink href={'mailto:scottiedog45@gmail.com'}>scottiedog45@gmail.com</EmailLink>
            <br /><br />
            Continue scrolling to see my work.
          </Bio>
        </Fade>
      </Card1>
    </Panel1>
    <Panel id={'work'}>
      <Card>
        <Fade left>
        <h4>work</h4>
        <Hr />
        <div>
          <ProjectTitle>
            piqnic
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
          </div>
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
           Google Maps API + OpenWeather API + a dash of jQuery = piqnic. Hungry yet?
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
          <Description>
            I tried to count syllables of English words with the Words API. Turns out it's almost possible.
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
          <Description>
            This app began as a conversation between myself and an overworked personnel manager. Use the demo login to preview the app.
          </Description>
        </Fade>
      </Card>
    </Panel>
    <ContactPanel id={'contact'}>
      <Fade left>
      <h4>contact</h4>
      <ContactPanelContent>
      <Hr />
      <p>like what you see? let's work together</p>
      <EmailLink href={'mailto:scottmatthewotoole@gmail.com'}>scottmatthewotoole@gmail.com</EmailLink>
      </ContactPanelContent>
      </Fade>
    </ContactPanel>
    <Scrollchor to='#top'>
      <ToTop>top</ToTop>
    </Scrollchor>
    <Copyright>&copy; Scott O&#39;Toole</Copyright>
  </div>
)
}
}

export default IndexPage
