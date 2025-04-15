const num=16;

console.log(checkPower2(num),'hey')

function checkPower2(num){
    return (num&(num-1))==0?true:false
}