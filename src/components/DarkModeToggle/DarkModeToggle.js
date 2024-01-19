import React from "react";
import { useColorTheme } from "./useColorTheme";

import "./DarkModeToggle.scss";

export const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorTheme();
  return (
    <input
      className="DarkModeToggle"
      type="checkbox"
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      aria-label="Dark mode toggle"
    />
  );
};
