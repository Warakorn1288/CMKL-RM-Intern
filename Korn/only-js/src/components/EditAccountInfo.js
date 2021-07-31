import { useState } from 'react'

const EditAccountInfo = ({ onAdd }) => {
    const [accountName, setAccountName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')

    const onSubmit = (e) => {
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
            <dir className='form-control'>
                <label>New Account Name</label>
                <input type='text' placeholder='Add New Account Name' value={accountName} onChange={(e) => setAccountName(e.target.value)} />
            </dir>
            <dir className='form-control'>
                <label>New Account Number</label>
                <input type='text' placeholder='Add New Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            </dir>

            <input type='submit' value='Save' className='btn btn-block' />
        </form>
    )
}

export default EditAccountInfo
