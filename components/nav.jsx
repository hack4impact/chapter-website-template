import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navbar, Container, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';

function NavigationBar({ navType }) {
  const [isTop, setIsTop] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 100);
    document.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar
      className={`navbar-expand-lg navbar-dark fixed-top ${isTop ? '' : 'shadow bg-white'}`}
      id={navType ?? 'mainNav'}>
      <Container>
        <NavbarBrand className="js-scroll-trigger" href="/">
          <img
            id="logo-img"
            height="35"
            width="200"
            src="/images/colored-logo.svg"
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

export default NavigationBar;
