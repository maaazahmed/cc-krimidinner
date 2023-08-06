import { useEffect, useState } from "react";
import { getLogDocOnSnapshot } from "@/firebase/logs";
import { LogDoc } from "@/models/log";
import { LoadingState } from "@/models/common";
import { GAME_CODE_LENGTH } from "@/constants/game-code";

export const useGetLogsSnapshot = (gameCode: string) => {
  const [logs, setLogs] = useState<LogDoc | null>(null);
  const [loading, setLoading] = useState<LoadingState>("idle");

  useEffect(() => {
    if (!gameCode || !gameCode.trim() || gameCode.length !== GAME_CODE_LENGTH)
      return;

    setLoading("loading");
    getLogDocOnSnapshot(
      gameCode,
      (snapshot) => {
        if (snapshot.exists()) {
          setLogs(snapshot.data());
        } else {
          setLogs(null);
        }
        setLoading("loaded");
      },
      () => {
        setLogs(null);
        setLoading("failed");
      }
    );
  }, [gameCode]);

  return { logs, loading };
};
