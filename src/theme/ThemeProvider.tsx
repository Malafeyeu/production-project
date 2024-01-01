import React, { FC, JSXElementConstructor, ReactElement, ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL;

type Props = { children: ReactNode }

const ThemeProvider: FC<Props> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.NORMAL : Theme.DARK);
  }

  const defaultProps = useMemo(() => ({
    theme,
    setTheme: setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;