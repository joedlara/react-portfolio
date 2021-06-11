import { useState } from "react"
import styled from "styled-components"

import ReactTooltip from "react-tooltip"
import { Link, animateScroll as scroll } from "react-scroll"

import MobileModal from "./MobileModal"

const Header = (props) => {
  const [showModal, setShowModal] = useState("close")

  const handleClick = (e) => {
    e.preventDefault()
    if (e.target === e.curretTarget) {
      return
    }
    switch (showModal) {
      case "open":
        setShowModal("close")
        break
      case "close":
        setShowModal("open")
        break
      default:
        setShowModal("close")
        break
    }
  }

  return (
    <>
      <Container>
        <Nav>
          <div className="desktop-menu">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              offset={-70}
            >
              about
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              offset={-70}
            >
              projects
            </Link>
            <a
              data-tip="Click To Copy"
              onClick={() => {
                navigator.clipboard.writeText("joedlara18@gmail.com")
              }}
            >
              contact
            </a>
            <ReactTooltip />
          </div>
          <button className="mobile-button" onClick={handleClick}>
            {showModal === "close" ? (
              <img src="/images/ham-menu.png" alt="" />
            ) : (
              <img src="/images/x-icon.png" alt="" />
            )}
          </button>

          <Socials>
            <button
              className="home-button"
              onClick={() => scroll.scrollToTop()}
            >
              J.<span>LARA</span>
            </button>

            <a
              href="https://www.linkedin.com/in/joed-lara/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin-logo.png" alt="" />
            </a>
            <a
              href="https://github.com/joedlara"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/github-logo.png" alt="" />
            </a>
          </Socials>
        </Nav>
      </Container>
      <MobileModal showModal={showModal} handleClick={handleClick} />
    </>
  )
}

const Container = styled.div`
  left: 0;
  top: 0;
  width: 100vw;
  background: #121111;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  z-index: 100;
`
const Nav = styled.nav`
  padding: 0 20px;
  font-family: "Orbitron", sans-serif;
  justify-content: space-between;
  max-width: 1500px;
  margin: auto;
  display: flex;
  align-items: center;
  .mobile-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  a {
    cursor: pointer;
    color: white;
    margin: 3%;
    font-size: 24px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #3366cc;
    }
  }
  @media (max-width: 768px) {
    position: relative;
    .mobile-button {
      display: block;
    }
    .desktop-menu {
      display: none;
    }
  }
`

const Socials = styled.div`
  align-items: center;
  position: relative;
  font-weight: 600;
  color: #d6d6d6;
  .home-button {
    font-family: "Orbitron", sans-serif;
    color: #d6d6d6;
    font-size: 2.5em;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  span {
    color: #3366cc;
  }
  img {
    width: 30px;
    height: 30px;
    &:hover {
      background-color: #3366cc;
      border-radius: 4px;
    }
  }
  a {
    margin: auto 4px;
  }
  @media (max-width: 768px) {
    .home-button {
      font-size: 1.9em;
    }
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

export default Header
