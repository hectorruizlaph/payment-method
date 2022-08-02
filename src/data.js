import mastercard from "./images/mastercard.png";
import paypal from "./images/paypal.png";
import stripe from "./images/stripe.png";

export const data = [
  {
    method: { text: "MASTERCARD", image: mastercard },
    number: "****2890",
    amount: "15,000",
    expiration: "07 /2030",
    active: true,
    id: 1,
    address: 5
  },
  {
    method: { text: "PAYPAL", image: paypal },
    number: "****6546",
    amount: "15,000",
    expiration: "04 / 225",
    active: false,
    id: 2,
  },
  {
    method: { text: "STRIPE", image: stripe },
    number: "****6546",
    amount: "15,000",
    expiration: "04 / 225",
    active: false,
    id: 3,
  },
  {
    method: { text: "PAYPAL", image: paypal },
    number: "****7644",
    amount: "15,000",
    expiration: "04 / 225",
    active: false,
    id: 4,
  },
];