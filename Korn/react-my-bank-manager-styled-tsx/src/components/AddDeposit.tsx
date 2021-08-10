import { useState, FormEvent } from 'react'
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

const AddDeposit = ({ onAdd }: OnAddType) => {
    const [transactionName, setTransactionName] = useState('')
    const [amount, setAmount] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

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
        <Form onSubmit={onSubmit}>
            <Div>
                <Label>Deposit</Label>
                <Input type='text' placeholder='Add Transaction Name' value={transactionName} onChange={(e) => setTransactionName(e.target.value)} />
            </Div>
            <Div >
                <Label>Amount</Label>
                <Input type='text' placeholder='Add Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
            </Div>

            <Submit type='submit' value='Save Deposit' />
        </Form>
    )
}

export default AddDeposit
