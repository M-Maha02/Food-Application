function togglePaymentFields() {
    var paymentMethod = document.getElementById("payment").value;
    var creditCardFields = document.getElementById("credit-card-fields");
    var debitCardFields = document.getElementById("debit-card-fields");
    var paypalFields = document.getElementById("paypal-fields");
  
    if (paymentMethod === "credit") {
      creditCardFields.style.display = "block";
      debitCardFields.style.display = "none";
      paypalFields.style.display = "none";
    } else if (paymentMethod === "debit") {
      creditCardFields.style.display = "none";
      debitCardFields.style.display = "block";
      paypalFields.style.display = "none";
    } else if (paymentMethod === "paypal") {
      creditCardFields.style.display = "none";
      debitCardFields.style.display = "none";
      paypalFields.style.display = "block";
    } else {
      creditCardFields.style.display = "none";
      debitCardFields.style.display = "none";
      paypalFields.style.display = "none";
    }
  }
  
  // Call the function initially to set the visibility correctly
  togglePaymentFields();
  
    