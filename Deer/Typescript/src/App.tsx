import React, {useState} from 'react'
import Header from './components/Header'
import Lists from './components/Lists';
import CreateAccont from './components/CreateAccont';
import CreateDeposit from './components/CreateDeposit';
import CreateWithdraw from './components/CreateWithdraw';


const App = () =>{
  const [showAddAccount,setShowAddAccount] = useState(false)
  const [showAddDeposit, setShowAddDeposit] = useState(false)
  const [showAddWithdraw, setShowAddWithdraw] = useState(false)
  const [lists, setLists] = useState([
    {
        id: 1,
        transactionName: 'food',
        amount: '200',
    },
    {
        id: 2,
        transactionName: 'car',
        amount: '10000',
    },
])

 
const addDeposit = (list: Proptypes) =>{
  const id = Math.floor(Math.random()*1000) +1
  const newTransaction = {id,...list}
  setLists([...lists, newTransaction])
}


const addWithdraw = (list: Proptypes) =>{
  const id = Math.floor(Math.random()*1000) +1
  const newTransaction = {id,...list}
  setLists([...lists, newTransaction])
}

const createAccount = () =>{
  alert('Your Account has been added ')
}

type Proptypes ={
  readonly transactionName: string,
  readonly amount: string,
}



const deleteTransaction = (id) =>{
  setLists(lists.filter((list )=> list.id !==id))
}

 return (
    <div className = "container">
    <Header onAdd ={() => setShowAddAccount(!showAddAccount)} showAdd = {showAddAccount}
    onAddDeposit = {() => setShowAddDeposit(!showAddDeposit)} showAddD = {showAddDeposit}
    onAddWithdraw = {() => setShowAddWithdraw(!showAddWithdraw)} showAddW = {showAddWithdraw}/>
    {showAddAccount && <CreateAccont onAdd={createAccount}/>}
    {showAddDeposit && <CreateDeposit onAdd={addDeposit}  />}
    {showAddWithdraw && <CreateWithdraw onAdd = {addWithdraw}/>}
    <Lists lists={lists} deleteList = {deleteTransaction}/>
    </div> 
  );
}

export default App






