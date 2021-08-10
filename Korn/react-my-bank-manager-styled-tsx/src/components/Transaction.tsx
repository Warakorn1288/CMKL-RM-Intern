import { FaTimes as DeleteButton } from 'react-icons/fa'
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

const Transaction = ({ transaction, onDelete }: PropsType) => {
    return (
        <Card>
            <Title>
                {transaction.transactionName}{' '}
                <DeleteButton 
                    style={{ color: 'red', cursor: 'pointer' }} 
                    onClick={() => onDelete(transaction.id)}
                />
            </Title>
            <p>{transaction.amount}</p>
        </Card>
    )
}

export default Transaction
