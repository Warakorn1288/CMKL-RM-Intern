import { type } from 'node:os'
import {FaTimes} from 'react-icons/fa'
import styled from 'styled-components'

const Addlist = styled.div`
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

type Todo ={
    list: {
        id: number
        transactionName: string
        amount: string
    }
    deleteList: Function
}

const AccountList = ({list, deleteList}: Todo) => {
    return (
        <Addlist className = 'task'>
            <h3>
            {list.transactionName} <FaTimes 
            style ={{cursor: 'pointer'}} onClick ={() => deleteList(list.id)}/>
            </h3>
            <p>Amount: {list.amount}</p>
        </Addlist>
    )
}

export default AccountList
