import React from "react";
import { create } from "zustand";

interface ErrorStore {
  message: string;
  icon: React.ReactNode;

  actions: {
    setError: (data: {
      message: string;
      icon: React.ReactNode;
      duration?: number;
    }) => void;
    clearError: () => void;
  };
}

export const useErrorStore = create<ErrorStore>((set, get) => ({
  message: "",
  icon: null,
  actions: {
    setError: ({ message, icon, duration }) => {
      set({ message, icon });

      setTimeout(() => {
        get().actions.clearError();
      }, duration ?? 5000);
    },
    clearError: () => set({ message: "", icon: null }),
  },
}));
