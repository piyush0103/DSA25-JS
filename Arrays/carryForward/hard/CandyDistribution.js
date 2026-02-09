// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.
const rating = [1, 3, 4, 5, 2];


const countCandies = (rating) => {
    const candies = Array.from({ length: rating.length }).fill(1);
    let left = 0;
    let right = 0;

    for (let i = 1; i < rating.length; i++) {
        left = rating[i - 1];
        right = rating[i + 1];

        if (rating[i] < left) {
            if ((candies[i - 1] == candies[i]) || (candies[i - 1] < candies[i])) {
                candies[i - 1] = candies[i] + 1;
            }
            } else if (rating[i] > left) {
                console.log(rating[i], 'heyyy', candies[i - 1])
                candies[i] = candies[i - 1] + 1;
                console.log('why ...', candies[i])
            }
        }
        for (let i = rating.length - 2; i >= 0; i--) {
            right = rating[i + 1];

            if (rating[i] > right) {

                if (candies[i + 1] == candies[i] || (candies[i + 1] > candies[i])) {
                    candies[i] = candies[i + 1] + 1;

                }
            }


        }
        console.log(candies, 'how come man')
        return candies.reduceRight((acc, cur) => acc + cur, 0);

    }
    console.log('candies allocated are ', countCandies(rating))