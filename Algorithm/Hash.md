# Hash 알고리즘
> Programmers 코딩테스트 연습 > 해쉬

## Hash
> 임의의 크기를 가진 데이터를 고정된 데이터의 크기로 변환       
> python에서는 dict로 처리

## Hash Table
> Key, Value쌍의 데이터로 저장      
> key값을 직접적으로 배열의 인덱스로 사용

## 완주하지 못한 선수
> 출처: https://programmers.co.kr/learn/courses/30/lessons/42576

```python
import collections
li = ["a","b","c","a","b"]
li2 = ["a","b","c"]
my_dict = collections.Counter(li)
my_dict2 = collections.Counter(li2)

print(my_dict)
# Counter({'a': 2, 'b': 2, 'c': 1})

## 중요. 같은값 뺴기 가능.
print(my_dict - my_dict2)
#C ounter({'a': 1, 'b': 1})

```

## 전화번호 목록
> 출처: https://programmers.co.kr/learn/courses/30/lessons/42577

## str.startswith(), str.endswith()함수
> 첫문자, 마지막 문자 같은지 여부 확인할때 사용     
> 찾고자하는 입력값이 리스트, set이라면 tuple로 변환
```python
choice = ['http:','https:']

url ='http://www.google.com'

print(url.startswith(tuple(choice)))
# true

```

## 베스트 앨범
> 출처: https://programmers.co.kr/learn/courses/30/lessons/42579

```python
import operator
## 2번째 원소로 정렬
best_genre = sorted(best_genre.keys(), key=(lambda best_genre: best_genre[1]), reverse=True)
op = sorted(best_genre.items(), key = operator.itemgetter(1), reverse=True)

## 두번째 원소로 내림차순, 첫번쨰 원소로 오름차순
s = sorted(tmp.items(), key = operator.itemgetter(1), reverse=True)
sorted(s, key = operator.itemgetter(0))
for t in s[:2]:

또는

a2 = sorted(a.items(), key = lambda x: (x[1],x[0]))


```
