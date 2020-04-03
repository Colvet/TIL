# DFS & BFS 알고리즘

## DFS(Depth-First Search)
> 깊이 우선 탐색 알고리즘
+ 미로 탐색. 갈 수 있을때 까지 진행하다 막힐 경우 다시 가장 가까운 갈림길로 돌아와 다시 탐색(Backtracking)
+ 모든 노드를 방문할 경우 사용
+ 재귀 알고리즘
+ 노드 방문 여부를 반드시 검사
+ LIFO(Last in Frist out) 원칙, 스택(stack) 사용

## BFS(Breadth-Frist Search)
> 너비 우선 탐색 알고리즘
+ 루트 노드에서 인접한 노드를 먼저 탐색
+ 두 노드 사이의 경로, 최단 경로를 구할 때 사용
+ 방문 여부를 무조건 검사 해야 함
+ FIFO(First in Frist out) 원칙, 큐(Queue) 사용

## 인접행렬, 인접 리스트로 알고리즘 구현
> 인접 행렬은 가중치를 줄 수 있다. 하지만 인접 리스트의 실행 속도가 빠름

