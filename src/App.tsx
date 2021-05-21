
import { DashBoard } from "./components/DashBoard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from 'miragejs';
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root');

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 900,
          createdAt: new Date('2021-02-14 09:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

export function App() {
  const [isNewTransactionMoralOpen, setIsNewTransactionMoralOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionMoralOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionMoralOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <DashBoard />
      <NewTransactionModal
        isOpen={isNewTransactionMoralOpen} onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionProvider>
  );
}



