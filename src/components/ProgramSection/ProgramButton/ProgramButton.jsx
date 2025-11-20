import React from "react";

const ProgramButton = ({ children, className = ""}) => {
  return (
    <div textClassName className={className} style={{ position: "relative", display: "inline-block", width: "404px", height: "101px" }}>
     
      <svg
        width="404"
        height="101"
        viewBox="0 0 404 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <g opacity="0.99" filter="url(#filter0_g_28_2)">
          <g clipPath="url(#paint0_diamond_28_2_clip_path)">
            <g transform="matrix(0.322297 0.0669127 -0.000242245 0.0744737 45.366 -1.32897e-06)">
              <rect x="0" y="0" width="1123.01" height="1546.47" fill="url(#paint0_diamond_28_2)" opacity="0.32" shapeRendering="crispEdges" />
              <rect x="0" y="0" width="1123.01" height="1546.47" transform="scale(1 -1)" fill="url(#paint0_diamond_28_2)" opacity="0.32" shapeRendering="crispEdges" />
              <rect x="0" y="0" width="1123.01" height="1546.47" transform="scale(-1 1)" fill="url(#paint0_diamond_28_2)" opacity="0.32" shapeRendering="crispEdges" />
              <rect x="0" y="0" width="1123.01" height="1546.47" transform="scale(-1)" fill="url(#paint0_diamond_28_2)" opacity="0.32" shapeRendering="crispEdges" />
            </g>
          </g>
          <path
            d="M50.5 2H352.712C379.498 2 401.213 23.7142 401.213 50.5C401.213 77.2856 379.498 98.9997 352.713 99H50.5C23.7142 99 2 77.2858 2 50.5C2 23.7142 23.7142 2 50.5 2Z"
            stroke="url(#paint1_linear_28_2)"
            strokeWidth="4"
          />
        </g>

        <defs>
          <filter id="filter0_g_28_2" x="0" y="0" width="403.212" height="101" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feTurbulence type="fractalNoise" baseFrequency="inf inf" numOctaves="3" seed="9907" />
            <feDisplacementMap in="shape" scale="0" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
            <feMerge result="effect1_texture_28_2">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <clipPath id="paint0_diamond_28_2_clip_path">
            <path d="M0 50.5C0 22.6096 22.6096 0 50.5 0H352.712C380.603 0 403.212 22.6096 403.212 50.5C403.212 78.3904 380.603 101 352.712 101H50.5001C22.6097 101 0 78.3904 0 50.5Z" />
          </clipPath>
          <linearGradient id="paint0_diamond_28_2" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B1238" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient id="paint1_linear_28_2" x1="210.52" y1="0" x2="209.393" y2="91.8" gradientUnits="userSpaceOnUse">
            <stop offset="0.0312441" stopColor="#B8C7E5" />
            <stop offset="0.303355" stopColor="white" stopOpacity="0.741418" />
            <stop offset="0.985597" stopColor="white" stopOpacity="0.07" />
          </linearGradient>
        </defs>
      </svg>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "24px",
          fontFamily: "Geist-с, sans-serif",
          fontWeight: "900",
          pointerEvents: "none"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ProgramButton;
