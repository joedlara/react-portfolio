import { useEffect } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getProjectsAPI } from "../actions"

const ProjectsCard = (props) => {
  useEffect(() => {
    props.getProjectsAPI()
  }, [])

  return (
    <>
      {props.projects.length === 0 ? (
        <Spinner>
          <img src="/images/spin-loader.gif" alt="" />
        </Spinner>
      ) : (
        <Container>
          {props.projects.length > 0 &&
            props.projects.map((project, key) => (
              <Card key={key} background={project.image}>
                <CardContent>
                  <h2 className="title">{project.title}</h2>
                  <p>{project.description}</p>
                  <a href={project.website} target="_blank">
                    Learn More
                  </a>
                </CardContent>
              </Card>
            ))}
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  margin-top: 8%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 5px;
  }
`
const Spinner = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardContent = styled.div`
  font-family: sans-serif;
  color: rgb(255 255 255 / 0.85);
  --padding: 1.5rem;
  padding: var(--padding);
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(20, 0, 0, 0.3) 20%,
    rgba(0, 0, 0, 1)
  );

  .title {
    margin-bottom: 3px;
    font-size: 25px;
    position: relative;
    padding-bottom: 4px;
    width: max-content;
    &::after {
      content: "";
      position: absolute;
      height: 4px;
      background: rgb(51, 102, 204);
      width: calc(100% + var(--padding));
      left: calc(var(--padding) * -1);
      bottom: -2px;
    }
  }

  p {
    font-weight: 500;
  }

  a {
    color: white;
    margin-top: 8px;
    cursor: pointer;
    display: inline-block;
    background: #3366cc;
    text-decoration: none;
    padding: 0.5em 1.25em;
    border-radius: 0.25em;
    &:hover,
    :focus {
      background: #d6d6d6;
    }
  }

  @media (hover) {
    transform: translateY(65%);
    transition: transform 800ms ease;
    .title {
      &::after {
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 800ms ease;
      }
    }
  }
`
const Card = styled.div`
  margin: 7px;
  border-radius: 0.5rem;
  border: none;
  overflow: hidden;
  background: url(${(props) => props.background}) no-repeat center center/cover;

  padding: 10rem 0 0;
  max-width: 60ch;
  transition: transform 500ms ease;

  @media (hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
  &:hover {
    ${CardContent} {
      transform: translateY(0);
    }
    .title {
      &::after {
        transform: scaleX(1);
      }
    }
  }
`

const mapStateToProps = (state) => {
  return {
    loading: state.projectState.loading,
    projects: state.projectState.projects,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getProjectsAPI: () => dispatch(getProjectsAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsCard)
