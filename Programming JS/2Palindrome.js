// function palindrome(str)
// {
//      let palindromestring ='';

//      for (let i=str.length-1;i>=0;i--)
//      {
//          palindromestring = palindromestring + str[i]
//      }

//      return palindromestring === str

// }

// console.log(palindrome("hello"))
// console.log(palindrome("racecar"))



//------
//2 pointer methd

function isPalindrome(str) {

    let left = 0;
    let right = str.length - 1;

    while (left < right) {

        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam"));