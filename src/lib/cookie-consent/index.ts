import moment from "moment";
import { UnixTimestamp } from "@/models/common";
import { LocalStorageKeys } from "@/constants/local-storage-keys";

export const getCookieConsentFromLocalStorage =
  async (): Promise<CookieConsent | null> => {
    try {
      const cookieConsent = localStorage.getItem(
        LocalStorageKeys.COOKIE_CONSENT_KEY
      );

      if (!cookieConsent) {
        return null;
      }

      const parsedCookieConsent: CookieConsent | null =
        JSON.parse(cookieConsent);

      return parsedCookieConsent;
    } catch (error) {
      return null;
    }
  };

export const saveCookieConsent = async (
  value: boolean
): Promise<CookieConsent | null> => {
  const cookieConsent: CookieConsent = {
    consent_given: value,
    timestamp: moment().unix(),
  };

  try {
    localStorage.setItem(
      LocalStorageKeys.COOKIE_CONSENT_KEY,
      JSON.stringify(cookieConsent)
    );
    return cookieConsent;
  } catch (error) {
    return null;
  }
};

type CookieConsent = {
  consent_given: boolean;
  timestamp: UnixTimestamp;
};
