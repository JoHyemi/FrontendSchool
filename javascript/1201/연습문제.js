//연습문제3
let a = [11, 22, 33, 111, 2];
let s = [11, 22, 33, 111, 2].join('');
console.log(s);
let sum = 0;
for (var variable in s) {
    console.log(parseInt(s[variable], 10));
    sum += parseInt(s[variable], 10);
}
console.log(sum);


//연습문제4.
// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');

// 콤마 찍기 3
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
    reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
    if (count < 2){
    sample += reverse[i];
    ++count;
    } else {
    sample += reverse[i];
    sample += ','
    count = 0;
    }
}
console.log(sample);