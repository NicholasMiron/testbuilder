// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var splitCardNumber = cardNumber.split('');
  var network = "";

  //Diner's Club
  if(splitCardNumber.length === 14) {
    if(splitCardNumber.slice(0,2).join('') === "38" || splitCardNumber.slice(0,2).join('') === "39") {
      network = "Diner's Club";
    }
  }

  //American Express
  if(splitCardNumber.length === 15) {
    if(splitCardNumber.slice(0,2).join('') === "34" || splitCardNumber.slice(0,2).join('') === "37") {
      network = "American Express";
    }
  }

  //Visa
  if(splitCardNumber.length === 13 || splitCardNumber.length === 16 || splitCardNumber.length === 19) {
    if(splitCardNumber[0] === "4") {
      network = "Visa";
    }
  }

  //MasterCard
  if(splitCardNumber.length === 16) {
    if(splitCardNumber.slice(0,2).join('') >= "51" && splitCardNumber.slice(0,2).join('') <= "55") {
      network = "MasterCard";
    }
  }

  //Discover
  if(splitCardNumber.length === 16 || splitCardNumber.length === 19) {
    if(splitCardNumber.slice(0,4).join('') === "6011" ||
      splitCardNumber.slice(0,2).join('') === "65" ||
      (splitCardNumber.slice(0,3).join('') >= "644" && splitCardNumber.slice(0,3).join('') <= "649") ) {
        network = "Discover";
       }
  }

  //Maestro
  if(splitCardNumber.length >= 12 && splitCardNumber.length <= 19) {
    if(splitCardNumber.slice(0,4).join('') === "5018" ||
      splitCardNumber.slice(0,4).join('') === "5020" ||
      splitCardNumber.slice(0,4).join('') === "5038" ||
      splitCardNumber.slice(0,4).join('') === "6304" ) {
        network = "Maestro";
      }
  }

  //China UnionPay
  if(splitCardNumber.length >= 16 && splitCardNumber.length <= 19) {
    if((parseInt(splitCardNumber.slice(0,6).join(''), 10) >= "622126" && parseInt(splitCardNumber.slice(0,6).join(''), 10) <= "622925") ||
      (parseInt(splitCardNumber.slice(0,3).join(''), 10) >= 624 && parseInt(splitCardNumber.slice(0,3).join(''), 10) <= 626) ||
      (parseInt(splitCardNumber.slice(0,4).join(''), 10) >= 6282 && parseInt(splitCardNumber.slice(0,4).join(''), 10) <= 6288)) {
        network = "China UnionPay";
      }
  }

  //Switch (needs to come after visa due to conflict in prefixs)
  if(splitCardNumber.length === 16 || splitCardNumber.length === 18 || splitCardNumber.length === 19) {
    if(splitCardNumber.slice(0,4).join('') === "4903" ||
      splitCardNumber.slice(0,4).join('') === "4905" ||
      splitCardNumber.slice(0,4).join('') === "4911" ||
      splitCardNumber.slice(0,4).join('') === "4936" ||
      splitCardNumber.slice(0,6).join('') === "564182" ||
      splitCardNumber.slice(0,6).join('') === "633110" ||
      splitCardNumber.slice(0,4).join('') === "6333" ||
      splitCardNumber.slice(0,4).join('') === "6759") {
        network = "Switch";
      }
  }


  return network;
};