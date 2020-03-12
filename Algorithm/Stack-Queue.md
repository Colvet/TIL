# Stack 과 Queue

## Stack
> LIFO (Last in Frist Out)  
+ 예시: 비행기 탑승
+ pop, push 사용

## Queue
> FIFO (First in Frist Out)
+ 예시: 줄서기

## 탑
> 출처: https://programmers.co.kr/learn/courses/30/lessons/42588

```python
list.reverse()
list[::-1]
```

## 쇠막대기
> 출처: https://programmers.co.kr/learn/courses/30/lessons/42585


```python
def solution(arrangement):
    answer = 0
    bar = []

    for tmp, a in zip(arrangement[:-1],arrangement[1:]):
        if tmp == '(':  # 상황별로 나누어서 생각해보기
            if a == '(':
                bar.append(1)
                answer += 1
            elif a == ')':
                answer += len(bar)
        elif tmp == ')' and a ==')':
            bar.pop()
    return answer
```
