# FLOL

---

롤 관련 그룹 생성 및 유저 추적

### 프로젝트 정보

---

- **설치**

    `.env`에서 환경변수 설정 후 `npm install`로 모듈 설치 `npm start`로 서버 실행

    - `/.env`

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

        
