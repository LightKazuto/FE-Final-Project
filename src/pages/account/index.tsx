// pages/account.tsx
import { useEffect, useState } from 'react';
import TransactionHistory from '../../components/transactionHistory';
import { Transaction } from '../../types/index';

const AccountPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const response = await fetch('/getTransactions');
    const data = await response.json();
    setTransactions(data);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Account</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default AccountPage;