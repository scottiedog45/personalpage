import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome';

import Scrollchor from 'react-scrollchor'

const TinyMenuWrapper = styled.div`
  font-size: 13px;
  letter-spacing: 3px;
  text-decoration: none;
  display: block;
  float: right;
  margin-right: 20px;
`;

const HeaderWrapper = styled.div`
  background-color: #070729;
  position: sticky;
  top: 0;
  z-index: 3;
`;


const Header = () => (
  <HeaderWrapper>
  <div style ={{position:'relative'}}>
  <TinyMenuWrapper>
  <div style = {{marginLeft:20, display: 'inline'}}>
  <Scrollchor to='#about' animate={{offset: -20, duration: 800}}>about</Scrollchor>
  </div>
      <div style={{ marginLeft: 20, display: 'inline' }}>
  <Scrollchor to='#work' animate={{offset: -20, duration: 800}}>work</Scrollchor>
  </div>
      <div style={{ marginLeft: 20, display: 'inline' }}>
  <Scrollchor to='#contact' animate={{offset: -20, duration: 800}}>contact</Scrollchor>
  </div>
  </TinyMenuWrapper>
  </div>
  </HeaderWrapper>
)

export default Header
