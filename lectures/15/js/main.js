var AccountDetails = [{
    AccountTitle: 'Muhammad Abdullah',
    AvailableBalance:200000,
    AccountCurrency:'$',
    IBAN:456432654247365853
},{
    AccountTitle: 'Anam Shafiq',
    AvailableBalance:32,
    AccountCurrency:'Rs',
    IBAN:23456326474733
},{
    AccountTitle: 'Iqra Kayayat',
    AvailableBalance:-3232424,
    AccountCurrency:'$',
    IBAN:3254325464765474
    }
];
var currentUser = 0;
var title = document.getElementById('title');
var balance = document.getElementById('balance');
var currency = document.getElementById('currency');
var IBAN_Num = document.getElementById('IBAN');




title.innerHTML = AccountDetails[currentUser].AccountTitle;
balance.innerHTML = AccountDetails[currentUser].AvailableBalance;
currency.innerHTML = AccountDetails[currentUser].AccountCurrency;
IBAN_Num.innerHTML = AccountDetails[currentUser].IBAN;



function DepositAmount (c) {
    var enteredValue = document.getElementById('deposit').value;
    console.log(enteredValue);
    enteredValue = parseInt(enteredValue);
    console.log( AccountDetails[currentUser].AvailableBalance)
    if (c.keyCode == 13 || c.key === 'Enter'){
        console.log(c);
        AccountDetails[currentUser].AvailableBalance += enteredValue;
        balance.innerHTML = AccountDetails[currentUser].AvailableBalance;
        return false;
    }
    else{
        return true;
    }
}

function WithdrawAmount (c) {
    var enteredValue = document.getElementById('deposit').value;
    console.log(enteredValue);
    enteredValue = parseInt(enteredValue);
    console.log( AccountDetails[currentUser].AvailableBalance)
    if (c.keyCode == 13 || c.key === 'Enter'){
        console.log(c);
        AccountDetails[currentUser].AvailableBalance -= enteredValue;
        balance.innerHTML = AccountDetails[currentUser].AvailableBalance;
        return false;
    }
    else{
        return true;
    }
}



function showHistory(){
    var td = document.createElement('td');
    td.content = 3;
}