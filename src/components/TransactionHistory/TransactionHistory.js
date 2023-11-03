import Transaction from "./Transaction"
export default function TransactionHistory({ transactions }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency </th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => {
                    return <Transaction
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency} />
                })}
            </tbody>
        </table>
    )
}