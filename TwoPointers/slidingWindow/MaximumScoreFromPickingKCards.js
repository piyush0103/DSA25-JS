const cards = [1, 2, 3, 4, 5, 6, 1];
const k = 3;

const findMaxCardScore = (cards, k) => {
	let curr_score = 0;
	let max_score = 0;
	let len = cards.length;
	let start = 0;
	let end = start + k - 1;
	for (let i = start; i <= end; i++) {
		curr_score += cards[i];
	}
	start--;
	max_score = curr_score;

	while (start != len - 1 - k && end != len - 1) {
		if (start < 0) {
			start = start + len;
		}
		if (end < 0) {
			end = end + len;
		}
		curr_score -= cards[end];
		curr_score += cards[start];
		// console.log(curr_score+" ssdsd ")
		max_score = curr_score > max_score ? curr_score : max_score;
		console.log(start + '   ' + end + ' xxxxx   ' + max_score);
		end--;
		start--;
	}
	return max_score;
};

console.log(findMaxCardScore(cards, k));
