import * as React from "react";
import { SVGProps } from "react";

const Difficulty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <path
      fill={props.fill}
      d="m.001 24.004.022-.496.215-.151c-.043-.144-.086-.289-.13-.431-.014-4.124-.027-8.247-.042-12.37L.56 9.261V5.764l.215-.021-.043-.972C.932 3.051 1.343-.004 1.83 0c.475.005.823 2.928.993 4.664V5.7h.258l.086 3.475c.172.46.344.921.518 1.381l.064 12.37-.323.366.237.151v.583c-.243.178-.768.51-1.509.584-1.123.112-1.942-.449-2.154-.605l.001-.001Z"
    />
  </svg>
);

export default Difficulty;
