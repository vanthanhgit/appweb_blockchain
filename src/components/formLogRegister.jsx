/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

import FormRegister from "./formRegister";
import FormLog from "./formLog";

const formLogRegister = () => {
  const [form, setForm] = useState(<FormRegister />);
//   const [bgTargetButt, setBgTargetButt] = useState("rgba(120, 243, 109, 0.63)");

 
  const selectionRegister = () => {

    // co the su dung useRef thay cho cach query co dien
    let buttRegister = document.querySelector(
        ".layout-log-register .form-log-reg .form-layout .container-butt-log-reg .butt-register"
      );
    
      let buttLog = document.querySelector(
        ".layout-log-register .form-log-reg .form-layout .container-butt-log-reg .butt-log"
      );
    buttRegister.style.backgroundColor = 'rgba(120, 243, 109, 0.63)';
    buttLog.style.backgroundColor = 'rgba(0, 0, 0, 0.43)';
    setForm(<FormRegister />);
  };
  const selectionLog = () => {
    let buttRegister = document.querySelector(
        ".layout-log-register .form-log-reg .form-layout .container-butt-log-reg .butt-register"
      );
    
      let buttLog = document.querySelector(
        ".layout-log-register .form-log-reg .form-layout .container-butt-log-reg .butt-log"
      );
    buttLog.style.backgroundColor = 'rgba(120, 243, 109, 0.63)';
    buttRegister.style.backgroundColor = "rgba(0, 0, 0, 0.43)";
    setForm(<FormLog />);
  };

  return (
    <div className="layout-log-register">
      <div className="form-log-reg">
        <div className="tille-form">Bắt đầu giao dịch sau vài phút</div>
        <div className="form-layout">
          <div className="container-butt-log-reg">
            <div className="butt-register" onClick={selectionRegister}>
              Register
            </div>
            <div className="butt-log" onClick={selectionLog}>
              Login
            </div>
          </div>
          {form}
        </div>
      </div>
    </div>
  );
};

export default formLogRegister;
