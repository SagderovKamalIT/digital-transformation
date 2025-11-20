import React from "react";
import styles from "./SectionsCard.module.scss";

const SectionsCard = ({ children, className, flipped = false }) => {
  return (
    <div className={`${styles.card} ${className || ""} ${flipped ? styles.flipped : ""}`}>
      <svg
        className={styles.cardSvg}
        viewBox="0 0 1382 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.99" filter="url(#filter0_g_26_2)">
          <g clipPath="url(#paint0_diamond_26_2_clip_path)">
            <g transform="matrix(-0.706722 0.0249515 -0.0655508 -0.069976 799.827 92.771)">
              <rect
                x="0"
                y="0"
                width="1181.86"
                height="1688.26"
                fill="url(#paint0_diamond_26_2)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
              <rect
                x="0"
                y="0"
                width="1181.86"
                height="1688.26"
                transform="scale(1 -1)"
                fill="url(#paint0_diamond_26_2)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
              <rect
                x="0"
                y="0"
                width="1181.86"
                height="1688.26"
                transform="scale(-1 1)"
                fill="url(#paint0_diamond_26_2)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
              <rect
                x="0"
                y="0"
                width="1181.86"
                height="1688.26"
                transform="scale(-1)"
                fill="url(#paint0_diamond_26_2)"
                opacity="0.32"
                shapeRendering="crispEdges"
              />
            </g>
          </g>
          <path
            d="M0 47C0 21.0426 21.0426 0 47 0H1335C1360.96 0 1382 21.0426 1382 47V111C1382 136.957 1360.96 158 1335 158H47C21.0426 158 0 136.957 0 111V47Z"
            stroke="white"
          />
        </g>

        <defs>
          <filter
            id="filter0_g_26_2"
            x="0"
            y="0"
            width="1382"
            height="158"
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
            <feMerge result="effect1_texture_26_2">
              <feMergeNode in="displacedImage" />
            </feMerge>
          </filter>

          <clipPath id="paint0_diamond_26_2_clip_path">
            <path d="M0 47C0 21.0426 21.0426 0 47 0H1335C1360.96 0 1382 21.0426 1382 47V111C1382 136.957 1360.96 158 1335 158H47C21.0426 158 0 136.957 0 111V47Z" />
          </clipPath>

          <linearGradient
            id="paint0_diamond_26_2"
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

export default SectionsCard;
