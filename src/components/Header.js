import React from "react";
import { GoPlus, GoDash } from "react-icons/go";

function Header() {
  return (
    <div className="payment-method-heder">
      <div className="payment-method-heder__container">
        <div className="payment-method-heder__title-container">
          <h1>Metodo de Pago</h1>
          <p>Selecciona una opción de pago</p>
        </div>
        <div className="payment-method-heder__buttons-container">
          <button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GoPlus
                style={{
                  strokeWidth: "0.7",
                  height: "1.3em",
                  width: "1.3em",
                  paddingRight: "1.5em",
                }}
              />
              METODO DE PAGO
            </div>
          </button>
          <button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GoDash
                style={{
                  strokeWidth: "0.7",
                  height: "1.3em",
                  paddingRight: "1.5em",
                  width: "1.3em",
                }}
              />
              METODO DE PAGO
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
