import styled from "styled-components"
import About from "./About"

import ProjectsCard from "./ProjectsCard"

const Content = (props) => {
  return (
    <Container>
      <Title>
        <h1>
          Hello, I'm <span>Joed Lara</span>.
        </h1>
        <div>
          <img src="/images/100-icon.gif" alt="" />
          <ul>
            <li>Developer</li>
            <li>Full Stack</li>
            <li>Mobile</li>
            <li>Freelance</li>
          </ul>
        </div>
      </Title>
      <h3 id="about">About Me</h3>
      <About />
      <h3 id="projects">Projects</h3>
      <ProjectsCard />
    </Container>
  )
}

const Container = styled.div`
  padding: 2px;
  display: table-row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  border: 3px solid red;
  h3 {
    font-family: "Montserrat Alternates", sans-serif;
    font-size: 2.5em;
    color: #d6d6d6;
    margin: auto;
    width: 50%;
    border-bottom: 2px solid #d6d6d6;
    overflow: hidden;
    width: fit-content;
  }
  @media (max-width: 768px) {
    h3 {
      margin-left: 25%;
    }
  }
`

const Title = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  margin: 5% 50px;
  color: #d6d6d6;
  h1 {
    font-size: 5em;
    span {
      color: #3366cc;
    }
  }
  div {
    display: flex;
    margin-left: 75%;
    ul {
      list-style-type: none;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  @media (max-width: 768px) {
    div {
      margin-left: 0;
    }
  }

  max-width: 80ch;
  @media (max-width: 768px) {
    margin: 12% 4%;
  }
`

export default Content
