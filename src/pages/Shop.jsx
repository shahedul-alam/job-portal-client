import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/ShopPage/CheckoutForm";

const Shop = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_stripePK);
  return (
    <main>
      <h1>shop page</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </main>
  );
};

export default Shop;
