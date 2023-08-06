import React, { useEffect, useState } from "react";
import { setAnalyticsCollectionEnabled } from "firebase/analytics";
import { Outlet, useLocation } from "react-router-dom";
import { analytics } from "@/firebase";
import { setLogDoc } from "@/firebase/logs";
import {
  getCookieConsentFromLocalStorage,
  saveCookieConsent,
} from "@/lib/cookie-consent";
import { useErrorStore } from "@/stores/error-store";
import { useGameCode } from "@/hooks/game-code/use-game-code";
import { CookieBanner } from "@/components/cookie-banner";
import * as fbq from "@/meta";

// Initialize Meta Pixel
fbq.init();

export const MobileFrameLayout: React.FC = () => {
  const { message, icon } = useErrorStore();
  const { gameCode } = useGameCode();
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState(false);
  const location = useLocation();

  const enableAnalytics = () => {
    // Grant consent to Meta Pixel
    fbq.grant();
    // Enable Google Analytics
    setAnalyticsCollectionEnabled(analytics, true);
  };

  const disableAnalytics = () => {
    // Revoke consent to Meta Pixel
    fbq.revoke();
    // Disable Google Analytics
    setAnalyticsCollectionEnabled(analytics, false);
  };

  // Check if cookie consent is given
  useEffect(() => {
    (async () => {
      const cookieConsent = await getCookieConsentFromLocalStorage();

      if (!cookieConsent) {
        setIsCookieBannerOpen(true);
        disableAnalytics();
        return;
      }

      // Close cookie banner if cookie consent is given
      if (cookieConsent.consent_given) {
        setIsCookieBannerOpen(false);
        enableAnalytics();
      } else {
        disableAnalytics();
      }
    })();
  }, [location]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className={`relative shadow-xl rounded-none sm:rounded-[4px] overflow-auto w-full sm:w-[440px] h-screen sm:h-[95vh] bg-[url("/images/bg-cover.png")]`}
      >
        <Outlet />

        <div className="absolute bottom-4 w-full px-2">
          <CookieBanner
            open={isCookieBannerOpen}
            onClose={() => setIsCookieBannerOpen(false)}
            onAcceptCookieConsent={async () => {
              const cookieConsent = await saveCookieConsent(true);
              enableAnalytics();

              if (!cookieConsent || !gameCode) return;

              setLogDoc(gameCode, {
                type: "cookie_consent",
                consent_given: cookieConsent.consent_given,
                timestamp: cookieConsent.timestamp,
              });
            }}
            onDeclineCookieConsent={() => {
              saveCookieConsent(false);
              disableAnalytics();
            }}
          />
        </div>

        {message && (
          <div className="absolute bottom-0 w-full bg-surface px-2 py-4 z-50">
            <div className="flex items-center gap-x-2">
              {icon}
              <p className="text-left text-sm text-onSurface-disabled">
                {message}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
