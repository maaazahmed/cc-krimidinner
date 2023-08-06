import { DocumentSnapshot, doc, getDoc, updateDoc } from "firebase/firestore";
import { Game, GameWithId } from "@/models/game";
import { Games } from "../collections";

export const getGameWithCode = async (
  gameCode: string
): Promise<GameWithId | null> => {
  try {
    const docRef = doc(Games, gameCode.toLocaleLowerCase().trim());
    const gameSnapshot = await getDoc(docRef);

    return gameDocumentMapper(gameSnapshot);
  } catch {
    return null;
  }
};

export const updateGameWithCode = async (
  gameCode: string,
  game: Partial<Game>
): Promise<void> => {
  // To prevent batch_id from being updated
  delete game.batch_id;
  const docRef = doc(Games, gameCode.toLocaleLowerCase().trim());
  await updateDoc(docRef, game);
};

const gameDocumentMapper = (
  gameSnapshot: DocumentSnapshot<Game>
): GameWithId | null => {
  if (!gameSnapshot.exists()) return null;

  return {
    id: gameSnapshot.id,
    unique_game_code: gameSnapshot.id,
    ...gameSnapshot.data(),
  };
};
export const addPlayersWithGameCode = async (
  gameCode: string,
  players: any[]
): Promise<void> => {
  try {
    const game: Partial<Game> = { players };
    await updateGameWithCode(gameCode, game);
  } catch {
    // Handle error
  }
};
