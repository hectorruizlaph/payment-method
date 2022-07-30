import "./App.scss";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import PaymentMethodsProvider from "./context/PaymentMethodContext";

function App() {
  return (
    <PaymentMethodsProvider>
      <div className="App">
        <PaymentMethodPage />
      </div>
    </PaymentMethodsProvider>
  );
}

export default App;
