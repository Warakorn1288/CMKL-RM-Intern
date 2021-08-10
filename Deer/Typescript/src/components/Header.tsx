import React ,{MouseEventHandler} from 'react'
import Button from './Button'


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
        <header className = 'header'>
            <h1 style={{color: 'green'}}  >Bank App</h1>
            <Button color= 'green' text = {showAdd ? 'Back' : 'Add'} onClick = {onAdd}/>
            <Button color= 'blue' text = {showAddD ? 'Back' : 'Deposit'}  onClick ={onAddDeposit}/>
            <Button color= 'red' text = {showAddW ? 'Back' : 'Withdraw' }  onClick ={onAddWithdraw}/>
        </header>
    )
}



//CSS in JS
//const headingStyle = {
//    color: 'red', 
//    backgroundColor: 'black'
//}

export default Header
