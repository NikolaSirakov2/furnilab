import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { translations, type Language, type TranslationContent } from "./translations";

interface LanguageContextValue {
  readonly language: Language;
  readonly dictionary: TranslationContent;
  readonly setLanguage: (language: Language) => void;
  readonly toggleLanguage: () => void;
}

const LANGUAGE_STORAGE_KEY = "furnilab.language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;

  if (storedLanguage === "bg" || storedLanguage === "en") {
    return storedLanguage;
  }

  const browserLanguage = window.navigator.language.slice(0, 2).toLowerCase();

  if (browserLanguage === "bg") {
    return "bg";
  }

  return "en";
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  readonly children: ReactNode;
}

function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "bg" : "en"));
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      dictionary: translations[language],
      setLanguage,
      toggleLanguage,
    };
  }, [language, toggleLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

export { LanguageContext, LanguageProvider, useLanguage };

