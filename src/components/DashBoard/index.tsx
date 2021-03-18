import { Container } from './style';
import { Summary } from '../Summary/index';
import { TransactionsTable } from '../TransactionTable';

export function DashBoard(){
    return(
        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>
    );
}