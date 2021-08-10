import Button from './Button'

const Header = ({ title, onAdd, onAddDeposit, onAddWithdraw, showAdd, showAddD, showAddW }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color= 'green' text = {showAdd ? 'Back' : 'Add'} onClick = {onAdd}/>
            <Button color= 'blue' text = {showAddD ? 'Back' : 'Deposit'}  onClick ={onAddDeposit}/>
            <Button color= 'red' text = {showAddW ? 'Back' : 'Withdraw' }  onClick ={onAddWithdraw}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'My Bank App',
}

export default Header
