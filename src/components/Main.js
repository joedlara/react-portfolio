import styled from "styled-components"
import ButtonDiscover from "./ButtonDiscover"
import Typewriter from "typewriter-effect"

const Main = (props) => {
  return (
    <BackgroundContainer>
      <Content>
        <TextTyper>
          <Typewriter
            options={{
              strings: ["Who is J.Lara?"],
              autoStart: true,
              delay: 180,
              pauseFor: 4000,
              loop: true,
            }}
          />
        </TextTyper>
        <ButtonDiscover />
      </Content>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("/images/back-portfolio.gif") no-repeat center center/cover;
`
const TextTyper = styled.div`
  font-family: "Orbitron", sans-serif;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4em;
  @media (max-width: 768px) {
    font-size: 1.9em;
  }
`
const Content = styled.div``

export default Main
