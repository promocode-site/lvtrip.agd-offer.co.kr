# 블로그 폴더 설명 (lvtrip.agd-offer.co.kr)

## 이 폴더가 블로그 폴더입니다

`_post-template.html` 이 들어 있는 폴더가 **블로그 폴더**입니다.
허브는 레포에서 `_post-template.html` 을 찾아 그 폴더를 블로그 폴더로 쓰면 됩니다.
레포마다 위치가 다를 수 있으니 폴더 경로를 미리 정해 두지 말고 이 파일을 찾아서 판단하세요.

대표 이미지는 **블로그 폴더와 같은 높이에 있는 `images` 폴더**에 넣습니다.
(`_post-template.html` 이 `<블로그폴더>/` 에 있으면 이미지는 `<블로그폴더>/../images/` 입니다.)

## 글 파일을 어디에 만들고, 주소가 어떻게 되는지

| 무엇 | 파일 위치 | 웹 주소 |
| --- | --- | --- |
| 목록 페이지 | `<블로그폴더>/index.html` | `/blog/` |
| 글 페이지 | `<블로그폴더>/{slug}/index.html` | `/blog/{slug}/` |
| 스타일 | `<블로그폴더>/blog.css` | `/blog/blog.css` |
| 대표 이미지 | `<블로그폴더>/../images/파일명` | `/images/파일명` |

예를 들어 슬러그가 `agoda-coupon` 이면
파일은 `<블로그폴더>/agoda-coupon/index.html` 로 저장하고,
주소는 `https://lvtrip.agd-offer.co.kr/blog/agoda-coupon/` 가 됩니다.

HTML 안의 경로는 항상 `/blog/...`, `/images/...` 처럼 `/` 로 시작하는 절대경로로 씁니다.

## 발행 순서

1. `_post-template.html` 을 읽는다.
2. 아래 **치환 표시**를 값으로 바꾼다.
3. `<블로그폴더>/{slug}/index.html` 로 저장한다.
4. `posts.json` 의 `posts` 배열 맨 앞에 새 글 정보를 넣고 `updated` 를 오늘 날짜로 바꾼다.
5. `_list-template.html` 의 `{{items}}` 자리에 글 카드 HTML을 이어붙여 `<블로그폴더>/index.html` 로 저장한다.
6. 레포에 `sitemap.xml` 이 있으면 `</urlset>` 바로 앞에 새 글 `<url>` 을 추가한다.
   (`sitemap.xml` 이 없는 레포는 코드가 자동으로 만들고 있으니 `posts.json` 만 갱신하면 됩니다.)

## 글 템플릿 치환 표시

| 표시 | 넣을 값 | 예 |
| --- | --- | --- |
| `{{title}}` | 글 제목 | 아고다 10% 할인코드 정리 |
| `{{description}}` | 요약 (meta description) | 최신 아고다 할인코드를 모았습니다. |
| `{{date}}` | 사람이 보는 날짜 | 2026년 9월 23일 |
| `{{date_iso}}` | 기계용 날짜 | 2026-09-23 |
| `{{image}}` | 대표 이미지 주소 | /images/agoda-coupon.jpg |
| `{{body}}` | 본문 HTML | `<p>...</p><h2>...</h2>` |
| `{{canonical}}` | 글의 정식 주소 | https://lvtrip.agd-offer.co.kr/blog/agoda-coupon/ |
| {{related}} | 다른 글 링크 <li> 들 | <li><a href="/blog/다른글">제목</a></li> |
| {{siteName}} | 헤더 로고 자리에 쓸 사이트 이름 |  |

## 목록 템플릿 치환 표시

| 표시 | 넣을 값 |
| --- | --- |
| {{items}} | 글 카드 <li> 들을 이어붙인 HTML |
| {{siteName}} | 헤더 로고 자리에 쓸 사이트 이름. posts.json 의 siteName 값을 그대로 넣습니다 |

글 카드 `<li>` 하나의 형태는 `_list-template.html` 맨 위 주석에 그대로 적어 두었습니다.
카드 안에서도 `{{title}}` `{{description}}` `{{date}}` `{{image}}` `{{slug}}` 를 씁니다.

## posts.json 항목

| 키 | 설명 |
| --- | --- |
| site | 사이트 도메인 |
| siteName | **헤더 로고 자리에 보이는 이름**. 지금은 `. 이 값만 고치면 목록·글 페이지 모두 바뀝니다 |
| `baseUrl` | `https://` 로 시작하는 사이트 주소 |
| `postUrlPattern` | 글 주소 형태. 이 레포는 `/blog/{slug}/` |
| `updated` | 마지막으로 글을 발행한 날짜 |
| `posts` | 글 목록 배열 (최신 글이 맨 앞) |

`posts` 배열의 글 하나:

| 키 | 설명 | 예 |
| --- | --- | --- |
| `title` | 글 제목 | 아고다 10% 할인코드 정리 |
| `slug` | 주소에 쓰는 이름 (영문 소문자·숫자·하이픈) | agoda-coupon |
| `date` | 발행일 (YYYY-MM-DD) | 2026-09-23 |
| `description` | 요약 | 최신 아고다 할인코드를 모았습니다. |
| image | 대표 이미지 주소 | /images/agoda-coupon.jpg |
| 
oindex | 있으면 검색에서 제외된 글. 샘플 글에만 붙어 있습니다 |

## 샘플 글에 대해

`blog-start` 는 64개 사이트에 똑같이 들어 있는 샘플입니다.
내용이 같아 검색에서 유사문서로 걸릴 수 있어, **샘플 글 페이지에만**
`<meta name="robots" content="noindex, follow">` 를 넣어 두었고 sitemap 에도 넣지 않았습니다.
목록 페이지는 처음부터 검색에 잡히게 두었습니다.

첫 글을 발행할 때 허브가 할 일:

1. 새 글을 만들고 `posts.json` 에 추가한다. 새 글에는 `noindex` 를 넣지 않는다.
2. 샘플 글 폴더(`blog-start`)는 지워도 되고, 둬도 됩니다.
   두는 경우 샘플 글의 `noindex` meta 줄은 그대로 두세요.
   샘플 글을 진짜 글로 바꿔 쓸 때만 그 줄을 지우면 됩니다.
## 디자인

- 포인트 색: **#0E86D4** (sky-deep) — `blog.css` 맨 위 `--blog-point`
- 글꼴은 Pretendard 를 CDN 에서 불러옵니다. 본문 17px, 줄간격 1.7.
- 색·모서리·여백을 바꾸려면 `blog.css` 맨 위 `:root` 변수만 고치면 됩니다.
- 블로그는 메인 페이지의 CSS·JS 를 전혀 쓰지 않습니다. 메인이 바뀌어도 블로그는 그대로 돕니다.