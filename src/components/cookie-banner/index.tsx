import React from "react";
import { MdOutlineCookie } from "react-icons/md";
import { Button } from "../button";

interface Props {
  open?: boolean;
  onClose?: () => void;
  onAcceptCookieConsent?: () => void;
  onDeclineCookieConsent?: () => void;
}

export const CookieBanner: React.FC<Props> = ({
  open = false,
  onClose = () => {},
  onAcceptCookieConsent = () => {},
  onDeclineCookieConsent = () => {},
}) => {
  if (!open) return null;

  return (
    <div className="bg-surface px-3 pt-6 shadow-xl">
      <div className="flex items-start gap-x-4">
        {/* Icon */}
        <MdOutlineCookie className="fill-primary w-9 h-9 -mt-1 flex-shrink-0" />
        {/* Content */}
        <div className="flex-grow">
          <h1 className="text-primary font-medium text-xl leading-6">
            Keks gefällig?
          </h1>
          <p className="text-sm leading-5 text-onSurface-mediumEmphasis mt-2">
            Um dir bei dem Besuch unserer Website das beste Erlebnis ermöglichen
            zu können, verwenden wir Cookies.
          </p>
          <p className="text-sm leading-5 text-onSurface-mediumEmphasis">
            Also, akzeptierst du unseren kleinen Snack?
          </p>

          <div className="text-right">
            <div className="mt-4 inline-flex gap-x-2">
              <Button
                className="uppercase"
                variant="text"
                onClick={() => {
                  onAcceptCookieConsent();
                  onClose();
                }}
              >
                Akzeptieren
              </Button>
              <Button
                className="uppercase text-onSurface-disabled"
                variant="text"
                onClick={() => {
                  onDeclineCookieConsent();
                  onClose();
                }}
              >
                Nein,Danke
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
