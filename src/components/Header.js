import React from 'react'

function Header() {
  return (
    <div className="payment-method-heder">
      <div className="payment-method-heder__title-container">
        <h1>Metodo de Pago</h1>
        <p>Selecciona una opción de pago</p>
      </div>
      <div className="payment-method-heder__buttons-container">
        <button>+ METODO DE PAGO</button>
        <button>- METODO DE PAGO</button>
      </div>
    </div>
  )
}

export default Header