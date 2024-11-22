var fizzBuzz = function(n) {
    var ans = [];
    for (var i = 1; i <= n; i++) {
        ans.push(
            (i % 15 === 0) ? "FizzBuzz" :
            (i % 5 === 0) ? "Buzz" :
            (i % 3 === 0) ? "Fizz" :
            i.toString()
        );
    }
    return ans;
};


console.log(fizzBuzz(20))