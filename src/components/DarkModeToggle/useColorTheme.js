import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";

const useColorThemeState = createPersistedState("colorTheme");

export function useColorTheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const [isDark, setIsDark] = useColorThemeState();
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (value) {
      document.body.classList.add("dark");
      favicon.href = "/favicon-dark.png";
    } else {
      document.body.classList.remove("dark");
      favicon.href = "/favicon-light.png";
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}
