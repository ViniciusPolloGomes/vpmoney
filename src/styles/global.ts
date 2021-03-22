
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
        --shape-two:#e6e6e6;

        --border-button-modal-hover:#222;
        --placeholder-input-modal:#444 ;
        --text-button-modal:#e6e6e6;
        --background-button:#dbdddf ;
        --border-button-modal: #f0f2f5 ;
        --border-input-modal: #d7d7d7;
        --background-input-modal:#f0f2f5;
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
        --shape-two:#1c212b;
        
        --border-button-modal-hover:#888;
        --placeholder-input-modal:#444 ;
        --text-button-modal:#1c212b;
        --background-button:#262d3a;
        --border-button-modal: #333444 ; 
        --border-input-modal: #333444;
        --background-input-modal:#121519;
        --colorFontButton:#ffffff;
        --color-footer-background: #1c212b;
        --background-footer-input:#121519;
    }

    *{
        margin: 0 ;
        padding: 0;
        box-sizing: border-box;
        outline:unset;
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

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position:fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display:flex;
        align-items:center;
        justify-content:center;
    }
    .react-modal-content{
        width: 100%;
        max-width:576px;
        background:var(--shape-two);
        padding:3rem;
        position:relative;
        border-radius:0.24rem;
    }

    .react-modal-close{
        position:absolute;
        right:1rem;
        padding:0.3rem 0.3rem 0rem 0.3rem;
        top:1rem;
        border:0;
        background: transparent;
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(1.3);
        }
    }

`