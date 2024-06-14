import { cx } from "@/utils";
import * as React from "react"


const TwitterIcon = ({className, ...rest}: {className: any}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={43}
    viewBox="0 0 42 43"
    className={cx("w-full h-auto", className)}
    {...rest}
  >
    <g clipPath="url(#a)">
      <path
        fill="#1D9BF0"
        d="M37.7 13.24c.026.37.026.74.026 1.114 0 11.386-8.668 24.517-24.518 24.517v-.006A24.394 24.394 0 0 1 0 35.002a17.303 17.303 0 0 0 12.753-3.571 8.627 8.627 0 0 1-8.05-5.984 8.584 8.584 0 0 0 3.89-.149 8.617 8.617 0 0 1-6.912-8.446v-.11a8.562 8.562 0 0 0 3.91 1.08A8.627 8.627 0 0 1 2.926 6.315a24.457 24.457 0 0 0 17.758 9.002 8.622 8.622 0 0 1 2.494-8.233 8.626 8.626 0 0 1 12.19.374 17.29 17.29 0 0 0 5.473-2.092 8.649 8.649 0 0 1-3.788 4.766A17.135 17.135 0 0 0 42 8.776a17.504 17.504 0 0 1-4.3 4.464Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .808h42v42H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default TwitterIcon;
