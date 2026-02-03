const str = "aabegagg"
function countNoOfAGPair(str) {
    let countA = 0;
    let countG = 0;
    let countAG = 0;
    const charArr = [...str];


    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] == 'a') {
            countA++;
        }
        if (charArr[i] == 'g' && countA > 0) {
            countG++;
            countAG += countA * countG;
            countG=0;
            
        }
        
    }
return countAG;
}


console.log('find countNoOfAGPAIR*****',countNoOfAGPair(str))