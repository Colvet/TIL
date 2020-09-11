# Sorting

## Selection Sort(선택정렬)
+ 처리되지 않는 데이터 중에서 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸는 것을 반복한다.
+ O(N**2)
```py
for i in ragne(len(array)):
    min_index = i
    for j in range(i+1, len(array)):
        if array[min_index] > array[j]:
            min_index = j
    array[i], array[min_index] = array[min_index], array[j]
```
## Insertion Sort(삽입정렬)
+ 처리되지 않는 데이터를 하나씩 골라 적절한 위치에 삽입
+ O(N**2)
+ 리스트 데이터가 거의 정렬되어 있는상태라면 매우 빠르게 동작
+ 최선의 경우 O(N)
```py
for i in range(1, len(array)):
    for j in range(i,0,-1): #인덱스 i부터 1까지 1씩 감소
        if array[j] < array[j-1]: #한 칸씩 왼쪽으로 이동
            array[j], array[j-1] = array[j-1], array[j]
        else:
            break
```

## Quick Sorting
+ 기준 데이터(Pivot)를 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꾸는 방법 
+ 가장 많이사용되는 알고리즘
+ 평균 O(NlogN)
+ 최악의 경우 O(N**2): 어떤경우 최악일까?
1. 왼쪽에서 Pivot 보다 큰 데이터 선택, 오른쪽에서는 Pivot보다 작은 데이터 선택 이후 두 데이터 바꾸기
2. 좌우가 엇갈릴경우 Pivot과 작은 데이터의 위치를 서로 변경
3. 초기 Pivot보다 왼쪽에 있는 데이터는 모두 Pivot 보다 작고 오른쪽은 Pivot보다 크다. -> 피벗을 기준으로 데이터 묶음을 나누는 작업을 분할(Divide), Partition이라고 한다

## Bubble Sort

## Merge Sort

