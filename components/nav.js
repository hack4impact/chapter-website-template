import React from "react";
import Link from "next/link";
import {
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav
} from "reactstrap";

class NavigationBar extends React.Component {
  state = {
    isTop: true
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    {
      console.log(this.state.isTop);
    }
    return (
      <Navbar
        className={`navbar-expand-lg navbar-dark fixed-top ${
          this.state.isTop ? "" : "shadow"
        }`}
        id={this.state.isTop ? this.props.navType : "mainNav"}
      >
        <Container>
          <NavbarBrand className="js-scroll-trigger" href="/">
            <img
              id="logo-img"
              height="35"
              width="200"
              src="/static/images/colored-logo.png"
            />
          </NavbarBrand>
          <NavbarToggler
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars" />
          </NavbarToggler>
          <Collapse navbar id="navbarResponsive">
            <Nav navbar className="text-uppercase ml-auto">
              <NavItem>
                <Link prefetch href="/about">
                  <a className="nav-link pl-3">About</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link prefetch href="/projects">
                  <a className="nav-link pl-3">Projects</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link prefetch href="/apply">
                  <a className="nav-link pl-3">Apply</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
