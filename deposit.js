document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositField = document.getElementById('deposite-field');
    const depositPreviousAmmountString = depositField.value;
    const depositePreviousAmmounnt = parseFloat(depositPreviousAmmountString);

    depositField.value = '';

    if(isNaN(depositePreviousAmmounnt)){
        alert('Please Entern a ammount');
        return;
    }

    const depositTotalAmmount = document.getElementById('deposit-total')
    const depositTotalAmmountString = depositTotalAmmount.innerText;
    const depositTotalAmount = parseFloat(depositTotalAmmountString);


    const depositTotal = depositePreviousAmmounnt + depositTotalAmount;
    depositTotalAmmount.innerText = depositTotal;

    const balanceTotalElement = document.getElementById('total-balance');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const newTotalbalance = previousBalance + depositePreviousAmmounnt;
    balanceTotalElement.innerText=newTotalbalance;


    depositField.value = '';
})