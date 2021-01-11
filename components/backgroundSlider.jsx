// default show children twice so slider won't be empty after "sliding" for a while
export default function BackgroundSlider({ children, iterations }) {
  return (
    <div className="slider-container">
      <style jsx>{`
        .slider-container {
          overflow: hidden;
          white-space: nowrap;
          max-width: 100%;
        }
        .slider-content-wrapper {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          animation: slide 30s linear infinite;
        }
        .slider-content-wrapper > div {
          display: inline-block;
        }
        @keyframes slide {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
      <div className="slider-content-wrapper">
        {iterations !== undefined
          ? [...Array(iterations)].map((x) => <div key={x}>{children}</div>)
          : [...Array(2)].map((x) => <div key={x}>{children}</div>)}
      </div>
    </div>
  );
}
