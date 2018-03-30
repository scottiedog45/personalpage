import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import resume from '../../contactIcons/resume.pdf'

import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare} from 'react-icons/lib/fa'

import FontAwesome from 'react-fontawesome';

import Scrollchor from 'react-scrollchor'

const TinyMenuWrapper = styled.div`
  font-size: 13px;
  letter-spacing: 3px;
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;

`;

const HeaderWrapper = styled.div`
  background-color: #070729;
  position: sticky;
  top: 0;
  z-index: 3;
  padding-left: 18px;
`;


const Header = () => (
  <HeaderWrapper>
  <TinyMenuWrapper>
  <Scrollchor to='#about' animate={{offset: -20, duration: 800}}>about</Scrollchor>
  <Scrollchor to='#work' animate={{offset: -20, duration: 800}}>work</Scrollchor>
  <Scrollchor to='#contact' animate={{offset: -20, duration: 800}}>contact</Scrollchor>
  </TinyMenuWrapper>

  </HeaderWrapper>
)

export default Header
