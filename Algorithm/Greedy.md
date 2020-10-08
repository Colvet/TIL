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



