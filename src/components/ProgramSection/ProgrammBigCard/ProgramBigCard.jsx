import React from "react";
import styles from "./ProgramBigCard.module.scss";

const ProgramBigCard = ({ children, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <svg
        className={styles.cardSvg}
        width="1382"
        height="1059"
        viewBox="0 0 1382 1059"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <g opacity="0.99" filter="url(#filter0_g_43_54)">
          <g clipPath="url(#paint0_diamond_43_54_clip_path)" data-figma-skip-parse="true">
            <g transform="matrix(-0.706722 0.167238 -0.0655508 -0.469016 676.604 -274.805)">
              <rect x="0" y="0" width="1183.63" height="3099.85" fill="url(#paint0_diamond_43_54)" opacity="0.32" shapeRendering="crispEdges" />
              <rect x="0" y="0" width="1183.63" height="3099.85" transform="scale(1 -1)" fill="url(#paint0_diamond_43_54)" opacity="0.32" shapeRendering="crispEdges" />
              <rect x="0" y="0" width="1183.63" height="3099.85" transform="scale(-1 1)" fill="url(#paint0_diamond_43_54)" opacity="0.32" shapeRendering="crispEdges" />
              <rect x="0" y="0" width="1183.63" height="3099.85" transform="scale(-1)" fill="url(#paint0_diamond_43_54)" opacity="0.32" shapeRendering="crispEdges" />
            </g>
          </g>
          <path d="M0 47C0 21.0426 21.0426 0 47 0H1335C1360.96 0 1382 21.0426 1382 47V1012C1382 1037.96 1360.96 1059 1335 1059H47C21.0426 1059 0 1037.96 0 1012V47Z" stroke="white" />
        </g>

        <defs>
          <filter id="filter0_g_43_54" x="0" y="0" width="1382" height="1059" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feTurbulence type="fractalNoise" baseFrequency="0.5 0.5" numOctaves="3" seed="9907" />
            <feDisplacementMap in="shape" scale="0" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="100%" height="100%" />
            <feMerge result="effect1_texture_43_54">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>
          <clipPath id="paint0_diamond_43_54_clip_path">
            <path d="M0 47C0 21.0426 21.0426 0 47 0H1335C1360.96 0 1382 21.0426 1382 47V1012C1382 1037.96 1360.96 1059 1335 1059H47C21.0426 1059 0 1037.96 0 1012V47Z" />
          </clipPath>
          <linearGradient id="paint0_diamond_43_54" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
            <stop offset="0.134571" stopColor="#999999" stopOpacity="0.32" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
};

export default ProgramBigCard;
