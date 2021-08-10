import Transaction from "./Transaction"

const TransactionList = ({ transactionList, onDelete }) => {
    return (
        <>
            {transactionList.map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
            ))}
        </>
    )
}

export default TransactionList
