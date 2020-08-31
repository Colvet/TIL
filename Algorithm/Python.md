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
