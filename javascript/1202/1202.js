//재귀함수
//1. 종료조건 체크
//2. 반복문으로 구현할 수 있는 것은 재귀함수로 모두 구현 가능, 재귀함수로 구현 가능한 것은 반복문으로 대부분(복잡도를 증가시키면 모두) 구현 가능합니다.

    //factorial

    function factorial(n){
        if(n <= 1){
            return n
        }
        return n * factorial(n-1)
    }

    // factorial(5) == 5 * factorial(4) == 5*24
    // factorial(4) == 4 * factorial(3) == 4*6
    // factorial(3) == 3 * factorial(2) == 3*2
    // factorial(2) == 2 * factorial(1) == 2*1
    // factorial(1) == 1
    //factorial(5) = 120


    //sigma
    function sigma(n){
        if(n <= 1){
            return n
        }
        return n + sigma(n-1)
    }

    // sigma(5) == 5 + sigma(4) == 5+10 == 15
    // sigma(4) == 4 + sigma(3) == 4+6
    // sigma(3) == 3 + sigma(2) == 3+3
    // sigma(2) == 2 + sigma(1) == 2+1
    // sigma(1) == 1
    // sigma(5) = 15

    //재귀함수를 이용한 문자열 뒤집기
    function reverse(text) {
        text += '' //텍스트가 숫자가 쓰일 수 있으니까 안전하게 바꿔주기!
        if(text.length <= 1){
            return text
        }
        return reverse(text.slice(1)) + text[0]
    }
    reverse('hello')
    
    //'olleh'

    //reverse('hello') == reverse('ello') + 'h' == 'olle' + 'h'
    //reverse('ello') == reverse('llo') + 'e' == 'oll' + 'e'
    //reverse('llo') == reverse('lo') + 'l' == 'ol' + 'l'
    //reverse('lo') == reverse('o') + 'l' == 'o' + 'l'
    //reverse('o') == 'o'

    //피보나치 함수
    // 1, 1, 2, 3, 5, 8, 13, 21
    function fib(n){
        if(n <= 2){
            return n
        }
        return fib(n-1) + fib(n-2)
    }

    //왼쪽 function만 따라왔으니
    //fib(4) == fib(3) + fib(2) == 3 + 2
    //fib(3) == fib(2) + fib(1) == 2 + 1
    //fib(2) == 2
    //fib(1) == 1

    //fib(2)를 다시해야하는 상황!! - 함수는 리턴해주면 휘발되기 때문에 최종적으로 남는 값이 일단은 fib(3)밖에 없는..
    //효율이 별로 안 좋다.
    // fib(2) == 1 이걸 한 번 더 계산.
    //안하기 위해 메모이제이션..?
    
    // 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
    // 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
    let fibo_cache = []
    function fibo(n){
    if (n in fibo_cache) {
        return fibo_cache[n]
    }
    fibo_cache[n] = n < 2 ? n : fibo(n-2) + fibo(n-1)
    return fibo_cache[n]
    }

    // fibo_cache = [0, 1, 1, 2, fibo(2) + fibo(3)]
    // fibo(4) == fibo_cache[4] == fibo(2) + fibo(3)
    // fibo(2) == fibo_cache[2] == fibo(0) + fibo(1)
    // fibo(0) == fibo_cache[0] == 0
    // fibo(1) == fibo_cache[1] == 1
    // fibo(3) == fibo_cache[3] == fibo(1) + fibo(2)
    // fibo(1) == 1
    // fibo(2) == 1


    // in 연산자 - 출처 : mdn
    //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/in
    var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
    0 in trees         // true를 반환합니다.
    3 in trees         // true를 반환합니다.
    (1 + 2) in trees   // true를 반환합니다. 연산자 우선 순위에 의하여 이 구문의 괄호는 없어도 됩니다.
    6 in trees         // false를 반환합니다.
    "bay" in trees     // false를 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
    "length" in trees  // true를 반환합니다. length는 Array(배열) 객체의 속성입니다.

    // 미리 정의된 객체
    "PI" in Math       // true를 반환합니다.
    "P" + "I" in Math  // true를 반환합니다.

    // 사용자가 정의한 객체
    var myCar = {company: "Lamborghini", model: "Lamborghini Veneno Roadster", year: 2014};
    "company" in myCar // true를 반환합니다.
    "model" in myCar   // true를 반환합니다

    3 in [1, 2, 3]
    //false
    3 in [1, 1, 1, 1]
    //true


    //재귀함수로 1000단위마다 ,찍기
    function comma(text) {
        text += ''
        if(text.length <= 1) {
            return text
        }
        return text.slice(0, 3) + ',' + comma(text.slice(3))
    }

    //즉시실행함수
    //1. 즉시 실행하고 외부에서 컨트롤할 필요가없는 함수
    //2. function scope, 메모리 효율
    // 익명 즉시 실행 함수
    (function () {
        let a = 1;
        let b = 2;
        return a + b;
    }());
    

    // 기명 즉시 실행 함수
    (function foo() {
        let a = 3;
        let b = 5;
        return a * b;
    }());

    foo(); 
    // ReferenceError: foo is not defined
    // 어차피 실행하지 못해서 의미가 없음.
    // 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리



    //'1001001010'.replace(/1/g, '#').replace(/0/g, ' ')

    //square root
    // array.map(Math.sqrt).map(x=>x**3)

    let data = [{
        반 : 1, 
        번 : 1, 
        이름 : "호준", 
        중간고사점수 : 55
    }, {
        반 : 1, 
        번 : 2, 
        이름 : "길동", 
        중간고사점수 : 60
    }, {
        반 : 1, 
        번 : 3, 
        이름 : "영희", 
        중간고사점수 : 30
    }, {
        반 : 1, 
        번 : 4, 
        이름 : "철수", 
        중간고사점수 : 20
    }, {
        반 : 1, 
        번 : 5, 
        이름 : "규리", 
        중간고사점수 : 100
    }]

    data.map(x => x.중간고사점수)
    //(5) [55, 60, 30, 20, 100]
    //홀리몰리..이렇게 간단..?
    
    data.map(x => [x.이름, x.중간고사점수])
    //[Array(2), Array(2), Array(2), Array(2), Array(2)]
    // 0: (2) ['호준', 55]
    // 1: (2) ['길동', 60]
    // 2: (2) ['영희', 30]
    // 3: (2) ['철수', 20]
    // 4: (2) ['규리', 100]

    let s = 0;
    data.map(x => x.중간고사점수).forEach(y => s+= y)
    //x => x.중간고사점수
    //y => s+=y이게 콜백함수
    
    s
    //265
    



    //call by value, ... 
    //넘어가서 수정하는 것과 없는 것이 정해져있다..?
    //자바스크립트는 모두 콜바이 밸류, 콜바이레퍼런스 없다.
    //여러가지 값이 들어가 있는 것은 변경 된다.(array, object, function)
    let x = [10, 20, 30]
    function test(a) {
        a[0] = 10000;
    }
    test(x)
    x
    //(3) [10000, 20, 30]

    let x = 10;
    function test(a) {
        a[0] = 10000;
    }
    test(x)
    x
    //10


    //array
    //filter
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // mdn 예제
    const words = ['spray', 'limit', 'elite', 'exuberant',      'destruction', 'present'];
    const result = words.filter(word => word.length > 6);
    console.log(result);
    VM452:5 (3) ['exuberant', 'destruction', 'present']
    //true인 것만 가져온다.
    let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9]
    x.filter(z => z > 5);
    //(3) [6, 8, 9]
    // 5를 초과하는 숫자만

