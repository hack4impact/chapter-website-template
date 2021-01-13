import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MobileDropdownToggle from './MobileDropdownToggle';
import NavLink from './NavLink';
import useHasScrolledDown from '../../utils/useHasScrolledDown';
import Logo from './Logo';

function Nav() {
  const router = useRouter();
  const activeRoute = router.pathname;
  const [mobileNavOpened, setMobileNavOpened] = useState(false);

  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened);

  // when active route changes, we probably clicked on a nav link
  // in this case, collapse the nav dropdown for mobile users
  useEffect(() => {
    setMobileNavOpened(false);
  }, [activeRoute]);

  useEffect(() => {
    const escapeKeyListener = (event) => event.key === 'Escape' && setMobileNavOpened(false);

    document.addEventListener('keypress', escapeKeyListener);
    return () => document.removeEventListener('keypress', escapeKeyListener);
  }, []);

  const hasScrolledDown = useHasScrolledDown();

  return (
    <>
      <header className={hasScrolledDown ? 'header with_background' : 'header'}>
        <nav className={`container nav_container ${mobileNavOpened ? 'nav_toggled' : ''}`}>
          <Logo />
          <MobileDropdownToggle toggled={mobileNavOpened} onClick={toggleMobileNav} />
          <div className="dropdown_link_container">
            <NavLink activeRoute={activeRoute} href="/about">
              About Us
            </NavLink>
            <NavLink activeRoute={activeRoute} href="/projects">
              Our Work
            </NavLink>
            <NavLink activeRoute={activeRoute} href="/apply">
              Apply
            </NavLink>
            <a href="mailto:contact@hack4impact.org">Contact Us</a>
          </div>
        </nav>
      </header>
      <style jsx>{`
        .header {
          transition: background-color 0.3s;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 9999;
          display: flex;
          align-items: center;

          &::before {
            content: '';
            background-color: rgba(255, 255, 255, 0);
            transition: background-color 0.2s;
          }

          &.with_background::before {
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(8px);
          }
        }

        .nav_container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding: 0 20px;

          font-size: 20px;

          display: inherit;
          align-items: inherit;

          :global(a + a) {
            margin-left: 10px;
          }
          :global(a, a:visited) {
            display: inline-block;
            color: var(--primary-dark);
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            transition: color 0.2s;
          }

          :global(a:hover, a:visited:hover) {
            color: var(--accent-orange);
          }

          .dropdown_link_container {
            display: inherit;
            align-items: inherit;
          }

          @media (max-width: 1000px) {
            .dropdown_link_container {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              flex-direction: column;
              justify-content: center;
              align-items: flex-end;
              z-index: 0;

              margin: 0;
              padding-left: 7vw;
              padding-right: 7vw;

              height: 100vh;
              /* fix mobile nav height on mobile safari */
              height: -webkit-fill-available;
              overflow: hidden;

              transform: translateY(-100%); /* hide until mobile nav toggled */
              transition: transform 0.3s, opacity 0.4s;
              opacity: 0;
              background: rgba(255, 255, 255, 0.8);
              backdrop-filter: blur(10px);

              :global(a, a:visited) {
                font-size: 36px;
                font-weight: bold;
                padding: 0;
              }

              :global(a + a) {
                margin: 0;
                margin-top: 40px;
              }
            }

            &.nav_toggled > .dropdown_link_container {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </>
  );
}

export default Nav;
