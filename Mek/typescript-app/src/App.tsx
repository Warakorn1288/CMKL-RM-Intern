import { useState } from 'react'
import Header from './components/Header'
import Menu from './components/Menu'
import TransactionList from './components/TransactionList'
import AccountInfo from './components/AccountInfo'
import AddDeposit from './components/AddDeposit'
import AddWithdraw from './components/AddWithdraw'
import EditAccountInfo from './components/EditAccountInfo'

const App = () => {
  const [showAddDeposit, setShowAddDeposit] = useState(false)
  const [showAddWithdraw, setShowAddWithdraw] = useState(false)
  const [showEditInfo, setShowEditInfo] = useState(false)

  const [accountInfo, setAccountInfo] = useState({
    accountName: '',
    accountNumber: ''
  })

  const [transactionList, setTransactionList] = useState([
    {
      id: 1,
      transactionName: 'Withdraw',
      amount: '-1',
    },
    {
      id: 2,
      transactionName: 'Deposit',
      amount: '+1',
    },
  ])

  type AccountInfoType = {
    accountName: string,
    accountNumber: string
  }

  const editAccountInfo = (newAccountInfo: AccountInfoType) => {
    if(newAccountInfo.accountName.length === 0 && newAccountInfo.accountNumber.length !== 0) {
      newAccountInfo.accountName = accountInfo.accountName
    }
    else if(newAccountInfo.accountName.length !== 0 && newAccountInfo.accountNumber.length === 0) {
      newAccountInfo.accountNumber = accountInfo.accountNumber
    }
    else {}
    setAccountInfo(newAccountInfo)
  }

  const deleteAccount = () => {
    let newAccountInfo = {
      accountName: '',
      accountNumber: ''
    }
    setAccountInfo(newAccountInfo)
    setTransactionList([])
  }

  type transactionType = Readonly<{
    transactionName: string,
    amount: string,
  }>

  const deposit = (transaction: transactionType) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }

    if(Number(newTransaction.amount) >= 0) {
      newTransaction.amount = '+' + (1 * Number(newTransaction.amount))
    } 

    setTransactionList([...transactionList, newTransaction])
  }

  const withdraw = (transaction: transactionType) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }

    if(Number(newTransaction.amount) >= 0) {
      if(newTransaction.amount[0] === '+'){
        newTransaction.amount = newTransaction.amount.replace('+', '')
      }
      newTransaction.amount = '-' + newTransaction.amount
    }
    else {
      newTransaction.amount = '+' + (-1 * Number(newTransaction.amount))
    }
    setTransactionList([...transactionList, newTransaction])
  }

  const deleteTransaction = (id: Readonly<number>) => {
    setTransactionList(transactionList.filter((transaction) => transaction.id !== id))
  }

  return (
    <div className='container'>
      <Header />
      <AccountInfo accountInfo={accountInfo} transactionList={transactionList} />
      <br />
      <Menu 
        onAddDeposit={() => setShowAddDeposit(!showAddDeposit)} showAddDeposit={showAddDeposit}
        onAddWithdraw={() => setShowAddWithdraw(!showAddWithdraw)} showAddWithdraw={showAddWithdraw}
        onEditInfo={() => setShowEditInfo(!showEditInfo)} showEditInfo={showEditInfo}
        deleteAccount={() => deleteAccount()}
      />

      {/* Triggering forms */}
      {showAddDeposit && <AddDeposit onAdd={deposit} />}
      {showAddWithdraw && <AddWithdraw onAdd={withdraw} />}
      {showEditInfo && <EditAccountInfo onAdd={editAccountInfo} />}

      {transactionList.length > 0 ? (
        <TransactionList transactionList={transactionList} onDelete={deleteTransaction} />
      ) : (
        <p className='center'>No Transaciton To Show</p> 
      )}
    </div>
  );
}

export default App
