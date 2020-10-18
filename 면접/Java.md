# Java

## OOP(Object Oriented Programming)
> 객체를 기반으로하는 프로그래밍으로 클래스를 정의하고 클래스로부터 객체를 생성하여 객체의 행동과 상태를 통해 모든 객체와 상호작용을 하는 것

## 자바의 Main Class
+ 자바 어플리케이션 실행시 가장 먼저 동작
+ 어느 객체에서든 접근할 수 있으며 컴파일 되는 순간 정의되는 Return 값이 없는 함수
```java
public class SampleProject { 
    public static void main(String[] args) { 
    } 
}
```
## Class vs Object vs Instance
> 객체는 현실 세계, 인스턴스는 소프트웨어 세계.     
객체는 ‘실체’, 인스턴스는 ‘관계’에 초점
### Class
+ 설계도
+ 연관되어 있는 변수, 메서드의 집합
### Object
+ 설계도로 구현한 모든 대상
+ 클래스의 인스턴스
### Insntance
+ 설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체
+ 실체화된 인스턴스는 메모리에 할당.
```java
/* 클래스 */
public class Human {
  ...
}
/* 객체와 인스턴스 */
public class Main {
  public static void main(String[] args) {
    Human Kim, John; // '객체'

    // 인스턴스화
    Kim = new Human(); // Kim은 Human 클래스의 '인스턴스'(객체를 메모리에 할당)
    John = new Hman(); // John은 Human 클래스의 '인스턴스'(객체를 메모리에 할당)
  }
}
```

## Pass by Value, Pass by Reference
> 참고: [https://onsil-thegreenhouse.github.io/programming/java/2017/11/09/java_tutorial_1-8/]


## 데이터 타입 vs 변수

## Value Type Vs Reference Type
+ char, String 차이 및 각각의 사용 용도
+ 참고: [https://onsil-thegreenhouse.github.io/programming/java/2018/02/18/java_tutorial_1-22/]
## "==" vs Equals

## String vs new String

## 같은 메모리를 참조한다는것은 어떻게 알 수 있나

## List vs Set

## Array vs List vs ArrayList vs LinkedList vs HashSet
### Array
+ 정적인 길이를 제공하는 배열
### List
+ 동적인 길이를 제공
+ 인덱스를 제공하지 않는다
+ 빈 엘리먼트 허용하지 않는다
### Array vs List
+ 추가/삭제: Array > List
+ 조회: Array < List
### ArrayList
+ 동적 길이를 제공하는 배열, 설정한 길이보다 더 많은 객체가 들어오면 기존배열 길이보다 1.5배 증가시킴
+ 특정 인덱스가 제거될 경우: 제거한 객체의 익덱스 이후의 객체들이 한 칸씩 이동
+ 객체를 추가하면 1칸씩 뒤로 이동
## LinkedList
+ 노드 간에 연결을 통해서 리스트로 구현된 객체 -> 데이터 추가시 공간이 부족할 경우 2배로 증가시킴
+ 다음 노드의 위치 정보만 가지고 있으며 인덱스를가지고 있지 않다 -> 탐색시 순차적 접근만 가능
### ArrayList vs LinkedList
+ 추가/삭제: ArrayList < LinkedList
+ 조회: ArrayList > LinkedList
    + LinkedList는 자료들을 저장 공간에 불연속적인 단위로 저장 -> LinkedList는 메모리 이곳저곳에 산재해 저장되어 있는 노드들을 접근 -> ArrayList보다는 긴 지연 시간이 소모
+ 메모리: ArrayList < Link edList
    + LinkedList 참조자를 위해 추가적인 메모리를 할당해
### HashSet
> 순서 상관X, 데이터의 존재 유무가 중요
## Stack vs Queue
### Stack
+ 예시
+ 왜 사용하는가
+ 내부적으로 어떤 자료구조로 되어있는가?

### Queue
+ 예시: 메시지 처리
### 긴급 및 예약발송은 어떻게 처리해야되는가?
+ 어떤 자료구조 사용?

## Set
+ 중복을 허용하지 않으면 내부적으로 어떻게 같다를 판단하는가?

## Map

## HashTable vs HashMap

## Hasing?
+ Hash 중복값 피하는 방법은?
+ 왜하냐
## 배열의 사이즈를 줄이기 위해서는?

## Tree
+ 내부적을 어떻게 구현되어있는가
### 이진 트리
## 이진 검색트리
+ 검색 속도가 가장 느린 경우는?

### 이진 트리 vs Tree
+ 내부적 구현 차이

## 동기화를 지원하는 자료구조는?
+ 필요한 이유
+ 언제 필요할까?
+ 멀티스레드 환경에서 동기화르 지원하지 안을경우 문제점은?

## Heap Memory, Stack Memory, Garbage Collection
1. https://yaboong.github.io/java/2018/05/26/java-memory-management/
2. https://yaboong.github.io/java/2018/06/09/java-garbage-collection/
3. https://d2.naver.com/helloworld/1329

## Garbage Collection
> 프로그램이 동적으로 할당했던 메모리 영역 중에서 필요없게 된 영역을 해제하는 기능 

### Stack Memory
+ Heap 영역에 생성된 Object 타입의 데이터의 참조값이 할당
+ 원시타입의 데이터가 값과 함께 할당된다. -> 원시타입의 데이터들은 참조값이 저장 되는 것이 아니다
+ 지역변수들은 scope 에 따른 visibility 를 가진다.
+ 각 Thread는 자신만의 stack 을 가진다.
+ 주소값이 Stack영역에 저장 되는 이유는?: 

### 원시데이터(Primitive Types)
> byte, short, int, long, double, float, boolean, char 
### 참조형 데이터
> String, StringBuffer, List 등 원시 데이터 이외

### 가시성(Visibility)
+ 클래스와 클래스 멤버인 멤버필드와 메소드의 사용범위를 결정하는 것
+ 한 클래스의 멤버필드와 메소드에 대한 다른 클래스의 접근 여부를 접근제어자로 제어 하는것(public, protected, default, private)

### Heap Memory
+ 참조형의 데이터 타입을 갖는 객체, 배열등은 Heap 영역에 데이터 저장

### Static Memory
+ 전역변수, 정적 멤버 변수(static이 붙은 자료형) 저장
+ Static 영역의 데이터는 프로그램의 시작부터 종료가 될 때까지 메모리에 남아 있음
```java
class Human{
    String name;
    int phone;
    static int pin = 1234;
}

public static void main(String[] args){
    System.out.println("Human pin": + Human.pin); // Human pin: 1234
    // 클래스 변수를 객체화 시키지 않아도 바로 사용 가능
    
    Human h1 = new Human();
    h1.name = "KSH";
    h1.phone = "010";
    System.out.println("Human name": + h1.name); // Human name: KSH
    System.out.println("Human phone": + h1.phone); // Human phone: 010
    //name, phone은 객체 변수이므로 Human 클래스를 객체화 시켜야지만 사용 가능
}


```

## Java Hashmap 작동 원리
+ Key를 알경우 시간 복잡도
+ 최악의 경우는?

## Java HashCode
### HashCode를 이용해서 같은 객체인지 비교하는 방법

## Generic vs non-Generic 타입
### Generic
+ 종류
+ 장점
+ 단점
+ 예시
+ Object형으로 대신 사용하면 안되나

### non-Generic

## Overloding vs Overriede
### Overloding
+ 같은 이름의 함수를 여러개 정의하고, 매개변수의 수나 타입이 다를경우
### Override
+ 상속 관계에 있는 클래스 간에 같은 이름의 메소드를 정의하는 기술

### Stpring Pool