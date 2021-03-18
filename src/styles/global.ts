
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
    .dark-mode:root{
        --background:#E5E5E5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;
        --text-panel-green: #fff;

        --background: #f0f2f5;
        --shape: #ffffff;

        --colorFontButton:#ffffff;
    }

    :root{
        --background:#121519;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #39b78a;

        --blue-light: #6933ff;

        --text-title: #f5f5f5;
        --text-body: #dcdcdc;
        --text-panel-green: #fff;

        --background: #121519;
        --shape: #1c212b;
    
        --colorFontButton:#ffffff;
    }

    *{
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px Desktop  
    //16 x 0,9375  =15px
    //16 x 0,875   =14px
    //REM = 1rem = font-size atual
    //porcentual da acessibilidade de acordo com o juste da pessoa
    
    html{
        @media (max-width: 1080px){
            font-size:93.75%;
        }

        @media (max-width: 720px){
            font-size:87.5%
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins',Arial;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor:pointer;
    }

    [disabled]{
        opacity:0.6;
        cursor: not-allowed;
    }

`