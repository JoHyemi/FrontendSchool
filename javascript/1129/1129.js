
//산술연산
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b); //제곱
console.log(a % b); //나머지

​//할당연산
//=는 대입이지 같다가 아니다.

a += b //a = a + b
a /= b //a = a / b

a == b //같다(데이터 타입이 달라도)
a === b //같다(타입까지 같다)
//*  ===가 속도가 더 빠르다.
a > b
a >= b
a < b
a <= b
a != b //다르다

//논리연산
//&&(and) = 논리곱
//||(or) = 논리합
//!(not) = 부정
//true == 1
//false == 0


//10미만의 자연수에서 3과 5의 배수를 구하면 3,5,6,9이다. 이들의 총합은 23이다.
//1000미만의 자연수에서 3,5의 배수의 총합을 구하라.

let result = 0;

for(let x = 0; x <101; x++) {
    if (x % 3 == 0 || x % 5 == 0){
        //&&는 15의 배수
        // console.log(x);
        result += x
    }
}

// 1. false || true - true
// 2. true && false - false
// 3. !true -false
// 4. !((true && false) || (true && false)) - true
// 5. let x = 10 - false
// !((x % 5 == 0 && x % 2 == 0) || (x / 2 == 5 && false))
// 6. let y = 10 - false
// (false && y % 2 == 0) && (y / 2 == 5 && false)
// 7. let z = 3 - error
// (true && z % 3 == 0) || (z / 2 !=!= 5 && false) // !=!=는 잘못된 문법입니다.ㅎㅎ

//드모르간 법칙
!(x || y) === (!x && !y)
!(x && y) === (!x || !y)

//3항연산자 대체용법
true && '완료' || '미완료';

let age = 10
let accessAllowed = (age > 18) ? true : false;

accessAllowed
false

//? 앞에꺼가 true면 1을 출력하고 틀리면 2를 출력하라
true? console.log(1) : console.log(2)
//1을 출력

let value = 10;
value % 2 == 0? console.log(1) : console.log(2)
//1을 출력

//Boolean

Boolean('조햄') //true
Boolean(' ') //false
Boolean(1) //true
Boolean(0) //false
Boolean('    ') //true
Boolean([]) //true
Boolean({}) //true

//회사에서 주로 사용하는  형변환
123 + '' //->'123' 
!!true //->true 
!!'hojun' //-> true 
!!''  //->false 
!!1  //->true 
!!0 //->false 
!!undefined //->false 
!!NaN //-> false

// 값이 있으면 true, 0, undefined, NaN도 다 false
// x를 string으로 바꾸려면 x + ''
// x를 boolean으로 바꾸려면 !!x

'0' == 0 //-> true
0 == '' //-> true
0 == '0' //-> true
false == 'false' //-> false
false == '0' //-> true
false == null //-> false
false == undefined //-> false
false == NaN //-> false
!!null //-> false
!!undefined //-> false
!!NaN //-> false

//string을 숫자로 만드는건

let x = '10000'
+x
//-> 10000

//안전하게 바꾸려면 parseInt 사용! 왜냐하면!

parseInt('123456abcd', 10)
//-> 123456

x = '123456abcd'
+x
//-> NaN


//조건문
//if문

let x = 10;

if (x < 100){
console.log('100보다 작아요!')
}
//-> 100보다 작아요!

if ( x > 100){
console.log('100보다 커요!')
}
//-> undefined

if (true) {
    console.log(1);
    } else if(true) {
    console.log(2);
    } else if(true) {
    console.log(3);
    } else if(true) {
    console.log(4);
    } else if(true) {
    console.log(5);
    } else {
    console.log(99);
    }
    // ->1

if (false) {
    console.log(1);
    } else if(true) {
    console.log(2);
    } else if(false) {
    console.log(3);
    } 
    if (true) {
    console.log(4);
    }
    if (false) {
    console.log(5);
    } else if(true) {
    console.log(6);
    } else if(false) {
    console.log(7);
    } else {
    console.log(99);
    }
    //-> 2 4 6

        
let score = 89;
let money = 100000;

if(score >= 90){
console.log('mom : i\'m so happy!!');
money += 1000000;
} else if(score >= 80){
console.log('mom : i\'m so happy~');
money += 100000;
} else if(score >= 70){
console.log('mom : i\'m so happy.');
money += 10000;
} else if(score >= 60){
console.log('mom : happy?');
money += 10000;
} else {
console.log('...')
money += 0;
}

//-> mom : i'm so happy~
//-> 200000


//switch문

switch(1){
    case 0:
        console.log('일요일!!');
        break;
    
    case 1:
        console.log('월요일!!');
        break;
    
    case 2:
        console.log('화요일!!');
        break;
    
    case 3:
        console.log('수요일!!');
        break;

    default:
        console.log('요일없음');
        break;
    }
    //-> 월요일!!


//반복문
//배열
let cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

cars[0]
//-> 'BMW'

//for문
let result = 0;
for(let i=0; i<111; i++){
    result += i;
}
console.log(result);
//-> 6105

let result = 0;
for(let i=0; i<101; i+=2){
    result += i;
}
console.log(result);
//-> 2550


//구구단 출력
for(let i = 2; i<10; i++){
    for(let j=1; j <10; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
}


