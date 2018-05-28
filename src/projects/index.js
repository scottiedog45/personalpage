import React from 'react'
import Link from 'gatsby-link'

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
import simonVid from '../video/simonVid.mp4'

import styled from 'styled-components'

import { media } from '../style-utils'


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

const WorkPanel = Panel.extend`
  z-index: 2;
  position: relative;
`;

const PanelHeader = styled.h4`
  text-align: center;
  font-family: Montserrat;
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

const Description = styled.p`
  ${media.handheld`
    text-align: center;
    grid-area: description;
    font-size: 16px;
    
  `}
  ${media.tablet`
    font-size: 25px;
    max-width: 75%;
    margin-left: auto;
    margin-right: auto;
  `}
  ${media.desktop`
    font-size: 16px;
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
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


const LiveUrl = Url.extend`
  grid-area: url;
`;

const GitUrl = Url.extend`
  grid-area: url2;
`;

const Screenshot = styled.img`
  ${media.handheld`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 23px;
    grid-area:img;
    width: 100%
    `}
  ${media.tablet`
max-width: 75%;
    `}
  ${media.desktop`
   max-width: 50%;
    `}
    ${media.extraBig`
     max-width: 50%;

      `}
`;

const ProjectTitle = styled.h1`
  ${media.handheld`ur
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

const SimonVideo = styled.video`
  margin-left: auto;
  margin-right: auto;
`;

const Projects = () => (
      <WorkPanel id = { 'projects'}>
      <div>
        <PanelHeader>work</PanelHeader>
      </div>
      <ProjectPanel>
        <ProjectTitle>
          simon
            </ProjectTitle>
        <UrlWrapper>
          <GitUrl
          href={'https://github.com/scottiedog45/simon'}
            target={'_blank'}>
            Github Repo
            </GitUrl>
        </UrlWrapper>
        <SimonVideo src={simonVid} height={400} width={200} type={'video/mp4'}  autoPlay loop muted/>
        <IconWrapper>
          <Icon src={html} alt={'html logo'} />
          <Icon src={css} alt={'css logo'} />
          <Icon src={js} alt={'js logo'} />
          <Icon src={styledcomponents} alt={'styledcomponents logo'} />
          <Icon src={react} alt={'react logo'} />
          <Icon src={express} alt={'express logo'} />
          <Icon src={node} alt={'node logo'} />
        </IconWrapper>
        <Description>
          A dive into the React Native API. Feel free to download the repo and have a go!
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
)

export default Projects

