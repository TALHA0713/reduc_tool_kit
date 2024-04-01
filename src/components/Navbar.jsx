import React from "react";
import styled from "styled-components";
// import "./Navbar.css"
const Navbar = () => {
  return (
    <Wrapper>
      <h1>Admin Table</h1>
      <section>
        <nav>
          <ul className="menuItems">
            <li>
              <a href="/" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="/" data-item="Projects">
                Projects
              </a>
            </li>
            <li>
              <a href="/" data-item="Code">
                Code
              </a>
            </li>
            <li>
              <a href="/" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // height: 100vh;
  padding-top: 0px;

  h1 {
    margin-bottom: 20px;
  }

  nav {
    margin: 0 auto;
    background: #f9f9f9;
    padding: 0.5rem 0;
    width: 900px;
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column; 
    align-items: center; 
  }

  nav .menuItems {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  nav .menuItems li {
    margin: 0 3rem; 
  }

  nav .menuItems li a {
    text-decoration: none;
    color: #8f8f8f;
    font-size: 18px;
    font-weight: 200;
    transition: all 0.5s ease-in-out;
    position: relative;
    text-transform: uppercase;
  }

  nav .menuItems li a::before {
    content: attr(data-item);
    transition: 0.5s;
    color: #8254ff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    overflow: hidden;
  }
  nav .menuItems li a:hover::before {
    width: 100%;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 998px) {
    nav .menuItems li {
      margin: 0.6rem 5rem;
    }
  }
`;

export default Navbar;