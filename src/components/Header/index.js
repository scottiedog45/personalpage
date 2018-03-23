import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare} from 'react-icons/lib/fa'

import FontAwesome from 'react-fontawesome';

const Headerdiv = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  position: sticky;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 10vw;
  z-index: 3;
  float: left;
`;

const ContactFloater = styled.div`
  font-size: 40px;
  color: #f8f8ff;
  margin-top: 34vh;
`;

const ContactLink = styled.a`
  color: inherit;
`;

const ContactLinkWrapper= styled.div`
  margin-top: 50px;
  margin-left: 5px;
  font-size: 30px;
`;

const ContactIcon = styled.img`
  height: 50px;
  margin-left: 20px;
`;

const Header = () => (
  <Headerdiv>
  <ContactFloater>
  <ContactLinkWrapper>
    <ContactLink
      href={'mailto:scottiedog45@gmail.com'}>
      <FaEnvelope />
    </ContactLink>
    </ContactLinkWrapper>
    <ContactLinkWrapper>
    <ContactLink href={'https://github.com/scottiedog45'}target={'_blank'}>
      <FaGithubSquare />
    </ContactLink>
    </ContactLinkWrapper>
    <ContactLinkWrapper>
    <ContactLink href={'https://www.linkedin.com/in/scott-o-toole-8b35b01b/'}target={'_blank'}>
      <FaLinkedinSquare />
    </ContactLink>
    </ContactLinkWrapper>
  </ContactFloater>
  </Headerdiv>
)

export default Header
