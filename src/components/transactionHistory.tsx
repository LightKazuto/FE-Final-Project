// components/TransactionHistory.tsx
import { Transaction } from '../types/index';

interface TransactionHistoryProps {
  items: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ items }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Transaction History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Product</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.image_url}</td>
              <td className="border p-2">{item.name} - {item.description}</td>
              <td className="border p-2">Rp {item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;