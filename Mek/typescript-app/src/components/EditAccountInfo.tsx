import { useState, FormEvent } from 'react'

type OnAddType = {
    onAdd: Function
}

const EditAccountInfo = ({ onAdd }: OnAddType) => {
    const [accountName, setAccountName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        if(!accountName && !accountNumber) {
            alert('Please add a change before saved')
            return
        }

        onAdd({ accountName, accountNumber })

        setAccountName('')
        setAccountNumber('')
    }

    

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>New Account Name</label>
                <input type='text' placeholder='Add New Account Name' value={accountName} onChange={(e) => setAccountName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>New Account Number</label>
                <input type='text' placeholder='Add New Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            </div>

            <input type='submit' value='Save' className='btn btn-block' />
        </form>
    )
}

export default EditAccountInfo
