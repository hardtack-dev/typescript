const a = 3;

// we can use type to define types of variable
type ABC= 'a' | 'b' | 'c';

//because of Reocord we can use this "const b " as Object
const b: Record<ABC, number> = {
    a:1,
    b:2,
    c:3,
}

// Also we can define Interface to make object type
// readonly a:number <- if we type like this, we can only "read" type not can modify
interface testObject{
    a:number;
    b:number;
    c:number
}

// " const c: Readonly<testObject> = {} " to overlap all variable with readonly property
// Omit 은  해당 key문자로 쓰인 key:value를 제거해줌 (못 쓰게 해줌)
// const c: Omit<testObject, "b"> = {
//     a:1,
//     b:2,
//     c:3
// }

const c: testObject = {
    a:1,
    b:2,
    c:3
}

c.a = 123123123;
console.log(c);

interface TT{
    d?: number;
    e?: number;
}

//?는 선택가능 (쓸지 안 쓸지, optional)
//!는 꼭 사용

const d: TT = {
    d: 3
}

//example
// interface User

//unkown 모든 타입을 넣을 수 있음 (알 수 없음 이라는 뜰)
// (b: unkwon): unkown 은 return type을 unkown으로 한다는 뜻
const func = (b: unknown): unknown =>{

    return console.log(b);
}

// <T> 키워드를 통해 (제네릭이라고 부른다고 함)  - 알파벳은 아무거나 가능 <T> or <A> or <K> whatever!
// 함수에 쓰이는 타입을 사용자가 결정할 수 있음
//선언 후 쓸때는 func<T>() 형태로 사용
const func2 = <T>(a:T) =>{
    console.log(a);
}


//extends 키워드를 통해 제네릭으로 들어오는 타입의 종류를 제한 가능
// 아래는 무조건 string을 상속받는 (관련된) 타입만 제네릭으로 넘결 줄 수있음 
const func3 = <T extends string>(a: T):T =>{
    console.log(a);
    return a;
}

//interface에서 제네릭 사용학
interface GenObject<AA>{
    readonly name: string;
    readonly info: AA; // AA는 사용자가 직접 입력할 것임
}

// e는 GenObject라는 interface를 사용하면서 위에서 <문자 아무거나> 로 info에 제네릭을 사용했으므로 <>에 boolean을 넣어 info는 boolean(true, false)만 나오게 했다!
const e: GenObject<boolean> = {
    name: "이름",
    info: false,
}

//-----------------------------------------------

const f: string[] = ["a", "b", "c"];

const g: Array<GenObject<boolean>> = [
    {
        name: "이름",
        info: false,
    },
    {
        name: "이름1",
        info: false,
    },
    {
        name: "이름2",
        info: false,
    },
]
