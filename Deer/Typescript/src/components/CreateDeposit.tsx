import React, { useState } from "react"

type ToAdd = {
    onAdd: Function
}

const CreateDeposit = ({onAdd} : ToAdd) => {
    const [transactionName, setTransaction] = useState('') 
    const[amount,setDeposit] = useState('')

    const onSubmit = (e : React.FormEvent) =>{
        e.preventDefault()

        onAdd({transactionName, amount})

        setTransaction('')
        setDeposit('')
    }

    return (
        <form className = 'add-deposit' onSubmit = {onSubmit}>
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
                value = {amount} onChange ={(e) => setDeposit(e.target.value)}/>
            </div>
            <input type = 'submit' value = 'Create new transaction' className =' btn'/>
        </form>

    )
}

export default CreateDeposit
