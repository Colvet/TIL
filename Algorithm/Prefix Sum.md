# Prefix Sum
1. Prefix Sum을 구하여 배열 에 저장
2. 구간합 은 P[R] - P[L-1]


```python
for i in data:
    summary += i
    prefix_sum.append(summary)

left = 3
right = 4
print(prefix_sum[right] - prefix_sum[left-1])
