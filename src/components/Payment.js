import React from "react";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";

function Payment() {
  async function displayRazorPay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay failed to load. Are you online?");
      return;
    }

    // const data = await razorpay.payments
    //   .fetch("http://localhost:3000/studentDashboard", { method: POST })
    //   .then((t) => t.json());

    const options = {
      key: __DEV__ ? "rzp_test_OkBJXTrvUWRclM" : "PRODUCTION KEY",
      amount: "50000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://picsum.photos/200/300",
      order_id: "order_9A33XWu170gUtm",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "XYZ",
      },
    };
    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  }

  return (
    <div>
      <a onClick={displayRazorPay}>Donate $5</a>
    </div>
  );
}
export default Payment;
