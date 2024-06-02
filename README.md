# oms-backend

주문관리 백엔드

# 프로젝트 환경 변수

이 프로젝트를 실행하기 위해 필요한 환경 변수 목록입니다. 해당 변수들은 루트 디렉토리의 `.env` 파일에 설정되어야 합니다.

## 환경 변수 목록

- **`DATABASE_URL`**: MySQL접속 URL
  - URL작성방법은 공식문서를 참조하십시오. [바로가기](https://www.prisma.io/docs/orm/overview/databases/mysql)

## 사용 방법

1. 프로젝트 루트 디렉토리에 `.env` 파일을 생성합니다.

2. `.env` 파일에 필요한 환경 변수를 설정합니다.

   ```env
   DATABASE_URL=mysql://johndoe:randompassword@localhost:3306/mydb
   ```

# 프로젝트 실행

개발모드로 실행하려면 환경 변수 설정 후 아래 명령을 입력

```bash
bun install
bunx prisma generate
bun dev
```
