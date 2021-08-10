import AccountList from "./AccountList"

type ToList ={
    id: number
    transactionName: string
    amount: string
}

type Todo ={
    lists: {
        id: number
        transactionName: string
        amount: string
    }[],
    deleteList: Function
}


const Lists = ({lists, deleteList} : Todo) => {
   
    return (
        <>
            {lists.map((list: ToList)=>(
            <AccountList  list = {list} deleteList = {deleteList}/>))}
        </>
    )
}

export default Lists

