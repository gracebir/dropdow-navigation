import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root{
        /* netral colors  */
        --almost-white: hsl(0, 0%, 98%);
        --medium-gray: hsl(0, 0%, 41%);
        --almost-black: hsl(0, 0%, 8%);
    }

    body{
        font-family: 'Epilogue', sans-serif;
        background-color: var(--almost-white);
        height: 100vh;
    }
    
    p{
        font-size: 1.2em;
    }
`