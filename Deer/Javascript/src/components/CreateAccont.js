import { useState } from "react"

const CreateAccont = ({onAdd}) => {
    const [accountName, setAccountName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()

        onAdd({accountName, accountNumber})

        setAccountName('')
        setAccountNumber('')
    }

    return (
        <form className= 'add-account' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>
                    Account Name
                </label>
                <input type = 'text' placeholder ='Please fill your name'
                value = {accountName} onChange ={(e) => setAccountName(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label>
                    Account Number
                </label>
                <input type = 'number' placeholder ='Please fill the number'
                value = {accountNumber} onChange ={(e) => setAccountNumber(e.target.value)}/>
            </div>
            
            <input type = 'submit' value = 'Create new account' className =' btn'/>
        </form>
    )
}

export default CreateAccont
