### **SPA**

- **하나의 페이지로 복잡한 웹사이트를 간단하게 표현**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/f2e801c9-d40b-4f0a-8bf0-b450a5b41c7c/Untitled.png)

**body가 비워져 있다가 동적으로 body를 채운다**

**뼈대 → HTML**

**동적으로 사용 → javaScript**

### javaScript 문법

**자료형**

- **변수의 데이터가 대입되는 시점에 자료형이 결정 (동적 타이핑)**
- **Number, String, Boolean, Null(값이 널), Undefined(값이 지정X), Array**
- **Object(객체)**

**연산자**

- **대입 연산자**
    - **let a = 10;**
- **산술 연산자**
    - **+ - * /  %  **(지수 연산자)**
    - **+=  -=   *=   /=**
- **증가,감소 연산자 (++, --)**
    - **a++,++a,--b,b--**
- **비교 연산자**
    - **<,>,<=,>=**
    - **==,!=**
    - **===, !== (자료형 까지 비교)**
    - **&&(And),||(OR)**
    - **a ? 1 : 2 (삼항 연산자)**

**함수** 

```jsx
function sum(a,b) {
	return a+b;
}
```

---

### Node.js

**자바스크립트로 네트워크 애플리케이션을 개발할 수 있게 도와주는 환경**

- **npm**
    - **패키지 매니저**
    - **버전,설치,삭제**

### React란

**사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리**

- **라이브러리 = 자주 사용되는 기능들을 모아 놓은 것**

- **사용자 인터페이스 = 사용자와 컴퓨터 프로그램이 상호작용**
- **UI 라이브러리 = 화면을 만들기 위한 기능을 모아 놓은 것**

**프레임 워크, 라이브러리**

- **라이브러리 = 제어 권한 → 개발자**
- **프레임 워크 = 제어 권한 → 자신**

**리엑트 장점**

- **빠른 업데이트 (Virtual DOM)**
- **컨포넌트(재사용) = 구성요소**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/88409915-801c-487e-9be4-dda9c055462f/Untitled.png)

---

**CRA(create-react-app)**

**npx create-react-app test**

- **React 애플리케이션을 생성하기 위한 명령어**
- **`test`라는 이름의 새로운 React 프로젝트가 생성**

## 리엑트 생성

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/2c52bc65-2122-4fb8-bdb6-fce1deecdc61/image.png)

**명령어**

- **cd (경로 변경)**
- **npm start (애플리케이션 실행)**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/51546a6f-6c1b-4951-b5a4-b7ce061789d7/image.png)

### JSX(자바스크립트와 HTML 통합)

**JavaScript XML의 약자**

**예제**

```jsx
const hi = <h1>Hello, world!</h1>;
```

- **JSX 코드는 JavaScript 코드 안에서 사용되며, HTML과 유사한 구조를 가지고 있습니다.**

```jsx
const hi = React.createElement('h1', null, 'Hello, world!');
```

**JSX는 React.createElement 함수를 사용하지 않고 작성 간결해짐**

**장점**

- **간결해짐**
- **가독성 향상 (의미 확인 쉬움)**
- **보안성 향상**

**JSX 사용법**

**{} → 자바스크립트 변수나 함수 사용가능**

```jsx
const name = 'John Doe';
const greeting = <h1>Hello, {name}!</h1>;
```

자식 정의

```jsx
const element = (
	<div>
			<h1>Hi</h1>
			<h2>Hello</h1>
	</div>
);
```

실습

file

- Book.jsx
- Library.jsx

```jsx
import React from "react";

function Book(props){
    return (
        <div>
            <h1>'이 책 이름은 &{props.name}입니다.</h1>
            <h2>'이 책은 총&{props.page}입니다.</h2>
        </div>
    );
}

export default Book;
```

```jsx
import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="파이썬" page={300} />
            <Book name="리엑트" page={50} />
            <Book name="C" page={100} />
        </div>
    );
}

export default Library;
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/79105346-93f2-4f13-9c11-20f10c822255/Untitled.png)

npm start = 웹 브라우저에 실행

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/cc7a43d0-bdc0-4f12-8c59-8e01409e1421/image.png)

1. **중괄호 `{}` 안에 JavaScript 표현식을 삽입**
2. **컴포넌트의 라이프사이클 메서드 = 리액트 컴포넌트가 생성될 때부터 소멸될 때까지의 다양한 단계에서 호출되는 메서드들을 말합니다. (Hook)**
3. **상태(state)와 속성(props)의 개념**
