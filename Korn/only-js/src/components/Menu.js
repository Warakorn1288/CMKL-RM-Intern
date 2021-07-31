import Button from "./Button"

const Menu = ({ onAddDeposit, showAddDeposit, onAddWithdraw, showAddWithdraw, onEditInfo, showEditInfo, deleteAccount }) => {
    return (
        <div className='header'>
            <Button color={showAddDeposit ? 'green' : 'grey'} text='Deposit' onClick={onAddDeposit} />
            <Button color={showAddWithdraw ? 'green' : 'grey'} text='Withdraw' onClick={onAddWithdraw} />
            <Button color={showEditInfo ? 'green' : 'grey'} text='Edit Info' onClick={onEditInfo} />
            <Button color='grey' text='Delete Account' onClick={deleteAccount}/>
        </div>
    )
}

export default Menu