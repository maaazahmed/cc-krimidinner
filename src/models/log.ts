import { UnixTimestamp } from "./common";

export interface FirstCodeActivated {
  type: "first_code_activated";
  timestamp: UnixTimestamp;
}

export interface CurrentCodeActivated {
  type: "current_code_activated";
  timestamp: UnixTimestamp;
}

export interface CodeActivations {
  type: "code_activations";
  count: number;
}

export interface CookieConsent {
  type: "cookie_consent";
  consent_given: boolean;
  timestamp: UnixTimestamp;
}

export interface addPlayers {
  type: "add_players";
  timestamp: UnixTimestamp;
}

export type Log =
  | FirstCodeActivated
  | CurrentCodeActivated
  | CodeActivations
  | CookieConsent
  | addPlayers;

export interface LogDoc {
  first_code_activated?: FirstCodeActivated;
  current_code_activated?: CurrentCodeActivated;
  code_activations?: CodeActivations;
  cookie_consent?: CookieConsent;
  add_players?: addPlayers;
}
