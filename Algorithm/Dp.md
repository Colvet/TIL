# Dynamic Programming(동적 프로그래밍)
> 큰 문제를 작은 문제로 나눠서 푸는 알고리즘, 1,2에 해당되면 Dp로 해결
1. 최적 부분 구조: 큰 문제를 작은 문제로 나눌 수 있다
2. 중복되는 부분 문제: 동일한 작은 문제를 반복적으로 해결


## Meomozation
> 작은 문제의 결과값이 항상 같기때문에 작은 문제의 값들을 저장      
> 다음 계산을 할때 저장된 값들을 불러 중복을 없애 시간 복잡도를 줄임    
> 값을 기록해 놓는다는 점에서 캐싱(Caching)이라고도 함

## Tip
+ Dp(1), Dp(2), Dp(3)... 을 구해 점화식을 세운후 알고리즘 작성
+ top-down, bottom-up 방식, 기본적으로 top-down방식의 시간이 더 걸린다고 알려져 있음
+ Top-down: 재귀함수, Bottom-up: For문

## 피보나치 수열
> 대표적인 Dp 문제
+ f(x) = f(x-1) + f(x-2)

```py
def fibo(x):
    if x == 1 or x == 2:
        return 1
    return fibo(x-1) + fibo(x-2)
```

## 1로 만들기
> 출처: https://www.acmicpc.net/problem/1463

```python
if __name__ == "__main__":
    n = int(input())
    memo = [0,0,1,1]
    
    for i in range(4, n+1):
        memo.append(memo[i-1] + 1)

        # 2 와 3의 공약수 일 경우 둘다 계산을 해 주어야 한다.
        if i % 2 == 0:
            memo[i] = min(memo[i//2] + 1, memo[i])
        if i % 3 == 0:
            memo[i] = min(memo[i//3] + 1, memo[i])
    print(memo[n])
```

## 계단 오르기
> 출처: https://www.acmicpc.net/problem/2579

```python
if __name__ == "__main__":
    N = int(input())
    score = []
    Dp = [0] * 300

    for _ in range(N):
        score.append(int(input()))
    
    for i in range(N):
        if i == 0:
            Dp[0] = score[0]
        elif i == 1:
            Dp[1] = score[0] + score[1]
        elif i == 2:
            Dp[2] =  max(score[0] + score[2], score[1] + score[2])
       ## 마지막칸은 항상 밟아야 되며 3칸이상 연속으로 밟을 수 없다.
        else:
            Dp[i] = max(Dp[i-2] + score[i], Dp[i-3] + score[i] + score[i-1] )
    print(Dp[N-1])
    
```
## 타일 장식물
> 출처: https://programmers.co.kr/learn/courses/30/lessons/43104
+ 규칙 찾기 dp[i-2], dp[i-1](변의 길이)

## 정수 삼각형
> 출처: https://programmers.co.kr/learn/courses/30/lessons/43105

```python
## 규칙 찾기가 핵심
def solution(triangle):
    for row,t in enumerate(triangle[1:]):
        for i,x in enumerate(t):
            # 첫번째 원소는 항상 첫번쨰 원소의 합
            if i == 0:
                triangle[row+1][i] += triangle[row][0]
            # 마지막 원소는 항상 마지막 원소의 합
            elif i == row+1:
                triangle[row+1][i] += triangle[row][-1]
            # row+1 줄의 값의 윗줄 중 큰 값을 가짐
            else:
                triangle[row+1][i] += max(triangle[row][i-1], triangle[row][i])
    return max(triangle[-1])
```

## abbaaao00aabb

## Dp 구현하기

