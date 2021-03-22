import  styled  from 'styled-components';

export const Container = styled.div`
    background: var(--color-footer-background);
    justify-content:center ;
`;

export const Content = styled.div`
    max-width:1120px;
    margin:0 auto;

    padding: 1rem 1rem 12rem;

    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: center;
    
    background: var(--color-footer-background);
`;


export const LeftFooter = styled.div`
    display:flex;
    flex-direction:column;


`;

export const RightFooter = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center ;

    h1{
        color: var(--text-title);
        margin-bottom: 0.5rem;
        font-size:1.5rem;
    }

    input{
        width:100%;
        padding:1.5rem 1.5rem 1.5rem 1.5rem;
        height:2rem;
        border-radius: 0.50rem;
        border:1px solid var(--border-input-modal);

        background: var(--background-footer-input);
        
        font-weight:400;
        font-size:1rem;
        color:var(--text-body);

        &::placeholder{
            color:var(--placeholder-input-modal);
        }
    }
`;