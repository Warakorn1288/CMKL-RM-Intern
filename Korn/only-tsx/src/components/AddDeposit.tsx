import { useState, FormEvent } from 'react'

type OnAddType = {
    onAdd: Function
}

const AddDeposit = ({ onAdd }: OnAddType) => {
    const [transactionName, setTransactionName] = useState('')
    const [amount, setAmount] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        //console.log(e)

        if(!transactionName) {
            alert('Please add a deposit name')
            return
        }
        else if(!amount) {
            alert('Please add a deposit amount')
            return
        }
        else if(isNaN(Number(amount))) { // Not a Number
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
                <label>Deposit</label>
                <input type='text' placeholder='Add Transaction Name' value={transactionName} onChange={(e) => setTransactionName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Amount</label>
                <input type='text' placeholder='Add Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

            <input type='submit' value='Save Deposit' className='btn btn-block' />
        </form>
    )
}

export default AddDeposit
