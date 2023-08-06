import { useEffect, useState } from "react";
import { getLogDoc } from "@/firebase/logs";
import { LogDoc } from "@/models/log";
import { LoadingState } from "@/models/common";
import { GAME_CODE_LENGTH } from "@/constants/game-code";

export const useGetLogs = (gameCode: string) => {
  const [logs, setLogs] = useState<LogDoc | null>(null);
  const [loading, setLoading] = useState<LoadingState>("idle");

  useEffect(() => {
    if (!gameCode || !gameCode.trim() || gameCode.length !== GAME_CODE_LENGTH)
      return;

    setLoading("loading");

    getLogDoc(gameCode)
      .then((logDoc) => {
        setLogs(logDoc);
        setLoading("loaded");
      })
      .catch(() => {
        setLogs(null);
        setLoading("failed");
      });
  }, [gameCode]);

  return { logs, loading };
};
