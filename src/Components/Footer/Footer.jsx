import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__div">
          <h3>Quem somos</h3>
          <h3>Suporte</h3>
          <div className="copyright">
            <h3>Copyright</h3>
            <img src="../../../public/copyright.svg" alt="" height="30rem" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
