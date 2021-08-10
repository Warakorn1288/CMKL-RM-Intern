import React ,{MouseEventHandler} from 'react'
import styled from 'styled-components'
import Button from './Button'

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

type Todo ={
    onAdd: MouseEventHandler<HTMLButtonElement>
    onAddDeposit: MouseEventHandler<HTMLButtonElement>
    onAddWithdraw: MouseEventHandler<HTMLButtonElement>
    showAdd: boolean
    showAddD: boolean
    showAddW: boolean
}

const Header = ({onAdd, onAddDeposit, onAddWithdraw, showAdd, showAddD, showAddW} : Todo) => {
    
    return (
        <HeaderStyle>
            <h1 style={{color: 'green'}}  >Bank App</h1>
            <Button color= 'green' text = {showAdd ? 'Back' : 'Add'} onClick = {onAdd}/>
            <Button color= 'blue' text = {showAddD ? 'Back' : 'Deposit'}  onClick ={onAddDeposit}/>
            <Button color= 'red' text = {showAddW ? 'Back' : 'Withdraw' }  onClick ={onAddWithdraw}/>
        </HeaderStyle>
    )
}



export default Header
