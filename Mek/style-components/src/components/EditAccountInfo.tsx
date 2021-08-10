import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
    margin-bottom: 40px;
`;

const Div = styled.div`
    margin: 20px 0;
`;

const Label = styled.label`
    display: block;
`;

const FormInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
`;

const Submit = styled.input`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

  display: block;
  width: 100%;
`;

type ToAdd ={
    onAdd: Function
}

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
            <div className='form-control'>
                <label>New Account Name</label>
                <input type='text' placeholder='Add New Account Name' 
                value={accountName} onChange={(e) => setAccountName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>New Account Number</label>
                <input type='text' placeholder='Add New Account Number' 
                value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            </div>

            <input type='submit' value='Save' className='btn btn-block' />
        </form>
    )
}

export default EditAccountInfo
