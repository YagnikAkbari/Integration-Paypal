"use client";

import {
  PayPalButtons,
  PayPalCardFieldsForm,
  PayPalCardFieldsProvider,
  PayPalScriptProvider,
  usePayPalCardFields,
} from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture",
  components: "card-fields,buttons",
};
const SubmitPayment = () => {
  const { cardFields, fields } = usePayPalCardFields();

  function submitHandler() {
    if (typeof cardFields.submit !== "function") return; // validate that `submit()` exists before using it

    cardFields
      .submit()
      .then(() => {
        // submit successful
      })
      .catch(() => {
        // submission error
      });
  }
  return <button onClick={submitHandler}>Pay</button>;
};

export default function Home() {
  function createOrder() {
    // merchant code
  }
  function onApprove() {
    // merchant code
  }
  function onError() {
    // merchant code
  }
  return (
    <>
      <div className="container-paypal">
        {/* <button>Pay Via Paypal</button> */}
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons style={{ layout: "horizontal" }} />
          <PayPalCardFieldsProvider
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          >
            <PayPalCardFieldsForm />
            <SubmitPayment />
          </PayPalCardFieldsProvider>
        </PayPalScriptProvider>
      </div>
    </>
  );
}
