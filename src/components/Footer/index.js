import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import resume from '../../contactIcons/resume.pdf'

import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare} from 'react-icons/lib/fa'

import FontAwesome from 'react-fontawesome';

import { media } from '../../../src/style-utils'

const FooterDiv = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: inherit;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  position: relative;
`;

const TinyLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  &:hover{
    transform: scale(1.1);
    color: cyan;
  }
  &:visited{
    text-decoration: none;
  }
`;

const ContactFloater = styled.div`
  font-size: 40px;
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

const ContactLink = styled.a`
  &:hover{
    color: cyan;
  }
`;

const ContactLinkWrapper= styled.div`
  font-size: 30px;
  display: inline;
`;

const ContactIcon = styled.img`
  height: 50px;
`;

const ResumeLinkWrapper = ContactLinkWrapper.extend`
  font-size: 15px;
`;

const ResumeLink = styled.a`
  word-wrap: normal;
  text-decoration: none;
  &:hover{
    color: cyan;
  }
  letter-spacing: 5px;
`;

const FirstContactLinkWrapper = ContactLinkWrapper.extend`

`;

const BlogLinkWrapper = ContactLinkWrapper.extend`
  font-size: 15px;
  margin-left: 7px;
`;

const Copyright = styled.p`
  display: block;
  text-align: center;
  font-family: Montserrat;
  margin-top: 5vh;
`;

const EmailLink = TinyLink.extend`
  ${media.handheld`
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

const PanelHeader = styled.h4`
  text-align: center;
  font-family: Montserrat;
`;

const Footer = () => (
  <FooterDiv id ={'contact'}>
    <PanelHeader>contact</PanelHeader>
    <EmailLink href={'mailto:scottmatthewotoole@gmail.com'}>scottmatthewotoole@gmail.com</EmailLink>
    <ContactFloater>
      <ResumeLinkWrapper>
        <ResumeLink href={resume} target='_blank'>
          résumé
        </ResumeLink>
      </ResumeLinkWrapper>
    <ContactLinkWrapper>
      <ContactLink
        href={'mailto:scottiedog45@gmail.com'} >
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
    <Copyright>&copy; Scott O&#39;Toole</Copyright>
  </FooterDiv>
)

export default Footer
