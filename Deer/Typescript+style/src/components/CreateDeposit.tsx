import React, { useState } from "react"
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
        <Form  onSubmit = {onSubmit}>
            <Div >
                <Label>
                    Transaction Name
                </Label>
                <FormInput type = 'text' placeholder ='Please fill transaction name'
                value = {transactionName} onChange ={(e) => setTransaction(e.target.value)}/>
                </Div>
                <Div >
                <Label>
                    Deposit amount
                </Label>
                <FormInput type = 'number' placeholder ='Please fill amount'
                value = {amount} onChange ={(e) => setDeposit(e.target.value)}/>
            </Div>
            <Submit type = 'submit' value = 'Create new transaction' />
        </Form>

    )
}

export default CreateDeposit
