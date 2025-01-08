import React, { useEffect } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

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
    plan: "Manual Application Service",
    price: 299,
    duration: "month",
  };

  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=AX0UVaQtkKujO_EtB47BpSb5yU9K11452ekdKnSg45BkKyysRKdBeLg-BftaE3YUz35yuUCw8h9WbTWz&currency=USD`;
    script.async = true;

    script.onload = () => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: plan,
                    amount: {
                      currency_code: "USD",
                      value: price.toString(),
                    },
                  },
                ],
              });
            },
            onApprove: async (data: any, actions: any) => {
              try {
                const order = await actions.order.capture();
                console.log("Payment successful:", order);

                // Here you would typically:
                // 1. Send the order details to your backend
                // 2. Create the subscription in your database
                // 3. Navigate to a success page

                alert("Payment successful! Order ID: " + order.id);
                navigate("/payment-success", {
                  state: {
                    orderId: order.id,
                    plan,
                    price,
                  },
                });
              } catch (err) {
                console.error("Payment failed:", err);
                alert("Payment failed. Please try again.");
              }
            },
            onError: (err: any) => {
              console.error("PayPal error:", err);
              alert(
                "There was an error processing your payment. Please try again."
              );
            },
          })
          .render("#paypal-button-container");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [plan, price, navigate]);

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
                {[
                  "Dedicated career expert",
                  "Personalized resume optimization",
                  "Custom cover letters",
                  "Job portal applications",
                  "Direct human support",
                ].map((feature) => (
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

            {/* PayPal Button Container */}
            <div id="paypal-button-container"></div>

            <p className="mt-6 text-center text-sm text-gray-500">
              By subscribing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
