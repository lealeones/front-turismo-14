import React, { createContext, useContext, useState } from 'react'

interface ILayoutContext {
  open: boolean
  navigator: boolean
  toggleDrawer: () => void
}

// Inicializa el contexto con valores predeterminados
const defaultValue: ILayoutContext = {
  open: false,
  navigator: false,
  toggleDrawer: () => { },
}

export const LayoutContext = createContext<ILayoutContext>(defaultValue)

interface ILayoutContextProvider { }
export const LayoutContextProvider: React.FunctionComponent<ILayoutContextProvider> =
  (props: ILayoutContextProvider) => {
    const [open, setOpen] = useState(true)

    const [navigator, setNavigator] = useState(true)

    const toggleDrawer = () => {
      setOpen(!open);
    };

    const valor: ILayoutContext = {
      open,
      navigator,
      toggleDrawer,

    }
    return <LayoutContext.Provider value={valor} {...props} />
  }

export function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (!context) {
    return defaultValue
  }
  return context
}
