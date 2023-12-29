# API 설계

## 1. 회원 API

### 1. 회원가입 API

- Method : POST

- URL : /join

- HTTP status code : 성공 - 201, 실패 - 404

- Request Body :

  ```js
  {
    email: "사용자가 입력한 이메일",
    password: "사용자가 입력한 비밀번호",
    password확인: "사용자가 재입력한 비밀번호"
  }
  ```

- Response Body :

  ```js
  {
    message: "회원가입에 성공했습니다.";
  }
  ```

### 2. 로그인 API

- Method : POST

- URL : /login

- HTTP status code : 성공 - 200, 실패 - 404

- Request Body :

  ```js
  {
    email: "사용자가 입력한 이메일",
    password: "사용자가 입력한 비밀번호"
  }
  ```

- Response Body : JWT Token

### 3. 비밀번호 초기화 API

#### 3-1. 초기화 요청

해당 이메일이 db 에 있는 지 확인

- Method : POST

- URL : /reset

- HTTP status code : 성공 - 200, 실패 - 400?

- Request Body :

  ```js
  {
    email: "사용자가 입력한 이메일";
  }
  ```

- Response Body :

  비밀번호 초기화 화면으로 리다이렉트 해줘야 하는거 아님??

#### 3-2. 비밀번호 초기화(수정)

- Method : PUT

- URL : /reset

- HTTP status code : 성공 - 200, 실패 - 400?

- Request Body :

  ```js
  {
    password: "사용자가 입력한 비밀번호",
    password확인: "사용자가 재입력한 비밀번호"
  }
  ```

- Response Body :

## 2. 책 API

### 1. 전체 도서 조회

※ 이미지 경로, 8개씩 나눠 보여줘야하는것 나중에

- Method : GET

- URL : /books

- HTTP status code : 성공 - 200, 실패 - 404

- Request Body :

- Response Body :

  ```js
  [
    {
      id: "도서 id",
      title: "도서 이름",
      summary: "요약 설명",
      author: "도서 작가",
      price: "가격",
      likes: "좋아요수",
      pubDate: "출간일",
    },
    // 여러개 .....
  ];
  ```

### 2. 개별도서 조회

※ 이미지 경로 아직 고려 안함

- Method : GET

- URL : /books/{:bookId}

- HTTP status code : 성공 - 200

- Request Body :

- Response Body :

  ```js
  {
    id: "도서 id",
    title: "도서 이름",
    category : "카테고리",
    fomat : "포맷",
    isbn : "isbn",
    summary: "요약 설명",
    description : "상세설명",
    author: "도서 작가",
    pages : "쪽수",
    index : "목차",
    price: "가격",
    likes: "좋아요 수",
    liked : boolean,
    pubDate : "출간일"
  }
  ```

### 3. 카테고리별 전체, 신간 도서 목록 조회

※ 이미지 경로 아직 고려 안함

※ 카테고리 ID 는 어떻게 알고 보내줌? DB 정규화하고 그 id 값을 넣어야하지 않을까

new 가 true 면 신간 카테고리별 (출간일 30일 이내)

false 면 카테고리 전체

- Method : GET

- URL : /books?categoryId={categoryId}&new={boolean}

- HTTP status code : 성공 - 200, 실패 - 404

- Request Body :

- Response Body :

  ```js
  [
    {
      id: "도서 id",
      title: "도서 이름",
      summary: "요약 설명",
      author: "도서 작가",
      price: "가격",
      likes: "좋아요수",
      pubDate: "출간일",
    },
    // 여러개 .....
  ];
  ```

## 3. 좋아요 API

### 1. 좋아요 추가

기존에 있는 행에 수정을 하는거임

- Method : PUT

- URL : /likes/{:bookId}

- HTTP status code : 성공 - 200

- Request Body :

- Response Body :

### 2. 좋아요 취소

※ DB 설계 하면서 다시 한번 보자

- Method : PUT

- URL : /likes/{:bookId} ???? URL 이 겹침

- HTTP status code : 성공 - 200

- Request Body :

- Response Body :

## 4. 장바구니 API

### 1. 장바구니 담기

- Method : POST

- URL : /cart

- HTTP status code : 성공 - 201

- Request Body :

  ```js
  {
    bookId : "도서 id",
    count : 도서 수량
  }
  ```

- Response Body :

### 2. 장바구니 조회

- Method : GET

- URL : /cart

- HTTP status code : 성공 - 200

- Request Body :

- Response Body :

  ```js
  [
    {
      cartltemId : "장바구니 도서 id",
      bookId: "도서 id",
      title: "도서 제목",
      summary: "도서 요약",
      price: "도서 가격",
      count : 도서 수량
    },

    // ..... 여러개
  ];
  ```

### 3. 장바구니 제거

- Method : DELETE

- URL : /cart/{bookId}

- HTTP status code : 성공 - 200

- Request Body :

- Response Body :

## 5. 주문 API

### 1. 장바구니 선택 상품 조회

- Method : GET

- URL : /

- HTTP status code : 성공 - 200

- Request Body :

  ```js

  ```

- Response Body :

  ```js
  [
    {
      cartltemId : "장바구니 도서 id",
      bookId: "도서 id",
      title: "도서 제목",
      summary: "도서 요약",
      price: "도서 가격",
      count : 도서 수량
    },

    // ..... 여러개
  ];
  ```

## 양식

- Method :

- URL :

- HTTP status code :

- Request Body :

- Response Body :
