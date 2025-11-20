import React from "react";

const ButtonBG = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      width="415"
      height="101"
      viewBox="0 0 415 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g opacity="0.99" filter="url(#filter0_g_19_67)">
        <g clipPath="url(#paint0_diamond_19_67_clip_path)">
          <g transform="matrix(0.331265 0.0668474 -0.000248985 0.074401 46.6283 -1.32767e-06)">
            <rect x="0" y="0" width="1122.68" height="1546.22" fill="url(#paint0_diamond_19_67)" opacity="0.32" shapeRendering="crispEdges" />
            <rect x="0" y="0" width="1122.68" height="1546.22" transform="scale(1 -1)" fill="url(#paint0_diamond_19_67)" opacity="0.32" shapeRendering="crispEdges" />
            <rect x="0" y="0" width="1122.68" height="1546.22" transform="scale(-1 1)" fill="url(#paint0_diamond_19_67)" opacity="0.32" shapeRendering="crispEdges" />
            <rect x="0" y="0" width="1122.68" height="1546.22" transform="scale(-1)" fill="url(#paint0_diamond_19_67)" opacity="0.32" shapeRendering="crispEdges" />
          </g>
        </g>

        <path d="M0 50.4507C0 22.5876 22.5876 0 50.4507 0H363.981C391.844 0 414.432 22.5876 414.432 50.4507C414.432 78.3139 391.844 100.901 363.981 100.901H50.4507C22.5876 100.901 0 78.3139 0 50.4507Z" />
        <path d="M50.4512 2H363.981C390.74 2.0001 412.432 23.6926 412.432 50.4512C412.431 77.2095 390.74 98.9013 363.981 98.9014H50.4512C23.6927 98.9014 2.00024 77.2096 2 50.4512C2 23.6926 23.6926 2 50.4512 2Z" stroke="url(#paint1_linear_19_67)" strokeWidth="4" />
      </g>

      <defs>
        <filter id="filter0_g_19_67" x="0" y="0" width="414.432" height="100.901" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feTurbulence type="fractalNoise" baseFrequency="inf inf" numOctaves="3" seed="9907" />
          <feDisplacementMap in="shape" scale="0" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
          <feMerge result="effect1_texture_19_67">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>

        <clipPath id="paint0_diamond_19_67_clip_path">
          <path d="M0 50.4507C0 22.5876 22.5876 0 50.4507 0H363.981C391.844 0 414.432 22.5876 414.432 50.4507C414.432 78.3139 391.844 100.901 363.981 100.901H50.4507C22.5876 100.901 0 78.3139 0 50.4507Z" />
        </clipPath>

        <linearGradient id="paint0_diamond_19_67" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1238" />
          <stop offset="1" stopColor="white" />
        </linearGradient>

        <linearGradient id="paint1_linear_19_67" x1="216.378" y1="0" x2="215.283" y2="91.7114" gradientUnits="userSpaceOnUse">
          <stop offset="0.0312441" stopColor="#B8C7E5" />
          <stop offset="0.303355" stopColor="white" stopOpacity="0.741418" />
          <stop offset="0.985597" stopColor="white" stopOpacity="0.07" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonBG;

