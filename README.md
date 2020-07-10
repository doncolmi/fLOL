# FLOL

---

롤 관련 그룹 생성 및 유저 조회

Lang : JavaScript, Node.js
Framework : Node.js Express, Vue
ORM : Mongoose
DB : MongoDB

반응형 적용되어 있습니다.(현재 메인페이지만)
스마트폰 , 패드 , 일반 컴퓨터(1920x1080), 큰 모니터(height 1300이상)

## 프로젝트 정보

---

### Nodejs Express 서버(/win)

---

- **설치**

    `/win/.env`에서 환경변수 설정 후 `npm install`로 모듈 설치 `npm start`로 서버 실행

    - `/win/.env`
    (/win/.env.template 파일을 .env로 복사해 사용)

    ```
    # PORT
    # default PORT is 15000
    PORT=원하는 포트 번호

    # FOR LOL API
    KEY=자신의 롤 개발 API

    # MONGO
    ID = 몽고DB계정ID
    PASSWORD = 몽고DB계정PW
    DBPORT = 몽고DBPORT # default PORT is 27017
    DB = 몽고DB주소 # default db is localhost
    DBNAME = 몽고DB이름

    ```

- **API**
    - user 관련

        GET "/user/:name" - 유저 조회 및 저장

        PUT "/user/:name" - 유저 정보 갱신
    - group 관련

        POST "/group" - 그룹 생성

        GET "/group/:name" - 그룹 조회

        PUT "/group/:name" - 그룹 수정

        DELETE "/group/:name - 그룹 삭제
    - toast 관련
        GET "/toast/:name - 토스트 데이터 조회

### Vue 서버(/front)

---

- **설치**

    `/front/.env`에서 환경변수 설정 후 `npm install`로 모듈 설치 `npm run dev`로 서버 실행

    - `/front/.env`
    (/front/.env.template 파일을 .env로 복사해 사용)

    ```
    # Your Nodejs Express Server URI
    VUE_APP_LOCAL_URI=위에서 Nodejs Express 서버 실행한 주소와 포트

    ```

- **API**


    `/user/:name` - user 조회
    `/search` - search 메인
    `/group` - group
 Bottom Item Add
