const isPalindrome = (str) => {
  const lcStr = str.toLowerCase().replaceAll(" ", "");
  const clonedStr = lcStr.split("").reverse().join("");

  if (lcStr === clonedStr) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("Eva Can I Stab Bats In A Cave"));
console.log(isPalindrome("Murder for a jar of red rum"));
console.log(isPalindrome("At night dad likes to listen to music"));
