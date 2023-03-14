/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import ".././assets/custom/scss/formLogReg.scss";

const formRegister = () => {
    const [infRegister, setInfRegister] = useState({
        name:'',
        email:'',
        quocgia:'',
        password:'',
        reenterpassword:''

    })

  const getPustInfRegister = () => {
      console.log(infRegister);
  };

  function getInf(e){
    setInfRegister({...infRegister,
        [e.target.name]: e.target.value
    })
  }
  return (
    <>
    <form className="form-register-log">
      <label>
        <input
          type="text"
          id="ho-va-ten"
          className="input-f"
          placeholder="Họ và tên"
          name="name"
          onChange={getInf}
        />
      </label>
      <label>
        <input type="text" id="email" className="input-f" placeholder="Email" name="email" onChange={getInf}/>
      </label>
      <label>
        <input
          type="text"
          id="quoc-gia"
          className="input-f"
          placeholder="Quốc Gia"
          name="quocgia"
          onChange={getInf}
        />
      </label>
      <label>
        <input
          type="password"
          id="password"
          className="input-f"
          placeholder="Password"
          name="password"
          onChange={getInf}
        />
      </label>
      <label>
        <input
          type="password"
          id="reenter-password"
          className="input-f"
          placeholder="Reenter Password"
          name="reenterpassword"
          onChange={getInf}
        />
      </label>

    </form>
      <button id="butt-register-log" onClick={getPustInfRegister}>
        Register
      </button>
    </>
  );
};

export default formRegister;
