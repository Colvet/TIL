# DFS & BFS 알고리즘

## DFS(Depth-First Search)
> 깊이 우선 탐색 알고리즘
+ 미로 탐색. 갈 수 있을때 까지 진행하다 막힐 경우 다시 가장 가까운 갈림길로 돌아와 다시 탐색(Backtracking)
+ 모든 노드를 방문할 경우 사용
+ 재귀 알고리즘
+ 노드 방문 여부를 반드시 검사
+ LIFO(Last in Frist out) 원칙, 스택(stack) 사용, 재귀함수 사용

```py
def dfs(graph, v, visited):
    visted[v] = True
    print(v, end =' ')

    for i in graph[v]:
        if not visited[v]:
            dfs(graph, v, visited)

graph = [[], [2,3,8],[1,7],[1,4,5],[3,5],[3,4],[7],[2,6,8],[1,7]] ## 보통 1로시작하면 첫번쨰 원소는 비워두고 사용

visited = [False] * 8
dfs(graph, 1, visited)
## 1 2 7 6 8 3 4 5

## 음료수 얼려먹기
def dfs(x,y):
    if x<= -1 or x >=n or y <= -1 or y >= m:
        return False
    if graph[x][y] == 0:
        graph[x][y] = 1
        dfs(x-1,y)
        dfs(x,y-1)
        dfs(x+1,y)
        dfs(x,y+1)
        return True
    return False

```
## BFS(Breadth-Frist Search)
> 너비 우선 탐색 알고리즘
+ 루트 노드에서 인접한 노드를 먼저 탐색
+ 두 노드 사이의 경로, 최단 경로를 구할 때 사용
+ 방문 여부를 무조건 검사 해야 함
+ FIFO(First in Frist out) 원칙, 큐(Queue) 사용
```py
from collections import deque

queue = deque()
queue.append() # 삽입
queue.popleft() # 출력
queue.reverse() # 역순으로 바꾸기

음료수 얼려먹기
def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True
    while queue:
        v = queue.popleft()
        print(v, end = ' ')
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True
## 1 2 3 8 7 4 5 6


## 최단거리 구하기
1. 시작
2. 상하좌우를 탐색하면서 바로 옆노드를 방문하며 새롭게 방문하는 노드의 값을 바꾼다
3. bfs 진행

def bfs(x,y):
    queue = deque()
    queue.append((x,y))
    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] == 0:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx,ny))
    return graph[n-1][m-1]

dx = [-1,1,0.0]
dy = [0,0,-1,1]

print(bfs(0,0))

```

## 인접행렬, 인접 리스트로 알고리즘 구현
> 인접 행렬은 가중치를 줄 수 있다. 하지만 인접 리스트의 실행 속도가 빠름

## 18352, 18405,18428