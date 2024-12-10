function maskify(cc) {
    str = "";
for (let i = 0; i < cc.length; i++) {
    if (cc.length - 5 < i){
        str += cc[i]
    }
    else{
        str += "#"
    }
}
return str;
}

function isTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        legyel_harom = 0;
        if (a + b > c) {
            legyel_harom++
        }
        if (a + c > b) {
            legyel_harom++
        }
        if (c + b > a) {
            legyel_harom++
        }
        if (legyel_harom == 3){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false;
    }
}

function timeConvert(num) {
    if (num <= 0) {
        return "00:00"
    }
    else {
        let perc = num
        let ora = 0
        while (perc >= 60) {
            perc -= 60;
            ora++;
        }
        let perc_s = "";
        let ora_s = "";
        console.log(perc.length)
        if(perc < 10){
            perc_s += "0"
            perc_s += perc
        }
        else{
            perc_s += perc
        }
        if(ora < 10){
            ora_s += "0"
            ora_s += ora
        }
        else{
            ora_s += ora
        }
        return ora_s + ":" + perc_s
    }
}

function createArrayOfTiers(str) {
    let szam_s = "" + str
    let szam = "";
    let regex = /[0-9]*/
    let tomb = []
    for (let i = 0; i < szam_s.length; i++) {
        if (regex.test(szam_s[i])) {
            szam += szam_s[i]
            tomb.push(szam)
        }
    }
    return tomb;  
}