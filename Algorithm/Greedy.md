# Greedy Algorithm 탐욕법
> Greedy Algorithm은 문제를 해결하는 과정에서 매 순간마다 최적이라고 생각되는 결정을 하는 방법으로 문제를 해결해나가는 방법
+ 최적의 해가 아닐 수 있다
+ 계산 속도가 빠름

## 체육복
> 출처: https://programmers.co.kr/learn/courses/30/lessons/42862

```python
def solution(n, lost, reserve):
    answer = [1] * n
    clothes = [0] * n

    # 여유분 체육복을 가지고 있지만 잃어버린 경우
    _lost = [l for l in lost if l not in reserve]
    _reserve = [r for r in reserve if r not in lost]
    
```

## Union-Find(합집합 찾기)
> 참고 문제: https://www.acmicpc.net/problem/1717
> 여러개의 노드가 존재할 때 두개의 노드가 같은 집합에 속하는지 판별하는 알고리즘
+ 부모를 합칠때 일반적으로 노드의 숫자가 작은 것으로 합침
+ 재귀함수를 이용
```python
# python
# 초기화, n개의 노드
parent = [0] * (n+1)
for i in range(1,n+1):
    parent[i]=i

# 부모노드 가지고오기
def findParent(parent, x):
    if parent[x] == x:
        return x
    else:
        return findParent(parent, parent[x])

# 부모 노드 합치기
def union(parent, x,y):
    _x = findParent(parent, x)
    _y = findParent(parent, y)
    if a < b:
        parent[_y] = _x
    else:
        parent[_x] = y
    parent[_y] = _x

# 같은 부모 노드인지 확인
def checkParent(x, y):
    _x = findParent(parent, x)
    _y = findParent(parent,   y)
    
    if _x == _y:
        return True
    else:
        return False
```

