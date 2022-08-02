import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="payment-method-footer">
        <div className="payment-method-footer__buttons-container">
          <button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BsChevronCompactLeft
                style={{
                  strokeWidth: "1.5",
                  height: "1.5em",
                  width: "1.2em",
                }}
              />
              <span
                style={{
                  paddingLeft: "3em",
                }}
              >
                REGRESAR
              </span>
            </div>
          </button>
          <button className="black-button">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              CONFIRMAR PEDIDO
              <BsChevronCompactRight
                style={{
                  strokeWidth: "1.5",
                  height: "1.5em",
                  width: "1.2em",
                  paddingLeft: "1.3em",
                }}
              />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
