
### **Elements**

- **요소,물체를 구성 하는 성분**
- **리액트 앱을 구성하는 가장 작은 블록들**

**DOM Elements(더 많은 정보 HTML) -> React Elements (가상)**

**리액트 Elements는 자바스크랩트 객체 형태로 존재**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/ffe2bded-92e6-4dd7-b02e-f1a64b1ce1e7/Untitled.png)

**type이 문자열로 들어가면 DOM**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/4ccc2302-61b5-4ba5-9ae7-c9457d3b85df/Untitled.png)

**리액트 Elements**

**규성요소**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/5cd705fa-c971-4dd5-bc27-535e49f32c76/Untitled.png)

**파라미터**

- **type: 이는 리액트 요소의 타입을 정의합니다. 이는 문자열(HTML 태그의 이름), 함수 또는 클래스가 될 수 있습니다. 예를 들어, 'div', 'span', 'input' 등의 HTML 태그 이름이나 사용자 정의 컴포넌트가 될 수 있습니다.**
- **props: 이는 속성(properties)의 약자로, 컴포넌트에 전달되는 데이터를 의미합니다. 이는 객체 형태로 전달되며, 컴포넌트 내부에서는 이 props를 통해 전달 받은 데이터를 사용할 수 있습니다.**
- **children: 이는 컴포넌트의 '자식'을 의미합니다. 즉, 어떤 컴포넌트가 다른 컴포넌트를 감싸고 있는 경우, 감싸고 있는 컴포넌트는 '부모'가 되고, 감싸진 컴포넌트는 '자식'이 됩니다. 이때 '자식' 컴포넌트는 부모 컴포넌트의 children prop을 통해 접근할 수 있습니다.**

**예시**

```jsx
**React.createElement(
  'div',
  { className: 'my-class' },
  'Hello, world!'
);**
```

```html
**<div className="my-class">Hello, world!</div>**
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/b9a8f3c3-8701-4569-82b6-2dfb80803693/Untitled.png)

**실제로 보이는 것을 기술** 

### **React Elements**

- **불변성**
- **생성 후 children이나 속성을 변경 X**

**Component 붕어빵 틀**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/10c3f725-229d-457c-a7d1-a92c00f1f8c5/Untitled.png)

**렌더링하기**

**Root DOM Node**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/1c4ee78b-3094-4c65-afdc-9682e41296bc/Untitled.png)

**리액트 Elements(가상)를 DOM Elements(실제 화면)에 렌더링 하는 역할**

**업데이트 ?**

- **Elements를 변경하는 것이 아니라 새로운 Elements를 생성해서 바꿔 치지 하는 것**

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/1e0f1294-2f71-4979-bd73-f986c3316bf5/Untitled.png)

실습

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/1134223b-b6aa-49e8-a95c-9446dbd023fb/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/65ea0ec1-adbf-4b7e-9046-e453edbe42f3/f5ab0443-e21c-428d-88b2-de86803871c9/Untitled.png)
