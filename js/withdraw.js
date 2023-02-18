/*
1. add event handler with the withdraw button
2. get the withdraw amount from input field
2.5 also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4. calculate total withdraw amount
5. get the previous balance total
6. calculate new balance total
6.5 set the new balance
7. clear input field
*/

// step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  // console.log(typeof newWithdrawAmount);

  // step-7: clear the input field
  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("Please provide a valid number");
    return;
  }

  // step-3
  // for non-input(element other than input, textarea) use innerText to get the text
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // step-5: get the previous balance total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Not those amount of money on your account!");
    return;
  }

  // step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  // set the withdraw total
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;
});
