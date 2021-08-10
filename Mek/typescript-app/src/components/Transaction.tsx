import { FaTimes } from 'react-icons/fa'

type PropsType = {
    transaction: {
        id: number,
        transactionName: string,
        amount: string
    },
    onDelete: Function
}

const Transaction = ({ transaction, onDelete }: PropsType) => {
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
