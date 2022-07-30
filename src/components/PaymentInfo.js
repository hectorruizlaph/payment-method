import React from "react";

function PaymentInfo() {
  return (
    <div className="payment-method-info">
      <div className="payment-method-info__v-ruler"></div>
      <div className="payment-method-info__container">
        <div className="payment-method-info__container-title">
          <h2>INFORMACIÓN DE PAGO</h2>
          <p>Resumen transacción</p>
        </div>
        <div className="payment-method-info__data-container">
          <div className="payment-method-info__data-item">
            <div className="payment-method-info__data-item-left">
              <p>Metodo de pago</p>
            </div>
            <div className="payment-method-info__data-item-right">
              <h2>Master Card</h2>
            </div>
          </div>
          <div className="payment-method-info__data-item">
            <div className="payment-method-info__data-item-left">
              <p>Tarjeta</p>
            </div>
            <div className="payment-method-info__data-item-right">
              <h2>****2090</h2>
            </div>
          </div>
          <div className="payment-method-info__data-item">
            <div className="payment-method-info__data-item-left">
              <p>Dirección</p>
            </div>
            <div className="payment-method-info__data-item-right">
              <h2>Banca Del Mundo # 35</h2>
            </div>
          </div>
          <div className="payment-method-info__data-item">
            <div className="payment-method-info__data-item-left">
              <p>Pagos mensuales de</p>
            </div>
            <div className="payment-method-info__data-item-right">
              <h2>$ 15,000 MXN</h2>
            </div>
          </div>

          <div className="payment-method-info__data-last-item">
            <div className="payment-method-info__data-last-item-title">
              <h2>DESGLOSE DE COBRO</h2>
            </div>
            <div className="payment-method-info__data-last-item-section">
              <div className="payment-method-info__data-last-item-section-item">
                <div className="payment-method-info__data-last-item-section-item-left">
                  <p>Importe de cobro</p>
                </div>
                <div className="payment-method-info__data-last-item-section-item-right">
                  <p>$ 15, 000 MXN</p>
                </div>
              </div>
              <div className="payment-method-info__data-last-item-section-item">
                <div className="payment-method-info__data-last-item-section-item-left">
                  <p>Periodo de cobro</p>
                </div>
                <div className="payment-method-info__data-last-item-section-item-right">
                  <p>3 Meses</p>
                </div>
              </div>
              <div className="payment-method-info__data-last-item-section-item">
                <div className="payment-method-info__data-last-item-section-item-left">
                  <p>Subtotal</p>
                </div>
                <div className="payment-method-info__data-last-item-section-item-right">
                  <p>$ 45,000 MXN</p>
                </div>
              </div>
              <div className="payment-method-info__data-last-item-section-item">
                <div className="payment-method-info__data-last-item-section-item-left">
                  <p>I.V.A (16% DE impuesto)</p>
                </div>
                <div className="payment-method-info__data-last-item-section-item-right">
                  <p>I.V.A (16% DE impuesto)</p>
                </div>
              </div>
              <div className="payment-method-info__data-last-item-section-item">
                <div className="payment-method-info__data-last-item-section-item-left">
                  <p>Importe Total</p>
                </div>
                <div className="payment-method-info__data-last-item-section-item-right">
                  <p id="total-price">$ 52,200 MXN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
