import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
box-sizing: border-box;
font-family: sans-serif;
}
h1,h2,h3 {
    font-family: serif;
}
h1 {
     background: lightgreen;
    }
h2 {
    background: lightblue;
}
`
