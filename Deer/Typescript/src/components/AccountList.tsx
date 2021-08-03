import {FaTimes} from 'react-icons/fa'

type Todo ={
    list: {
        id: number
        transactionName: string
        amount: string
    }
    deleteList: Function
}

const AccountList = ({list, deleteList}:Todo) => {
    return (
        <div className = 'task'>
            <h3>
            {list.transactionName} <FaTimes 
            style ={{cursor: 'pointer'}} onClick ={() => deleteList(list.id)}/>
            </h3>
            <p>Amount: {list.amount}</p>
        </div>
    )
}

export default AccountList
