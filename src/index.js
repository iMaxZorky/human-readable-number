module.exports = function toReadable (number) {
  var num = number
var numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 
'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand' ]
s = ''
if (num == 0) {
    return 'zero'
}  
if (num > 20000) {
    let i = Math.floor(num / 1000)   
    s += numbers[Math.floor(i / 10 + 18)] + ' ' + numbers[i % 10] + ' ' + numbers[29] + ' ';
    num -= i * 1000;
}
if (num > 9999) {
    let i = Math.floor(num / 1000)
    s += numbers[i] + ' ' + numbers[29] + ' ';
    num -= i * 1000;
}
if (num > 999) {
    let i = Math.floor(num / 1000)
    s += numbers[i] + ' ' + numbers[29] + ' ';
    num -= i * 1000;
}
if (num > 99) {
    let i = Math.floor(num / 100)
    s += numbers[i] + ' ' + numbers[28] + ' ';
    num -= i * 100;
}
console.log(num)
if (num > 20) {
    let i = Math.floor(num / 10 + 18)
    
    s += numbers[i] + ' ' + numbers[num % 10] + ' ';
} else {
    s += numbers[num]
}
return s.trim()
}
