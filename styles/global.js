import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #1a99bd;
        --secondary-color: #ff6839;

        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        margin: 0;
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        // font-family: 'Roboto', sans-serif;
    }

    *,
    *:after,
    *:before{
        box-sizing: border-box;
    }

    img{
        max-width: 100%;
    }

    input:focus,
    input:active,
    textarea:focus,
    textarea:active{
        outline: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        margin: 0 0 10px 0;
    }

    p{
        margin: 0 0 15px 0;
    }

    span{
        display: inline-block;
    }

`

export default GlobalStyle;