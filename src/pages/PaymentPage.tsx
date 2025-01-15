import React, { useEffect } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import env from "../config/env";

interface LocationState {
  plan: string;
  price: number;
  duration: string;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, price, duration } = (location.state as LocationState) || {
    plan: env.DEFAULTS.PLAN_NAME,
    price: env.DEFAULTS.PLAN_PRICE,
    duration: env.DEFAULTS.PLAN_DURATION,
  };

  useEffect(() => {
    const loadPayPalScript = () => {
      const script = document.createElement("script");
      const { CLIENT_ID, CURRENCY, SDK_URL } = env.PAYPAL;
      script.src = `${SDK_URL}?client-id=${CLIENT_ID}&currency=${CURRENCY}`;
      script.async = true;

      script.onload = () => {
        if (window.paypal) {
          initializePayPalButtons();
        }
      };

      document.body.appendChild(script);
      return script;
    };

    const initializePayPalButtons = () => {
      window.paypal
        .Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: plan,
                  amount: {
                    currency_code: env.PAYPAL.CURRENCY,
                    value: price.toString(),
                  },
                },
              ],
            });
          },
          onApprove: async (data: any, actions: any) => {
            try {
              const order = await actions.order.capture();
              handlePaymentSuccess(order);
            } catch (err) {
              handlePaymentError(err);
            }
          },
          onError: handlePaymentError,
        })
        .render("#paypal-button-container");
    };

    const script = loadPayPalScript();
    return () => {
      document.body.removeChild(script);
    };
  }, [plan, price]);

  const handlePaymentSuccess = (order: any) => {
    console.log("Payment successful:", order);
    alert("Payment successful! Order ID: " + order.id);
    navigate("/payment-success", {
      state: {
        orderId: order.id,
        plan,
        price,
      },
    });
  };

  const handlePaymentError = (err: any) => {
    console.error("Payment error:", err);
    alert("There was an error processing your payment. Please try again.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 bg-blue-600 text-white">
            <h1 className="text-3xl font-bold">Complete Your Subscription</h1>
            <p className="mt-2 text-blue-100">Get started with {plan}</p>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{plan}</h2>
                <div className="text-2xl font-bold">
                  ${price}/{duration}
                </div>
              </div>
              <div className="space-y-2">
                {env.FEATURES.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center text-gray-600"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="paypal-button-container"></div>

            <p className="mt-6 text-center text-sm text-gray-500">
              By subscribing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}