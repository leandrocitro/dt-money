import { ThemeProvider } from  'styled-components'

import { Transactions } from "./pages/Transactions";
import { defaultTheme } from '../src/styles/themes/default';
import { GlobalStyle } from '../src/styles/themes/global';

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>

      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
    
    
  )
}

