# Python으로 알고리즘 준비

## 리스트 컴프리헨션
```python
# 2차원 배열 선언
O: array = [[0]* n for _ in range(m)]
X : array = [[0]*m] * n  (리스트 안에 포함된 리스트가 모두 같은 객체로 인식)
```

## 리스트에서 특정값의 원소 제거
```python
a = [1,2,3,4,5,5,5]
remove_set = {4,5}

result = [i for i in a if i not in remove_set]
## [1,2,3,5,5,5]
```

## Tuple
+ () 로 선언
+ 한번 할당이되면 값이 바뀌지 않음

## Set
+ 중복 허용X
+ 순서X

```python
data = set([1,1,1,2,3])
## {1,2,3}
data = {1,1,1,2,3}
## {1,2,3}
```

## Tip
값이 있는 체크 할경우
```python
a = [1,2,3,4,5]
print(1 in a) ## 시간복잡도 O(N)
a = {1,2,3,4,5}
print(1 in a) ## 시간복잡도 O(1)

```

## 집합
```py
a = {1,2,3,4}
b = {1,2}
## 합집합
print(a|b) ## {1,2,3,4}
## 교집합
print(a & b) ## {1,2}
## 차집합
print(a - b) ## {3,4}
```

## Dict 정렬
```py
def my_key(x):
    return x[1]

print(sorted(array, key=my_key))
print(sorted(array, key=lambda x: x[1]))
```

## 내장함수
+ itertools: 파이썬에서 반복된느 ㅎ여태의 데이터를 처리하는 기능을 제공. 순열과 조합
+ heapq: Heap 기능을 제공, 우선순위 큐 기능을 구현하기 위해 사용
+ bisect: 이진 탐색 긴으을 제공
+ collections: deque, Counter 등의 유용한 자료구조 포함

## Eval
```py
result = eval("(1+2+3)*3")
## 18
```

## 순열과 조합
```py
data = ['A','B','C']
from itertools import permutations
순열
result = list(permutations(data, 3))  ## 모든 순열 구하기
## [(A,B,C),(A,C,B),(B,A,C),(B,C,A),(C,A,B),(C,B,A)]

from itertools import combinations
result = list(combinations(data,2)) ## 모든 조합 구하기(2가지선택)
## [(A,B),(A,C),(B,C)]

중복 순열, 조합
from itertools import product
result = list(product(data, repeat=2)) ## 2개를 뽑는 모든 순열 구하기(중복 허용)

from itertools import combinations_with_replacement
result = list(combinations_with_replacement(data, 2)) ## 2개를 뽑는 모든 조합 구하기(중복 허용)
```