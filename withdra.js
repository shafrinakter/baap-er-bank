document.getElementById('withdra-btn').addEventListener('click', function () {
    const withdraFeild = document.getElementById('withdra-field');
    const withdraAmmountString = withdraFeild.value;
    const withdraAmmount = parseFloat(withdraAmmountString);
    withdraFeild.value=''


    if(isNaN(withdraAmmount)){
        alert('Please Enter an Ammount');
        return;
    }


    const withdrawTotalElement = document.getElementById('width-total');
    const withdrawTotalElementString = withdrawTotalElement.innerText;
    const withdraTotal = parseFloat(withdrawTotalElementString);
    

    const previousBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = previousBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    

    if(withdraAmmount>previousTotalBalance){
        alert('Baap er bank e eto taka nai ');
        return;
    }

    const totalWhithdrawAmoutn = withdraAmmount + withdraTotal;
    withdrawTotalElement.innerText = totalWhithdrawAmoutn;


    const totalWithdrawBalace = previousTotalBalance - totalWhithdrawAmoutn

    previousBalance.innerText = totalWithdrawBalace;

    withdraFeild.value=''
})