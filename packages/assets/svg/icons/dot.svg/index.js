
import * as React from "react";

const  dot = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "undefined"} height={props.height || "undefined"} fill={props.fill || "undefined"} viewBox={props.viewBox || "0 0 24 24"}>
        
    <circle cx="11.5" cy="11.5" r="4.5"/>

    </svg>
  )

export default dot