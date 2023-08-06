import {
  DocumentSnapshot,
  FirestoreError,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { Log, LogDoc } from "@/models/log";
import { Logs } from "../collections";

export const setLogDoc = async (gameCode: string, data: Log) => {
  const logDoc = doc(Logs, gameCode.trim().toLowerCase());

  const updateData: Partial<LogDoc> = {};

  if (data.type === "first_code_activated") {
    updateData.first_code_activated = data;
  }

  if (data.type === "current_code_activated") {
    updateData.current_code_activated = data;
  }

  if (data.type === "code_activations") {
    updateData.code_activations = data;
  }

  if (data.type === "cookie_consent") {
    updateData.cookie_consent = data;
  }

  if (data.type === "add_players") {
    updateData.add_players = data;
  }

  if (Object.keys(updateData).length > 0) {
    await setDoc(logDoc, updateData, { merge: true });
  }
};

export const getLogDoc = async (gameCode: string): Promise<LogDoc | null> => {
  try {
    const logDoc = doc(Logs, gameCode.trim().toLowerCase());
    const logSnapshot = await getDoc(logDoc);

    return logSnapshot.exists() ? logSnapshot.data() : null;
  } catch {
    return null;
  }
};

export const getLogDocOnSnapshot = (
  gameCode: string,
  onNext: (snapshot: DocumentSnapshot<LogDoc>) => void,
  onError?: (error: FirestoreError) => void
) => {
  const logDoc = doc(Logs, gameCode.trim().toLowerCase());

  return onSnapshot(logDoc, onNext, onError);
};
