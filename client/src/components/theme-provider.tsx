import * as React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  React.useEffect(() => {
    // Always set dark mode for this portfolio
    document.documentElement.classList.add("dark");
  }, []);

  return <>{children}</>;
}
