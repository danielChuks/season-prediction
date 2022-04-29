import React from "react";
import './Loader-spinner.css';


const Loader = (props) => {
    return(
      <>
      <div className="ui active dimmer">
         <div className="ui text loader">{props.message}</div>
       </div>
        <p></p>
      </>
  )
}

/// this object we assign a default value of props that would get assigned if we dont pass in a props
Loader.defaultProps = {
  message: 'Loading....'
}


export default Loader;