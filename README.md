<div align="center">
  
![image](https://github.com/user-attachments/assets/ece18c76-21ef-409d-aa82-435198a66c1a)

</div>

</br>

# 🌊 SWIM 360
> 24.12.2 - 24.12.27 2차 미니프로젝트 <br/>
> 팀명: KBS-WIN <br/>
> 팀원: 김지균, 김혜빈, 반재영, 신명희

</br>

## 👙 서비스 소개
`스타일과 기능을 모두 중시하는 수영인들을 위한 수영복 쇼핑몰`
<br/>
<br/>
✔️ 3D로 수영복을 회전하고 확대/축소하여 상세히 확인할 수 있는 기능 제공
- 외부 환경에 따라 달라지는 제품의 외관 확인 가능
- 모든 제품의 디자인 색상, 소재를 디테일하게 확인 <br/>

✔️ 기존의 2D 이미지로는 확인이 어려웠던 디테일을 제공
- 구매 결정을 더 쉽게 내리도록 도움
- 반품률 감소 및 고객 만족도 향상 기대


<br/>

## 🖥️ 미리보기

### PC.ver
<table>
  <tr align="center">
    <td>메인 페이지</td>
    <td>상품 목록</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/00fa36f7-4990-409a-8557-84e06886dd1a"/></td>
    <td><img src="https://github.com/user-attachments/assets/c64769b8-c477-467f-a936-2dfed00f1d36"/></td>
  </tr>
  <tr align="center">
    <td>상품 상세 페이지</td>
    <td>상품 구매</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/86234bb7-2b49-426c-96e5-7edd854acd76"/></td>
    <td><img src="https://github.com/user-attachments/assets/db1f6250-4e58-44c6-8156-60678adf5770" /></td>
  </tr>
  <tr align="center">
    <td>회원 페이지</td>
    <td></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/f5d12e15-5383-40bd-9416-0e9f5c0e5c73"/></td>
    <td></td>
  </tr>
</table>

### Mobile.ver
<table>
  <tr align="center">
    <td>메인 페이지</td>
    <td>상품 목록</td>
    <td>상품 상세 페이지</td>
    <td>상품 구매</td>
    <td>회원 페이지</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/273f100e-9830-49b7-b0be-e1c8cc199f46"/></td>
    <td><img src="https://github.com/user-attachments/assets/f9fc5c6c-48c7-4520-b57e-25fd88424af5"/></td>
    <td><img src="https://github.com/user-attachments/assets/28defd3c-c66e-45f9-ba98-4f928a874aae"/></td>
    <td><img src="https://github.com/user-attachments/assets/c4e1fb89-3eda-4a07-896b-c6d47444f87e"/></td>
    <td><img src="https://github.com/user-attachments/assets/8501d5bd-bf3a-4b36-bd1a-be4ba3d53d93"/></td>
  </tr>
</table>
<br/>

## 🧑‍💻 실행 방법

### [🌎 페이지 방문 🔗](http://swim360-bucket.s3-website.ap-northeast-2.amazonaws.com/)
#### 로컬에서 실행하기
`backend`
```
//.env 파일 작성
DB_DATABASE="" //local database 이름
DB_USERNAME="root"
DB_PASSWORD="" //설정한 비밀번호
DB_HOSTNAME="localhost"
DB_DIALECT="mysql"
DB_PORT="mysql=3306"

# Express 서버 설정
EXPRESS_PORT=3000
FRONT_URL="http://localhost:5173"

//실행
cd backend
npm run start
```
`frontend`
```
//.env 파일 작성
VITE_BASE_URL=http://localhost:3000

//실행
cd frontend
npm run start
```
### [🎨 피그마 작업 🔗](https://www.figma.com/design/wiSvWBt1ldrdNDoHLvzqGf/%EC%87%BC%ED%95%91%EB%AA%B0%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=14-48&node-type=canvas&t=e4X4DnWNPG7ekbZ8-0)

### [🧩 ERD Cloud 🔗](https://www.erdcloud.com/d/DvWFQhFyzGKrwF8HQ)
<a href="https://www.erdcloud.com/d/DvWFQhFyzGKrwF8HQ"><img width="1113" alt="스크린샷 2024-12-26 오후 7 40 25" src="https://github.com/user-attachments/assets/e4501cbd-5386-4b00-9821-e3a51fc68790" /></a>

</br>


## 🔨 기술 스택

### Frontend

<div>
  <img src="https://img.shields.io/badge/HTML-e34c26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-563d7c?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/><br/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Three Fiber-000000?style=for-the-badge&logo=Three.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/>
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white"/>
  <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazones3&logoColor=white" />
</div>

### Backend

<div>
  <img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=Node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" />
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" /><br/>
  <img src="https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white" />
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white" />
</div>

### 3D Modeling
<div>
  <img src="https://img.shields.io/badge/blender-E87D0D?style=for-the-badge&logo=blender&logoColor=white"/>
</div>

### 협업 도구

<div>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white" />
</div>

<br/>

## 👥Team Member

<table>
  <tr align="center">
    <th>Name</th>
    <td>김지균 🐳</td>
    <td>김혜빈 🐠</td>
  </tr>
  <tr style="white-space: nowrap; font-size:13px">
    <th>Role</th>
    <td>
      <p>🎨 주문 페이지 UI <br/>
        🎨 로그인, 회원가입 UI<br/>
        🎨 아이디/비밀번호 찾기 UI <br/>
        🛠️ 주문 페이지 상품 불러오기 <br/>
        🛠️ 주문/결제 내역 DB 등록하기<br/>
        🛠️ 주소찾기 api<br/>
        🛠️ 결제 정보 입력 검증 </p>
    </td>
    <td >
      <p>🎨 상품 상세 페이지, 상품 리뷰 UI<br/>
        🎨 상품 3D 모델링<br/>
        🛠 상품 3D 텍스처 변경 기능 구현 <br/>
        🛠 상품 상세정보 불러오기<br/>
        🛠️ 선택한 상품 사이즈, 수량, 총가격 구현<br/>
        🛠 상품 리뷰 불러오기<br/>
        🛠 리뷰 상세보기 모달</p>
    </td>
  </tr>
  <tr>
    <th>GitHub</th>
    <td><a href="https://github.com/kimjigyun">kimjigyun</a></td>
    <td><a href="https://github.com/hyebinkimsdf">hyebinkimsdf</a></td>
  </tr>
  <tr align="center" >
    <th>Name</th>
      <td>반재영 🐡</td>
      <td>신명희 🐬</td>
  </tr>
  <tr style="white-space: nowrap; font-size:13px;">
    <th>Role</th>
    <td>
      <p>🎨 메인-헤더, 배너 캐러셀, 베스트 상품 UI<br/>
        🎨 마이페이지-회원정보 수정, 리뷰/포인트 페이지 UI<br/>
        🎨 장바구니 UI<br/>
        🛠️ 메인- 베스트상품 불러오기<br/>
        🛠️ 마이페이지- 리뷰내역 불러오기<br/>
        🛠️ 마이페이지- 주문내역 불러오기<br/>
        🛠️ 로그인, 로그아웃</p>
    </td>
    <td>
      <p>🎨 상품 목록 UI<br/>
      🎨 마이페이지-메인, 주문내역 UI<br/>
      🛠️ 카테고리별 상품목록 불러오기 <br/>
      🛠️ 장바구니-상품 불러오기 <br/>
      🛠️ 장바구니-선택상품 삭제<br/>
      🛠️ 장바구니-선택상품 구매로 연동<br/>
      🪜 백엔드 환경설정</p>
    </td>
  </tr>
  <tr>
    <th>GitHub</th>
    <td><a href="https://github.com/baaanjy">baaanjy</a></td>
    <td><a href="https://github.com/mh0223">mh0223</a></td>
  </tr>
</table>

</br>


## 🔍 상세 페이지

### 1. [프로젝트 일정 🔗](https://github.com/ormcamp-fe-3rd/swim360/wiki/1.-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9D%BC%EC%A0%95)

### 2. [팀 컨벤션 🔗](https://github.com/ormcamp-fe-3rd/swim360/wiki/2.-%ED%8C%80-%EC%BB%A8%EB%B2%A4%EC%85%98)

### 3. [회의록 🔗](https://github.com/ormcamp-fe-3rd/swim360/wiki/3.-%ED%9A%8C%EC%9D%98%EB%A1%9D)

### 4. [개발 중 문제 및 해결 경험 🔗](https://github.com/ormcamp-fe-3rd/swim360/wiki/4.-%EA%B0%9C%EB%B0%9C-%EC%A4%91-%EB%AC%B8%EC%A0%9C-%EB%B0%8F-%ED%95%B4%EA%B2%B0-%EA%B2%BD%ED%97%98)

### 5. [자체 피드백 🔗](https://github.com/ormcamp-fe-3rd/swim360/wiki/5.-%EC%9E%90%EC%B2%B4-%ED%94%BC%EB%93%9C%EB%B0%B1)

</div>
