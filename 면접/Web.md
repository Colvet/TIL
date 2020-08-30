## Web

## HTTP 구성
> 클라이언트 - 서버간 프로토콜
### Request-Line(요청라인)
    + 형식: Method URL Version
    + 공백으로 구분함
### Header
+ 형식: Name - Value
+ ":" 으로 구분함
+ Body 및 용청/응답에 대한 정보를 포함
+ General Header(일반헤더): 전송되는 본문과 관련 없고, 요청/응답이 생성된 날 짜 짜 및 시간 등과 같은 Http 통신에 대한 일반적인 정보 포함
+ Request Header
    + 요청한 URL, Method(GET, POST, HEAD), 요청 생성에 사용 된 브라우저 및 기타 정보와 같은 요청에 대한 정보
    + User-Agent: 브라우저 종류(Mozilla)
    + dnsdudcpwp
+ Response Header
    + 컨텐츠에 사용 된 인코딩
    + 서버 시스템에서 응답을 생성하는데 사용 되는 서버 소프트웨어
+ 대부분 해커가 서버에서 어떤 소프트웨어가 사용되고 있는지 알기 어렵도록 서버정보를 숨김. -> 웹서버 구성파일에서 설정
+ Entity Header
    + 실제 메시지
    + 전송중인 HTTP 본문에 대한 정보

### 공백
> Header와 Body 구분
### Body
> 이제 가져올 실제 데이터 컨텐츠/메시지 본문

## Https?
+ Http + Secure Socket Layer

## Http method
> GET, POST, DELETE, PUT은 필수, OPTIONS, HEAD, PATCH는 완성도를 높이기 위해
+ GET
    + 서버에게 Resource를 보내도록 요청하는데 사용
    + URL가 가진정보를 검색하기 위해
+ POST
    + Server에 Input Data를 보내기 위함
    + Update 용
+ DELETE
    + Resource를 삭제
    + 항상 보장되지는 않는다
+ PUT
    + 서버의 Resource에 Data를 저장하기 위한용도
    + Create 용

+ OPTIONS
    + 현재 End-point가 제공 가능한 API Method를 응답한다
    + ex) 요청: OPTIONS /user/hak 응답: Allow: GET,PUT, DELETE, OPTIONS, HEAD
+ HEAD
    + 요청에 대한 Header 정보만 응답한다. Body가 없다
+ PATCH
    + Resource의 일부를 수정할 때는 PATCH가 목적에 맞는 method

## CORS(Cross-Origin Resource Sharing)
> 추가적인 HTTP header를 사용해서 애플리케이션이 다른 origin의 리소스에 접근할 수 있도록 하는 메커니즘을 말합니다. 하지만 다른 origin에서 내 리소스에 함부로 접근하지 못하게 하기 위해 사용된다.

