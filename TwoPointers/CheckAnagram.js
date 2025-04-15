const s1= "anagram"
const s2 = "nagaram"

console.log(checkAnagram(s1,s2))
function checkAnagram(s1,s2){
    if(s1.length!=s2.length){
        return false;
    }
    let str1=s1.split('').sort().join("")
   let  str2=s2.split('').sort().join("")
   console.log(str1+"    "+str2)
    if(str1==str2){
        return true
    }
    return false;
    
}

