# 투 포인터, 슬라이딩 윈도우
> 참고: http://blog.naver.com/PostView.nhn?blogId=kks227&logNo=220795165570

# 투 포인터
> 문제: https://www.acmicpc.net/problem/2003
+ O(n)을 갖는다.

```python
if __name__ == '__main__':
    N, k = map(int, input().split())

    mylist = list(map(int, input().split()))
    l,r,mysum,result = 0,0,0,0

    while(1):
        
        if mysum >= k:
            mysum -= mylist[l]
            l += 1
        elif r == N:
            break
        else:
            mysum += mylist[r]
            r += 1
        if mysum == k:
            result += 1
        
    print(result)
```

```python
for start in range(n):
    while summary < m and end < n:
        summary += data[end]
        end += 1
    if summary == m:
        result += 1
    summary -= data[l]
print(result)
