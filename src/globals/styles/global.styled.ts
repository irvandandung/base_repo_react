import { createGlobalStyle } from 'styled-components'

interface IGlobalStyle{
    theme: 'DARK' | 'WHITE'
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: IGlobalStyle) => (props?.theme === "DARK" ? '#002046' : '#fffff')}; 
    color: #d9d4c5;
    background-image: url(./assets/background.jpg);
  }
  .ReactModal__Overlay{
    background-color: rgb(56 56 56 / 75%) !important;
    color: black;
  }
  .error {
    color: red;
  }
`

export { GlobalStyle }