import { useState } from 'react'
import styled from 'styled-components'
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

  // Edit account info
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

  // Delete Account
  const deleteAccount = () => {
    let newAccountInfo = {
      accountName: '',
      accountNumber: ''
    }
    setAccountInfo(newAccountInfo)
    setTransactionList([])
  }

  // Add Deposit
  type transactionType = Readonly<{
    transactionName: string,
    amount: string,
  }>

  const deposit = (transaction: transactionType) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }

    // Fix +/- signs
    if(Number(newTransaction.amount) >= 0) {
      newTransaction.amount = '+' + (1 * Number(newTransaction.amount))
    } 

    setTransactionList([...transactionList, newTransaction])
  }

  // Add Withdraw
  const withdraw = (transaction: transactionType) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }

    // Fix +/- signs
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

  // Delete Transaction
  const deleteTransaction = (id: Readonly<number>) => {
    // filter: keep tasks with within the condition, others are deleted.
    setTransactionList(transactionList.filter((transaction) => transaction.id !== id))
  }

  const Board = styled.div`
    max-width: 570px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
  `;

  const ShowNoList = styled.p`
    margin-top: 30px;
    text-align: center;
  `;

  return (
    <Board>
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
        <ShowNoList>No Transaciton To Show</ShowNoList> 
      )}
    </Board>
  );
}

export default App
