import React from "react";

// 객체 생성자 : 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은값 또는 함수를 넣음
// 객체 생성자를 생성할때는 대문자로 씀
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

// 인스턴스
// const dog = new Animal("개", "멍멍이", "멍멍");

// 프로토 타입 : 객체 생성자로 인스턴스를 만들었을때 인스턴스들이 공유할 수 있는 어떠한 값이나 함수를 설정할 수 있다
// 모든 animal 한테 say라는 값을 넣는거지
// 어떤 값을 재사용하고 싶을때 사용
Animal.prototype.say = function () {
  console.log(this.sound);
};

// 상속
function dog(name, sound) {
  // call : 첫 번째 파라미터에 이 갹채 생성자 함수에서의 this를 넣어줘야함
  Animal.call(this, "dog", name, sound);
}

dog.prototype = Animal.prototype;

// 이거 그냥 클래스랑 인스턴스 개념 아닌가, 노드에서나 쓸 거 같은데 리액트에서 쓸 일이 있을까, 우선 알아두자
class Yul {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}
class YulYul extends Yul {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

function ProtoType() {
  return <div>ProtoType</div>;
}

export default ProtoType;
