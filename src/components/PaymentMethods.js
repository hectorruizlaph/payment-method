import React, { useContext } from "react";
import PaymentCard from "./PaymentCard";
import { PaymentMethodsContext } from "../context/PaymentMethodContext";

function PaymentMethods() {

  const { methodList, changeToActive } = useContext(PaymentMethodsContext)

  return (
    <div className="payment-method-section">
      {methodList.map((method, key) => {
        return (
          <PaymentCard
            key={key}
            id={method.id}
            method={method.method}
            number={method.number}
            amount={method.amount}
            expiration={method.expiration}
            active={method.active}
            handleClick={changeToActive}
          />
        );
      })}
    </div>
  );
}

export default PaymentMethods;
