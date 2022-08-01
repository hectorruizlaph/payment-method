import React from "react";
// import img from "../images/test.jpeg";

function Footer() {
  return (
    <>
      <div className="payment-method-footer">
      <div className="payment-method-footer__buttons-container">
        <button><span> - </span> REGRESAR </button>
        <button className="black-button"> CONFIRMAR PEDIDO <span> - </span></button>
      </div>
      </div>
      {/* <img src={img} alt="test"/> */}
    </>
  );
}

export default Footer;
