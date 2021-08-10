import { useState } from 'react'
import styled from 'styled-components';

const Form = styled.form`
    margin-bottom: 40px;
`;

const Div = styled.div`
    margin: 20px 0;
`;

const Label = styled.label`
    display: block;
`;

const Input = styled.input`
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

type OnAddType = {
    onAdd: Function
}

const AddWithdraw = ({ onAdd }) => {
    const [transactionName, setTransactionName] = useState('')
    const [amount, setAmount] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!transactionName) {
            alert('Please add a withdraw name')
            return
        }
        else if(!amount) {
            alert('Please add a withdraw amount')
            return
        }
        else if(isNaN(Number(amount))) { // Not a Number
            alert('Withdraw amount must be a number')
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
                    Withdraw
                </label>
                <input type='text' placeholder='Add Transaction Name' 
                value={transactionName} onChange={(e) => setTransactionName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Amount</label>
                <input type='text' placeholder='Add Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

            <input type='submit' value='Save Withdraw' className='btn btn-block' />
        </form>
    )
}

export default AddWithdraw
