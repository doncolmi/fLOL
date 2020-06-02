# README.MD

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
    LOL_KEY=자신의 롤 개발 API
    ```

- **API**
    - user 관련

        POST "/user" - 유저 등록

        GET "/user/:name" - 유저 조회

        PUT "/user/:name" - 유저 정보 갱신