momentum_clone coding project
========================


period : 20230625 => 20230704<br>
languages : html, js, css
반응형 X, 가로버전에 맞춰서 설계, 세로버전 지원 X
--------------------------------

코드 설명
================

### 전체 구조
* index.html하나의 파일에 css 사용해서 각종 요소들 구성
* js폴더를 지정 & js파일들 정리
* img 폴더에 에셋(이미지) 정리

### index.html
* 기본적인 id & body 배움
* "h2", "form","div"등의 태그를 배움
* html에서 js삽입하는 법 배움

### background.js & quote.js
* queryselector를 활용 html 태그 불러옴
* 배경화면을 array를 생성하여 파일명 지정(background.js)
* math.random함수를 사용해서 임의의 파일 지정
* img폴더에 들어있는 jpeg파일을 불러오기

### greeting.js
* 제출할 시에 localstorage에 이름 저장
* "preventDefault"를 사용해 새로고침(기본이벤트)방지
* if문 사용 유저입력창(form)을 css를 활용해서 숨김, 여부 설정

### todo.js
* 유저로 입력받은 텍스트를 object로 localstorage에 저장(단, string화)
* localstorage에 저장된 정보활용 "li" 태그 표현
* li 추가 & 삭제 (동시에 localstorage에서도 동일 동작)

### weather.js
* openweathermap의 API 사용 실시간 위치(도시명), 날씨, 기온정보 등을 JSON으로 불러와 표시
* 초기 API키 불러오는데 어려움 겪음

### 앞으로 할일
* weather.js API키 숨기기 & 작동확인[완료]
* 코드에 주석달기
* css수정(디자인하기)[완료]
* github page or netlify에 호스팅하기[완료]
* 도메인연결


### 참고자료 : [nomadcoder lecture](https://nomadcoders.co/javascript-for-beginners)
