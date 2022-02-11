import React from "react";
import loaderStyles from './loader.module.css';

function Loader() {
  return(
    <div className={loaderStyles.loader__wrapper}>
      <div className={loaderStyles.lds_dual_ring}></div>
    </div>
  )
}

export default Loader;
