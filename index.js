export function wordifynumbers(number) {
  const singleDigits = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (number === 0) return "zero";

  let result = "";

  // check crores
  if (Math.floor(number / 10000000) > 0) {
    result += wordifynumbers(Math.floor(number / 10000000)) + " crore ";
    number %= 10000000;
  }

  // check lakhs
  if (Math.floor(number / 100000) > 0) {
    result += wordifynumbers(Math.floor(number / 100000)) + " lakh ";
    number %= 100000;
  }

  // check thousands
  if (Math.floor(number / 1000) > 0) {
    result += wordifynumbers(Math.floor(number / 1000)) + " thousand ";
    number %= 1000;
  }

  // check hundreds
  if (Math.floor(number / 100) > 0) {
    result += wordifynumbers(Math.floor(number / 100)) + " hundred ";
    number %= 100;
  }
  // check tens and units
  if (number > 0) {
    // if (number !== "") result += "and";
    if (number < 10) result += singleDigits[number];
    else if (number > 11 && number < 19) result += teens[number - 10];
    else {
      result += tens[Math.floor(number / 10)];
      if (number % 10 > 0) {
        result += "-" + singleDigits[number % 10];
      }
    }
  }
  return result.trim();
}
