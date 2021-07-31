import { FaTimes } from 'react-icons/fa'

const Transaction = ({ transaction, onDelete }) => {
    return (
        <div className='transaction'>
            <h3>
                {transaction.transactionName}{' '}
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(transaction.id)}
                />
            </h3>
            <p>{transaction.amount}</p>
        </div>
    )
}

export default Transaction
