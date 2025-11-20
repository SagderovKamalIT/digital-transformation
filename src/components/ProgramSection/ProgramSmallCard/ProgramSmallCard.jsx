import React from "react";
import styles from "./ProgramSmallCard.module.scss";

const ProgramSmallCard = ({ children, className }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <svg
        className={styles.cardSvg}
        viewBox="0 0 1382 247"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.99" filter="url(#filter0_g_21_75)">
          <g clipPath="url(#paint0_diamond_21_75_clip_path)">
            <g transform="matrix(-0.706722 0.0390064 -0.0655508 -0.109393 466.557 -64.0953)">
              <rect
                x="0"
                y="0"
                width="1203.45"
                height="3209.22"
                fill="url(#paint0_diamond_21_75)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
              <rect
                x="0"
                y="0"
                width="1203.45"
                height="3209.22"
                fill="url(#paint0_diamond_21_75)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
              <rect
                x="0"
                y="0"
                width="1203.45"
                height="3209.22"
                transform="scale(1 -1)"
                fill="url(#paint0_diamond_21_75)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
              <rect
                x="0"
                y="0"
                width="1203.45"
                height="3209.22"
                transform="scale(-1 1)"
                fill="url(#paint0_diamond_21_75)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
              <rect
                x="0"
                y="0"
                width="1203.45"
                height="3209.22"
                transform="scale(-1)"
                fill="url(#paint0_diamond_21_75)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
            </g>
          </g>
          <path
            d="M0 47C0 21.0426 21.0426 0 47 0H1335C1360.96 0 1382 21.0426 1382 47V200C1382 225.957 1360.96 247 1335 247H47C21.0426 247 0 225.957 0 200V47Z"
            stroke="white"
          />
        </g>

        <defs>
          <filter
            id="filter0_g_21_75"
            x="0"
            y="0"
            width="1382"
            height="247"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feTurbulence type="fractalNoise" baseFrequency="0.5 0.5" numOctaves="3" seed="9907" />
            <feDisplacementMap
              in="shape"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedImage"
              width="100%"
              height="100%"
            />
            <feMerge result="effect1_texture_21_75">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>

          <clipPath id="paint0_diamond_21_75_clip_path">
            <path d="M0 47C0 21.0426 21.0426 0 47 0H1335C1360.96 0 1382 21.0426 1382 47V200C1382 225.957 1360.96 247 1335 247H47C21.0426 247 0 225.957 0 200V47Z" />
          </clipPath>

          <linearGradient
            id="paint0_diamond_21_75"
            x1="0"
            y1="0"
            x2="500"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.134571" stopColor="#999999" stopOpacity="0.32" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};

export default ProgramSmallCard;
