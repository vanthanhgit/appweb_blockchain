import React from "react";
import styled from "styled-components";

import Nav from ".././components/nav";
import FormLogRegister from "../components/formLogRegister";
import ".././assets/custom/scss/login.scss";

function login() {
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
    </div>
  );
}

export default login;
