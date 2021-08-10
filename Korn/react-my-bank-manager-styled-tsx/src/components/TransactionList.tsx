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
        <div>
            {transactionList.map((transaction) => (
                <Transaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default TransactionList
