import React, { useState } from "react";
import PaymentCard from "./PaymentCard";
import { data } from "../data";

function PaymentMethods() {
  const [methodList, setMethodList] = useState(data)

  const changeToActive = id => {
    const updatedMethodList = methodList.map(method => {
      method.active = false
      if (method.id === id) {
        method.active = true;
      }
      return method;
    });
    setMethodList(updatedMethodList);
  }

  return (
    <div className="payment-method-section">
      {methodList.map((method) => {
        return (
          <PaymentCard
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
