# Java

## 자바의 Main Class 규격
+ 자바 어플리케이션 실행시 가장 먼저 동작
+ 어느 객체에서든 접근할 수 있으며 컴파일 되는 순간 정의되는 Return 값이 없는 함수
```
public class SampleProject { 
    public static void main(String[] args) { 

    } 
}
```

## Array vs List vs ArrayList vs LinkedList
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
    + LinkedList는 자료들을 저장 공간에 불연속적인 단위로 저장 -> LinkedList는 메모리 이곳저곳에 산재해 저장되어 있는 노드들을 접근하는데 ArrayList보다는 긴 지연 시간이 소모
+ 메모리: ArrayList < LinkedList
    + LinkedList 참조자를 위해 추가적인 메모리를 할당해


## Heap Memory, Stack Memory

## Java Hashmap 작동 원리
+ Key를 알경우 시간 복잡도
+ 최악의 경우는?

## Overloding vs Overriede
### Overloding
+ 같은 이름의 함수를 여러개 정의하고, 매개변수의 수나 타입이 다를경우
### Override
+ 상속 관계에 있는 클래스 간에 같은 이름의 메소드를 정의하는 기술을 

## DI(Dependency Inject)
A라는 객체에서 B, C객체를 사용(의존)할 때 A객체에서 직접 생성을 하는 것이 아닌 외부(IOC컨테이너)에서 생성된 B, C객체를 조립(주입)시켜 setter 혹은 생성자를 통해 사용할 수 있는거죠.




