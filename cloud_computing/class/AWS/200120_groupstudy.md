# 20년 1월 20일

## AWS 공식 문서
> https://docs.aws.amazon.com/ko_kr/

## Amazon EC2 Linux 인스턴스 시작하기
> https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/EC2_GetStarted.html

## NoSQL 테이블 생성 및 쿼리(DynamoDB)
> https://aws.amazon.com/ko/getting-started/tutorials/create-nosql-table/

## Elastic Beanstalk 사용 시작(Platform은 도커로)
> https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/GettingStarted.CreateApp.html

## Amazon EC2에서 애플리케이션의 가용성 향상
> https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/ec2-increase-availability.html
+ 가용성 : 서버, 네트워크 등의 정보시스템이 장애 없이 정상적으로 요청된 서비스를 수행할 수 있는 능력
+ Availability = Uptiome / (Uptime + Downtime)
+ Amazon EC2 Auto Scaling과 Elastic Load Balancing을 사용하여 트래픽 관리

## 사전 조건

1. 두 개 이상의 가용 영역에 있는 퍼블릭 서브넷 하나로 가상 사설 클라우드(VPC)를 생성하였습니다.
2. VPC에서 인스턴스를 시작하였습니다.
3. 인스턴스에 연결하여 인스턴스를 사용자 지정하였습니다. 소프트웨어 및 애플리케이션 설치, 데이터 복사, 추가 EBS 볼륨 연결 등을 예로 들 수 있습니다. 

인스턴스에서 애플리케이션을 테스트하여 인스턴스가 올바르게 구성되었는지 확인하였습니다.

인스턴스에서 사용자 지정 Amazon 머신 이미지(AMI)를 생성하였습니다. 자세한 내용은 Amazon EBS 지원 Linux AMI 생성 또는 인스턴스 스토어 기반 Linux AMI 생성 단원을 참조하십시오.

(선택 사항) 더 이상 필요하지 않은 인스턴스를 종료하였습니다.

필요한 AWS에 대한 액세스 권한을 애플리케이션에 부여하는 IAM 역할을 생성하였습니다. 자세한 내용은 IAM 콘솔을 사용하여 IAM 역할을 생성하려면 다음을 수행합니다. 단원을 참조하십시오.



## Amazon Linux AMI를 사용하여 LAMP 웹 서버 설치
> https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/install-LAMP.html

## Amazon Linux를 통한 WordPress 블로그 호스팅
> https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/hosting-wordpress.html

## WordPress 웹 사이트 시작(Custom AMI:Marketplace 이용)
> https://aws.amazon.com/ko/getting-started/tutorials/launch-a-wordpress-website/