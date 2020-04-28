# 20년 4월 28일

## 스프링 설정 파일 분리
> 너무 길어지는 설정 파일을 효과적으로 분리하기
+ 기능별로 분리 ex) 데이터베이스, 서비스
+ 파일 이름은 서비스의 이름으로 잘 알아 볼 수 있게 작명

```java
// 방법1 (appCtx1, appCtx2, appCtx3 을 스트링 배열로 입력받음) (대부분 선호함)
String[] appCtxs = {"classpath:appCtx1.xml", "classpath:appCtx2", "classpath:appCtx3.xml"};

GenericXmlApplicationContext ctx = new GenericXmlApplicationContext(appCtxs);

EMSInformationService informationService = ctx.getBean("informationService", EMSInformationService.class);

```

```xml
<!-- 방법2 (applicationContxt.xml 파일에 나머지 설정 파일들 import) -->

<!-- appCtx1.xml 파일 안에 Import -->
<import resource="classpath:appCtx2.xml"/>
<import resource="classpath:appCtx3.xml">
```

## Bean의 범위

## 싱글톤(Singleton)
> 스프링 컨테이너에서 생성된 Bean 객체의 경우 동일한 타입에 대해서는 기본적으로 한 개만 생성되며, getBean() 메소드로 호출될 때 동일한 객체가 반환 된다.


## 프로토타입(Prototype)
> 싱글톤 범위와 반대의 개념
+ 스프링 설정 파일에서 Bean객체를 정의할 때 scope속성을 명시
```xml
<bean id="id" class="classpath:">
    <scope="prototype">
        <constructor-arg ref="injectionBean"/>
        <property name = "injection" ref="injection"/>
</bean>
```

## 기본적으로 싱글톤
> 
```java
GenericXmlApplicationContext ctx = new GenericXmlApplicationContext("classpath:applicationContext.xml");
		
InjectionBean injectionBean = ctx.getBean("injectionBean", InjectionBean.class);

DependencyBean dependencyBean01 = ctx.getBean("dependencyBean", DependencyBean.class);

DependencyBean dependencyBean02 = ctx.getBean("dependencyBean", DependencyBean.class);

if(dependencyBean01.equals(dependencyBean02)) {
    System.out.println("dependencyBean01 == dependencyBean02");
} else {
    System.out.println("dependencyBean01 != dependencyBean02");
}

// 결과
// dependencyBean01 == dependencyBean02

// scope=protoype 을 해주면
// dependencyBean01 != dependencyBean02
```