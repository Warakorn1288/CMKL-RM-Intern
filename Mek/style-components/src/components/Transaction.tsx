import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components';

const Card = styled.div`
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
`;

const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

type PropsType = {
    transaction: {
        id: number,
        transactionName: string,
        amount: string
    },
    onDelete: Function
}

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
