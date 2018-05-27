import React from 'react'
import Link from 'gatsby-link'
import styled, {keyframes} from 'styled-components'
import Scrollchor from 'react-scrollchor'
import FontAwesome from 'react-fontawesome';
import {media} from '../style-utils'
import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare, FaMapMarker} from 'react-icons/lib/fa'
import Fade from 'react-reveal/Fade';
import Bio from '../bio'
import Footer from '../components/Footer'
import Projects from '../projects'
import Services from '../services'

//styling small to large

const PulsateText = keyframes`
  0% {
    color: white;
  }
  50% {
    color: black;
  }
  100% {
    color: white;
  }
`;

const Panel = styled.div`
  ${media.handheld`
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    `}
    ${media.desktop`
      `}
`;

const TitlePanel = Panel.extend`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Subtitle = styled.p`
  ${media.handheld`
    margin-top:50px;
    position: relative;
    z-index: 2;
    text-align: center;
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

const Name = styled.h1`
  ${media.handheld`
    padding-top: 30vh
    font-weight: 100;
    font-size: 29px;
    margin-bottom: 10px;
    position: relative;
    z-index: 2;
    text-align: center;
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
    top: 28vh;
    position: relative;
    `}
  ${media.tablet`
    `}
  ${media.desktop`
    `}
  `;

const Container = styled.div`
  position: relative;
`;

const PanelHeader = styled.h4`
  text-align: center;
`;


class IndexPage extends React.Component  {

  render() {

    return (
  <div id={'page-wrap'}>
  <Container id={'top'}>
    <TitlePanel>
      <Name>
        Scott O&#39;Toole
      </Name>
      <Subtitle>
        web developer
      </Subtitle>
      <ScrollAnimation>
        scroll
        <br />
        <FaAngleDoubleDown />
        <br />
      </ScrollAnimation>
    </TitlePanel>
   
    <Bio />
    <Projects />
    <Footer />
  </Container>
  </div>
)
}
}

export default IndexPage
