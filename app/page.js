import { loadScript } from "@paypal/paypal-js";
loadScript({
  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  currency: "EUR",
})
  .then((paypal) => {
    console.info("paypal", paypal);
    paypal
      .Buttons()
      .render("#your-container-element")
      .catch((error) => {
        console.error("failed to render the PayPal Buttons", error);
      });
  })
  .catch((err) => {
    console.error("failed to load the PayPal JS SDK script", err);
  });

export default function Home() {
  return (
    <div className="container-paypal">
      <button>Pay Via Paypal</button>
    </div>
  );
}
