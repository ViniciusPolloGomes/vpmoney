
import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;
export const Content = styled.div`
    max-width:1120px;
    margin:0 auto;

    //borda interna 16px nas laterais , e 160px em baixo
    padding: 2rem 1rem 12rem;

    display: flex;
    align-items:center;
    justify-content: space-between;
    
    div{
        display:flex;
        justify-content:center;
        flex-direction:row
    }
    div > strong{
        margin:0 1rem;
        font-size: 1.6rem;
        color: var(--text-title);
        
        display:flex;
        justify-content:center;
        align-items:center;
        
    }
    
    button{
        font-size: 1rem;
        color:var(--colorFontButton);
        background: var(--blue-light);
        border:0;
        padding:0 2rem;
        border-radius:0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover{
            filter:brightness(1.2);
        }
        
    }
`;