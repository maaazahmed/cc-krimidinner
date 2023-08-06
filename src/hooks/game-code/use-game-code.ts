import { useEffect, useState } from "react";
import { getGameCodeFromLocalStorage } from "@/lib/game-code";

export const useGameCode = () => {
  const [gameCode, setGameCode] = useState<string | null>(null);

  useEffect(() => {
    const _gameCode = getGameCodeFromLocalStorage();
    setGameCode(_gameCode);
  }, []);

  return {
    gameCode,
  };
};
