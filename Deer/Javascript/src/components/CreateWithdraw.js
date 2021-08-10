import { useState } from "react"

const CreateWithdraw = ({onAdd}) => {
    const [transactionName, setTransaction] = useState('') 
    const[amount,setWithdraw] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()

        onAdd({transactionName, amount})

        setTransaction('')
        setWithdraw('')
    }

    return (
        <form className = 'add-withdraw' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>
                    Transaction Name
                </label>
                <input type = 'text' placeholder ='Please fill transaction name'
                value = {transactionName} onChange ={(e) => setTransaction(e.target.value)}/>
                </div>
                <div className = 'form-control'>
                <label>
                    Deposit amount
                </label>
                <input type = 'number' placeholder ='Please fill amount'
                value = {amount} onChange ={(e) => setWithdraw(e.target.value)}/>
            </div>
            <input type = 'submit' value = 'Create new transaction' className =' btn'/>
        </form>

    )
}

export default CreateWithdraw
