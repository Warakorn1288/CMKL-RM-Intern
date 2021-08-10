import React from "react";
import styled from 'styled-components'
import { useState } from 'react'
import Header from "./components/Header"
import Menu from "./components/Menu"
import TransactionList from "./components/TransactionList"
import AccountInfo from './components/AccountInfo'
import AddDeposit from './components/AddDeposit'
import AddWithdraw from './components/AddWithdraw'
import EditAccountInfo from './components/EditAccountInfo'
import { FaLemon } from "react-icons/fa";
import Button from "./components/Button";

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

  const editAccountInfo = (newAccountInfo) => {
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

  const deposit = (transaction) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }

    if(Number(newTransaction.amount) >= 0) {
      newTransaction.amount = '+' + (1 * newTransaction.amount)
    } 
    setTransactionList([...transactionList, newTransaction])
  }

  const withdraw = (transaction) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTransaction = { id, ...transaction }

    if(Number(newTransaction.amount) >= 0) {
      if(newTransaction.amount[0] === '+'){
        newTransaction.amount = newTransaction.amount.replace('+', '')
      }
      newTransaction.amount = '-' + newTransaction.amount
    }
    else {
      newTransaction.amount = '+' + (-1 * newTransaction.amount)
    }
    setTransactionList([...transactionList, newTransaction])
  }

  const deleteTransaction = (id) => {
    setTransactionList(transactionList.filter((transaction) => transaction.id !== id))
  }

  const Body = styled.div `
  max-width: 600px;
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

/* Print Option (Not Finished)
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
*/

/* Print Option (Not Finished)
const AppPrintable = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
  <div>
    <App ref={componentRef} />
    <Button  color='black' text='Print' onClick={handlePrint}/>
    
  </div>
  );
}

export {
  App,
  AppPrintable
}
*/

export default App
