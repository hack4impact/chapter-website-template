import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
} from "reactstrap";

export default function NavigationBar({ navType }) {
  const [isTop, setIsTop] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => setIsTop(window.scrollY < 100));
  }, []);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar
      className={`navbar-expand-lg navbar-dark fixed-top ${
        isTop ? "" : "shadow bg-white"
      }`}
      id={navType ?? "mainNav"}
    >
      <Container>
        <NavbarBrand className="js-scroll-trigger" href="/">
          <img
            id="logo-img"
            height="35"
            width="200"
            src="/images/colored-logo.png"
            alt="Hack4Impact UIUC logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse navbar isOpen={collapsed}>
          <Nav navbar className="text-uppercase ml-auto">
            <NavItem>
              <Link href="/about">
                <a className="nav-link pl-3">About</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/projects">
                <a className="nav-link pl-3">Projects</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/design">
                <a className="nav-link pl-3">Design</a>
              </Link>
            </NavItem>
            <NavItem>
              <a
                href="https://medium.com/hack4impact-uiuc"
                className="nav-link pl-3"
              >
                Blog
              </a>
            </NavItem>
            <NavItem>
              <Link href="/apply">
                <a className="nav-link pl-3">Apply</a>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
      <style jsx>{`
        .bg-white {
          background-color: #ffffff;
        }
      `}</style>
    </Navbar>
  );
}
