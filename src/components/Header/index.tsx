

import logomarc from '../../assets/logomarc.svg';
import { Container , Content } from './style';

interface HeaderPopos{
    onOpenNewTransactionModal: ()=>void;
}
export function Header( {onOpenNewTransactionModal} : HeaderPopos ){
    
    return(
        <Container>
            <Content>
                <div>
                    <img src={logomarc} alt="Vp money"></img>
                    <strong>Vp Money</strong>
                </div>
                    <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
                
            </Content>
        </Container>
    );
}