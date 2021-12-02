let 회원정보 = [{
    아이디 : 'jjang',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun1@gmail.com',
    가입연도 : '2020-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang2',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '남',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun2@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang3',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun3@gmail.com',
    가입연도 : '2021-12-02',
    주접속위치 : '125.242.161.149'
}, {
    아이디 : 'jjang4',
    패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
    성별 : '여',
    휴대폰번호 : '010-5004-0000',
    이메일 : 'hojun4@gmail.com',
    가입연도 : '2020-12-02',
    주접속위치 : '125.242.161.149'
}];


//1번 남자인 사람
회원정보.filter(el => el.성별 === '남')

//2번 남자이면서 2021년도에 가입하신 분
//내답
회원정보.filter(el => (el.성별 === '남')*(el.가입연도.slice(0,4) === '2021'))
//정답
회원정보.filter(el => el.성별 === "남" && el.가입연도.split("-")[0] === "2021")

//3번
회원정보.filter(el => el.아이디 === "jjang")

//find를 사용
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
회원정보.find(element => element.아이디 === "jjang");
//filter는 다 둘러보면서 맞는지 확인한다. 
// find는 찾으면 멈춘다. 아이디는 겹치지 않으니(겹쳐도 태그가 있음), 


//글이 100개
//25개는 일상
//50개는 개발관련 글
//25개는 취미
let blogs = [{
        id : 1,
        title : 'title1',
        content : 'content1',
        section : '일상',
    }, {
        id : 2,
        title : 'title2',
        content : 'content2',
        section : '취미',
    }, {
        id : 3,
        title : 'title3',
        content : 'content3',
        section : '개발',
    }, {
        id : 4,
        title : 'title4',
        content : 'content4',
        section : '개발',
    }];

let s = '개발'
let data = s? blogs.filter(b => b.section === s): blogs;



//Map
//object가 순회가 안 된다. 리터러블하지 않다. 그래서 생김.
//얘는 순회가 된다.

let m = new Map();

// Map에 값을 넣기
m.set('하나', '1');
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근하기
console.log(m.get('하나'));
console.log(m.get(true));

// Map의 값이 있는지 확인하기
console.log(m.has('하나'));

// Map의 값을 제거하기
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);

// Map의 크기를 확인하기
console.log(m.size);

//array의 데이터 타입이 object로 찍히는 것처럼
//Map도 object로 찍힌다.........

// 인덱스를 가지는 자료형을 맵핑하기



//Set
//교집합, 차집합, 합집합 가능..
//set은 순서가 없다. index로 호출 못함
let s = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);
//Set(5) {'a', 'b', 'c', 'd', 'e'}
// 5

s.add('f')
//Set(6) {'a', 'b', 'c', 'd', 'e', …}

s.delete('b')
//true
s
//Set(5) {'a', 'c', 'd', 'e', 'f'}
s.has('c')
//true
s.size
//5
s.forEach(i=> console.log(i))
 //a
 //c
 //d
 //e 
 //f

s.add('f');
 //Set(5) {'a', 'c', 'd', 'e', 'f'}
//중복이 안 된다.



let a = new Set('abc');
let b = new Set('cde');

a
//Set(3) {'a', 'b', 'c'}
b
//Set(3) {'c', 'd', 'e'}


//교집합
[...a].filter(value => b.has(value))
//['c']

//합집합
let union = new
Set([...a].concat(...b))
union
//Set(5) {'a', 'b', 'c', 'd', 'e'}
//new Set([...a, ...b]); 이것도 똑같이 나온다..


    //[...a] 전개표현식
    function add(...x){
        return x;
    }

    add(1, 2, 3, 4, 5)
    // 모던자바스크립트 예제(https://ko.javascript.info/rest-parameters-spread)
    let arr1 = [1, -2, 3, 4];
    let arr2 = [8, 3, -8, 1];
    Math.max(1, ...arr1, 2, ...arr2, 25); // 25

    // 모던자바스크립트 예제(https://ko.javascript.info/rest-parameters-spread)
    let arr = [3, 5, 1];
    let arr2 = [8, 9, 15];

    let merged = [0, ...arr, 2, ...arr2];