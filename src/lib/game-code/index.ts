import { getGameWithCode } from "@/firebase/games";
import { LocalStorageKeys } from "@/constants/local-storage-keys";

export const isGameCodeValid = async (gameCode: string): Promise<boolean> => {
  try {
    const game = await getGameWithCode(gameCode);
    if (!game) return false;
    return true;
  } catch (err) {
    return false;
  }
};

export const saveGameCodeToLocalStorage = (gameCode: string): boolean => {
  try {
    localStorage.setItem(
      LocalStorageKeys.UNIQUE_GAME_CODE_KEY,
      gameCode.toLocaleLowerCase().trim()
    );
    return true;
  } catch (error) {
    return false;
  }
};

export const getGameCodeFromLocalStorage = (): string | null => {
  try {
    const gameCode = localStorage.getItem(
      LocalStorageKeys.UNIQUE_GAME_CODE_KEY
    );
    return gameCode;
  } catch {
    return null;
  }
};
