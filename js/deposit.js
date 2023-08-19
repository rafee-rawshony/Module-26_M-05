// Step-1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step-2: Get the deposit amount form the deposit input field
    // For input field use .value to get text from an input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-3: Get the current deposit total
    // For non-input (element other then input, textarea) use inputText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-4: Add numbers to set total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: Calculate Current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    
    // Step-7: Clear the deposit field
    depositField.value = '';
})