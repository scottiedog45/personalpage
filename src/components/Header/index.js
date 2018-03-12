import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare} from 'react-icons/lib/fa'

import FontAwesome from 'react-fontawesome';

const Headerdiv = styled.div`
  background: black;
  padding-top: 10px;
  padding-bottom: 10px;
  position: sticky;
  top: 0px;
  z-index: 3;
`;

const ContactFloater = styled.div`
  font-size: 40px;
  display: flex;
  color: #e94889;
  justify-content: space-around;
  background: black;
`;

const ContactLink = styled.a`
  color: inherit;
`;

const ContactIcon = styled.img`
  height: 50px;
  margin-left: 20px;
`;

const Header = () => (
  <Headerdiv>
  <ContactFloater>
    <ContactLink
      href={'mailto:scottiedog45@gmail.com'}>
      <FaEnvelope />
    </ContactLink>
    <ContactLink href={'https://github.com/scottiedog45'}target={'_blank'}>
      <FaGithubSquare />
    </ContactLink>
    <ContactLink href={'https://www.linkedin.com/in/scott-o-toole-8b35b01b/'}target={'_blank'}>
      <FaLinkedinSquare />
    </ContactLink>
  </ContactFloater>
  </Headerdiv>
)

export default Header
