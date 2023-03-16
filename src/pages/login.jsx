/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styled from "styled-components";

import Nav from ".././components/nav";
import FormLogRegister from "../components/formLogRegister";
import AlertLog from '../components/alertLog'

import ".././assets/custom/scss/login.scss";

function login() {
// check log start

  const [messLog, setMessLog] = useState('fail')
// check log end

  return (
    <div className="layout-login">
      <Nav />

      <div className=" layout-form">
        <div className="contaiter-left">
          <p id="text-review" className="">
            Giao dịch chỉ số, hàng hóa và hơn thế nữa trên nền tảng độc quyền
            của chúng tôi. Luôn cập nhật mới nhất các tin tức và giá thị trường,
            cung cấp các công cụ quản lý rủi ro đa dạng và phong phú
          </p>
          <div className="butt-infapp">
            <span className="title-if">Thông tin thêm</span>
          </div>
        </div>
        <FormLogRegister />
      </div>

      {/* alert log */}
      <AlertLog messLog={messLog}/>
    </div>
  );
}

export default login;
