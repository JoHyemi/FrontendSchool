
//날짜(12월 1일 수요일)

let d = new Date();

d
//Wed Dec 01 2021 10:34:59 GMT+0900 (한국 표준시)

d.getMonth()
//11
//월은 0부터 시작

d.getDate()
//1
//일은 1부터 시작

d.getDay()
//3
//일요일부터 0

d.getHours()
//10

d.getMinutes()
//34

//실시간 아니고 new Date()했을 때에 시간.

d.getFullYear()
//2021
//getYear() method대신 이거 사용!


//배열을 만드는 여러가지 방법
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
let 과일2 = new Array(5);
let 과일3 = new Array('사과', '수박', '복숭아', '딸기', '바나나');


과일[0] = '한라봉'
//'한라봉'

과일
//(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']

//배열은 이렇게 바꿀 수 있지만,

let text = 'abcde'
//undefined

text[0]
//'a'

text[0] = 'z'
//'z'

text
//'abcde'

//문자는 이렇게 호출해서 바꿀 수 없다.


과일[0][0] = 'ㅋㅋ'
'ㅋㅋ'

과일[0][0]
'한'

//이렇게도 안된다!



// 다차원 배열

let 전교점수 = [
    // 1반
    [[10, 20, 30, 40, {name:'leehojun', age:10}],
    [20, 30, 40, 50, 60]],
    // 2반
    [[10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60]],
];

let 행렬 = [[1,2,3],[4,5,6],[7,8,9]]

행렬[0]
//[1, 2, 3]
행렬[0][0]
//1

행렬[0] + 행렬[0]
//'1,2,31,2,3'

행렬[0] + ''
//'1,2,3'



let sample = [1, 2, 3]
for (let i in sample) {
sample[i] *=2 //sample[i] = sample[i]*2
}
sample
//(3) [2, 4, 6]

for (let i in sample) {
    console.log(i)
    }
sample
//인덱스만 나와서 0 1 2가 나온다

for (let i of sample) {
    console.log(i)
}
sample


// document.write(전교점수[0][1][4]['age']);

// matrix
let m = [[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]]

document.write(m + m);