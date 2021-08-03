import {FaTimes} from 'react-icons/fa'

const AccountList = ({list, deleteList}) => {
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
