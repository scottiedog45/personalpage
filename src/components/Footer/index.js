import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import resume from '../../contactIcons/resume.pdf'

import {FaAngleDoubleDown, FaGithubSquare, FaEnvelope, FaLinkedinSquare} from 'react-icons/lib/fa'

import FontAwesome from 'react-fontawesome';

const Headerdiv = styled.div`
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: inherit;
  text-align: center;
`;

const ContactFloater = styled.div`
  font-size: 40px;
  color: #f8f8ff;
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
`;

const ContactLink = styled.a`
  color: inherit;
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
  color: #f8f8ff;
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

const BlogLink = styled.a`
color: #f8f8ff;
word-wrap: normal;
text-decoration: none;
&:hover{
  color: cyan;
}
letter-spacing: 5px;
`;

const Footer = () => (
  <Headerdiv>
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
  </Headerdiv>
)

export default Footer
