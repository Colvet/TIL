## 그래프

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
# 루트 노트를 찾을때 까지 재귀 호출
    if parent[x] != x:
        parent[x] = findParent(parent, parent[x])
    return parent[x]

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
    _y = findParent(parent, y)
    
    if _x == _y:
        return True
    else:
        return False
```


## 크루스칼 알고리즘
+ 대표적인 최소 신장 트리 알고리즘
1. 간선 데이터를 비용에 따라 오름차순으로 정렬
2. 간선을 하나씩 확인하며 현재의 간선이 사이클 발생하는지 확인
    + 사이클x -> 최소 신장 트리에 포함
    + 사이클o -> 신장 트리 포함X
3. 모든 간선에 대하여 2번의 과정을 반복

## 위상 정렬
+ 진입차수(Indegree): 특정한 노드로 들어오는 간선의 갯수
+ 진출차수(Outdegree): 특정한 노드에서 나가는 간선의 개수
1. 진입차수가 0인ㄷ 모든 노드를 큐에 넣는다
2. 큐가 빌 때까지 다음의 과정을 반복한다.
    + 큐에서 원소를 꺼내 해당 노드에서 나가는 간선을 그래프에서 제거한다
    + 새롭게 진입차수가 0이 된 노드를 큐에 넣는다

+ 위상 정렬은 DAG에 대해서만 수행할 수 있다.(DAG: Driect Acycli Graph: 순환하지 않는 방향 그래프)
+ 모든 원소를 방문하기 전에 큐가 빈다면 사이클이 존재한다고 판단
    + 사이클에 포함도니 원소 중에서 어떠한 원소도 큐에 들어가지 못한다
```py
indegree = [0] * (v+1)
graph = [[] for i in range(v+1)]

for _ in range(e):
    a,b, = map(int, input().split())
    graph[a].append(b)
    indegree[b] += 1

def topology_sort():
    result = []
    q = deque()
    for i in range(1, v+1):
        if indegree[i] == 0:
            q.append(i)
    while q:
        now = q.popleft()
        result.append(now)
        for i in graph[now]:
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)
    for i in result:
        print(i, end =' ')
```