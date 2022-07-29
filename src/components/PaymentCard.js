import React from "react";

function PaymentCard({ id, method, number, amount, expiration, active, handleClick}) {
  return (
      <div onClick={() => handleClick(id)} className={active ? "payment-method-card" : "payment-method-card-disable" }>
        <div className="payment-method-card__upper-section">
          <div className={active ? "payment-method-card__upper-section-image-container" : "payment-method-card-disable__upper-section-image-container"}>
            <img src={method.image} alt="payment logo" />
          </div>
          <div className={active ? "payment-method-card__upper-section-info-container" : "payment-method-card-disable__upper-section-info-container"}>
            <h2>{method.text}</h2>
            <h1>{number}</h1>
            <h3>Vence el {expiration}</h3>
          </div>
        </div>
        <div className="payment-method-card__bottom-section">
          <div className={active ? "payment-method-card__bottom-section-payment" : "payment-method-card-disable__bottom-section-payment"}>
            <p>Pago de contado por:</p>
            <h2>${amount} MXN</h2>
          </div>
        </div>
      </div>
  );
}

export default PaymentCard;
