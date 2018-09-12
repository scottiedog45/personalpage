import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome';
import MobileMenu from './mobileMenu'

import { media } from '../../../src/style-utils'



const TinyMenuWrapper = styled.div`
  ${media.handheld`
    display: none;
  `}
  ${media.desktop`
  width: unset;
  font-size: 17px;
  text-align: none;
  letter-spacing: 3px;
  text-decoration: none;
  float: right;
  padding-right: 50px;
  `}
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  background-color: inherit;
  padding-bottom: 20px;
`;

const LinkContainer = styled.div`
  display: inline
  margin-left: 50px;
`
const TopLeftName = styled.a`
  color: blue;
  font-weight: 100;
  display: inline-block;
  padding-left: 25px;
  float: left;
  padding-top: 20px;
  margin: 0;
  transition: all 1s
  &:hover{
    cursor: pointer;
    transform: scale(1.2)
  };
`;

class Header extends React.Component{

  render(){

    return (
      <HeaderWrapper>
        <TopLeftName>
          Scott O'Toole
        </TopLeftName>
        <MobileMenu />
      </HeaderWrapper>
    )
  }
}

  

export default Header
