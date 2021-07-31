const AccountInfo = ({ accountInfo, transactionList }) => {
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
