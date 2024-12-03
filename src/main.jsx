import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import * as ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { globalState } from './redux/index.js'

const theme = extendTheme({
  styles: {
    global: {
      // Hide spin buttons in Chrome, Safari, Edge, and Opera
      // 'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
      //   '-webkit-appearance': 'none',
      //   margin: 0,
      // },
      // // Hide spin buttons in Firefox
      // 'input[type=number]': {
      //   '-moz-appearance': 'textfield',
      // },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={globalState}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
)
