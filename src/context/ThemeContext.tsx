import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";

export const PortfolioThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
