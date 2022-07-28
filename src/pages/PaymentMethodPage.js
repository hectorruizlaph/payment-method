import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PaymentInfo from "../components/PaymentInfo";
import PaymentMethods from "../components/PaymentMethods";
import "./_payment-method-page.scss";

function PaymentMethodPage() {
  return (
    <div className="payment-method">
      <Header />
      <PaymentMethods />
      <PaymentInfo />
      <Footer />
    </div>
  );
}

export default PaymentMethodPage;
