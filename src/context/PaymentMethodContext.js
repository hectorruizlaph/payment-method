import { createContext, useState } from "react";
import { data } from "../data.tsx";

export const PaymentMethodsContext = createContext();

function PaymentMethodsProvider({ children }) {
  const [methodList, setMethodList] = useState(data);

  const changeToActive = (id) => {
    const updatedMethodList = methodList.map((method) => {
      method.active = false;
      if (method.id === id) {
        method.active = true;
      }
      return method;
    });
    setMethodList(updatedMethodList);
  };

  const activeMethod = methodList.filter((method) => method.active === true)[0];

  const value = { methodList, activeMethod, changeToActive };

  return (
    <PaymentMethodsContext.Provider value={value}>
      {children}
    </PaymentMethodsContext.Provider>
  );
}

export default PaymentMethodsProvider;
