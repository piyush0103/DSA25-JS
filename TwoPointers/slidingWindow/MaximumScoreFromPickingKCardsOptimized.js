const cards = [1,79,80,1,1,1,200,1];
const k = 3;

const findMaxCardScore = (cards, k) => {
	let curr_score = 0;
	let max_score = 0;
	let len = cards.length;
	for (let i = 0; i < k; i++) {
		curr_score += cards[i];
	}
    console.log(curr_score+"xx")
	max_score = curr_score;
	for (let j = k - 1, i = len - 1; j >= 0, i > len - k; i--, j--) {
		curr_score -= cards[j];
		curr_score += cards[i];
		console.log(curr_score + ' here');
		max_score = curr_score > max_score ? curr_score : max_score;
	}
	return max_score;
};

console.log(findMaxCardScore(cards, k));
