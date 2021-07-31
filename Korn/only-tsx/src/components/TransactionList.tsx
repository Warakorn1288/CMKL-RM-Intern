import Transaction from "./Transaction"

type PropsType = {
    transactionList: {
        id: number,
        transactionName: string,
        amount: string
    }[],
    onDelete: Function
}

const TransactionList = ({ transactionList, onDelete }: PropsType) => {
    return (
        <>
            {transactionList.map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
            ))}
        </>
    )
}

export default TransactionList
