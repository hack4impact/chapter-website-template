import Link from 'next/link';

function NavLink({ children, href, activeRoute, className, ariaLabel }) {
  return (
    <>
      <Link href={href}>
        <a
          aria-label={ariaLabel}
          className={`${href === activeRoute ? 'active_route' : ''} ${className ?? ''}`}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        .active_route {
          color: var(--accent);
          font-weight: bold;
        }

        .logo_link {
          margin-right: auto;

          img {
            vertical-align: middle;
            height: 40px;
            z-index: 9999;
            width: auto;
          }
        }
      `}</style>
    </>
  );
}

export default NavLink;
