
import  styled  from 'styled-components';
import {transparentize}  from 'polished';
export const Container=styled.div`

`;

export const Form = styled.form`
    h2{
        color:var(--text-title);
        font-size:1.5rem;
        margin-bottom:2rem;
    }

    input{
        width:100%;
        padding:0 1.5rem;
        height:4rem;
        border-radius: 0.25rem;

        border:1px solid var(--border-input-modal);
        background: var(--background-input-modal);

        font-weight:400;
        font-size:1rem;
        color:var(--text-body);

        &::placeholder{
            color:var(--placeholder-input-modal);
        }
        &+ input{
            margin-top:1rem;
        }
    }

    button[type="submit"]{
        width:100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color:var(--text-button-modal);
        border-radius: 0.25rem;
        border:0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(1.2);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    background: var(--shape-two);
`;

interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' |'red';
}
const colors= {
    green: '#33cc95',
    red:'#e52e4d'
};

export const RadioBox= styled.button<RadioBoxProps>`
    
        height: 4rem;
        border:1px solid var(--border-button-modal);
        border-radius: 0.25rem;
        
        background: ${(props)=>props.isActive 
            ?transparentize(0.9,colors[props.activeColor])
            : 'var(--shape-two)'
        };

        display:flex;
        align-items: center;
        justify-content:center;
        transition: filter 0.2s;
        
        &:hover{
            filter:brightness(1.2);
            border-color:var(--border-button-modal-hover);
        }

        img{
            width:20px;
            height:20px;
        }

        span{
            display: inline-block;
            margin-left:1rem;
            font-size:1rem;
            color: var(--text-title);
        }
`;