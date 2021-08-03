import { useState } from "react"
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

const CreateAccont = ({onAdd} : ToAdd) => {
    const [accountName, setAccountName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')

    const onSubmit = (e : React.FormEvent) =>{
        e.preventDefault()

        onAdd({accountName, accountNumber})

        setAccountName('')
        setAccountNumber('')
    }

    return (
        <Form  onSubmit={onSubmit}>
            <Div >
                <Label>
                    Account Name
                </Label>
                <FormInput type = 'text' placeholder ='Please fill your name'
                value = {accountName} onChange ={(e) => setAccountName(e.target.value)}/>
            </Div>
            <Div >
                <Label>
                    Account Number
                </Label>
                <FormInput type = 'number' placeholder ='Please fill the number'
                value = {accountNumber} onChange ={(e) => setAccountNumber(e.target.value)}/>
            </Div>
            
            <Submit type = 'submit' value = 'Create new account' />
        </Form>
    )
}

export default CreateAccont
