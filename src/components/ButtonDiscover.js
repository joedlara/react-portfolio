import styled from "styled-components"
import { withRouter } from "react-router-dom"

const ButtonDiscover = (props) => {
  const handleButtonClicked = (path) => {
    props.history.push(path)
  }
  return (
    <Container>
      <Button onClick={() => handleButtonClicked("/home")}>
        <span>Discover More</span>
      </Button>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
  }
  &::after {
    box-shadow: inset 0 0 0 2px #d6d6d6;
  }
  &::before {
    background: #19191d;
    box-shadow: inset 0 0 0 120px #d6d6d6;
  }
  &:hover::before {
    box-shadow: inset 0 0 0 2px #d6d6d6;
  }
  &:hover {
    color: white;
    transform: rotate(45deg);
    transition: all 0.25s ease;
    span {
      transform: rotate(-45deg);
      transition: all 0.25s ease;
    }
  }
  span {
    z-index: 1;
  }
`
export default withRouter(ButtonDiscover)
