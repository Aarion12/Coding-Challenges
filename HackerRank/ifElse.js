function oddity(n, divisor) {
  let remainder = n % divisor;
        if (remainder >= 1) {
            return 'Weird';
        } else {
            return 'okay';
        };
    }


    /*test*/
let final = oddity(112, 8);
    console.log(final);
