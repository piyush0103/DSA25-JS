const altitudes=[-5,1,5,0,-7];

function FindHighestAltitudeWithoutSpace(gain){
let alt = 0;   
    let best = 0;  

    for (let g of gain) {
        alt += g;            
        if (alt > best) {     
            best = alt;       
        }
    }

    return best; 
};

function findTheHighestAltitude(altitudes){
   const gain= generatePrefixArr(altitudes)
   let high=gain[0];
   for(let i of gain){
    if(i>high){
        high=i;
    }
   }
return high;   
}

function generatePrefixArr(arr){
    const gain=[]
    gain[0]=0;
    let j=1;
    for(let i =0;i<arr.length;i++){
        gain[j]=arr[i]+gain[j-1];
        j++
    }

    console.log(gain,'prefix')
    return gain;
}

console.log('highest altitude... ',findTheHighestAltitude(altitudes))


console.log('highest altitude....',FindHighestAltitudeWithoutSpace(altitudes))