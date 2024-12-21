import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;

      li {
        list-style: none;
        position: relative;

        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }

          &.active {
            font-weight: bold;
            color: ${({ theme }) => theme.colors.primary};
            border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
          }
        }
      }

      .dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        z-index: 10;

        li {
          margin:1.3rem 0;

          .navbar-link {
            font-size: 1.6rem;

            &:hover {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }

        &.show {
          display: block;
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

 .close-outline {
        display: none;
      }
    }

    .mobile-navbar-btn[name="close-outline"] {
      display: none;
    }

      }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .navbar-list {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateX(100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;

        li .navbar-link {
          font-size: 4.2rem;
        }
      
       li {
          .navbar-link {
            &:link,
            &:visited {
              font-size: 4.2rem;
            }

            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }
        }

      .active .navbar-list {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;


          visibility: visible;
        z-index: 999;
      }
    }
  `;

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>



          <li
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
            className="dropdown-container"
          >
            <NavLink
              className={({ isActive }) =>
            "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
              to="#"
            >
              Services
            </NavLink>
            <ul className={`dropdown-menu ${openDropdown ? "show" : ""}`}>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/service/web-development"
                >
                  Web Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/service/mobile-development"
                >
                  Mobile Development
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="navbar-link"
                  onClick={() => setOpenMenu(false)}
                  to="/service/digital-marketing"
                >
                  Digital Marketing
                </NavLink>
              </li>
            </ul>
          </li> 
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              onClick={() => setOpenMenu(false)}
              to="/about"
            >
              About
            </NavLink>
          </li>
        
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
