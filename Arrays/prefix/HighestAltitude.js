
// 1732. Find the Highest Altitude
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

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