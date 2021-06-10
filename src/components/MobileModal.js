import styled from "styled-components"
import { Link } from "react-scroll"

const MobileModal = (props) => {
  const menuItems = [
    {
      title: "about",
      link: "about",
    },
    {
      title: "projects",
      link: "projects",
    },
    {
      title: "contact",
      link: "",
      mail: "mailto:joedlara18@gmail.com",
    },
  ]
  const handleLink = (e) => {
    props.handleClick(e)
  }
  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <MobileMenu>
            <ul className="active">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    activeClass="active"
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
                    href={item.mail}
                    offset={-70}
                    onClick={(event) => handleLink(event)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileMenu>
        </Container>
      )}
    </>
  )
}

const Container = styled.div``

const MobileMenu = styled.div`
  font-family: "Orbitron", sans-serif;
  display: flex;
  flex-direction: column;
  width: 75%;
  position: fixed;
  top: 50px;
  z-index: 1;
  left: 0;
  opacity: 1;

  ul {
    list-style-type: none;
    li {
      margin: 30px 20px;
    }
  }
  a {
    padding: 10px;
    cursor: pointer;
    color: white;
    font-size: 24px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #3366cc;
    }
  }
  .active {
    background: rgb(26, 26, 26);
    border-right: 3px solid rgba(51, 51, 51, 0.2);
    left: 0;
    height: 100vh;
  }
`

export default MobileModal
