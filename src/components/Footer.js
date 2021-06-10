import styled from "styled-components"

const Footer = (props) => {
  return <Content>Created by, Joed Lara - 2021</Content>
}

const Content = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  color: #d6d6d6;
  margin-top: 9%;
  background: rgba(26, 26, 26, 0.5);
  height: 100px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  bottom: 0;
  width: 100vw;
`

export default Footer
