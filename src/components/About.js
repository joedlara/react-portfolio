import styled from "styled-components"

const About = (props) => {
  const skillMenu = [
    {
      title: "React",
      progress: "90%",
    },
    {
      title: "JavaScript",
      progress: "90%",
    },
    {
      title: "HTML(5)",
      progress: "90%",
    },
    {
      title: "CSS(3)",
      progress: "80%",
    },
    {
      title: "React Native",
      progress: "75%",
    },
    {
      title: "Vue",
      progress: "80%",
    },
    {
      title: "SQL",
      progress: "70%",
    },
    {
      title: "Python",
      progress: "70%",
    },
    {
      title: "Node.js",
      progress: "80%",
    },
    {
      title: "UI/UX",
      progress: "70%",
    },
    {
      title: "Spanish",
      progress: "100%",
    },
  ]
  return (
    <>
      <Container>
        <AboutMe>
          <Description>
            <div className="image" />
            <div className="who">
              <h1>Who Am I?</h1>
              <p>
                I'm fullstack developer based in Los Angeles. My favorite thing
                to work on is definitely has to be the front-end. I've been
                working in web development for over 5 years now, and seeing
                projects and their features come to life is still extremely
                satisfying. My goal is always to deliver that fastest and most
                responsive web and even mobile apps.
              </p>
            </div>
          </Description>
          <Skills>
            <h1>Skills</h1>
            <ul>
              {skillMenu.map((skill, index) => (
                <li className="skill-list" key={index}>
                  <div className="progress-bar">
                    <Bar value={skill.progress}>
                      <p>
                        {skill.title} - <span>{skill.progress}</span>
                      </p>
                    </Bar>
                  </div>
                </li>
              ))}
            </ul>
          </Skills>
        </AboutMe>
      </Container>
    </>
  )
}

const Container = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  justify-content: center;
  color: #d6d6d6;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 10px;
    margin: auto;
    margin-top: 20px;
    width: 50%;
  }
  @media (max-width: 1177px) {
    padding: 10px;
    margin: auto;
    margin-top: 20px;
    width: 50%;
  }
`

const AboutMe = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Description = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;

  p {
    width: 40ch;
  }
  .image {
    margin-right: 24px;
    height: 300px;
    width: 300px;
    background: url("/images/profile-pic.jpg") no-repeat center center/cover;
    border-radius: 50%;
  }
  .who {
    display: block;
    h1 {
      margin: 10px;
      font-size: 1.9em;
      font-weight: 900;
    }
  }
  @media (max-width: 768px) {
    margin: auto;
    width: 80%;
    .who {
      display: contents;
    }
  } ;
`

const Bar = styled.div`
  height: 24px;
  background: #3366cc;
  width: ${(props) => props.value};
  p {
    left: 0;
    margin: 8px;
    span {
      font-family: "Avantgarde", sans-serif;
    }
  }
`

const Skills = styled.div`
  align-items: center;
  display: relative;
  h1 {
    margin: 10px;
    font-size: 1.9em;
    font-weight: 900;
  }
  .skill-list {
    list-style-type: none;
  }
  .progress-bar {
    box-shadow: 0 0 5px 2px rgba(230, 230, 230, 0.5);
    transition: transform 200ms ease;
    height: 24px;
    width: 400px;
    margin-bottom: 15px;
    background: #d6d6d6;
    @media (hover) {
      &:hover {
        transform: scale(1.02);
      }
    }
  }
`

export default About
