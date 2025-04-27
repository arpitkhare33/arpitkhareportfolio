// /components/theme-provider.tsx

"use client";

import React, { useEffect, useState } from "react";

type ThemeProviderProps = {
  attribute: string;
  defaultTheme: string;
  enableSystem: boolean;
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  attribute,
  defaultTheme,
  enableSystem,
  children,
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // If system preferences are enabled, check for the user's theme preference
    if (enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
    }

    // Check localStorage for stored theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [enableSystem]);

  // Update the document's body class with the selected theme
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    // Save the selected theme to localStorage for future sessions
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <div className={attribute}>{children}</div>;
};

export { ThemeProvider };
