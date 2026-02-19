"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type Mode = "blockchain" | "ai" | "neutral";

interface ModeContextType {
  mode: Mode;
  setMode: (m: Mode) => void;
}

const ModeContext = createContext<ModeContextType | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("neutral");

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
  }, []);

  // Sync data-mode attribute on <body> for CSS transitions
  useEffect(() => {
    document.body.setAttribute("data-mode", mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export const useMode = () => {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
};
