// 업데이트 내역 · 구조화 데이터 날짜 — 배포하는 날 lastUpdated와 dateModified만 바꾸면 된다.
// (사이트맵 메인 lastmod는 public/sitemap.xml 에서 같은 날짜로 맞춘다)
export const lastUpdated = "2026-09-27"; // 화면의 "최종 업데이트"
export const dateModified = "2026-09-27T17:46:00+09:00";
export const datePublished = "2026-03-31T13:28:53+09:00";

export const heading = "트립닷컴 쿠폰 업데이트 내역";
export const accent = "#0E86D4";
export const siteUrl = "https://lvtrip.agd-offer.co.kr/";
export const publisher = { "@type": "Organization", name: "트립닷컴 쿠폰", url: siteUrl };

export type UpdateLogEntry = { date: string; text: string };
export const entries: UpdateLogEntry[] = [
  {
    "date": "2026-09-01",
    "text": "TRIPH3F·GNVGXDXJQK·VSZZETGULJ·TRIPCAR8 등 할인코드 유효기간 9월 30일까지로 연장"
  },
  {
    "date": "2026-08-01",
    "text": "TRIPH3F·GNVGXDXJQK·VSZZETGULJ·TRIPCAR8 등 할인코드 유효기간 8월 31일까지로 연장"
  },
  {
    "date": "2026-07-02",
    "text": "TRIPH3F·GNVGXDXJQK 등 할인코드 유효기간 7월 30일까지로 연장, 태국 항공권 GNVGXDXJQK 탑승 기간 2027년 7월 30일까지로 변경"
  },
  {
    "date": "2026-06-01",
    "text": "토스페이 항공권 5% TOSSF05·호텔 5% TOSSH05 할인코드 추가(최대 6만원), 기존 할인코드 유효기간 6월 30일까지로 연장"
  },
  {
    "date": "2026-04-25",
    "text": "TRIPH3F·GNVGXDXJQK 등 할인코드 유효기간 5월 31일까지로 연장"
  },
  {
    "date": "2026-03-31",
    "text": "TRIPH3F·GNVGXDXJQK·VSZZETGULJ 등 할인코드 11개 게시"
  }
];

// 메인 WebPage 구조화 데이터에 넣을 날짜·발행처
// 발행처는 SchemaOrg 에 원래 있던 값을 그대로 쓴다 (덮어쓰지 않음)
export const pageDates = { datePublished, dateModified };
