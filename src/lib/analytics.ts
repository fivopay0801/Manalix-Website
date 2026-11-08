declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = import.meta.env.VITE_GA_ID || "G-MANALIX001";

/**
 * Track custom Google Analytics 4 event
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else {
    // Log in development or fallback
    if (import.meta.env.DEV) {
      console.log(`[GA4 Event] ${eventName}:`, params);
    }
  }
};

/**
 * Track demo booking or lead generation conversion
 */
export const trackLeadGeneration = (params: {
  lead_type?: string;
  source_page?: string;
  society_type?: string;
  city?: string;
}) => {
  trackEvent("generate_lead", {
    event_category: "Leads",
    event_label: params.lead_type || "demo_booking",
    page_location: typeof window !== "undefined" ? window.location.href : "",
    ...params,
  });
};

