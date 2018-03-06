import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'


const Button = styled.button`
  border-color: black;
  background-color: inherit;
  border-style: solid;
  border-width: 1px;
`;

const Panel = styled.div`


`;

const ProjectTitle = styled.p`
  font-size: 1.5em;
`;

const Panel2 = Panel.extend`

`;

const Panel3 = Panel.extend`


`;

const Panel4 = Panel.extend`

`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
`;

const Bio = styled.p`
`

const Description = styled.p`

`;

const Url = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const IndexPage = () => (
  <div>
    <section>
      <ButtonWrapper>
        <Button>
          Who am I?
        </Button>
        <Button>
          See my work
        </Button>
      </ButtonWrapper>
    </section>
    <section>
      <Subtitle>
        Hey there! My name is Scott, and I'm your web developer.
      </Subtitle>
      <Bio>
        I'm a recent graduate of the Front End
        Web Development bootcamp at Thinkful. I love how web development
        combines quantitative and qualitative problem solving skills, which
        is why I've chosen it as a career path. I'm excited by innovation,
        and always driven to find solutions that are efficient and artistic.
        <br /> <br />
        My curiosity has led me on adventures through several career fields
        including classical music performance, artistic administration, actuarial
        science, and now... coding! I feel most at home in front of my laptop, either
        learning a slick new library or designing the website for a business. At some
        point I drank the CrossFit kool-aid, so if my computer is off you can also find
        me in a local gym racking up some burpees!
      </Bio>
    </section>
    <hr />
    <Panel>
      <ProjectTitle>
        Piqnic
      </ProjectTitle>
      <Description>
        An app that helps you quickly plan picnic.
      </Description>
      <Url>
        www.piqnic.com
      </Url>
    </Panel>
    <hr />
    <Panel>
      <ProjectTitle>hai·koo</ProjectTitle>
      <Description>
        An app that syllable-checks your haiku, and let's you post and vote on other haikus!
      </Description>
      <Url>
        www.haikoo.com
      </Url>
    </Panel>
    <hr />
    <Panel>
      <ProjectTitle>Leev</ProjectTitle>
      <Description>
        Leev uses a simple interface to help you track your group's leave data.
      </Description>
      <Url>
        www.leev.com
      </Url>
    </Panel>
    <hr />
      <Link to="/contactMe/">Holla atcha boi</Link>
  </div>
)

export default IndexPage
