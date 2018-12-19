import React from 'react'
import Link from 'next/link'
import { Navbar, Container, NavbarBrand, NavbarToggler } from 'reactstrap'

const Nav = () => (
  <Navbar className="navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <Container>
      <NavbarBrand className="js-scroll-trigger" href="/">
        <img id="logo-img" height="35" width="200" src="/static/colored-logo.png" />
      </NavbarBrand>
      <NavbarToggler type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </NavbarToggler>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/about"> About </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects"> Projects </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/apply"> Apply </a>
          </li>
        </ul>
      </div>
    </Container>
  </Navbar>
)

export default Nav
