import {FaTimes} from 'react-icons/fa'

type AccountInfoProps = {
    accountInfo: {
        accountName: string,
        accountNumber: string
    },
    transactionList: {
        readonly id: number,
        transactionName: string,
        amount: string
    }[]
}

const AccountInfo = ({ accountInfo, transactionList }: AccountInfoProps ) => {
    let totalAmount = 0;

    for (let i = 0; i < transactionList.length; i++) {
        totalAmount += parseFloat(transactionList[i].amount);
    }

    return (
        <div>
            <p>Account Name: {accountInfo.accountName}</p>
            <p>Account Number: {accountInfo.accountNumber}</p>
            <p>Total: {totalAmount}</p>
        </div>
    )
}

export default AccountInfo
