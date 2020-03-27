
import * as React from "react";

const  testVH = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "42"} height={props.height || "42"} fill={props.fill || "none"} viewBox={props.viewBox || "0 0 42 42"}>
        
    <path d="M17.5 28.875L28 21l-10.5-7.875v15.75zM21 3.5C11.34 3.5 3.5 11.34 3.5 21S11.34 38.5 21 38.5 38.5 30.66 38.5 21 30.66 3.5 21 3.5zM21 35c-7.717 0-14-6.282-14-14 0-7.717 6.283-14 14-14 7.718 0 14 6.283 14 14 0 7.718-6.282 14-14 14z"/>

    </svg>
  )

export default testVH