

import logoImg from '../../assets/logo.svg';
import { Container , Content } from './style';

interface HeaderPopos{
    onOpenNewTransactionModal: ()=>void;
}
export function Header( {onOpenNewTransactionModal} : HeaderPopos ){
    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Vp money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    );
}