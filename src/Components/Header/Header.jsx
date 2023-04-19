import React from "react";
import "./index.scss";
const Header = () => {
  return (
    <div className="header">
      <img src="../../../public/logoHeader.svg" alt="logo" />
      <div className="header__icon">
        <img className="perfil" src="../../../public/profile.svg" alt="perfil-icon" height="50rem" />
        <img className="car" src="../../../public/littlecar.svg" alt="carrinho-icon" height="50rem" />
      </div>
    </div>
  );
};

export default Header;
