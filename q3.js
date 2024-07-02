function primeNumber(a) {
    /* Your code here */
    if (a > 1) {
        for (var i = 2; i <= a; i++) {
            if (a === 2) {
                return "YES";
            }
            else if (a % i === 0) {
                return "NO";
            }
            else {
                return "YES";
            }
        }
    }
    else
        return "NO";
}
var d1 = 10;
var d2 = 29;
var d3 = 2;
console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));
module.exports = primeNumber;
//รหัส นศ.:660610803
//ชื่อ-สกุล :สุริโย หลุ่มโสม
