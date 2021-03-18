
import {Container} from './style';

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categorias</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Curso Ignite</td>
                        <td className="deposit">R$12.000</td>
                        <td>Tecnologia</td>
                        <td>29/03/2021</td>
                    </tr>
                    <tr>
                        <td>Curso Ignite</td>
                        <td className="withdraw">-R$12.000</td>
                        <td>Tecnologia</td>
                        <td>29/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}