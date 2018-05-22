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
  padding-top: 10vh;
  height: 100vh;
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
    padding-left: 20px;
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
    top: 48vh;
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
  <Container id={'top'}>
    <TitlePanel>
      <Name>
        q: Who is Scott O&#39;Toole?
      </Name>
      <Subtitle>
        a: web developer.
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
)
}
}

export default IndexPage
