var fizzBuzz = function(n) {
    var res = [];
    var i = 1, fizz = 0, buzz = 0;

    while (i <= n) {
        fizz++;
        buzz++;

        if (fizz === 3 && buzz === 5) {
            res.push("FizzBuzz");
            fizz = buzz = 0;
        } else if (fizz === 3) {
            res.push("Fizz");
            fizz = 0;
        } else if (buzz === 5) {
            res.push("Buzz");
            buzz = 0;
        } else {
            res.push(i.toString());
        }

        i++;
    }

    return res;
};

console.log(fizzBuzz(20))