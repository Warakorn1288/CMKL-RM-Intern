import AccountList from "./AccountList"
const Lists = ({lists, deleteList}) => {
   
    return (
        <>
            {lists.map((list)=>(
            <AccountList key = {list.id} list = {list} deleteList = {deleteList}/>))}
        </>
    )
}

export default Lists

