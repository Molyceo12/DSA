var isPalindrome = (s) => {

    function checkIfPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    if (checkIfPalindrome(s)) return s;

    for (let i = 0; i < s.length; i++) {
        let suffix = s.slice(i);
        if (checkIfPalindrome(suffix)) {
            return s.slice(0, i).split('').reverse().join('') + s;
        }
    }
};
console.log(isPalindrome("kdhasaj"));
