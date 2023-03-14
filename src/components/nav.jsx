import React from "react";

import ".././assets/custom/scss/logo.scss";

import logo from ".././assets/images/images.png";

const nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
        <h1 className="title">FunixPricingChain</h1>
    </div>
  );
};

export default nav;
