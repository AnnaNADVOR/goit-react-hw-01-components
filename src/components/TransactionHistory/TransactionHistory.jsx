import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import baseCss from '../../idex.module.css';

export default function TransactionHistory({ transactions }) {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency </th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(transaction => {
                    return <tr className={css.row} key={transaction.id}>
                        <td className={baseCss.main_text}>{capitalize(transaction.type)}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

TransactionHistory.propTypes = { 
    transactions: PropTypes.arrayOf( 
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}
