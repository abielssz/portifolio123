import Header from "./assets/components/Header/Header"
import Main from "./assets/components/Main/Main";

import { createGlobalStyle } from 'styled-components';



function App() {
  const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
  return (
    <>
     <Header/>
     <GlobalStyle/>
     <Main/>
     {/* <Footer/> */}
    </>
  )
}

export default App
