/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

const formLog = () => {
  const [infLog, setInfLog] = useState({
    email:'',
    password:'',
})

const getPustInfLog = () => {
  console.log(infLog);
};

function getInf(e){
setInfLog({...infLog,
    [e.target.name]: e.target.value
})
}
  return (
    <>
      <form className="form-register-log">
        <label>
          <input
            type="text"
            id="email"
            className="input-f"
            placeholder="Name"
            name="email"
            onChange={getInf}
          />
        </label>
        <label>
          <input
            type="password"
            id="password"
            className="input-f"
            placeholder="Public key"
            name="password"
            onChange={getInf}
          />
        </label>
      </form>
      <button id="butt-register-log" onClick={getPustInfLog}>Log</button>
    </>
  );
};

export default formLog;
