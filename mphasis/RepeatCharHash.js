const str = "AAAA";  //AB*C*D
const compressedString = compress(str);
console.log(compressedString + "   is it correct");



function compress( str) {
let occ = "";
let result = "";
let substr = "";
let newChar = '\0';
let end = 0;
const n=str.length;
let found = false;
for (let i = 0; i <n ; i++) {
    end = n - 1;
    newChar = str.charAt(i);
    while (end >= i && !occ=="") {
        found=false;
        substr = str.substring(i, end + 1);
        if (occ==substr) {
            found = true;
            result += "*";
            i = end;
            occ += substr;
            console.log(occ + "  d    "+result);
            break;
        }
        end--;

    }
    if (!found) {
        occ+=newChar;
        result += newChar;
    }
}
return result;
}


