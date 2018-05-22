import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome';

import Scrollchor from 'react-scrollchor'

import { media } from '../../../src/style-utils'

//add burger menu!

const TinyMenuWrapper = styled.div`
  ${media.handheld`
    float: none;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-right: none;
    padding-top: 30px;
  `}
  ${media.desktop`
  width: unset;
  font-size: 17px;
  text-align: none;
  letter-spacing: 3px;
  text-decoration: none;
  float: right;
  padding-right: 50px;
  padding-top: 15px;`}
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  font-family: 'Raleway', sans-serif;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: inline
`


class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectSection : 'about'
    }
  }

  render(){

    return (
      <HeaderWrapper>
          <TinyMenuWrapper>
            <LinkContainer>
              <Scrollchor to='#bio' animate={{ duration: 800 }}>bio</Scrollchor>
            </LinkContainer>
            <LinkContainer style={{ marginLeft: 50, display: 'inline' }}>
              <Scrollchor to='#work' animate={{ duration: 800 }}>work</Scrollchor>
            </LinkContainer>
            <LinkContainer style={{ marginLeft: 50, display: 'inline' }}>
              <Scrollchor to='#contact' animate={{ duration: 800 }}>contact</Scrollchor>
            </LinkContainer>
          </TinyMenuWrapper>
      </HeaderWrapper>
    )
  }
}

  

export default Header
