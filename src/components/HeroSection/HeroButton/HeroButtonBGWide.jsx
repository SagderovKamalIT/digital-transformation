import React from "react";

const ButtonBGWide = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 848 101"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g opacity="0.99" filter="url(#filter0_g_19_71)">
        <g clipPath="url(#paint0_diamond_19_71_clip_path)" data-figma-skip-parse="true">
          <g transform="matrix(0.841828 0.0584553 0.00125027 0.0923593 119.757 25.1697)">
            <rect x="0" y="0" width="869.983" height="957.222" fill="url(#paint0_diamond_19_71)" opacity="0.32" shapeRendering="crispEdges" />
            <rect x="0" y="0" width="869.983" height="957.222" transform="scale(1 -1)" fill="url(#paint0_diamond_19_71)" opacity="0.32" shapeRendering="crispEdges" />
            <rect x="0" y="0" width="869.983" height="957.222" transform="scale(-1 1)" fill="url(#paint0_diamond_19_71)" opacity="0.32" shapeRendering="crispEdges" />
            <rect x="0" y="0" width="869.983" height="957.222" transform="scale(-1)" fill="url(#paint0_diamond_19_71)" opacity="0.32" shapeRendering="crispEdges" />
          </g>
        </g>
        <path d="M0 50.4507C0 22.5876 22.5876 -6.65532e-06 50.4507 -6.65532e-06H796.6C824.463 -6.65532e-06 847.05 22.5876 847.05 50.4507C847.05 78.3139 824.463 100.901 796.6 100.901H50.4507C22.5876 100.901 0 78.3139 0 50.4507Z" data-figma-gradient-fill="{...}" />
        <path d="M50.4512 2H796.6C823.358 2 845.051 23.6926 845.051 50.4512C845.051 77.2096 823.358 98.9014 796.6 98.9014H50.4512C23.6927 98.9014 2.00024 77.2096 2 50.4512C2 23.6926 23.6926 2 50.4512 2Z" stroke="url(#paint1_linear_19_71)" strokeWidth="4" />
      </g>
      <defs>
        <filter id="filter0_g_19_71" x="0" y="0" width="847.05" height="100.901" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feTurbulence type="fractalNoise" baseFrequency="inf inf" numOctaves="3" seed="9907" />
          <feDisplacementMap in="shape" scale="0" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
          <feMerge result="effect1_texture_19_71">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
        <clipPath id="paint0_diamond_19_71_clip_path">
          <path d="M0 50.4507C0 22.5876 22.5876 -6.65532e-06 50.4507 -6.65532e-06H796.6C824.463 -6.65532e-06 847.05 22.5876 847.05 50.4507C847.05 78.3139 824.463 100.901 796.6 100.901H50.4507C22.5876 100.901 0 78.3139 0 50.4507Z" />
        </clipPath>
        <linearGradient id="paint0_diamond_19_71" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#322B54" />
          <stop offset="0.900274" stopColor="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_19_71" x1="442.251" y1="2.4438e-07" x2="441.715" y2="91.7213" gradientUnits="userSpaceOnUse">
          <stop offset="0.0312441" stopColor="#B8C7E5" />
          <stop offset="0.303355" stopColor="white" stopOpacity="0.741418" />
          <stop offset="0.985597" stopColor="white" stopOpacity="0.07" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonBGWide;
