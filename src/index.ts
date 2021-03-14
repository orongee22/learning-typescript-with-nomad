interface Human {
    name: string,
    age: number,
    gender: string
} // 인터페이스를 통해 object 넘기기, 미리 예측 가능
// 인터페이스는 js로 컴파일 되지 않음

class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const yerina = new Human("yerina", 45, "F");

const person = {
    name: "yerina",
    gender : "female",
    age:44
}

// ? 선택적 파라미터, undefined를 허용함
const sayHi = (person: Human): void => {
    // 미리 인터페이스를 통해 프로퍼티 등을 정의했으므로, 인터페이스와 연결지어 어떤 프로퍼티가 어떤 타입을 가지고 있는지 확인할 수 있음.
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
}

sayHi(person);
sayHi(yerina);

export {} // 에러로 인해 빈 모듈을 내보냄 === export default 의 의미