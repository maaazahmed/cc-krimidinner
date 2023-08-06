import {
  CollectionReference,
  DocumentData,
  collection,
} from "firebase/firestore";
import { Game } from "@/models/game";
import { LogDoc } from "@/models/log";
import { db } from ".";

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const Games = createCollection<Game>("games");
export const Logs = createCollection<LogDoc>("logs");
