import { useState } from 'react'

const AddDeposit = ({ onAdd }) => {
    const [transactionName, setTransactionName] = useState('')
    const [amount, setAmount] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!transactionName) {
            alert('Please add a deposit name')
            return
        }
        else if(!amount) {
            alert('Please add a deposit amount')
            return
        }
        else if(isNaN(amount)) { // Not a Number
            alert('Deposit amount must be a number')
            return
        }
        else {}

        onAdd({ transactionName, amount })

        setTransactionName('')
        setAmount('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>
                    Deposit
                </label>
                <input type='text' placeholder='Add Transaction Name' 
                value={transactionName} onChange={(e) => setTransactionName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>
                    Deposit Amount
                </label>
                <input type='text' placeholder='Add Amount' 
                value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

            <input type='submit' value='Save Deposit' className='btn btn-block' />
        </form>
    )
}

export default AddDeposit
