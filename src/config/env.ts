// config/env.ts
interface Environment {
    PAYPAL: {
      CLIENT_ID: string;
      CURRENCY: string;
      SDK_URL: string;
    };
    DEFAULTS: {
      PLAN_NAME: string;
      PLAN_PRICE: number;
      PLAN_DURATION: string;
    };
    FEATURES: string[];
  }
  
  // Import environment variables that were injected during build time
  // In Create React App, these are available as import.meta.env.REACT_APP_*
  const getEnvVar = (key: string): string => {
    // For Vite
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env[key] || '';
    }
    // For Create React App
    return (window as any).__ENV__?.[key] || '';
  };
  
  // Default environment configuration
  const env: Environment = {
    PAYPAL: {
      CLIENT_ID: getEnvVar('REACT_APP_PAYPAL_CLIENT_ID') || "YOUR_CLIENT_ID",
      CURRENCY: getEnvVar('REACT_APP_PAYPAL_CURRENCY') || "USD",
      SDK_URL: getEnvVar('REACT_APP_PAYPAL_SDK_URL') || "https://www.paypal.com/sdk/js",
    },
    DEFAULTS: {
      PLAN_NAME: getEnvVar('REACT_APP_DEFAULT_PLAN') || "Manual Application Service",
      PLAN_PRICE: Number(getEnvVar('REACT_APP_DEFAULT_PRICE')) || 299,
      PLAN_DURATION: getEnvVar('REACT_APP_DEFAULT_DURATION') || "month",
    },
    FEATURES: [
      "Dedicated career expert",
      "Personalized resume optimization",
      "Custom cover letters",
      "Job portal applications",
      "Direct human support",
    ],
  };
  
  export default env;