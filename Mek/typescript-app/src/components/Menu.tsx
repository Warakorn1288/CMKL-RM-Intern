import { MouseEventHandler } from 'react'
import Button from "./Button"

type PropsType = {
    // All can be arrow function, but it's easier to read this way.
    onAddDeposit: MouseEventHandler<HTMLButtonElement>,
    showAddDeposit: boolean, 
    onAddWithdraw: MouseEventHandler<HTMLButtonElement>, 
    showAddWithdraw: boolean, 
    onEditInfo: MouseEventHandler<HTMLButtonElement>, 
    showEditInfo: boolean, 
    deleteAccount: MouseEventHandler<HTMLButtonElement>
}

const Menu = ({ onAddDeposit, showAddDeposit, onAddWithdraw, showAddWithdraw, onEditInfo, showEditInfo, deleteAccount }: PropsType) => {
    return (
        <div className='header'>
            <Button color={showAddDeposit ? 'green' : 'grey'} text='Deposit' onClick={onAddDeposit} />
            <Button color={showAddWithdraw ? 'green' : 'grey'} text='Withdraw' onClick={onAddWithdraw} />
            <Button color={showEditInfo ? 'green' : 'grey'} text='Edit Info' onClick={onEditInfo} />
            <Button color='grey' text='Delete Account' onClick={deleteAccount} />
        </div>
    )
}

export default Menu