function MobileDropdownToggle({ toggled, ...buttonProps }) {
  return (
    <button
      aria-label="Toggle navigation dropdown"
      className={toggled ? 'toggled mobile_dropdown_toggle' : 'mobile_dropdown_toggle'}
      {...buttonProps}>
      <span className="stripe_top"></span>
      <span className="stripe_middle"></span>
      <span className="stripe_bottom"></span>
      <style jsx>{`
        .mobile_dropdown_toggle {
          height: 24px;
          width: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: stretch;
          padding: 0;
          z-index: 1;

          @media (min-width: 1000px) {
            display: none;
          }

          * {
            border-bottom: 4px solid var(--primary-dark);
            transition: transform 0.2s, opacity 0.2s;
          }

          .stripe_top {
            transform-origin: top right;
          }

          .stripe_bottom {
            transform-origin: bottom right;
          }

          &.toggled {
            .stripe_top {
              transform: rotate(-45deg);
            }
            .stripe_middle {
              transform: scaleX(0);
            }
            .stripe_bottom {
              transform: rotate(45deg);
            }
          }
        }
      `}</style>
    </button>
  );
}

export default MobileDropdownToggle;
