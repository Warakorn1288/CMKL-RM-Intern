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
        <Form onSubmit={onSubmit}>
            <Div>
                <Label>New Account Name</Label>
                <Input type='text' placeholder='Add New Account Name' value={accountName} onChange={(e) => setAccountName(e.target.value)} />
            </Div>
            <Div>
                <Label>New Account Number</Label>
                <Input type='text' placeholder='Add New Account Number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
            </Div>

            <Submit type='submit' value='Save' />
        </Form>
    )
}

export default EditAccountInfo
