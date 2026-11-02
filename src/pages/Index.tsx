import { Link } from "react-router-dom";
import { Plane, Hotel, Car, Ticket, Star, ArrowRight, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SchemaOrg from "@/components/SchemaOrg";
import CouponCard from "@/components/CouponCard";
import UpdateLog from "@/components/UpdateLog";
import { pageDates } from "@/data/updateLog";

import heroBanner from "@/assets/hero-banner.png";
import couponFlight from "@/assets/coupon-1.webp";
import couponHotel from "@/assets/coupon-2.webp";
import couponCar from "@/assets/coupon-3.webp";
import couponActivity from "@/assets/coupon-4.webp";
import couponNewmember from "@/assets/coupon-newmember.png";
import couponMegasale from "@/assets/coupon-megasale.png";
import couponJapan from "@/assets/coupon-japan.png";
import couponSamsung from "@/assets/coupon-samsung.png";
import couponLotte from "@/assets/coupon-lotte.png";
import comparisonChart from "@/assets/comparison-chart.png";

const AFFILIATE_LINK = "https://app.ac/Iqp4O9293";

const mainCoupons = [
  {
    code: "TRIPFLIGHT26KR",
    discount: "최대 22,000원",
    category: "항공권",
    description: "항공권 첫 예약: 22만원 이상 5천원, 55만원 이상 2만2천원",
    expiry: "2026년 12월 31일",
    image: couponFlight,
    conditions: ["검색엔진에서 직접 검색해 공식 페이지 접속 후 입력", "호텔 이용 이력과 항공권 첫 예약 여부는 별개", "두 할인 구간 합산 불가 · 통화·앱 적용·횟수 미확인"],
  },
  {
    code: "TRIPBH3",
    discount: "종료",
    category: "호텔",
    description: "기존 호텔 할인코드 종료 · 현재 적용 혜택으로 안내하지 않습니다",
    expiry: "2026년 10월 31일 종료",
    image: couponHotel,
    conditions: ["11월 연장 확인 자료 없음", "호텔 신규 쿠폰은 아래 웰컴팩에서 개별 발급 조건 확인"],
  },
  {
    code: "TRIPCAR8",
    discount: "최대 8% 할인",
    category: "렌터카",
    description: "트립닷컴 렌터카 첫 예약 고객 전용",
    expiry: "행사 2026년 12월 31일까지 · 발급 후 90일",
    image: couponCar,
    conditions: ["렌터카 예약 결제 전에 입력", "최소금액·할인 한도·통화·횟수·제외 차량 미확인"],
  },
  {
    code: "GO5",
    discount: "5% 할인",
    category: "액티비티",
    description: "트립닷컴 액티비티 5% 할인코드",
    expiry: "2026년 12월 31일",
    image: couponActivity,
    conditions: ["한국·일본·대만·홍콩·마카오·싱가포르·태국·베트남·인도네시아·말레이시아 지정 상품", "지정 프로모션 경유 · KRW 결제 · 다른 혜택 중복 불가", "최소금액·한도·횟수 미확인 · 취소 시 행사 내 코드 재발행"],
  },
];

const currentCodes = [
  ["항공권 첫 예약", "TRIPFLIGHT26KR", "22만원 이상 5천원 / 55만원 이상 2만2천원", "검색엔진 직접 검색 경유 · 통화·횟수 미확인"],
  ["렌터카 72시간 이상", "TRIPCAR12", "12% · 최대 할인금액 제한 없음으로 안내", "KRW · 전용 제휴 경유 · ID당 1회 · 최소금액 미확인"],
  ["국내외 렌터카", "TRIPCAR26KR", "10% · 최대 40,000원", "최소금액 없음 안내 · 기간 내 2회 · 보조 안내상 KRW·전용 경유"],
  ["렌터카 첫 예약", "TRIPCAR8", "최대 8% · 한도 미확인", "발급 후 90일 · 최소금액·통화·횟수 미확인"],
  ["투어·액티비티", "trippa07", "7% · 최대 10,000원", "KRW · 전용 제휴 경유 · 소문자 입력 · 보조 안내상 최소금액·횟수 제한 없음"],
  ["공항픽업·샌딩", "TRIPAIRPORT", "기본요금 10% · 최대 13,000원", "KRW · 전용 제휴 경유 · ID당 1회 · 좌석·보험 등 부가요금 제외"],
  ["네이버 채널 투어·티켓", "TRIPNAVER", "6% · 최대 10,000원", "공식 네이버 채널 경유 · 신규·기존 회원 · 최소금액·통화·횟수 미확인"],
  ["지정 아시아 투어·티켓", "GO5", "5% · 한도 미확인", "KRW · 지정 프로모션 경유 · 최소금액·횟수 미확인"],
];

const extraBenefits = [
  ["삼성 Visa", "SMVISA15 / SMVISA10", "호텔 15% / 항공 운임 10%, 각각 최대 USD 80", "2027-02-28까지 예약·체크인·출발 · 개인 신용·가족카드 · USD · 전용 경유 · ID당 최대 3회(합산 여부 미확인)"],
  ["신한카드", "SHINHAN7 / SHFLT10 / SHINHAN4 / SHINHAN3", "호텔 최대 7% / 항공 최대 10%·4% / 액티비티 3%", "예약 2026-12-31까지 · 항공 출발 2027-12-31까지 · 전용 모바일 웹·앱 · USD는 보조 출처 안내 · 코드별 한도·횟수 미확인"],
  ["KB국민카드", "KBTPH6 / KBTP3 / KBTP4", "호텔 최대 6% / 항공 운임 최대 3% / 액티비티 4%", "예약 최대 2026-12-31 · 숙박·출발 최대 2027-12-31 · 개별 쿠폰 우선 · USD · 지정 경유 · ID당 최대 10회 · 금액 한도 미표기"],
  ["우리카드", "WOORICARD06 / WOORICARD03 / WOORICARDTNT4", "호텔 6% / 항공 운임 3% / 액티비티 4%, 최대 USD 25", "호텔 예약 2027-06-30까지·통화 제한 없음 · 항공 예약 2026-12-31·출발 2027-12-31까지·USD · 액티비티 USD·지정일 · 지정 경유 · 호텔·항공 한도·중복 미확인"],
  ["BC카드", "BCTRIP7 / BCTRIP3 / BCACTIVITY3", "호텔 최대 7% / 항공 운임 최대 3% / 액티비티 3%", "KRW · 지정 경유 · 공통 약관 예약·이용 2027-12-31까지, 개별 쿠폰 우선 · BCTRIP7 만료 연도 미확인 · 한도·횟수 미표기 · 트립코인 등 기타 결제 병용 불가"],
  ["Visa", "VISAHOTEL06 / VISAF3 / VISATOUR4", "호텔 6% / 항공 운임 3% / 액티비티 4%", "예약 2026-12-31까지 · 호텔 숙박 제한 없음·항공 출발 2027-12-31까지·액티비티 지정일 · 전용 모바일 웹·앱 · USD 경로 안내 · 한도·횟수 미표기"],
  ["Mastercard", "MAPH15 / MAP6 / MAP3", "World·World Elite 호텔 15%, 최대 USD 100 / 일반 호텔 6%·항공 3%·액티비티 5%", "한국 발급 개인 신용·체크, 법인·선불 제외 · USD·지정 경유 · 예약 2026-12-31·호텔 체크인 2027-02-28까지 · 호텔 15% 최대 3회 · 호텔 숙박료만 할인 · 액티비티 문자열 미확인"],
  ["UnionPay", "UPI20 (상품·등급 대응 미확인)", "국내 프리미엄 Platinum 호텔 15% / Diamond 호텔 20% / 프리미엄 항공 운임 10%", "예약·이용 2026-12-31까지 · USD·지정 경유·결제순 선착순 · Classic 최고율 적용 불가 · 등급별 한도·횟수 미확인 · 결제 전 해당 코드 대상 확인"],
  ["롯데카드", "입력 코드 없음", "호텔 단독 구매 최대 2% 즉시할인", "2026-10-12 낮 12시부터 소진 시까지 · 개인 신용·체크 · KRW·직접 접속 · 타 프로모션 경유·간편결제 제외 · 결제 화면 할인 표시 필수 · 예산·한도·횟수 미확인"],
  ["카카오페이", "KAKAO12 (별도 보조 안내)", "트립타임 호텔 첫 예약 최대 4만원 / 별도 코드 호텔 12% 안내", "트립타임 2026-12-31까지·매일 10시·18시 선착순·KRW·소개 호텔 · KAKAO12는 11월 1~30일 보조 안내만 확인, 한도·통화·결제수단 미확인 · 두 혜택 합산 불가"],
  ["토스페이", "TOSSF05 / TOSSH05 / SQLVGPEIIV (현재 적용 재확인)", "일본·중국 지정 항공·호텔 5% 최대 5만원 보조 안내", "GO 재팬·GO 차이나 전용 경유 · 보조 안내상 KRW·토스페이·최소금액 없음·일 1회 · 중국 항공 2026-12-31까지 안내 · 일본 기한·현재 재고 미확인 · 종료된 전 세계 최대 6만원 행사와 구분"],
];

function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    toast.success(`"${code}" 복사 완료!`);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" onClick={handleCopy} className="copy-button" aria-label={`${code} 복사`}>
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      <code className="tracking-wider">{code}</code>
    </a>
  );
}

export default function Index() {
  return (
    <>
      <SchemaOrg
        type="WebSite"
        title="트립닷컴 쿠폰"
        description="트립닷컴 항공권 첫 예약 할인, 렌터카·투어 할인코드, 웰컴팩 쿠폰과 카드·페이 혜택을 대상·통화·한도별로 비교합니다. 전용 경유와 개별 발급 조건을 확인하세요."
        url="/"
        breadcrumbs={[{ name: "홈", url: "/" }]}
        pageDates={pageDates}
      />

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBanner} alt="트립닷컴 할인코드 2026 배너" className="w-full h-full object-cover" />
        </div>
        <div className="container relative py-16 md:py-24 text-center">
          <span className="badge-discount mb-4 inline-block text-sm">마지막 확인일 2026-11-02</span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            트립닷컴 할인코드
            <br />
            <span className="text-secondary-foreground/90">최대 50% 할인 혜택</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            항공권, 호텔, 렌터카, 액티비티까지 — 2026년 최신 트립닷컴 할인코드와 프로모션을 한눈에 확인하고 최저가로 예약하세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 font-bold text-secondary-foreground text-lg transition-all hover:scale-105 animate-pulse-glow">
              <ExternalLink className="w-5 h-5" />
              트립닷컴 할인 적용하기
            </a>
            <Link to="/tips" className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all">
              사용법 알아보기 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Summary Table */}
      <section className="container py-12 animate-fade-in">
        <h2 className="section-title text-center">📋 트립닷컴 할인코드 요약</h2>
        <p className="section-subtitle text-center">수집 기준: 할인코드 2026-11-01 12:41 · 쿠폰 12:43 · 추가 할인 12:44 (한국시간). 공개 안내 기준이며 실제 결제 적용은 테스트하지 않았습니다.</p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>카테고리</th>
                <th>할인코드</th>
                <th>할인율</th>
                <th>마감기간</th>
                <th>조건</th>
              </tr>
            </thead>
            <tbody>
              {currentCodes.map(([category, code, benefit, conditions]) => (
                <tr key={code}><td>{category}</td><td>할인코드: <CopyCodeButton code={code} /></td><td className="font-bold text-primary">{benefit}</td><td>2026-12-31{code === "TRIPCAR8" ? " · 발급 후 90일" : ""}</td><td>{conditions}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Main Coupon Cards */}
      <section className="container py-12">
        <h2 className="section-title text-center">🔥 인기 트립닷컴 할인코드 TOP 4</h2>
        <p className="section-subtitle text-center">항공권·렌터카 첫 예약 조건과 종료된 호텔 코드를 구분하세요. 이미지 문구보다 본문의 현재 조건을 기준으로 비교하세요.</p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mainCoupons.map((c) => (
            <CouponCard key={c.code} {...c} />
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title text-center">🎉 트립닷컴 쿠폰·프로모션</h2>
          <p className="section-subtitle text-center">수령형 쿠폰은 계정 발급 조건을, 특가 상품은 해당 객실·옵션의 판매 조건을 확인하세요.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponMegasale} alt="트립닷컴 메가세일 최대 50% 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">메가세일 프로모션 · 종료</h3>
                <p className="text-sm text-muted-foreground mb-2">과거 메가세일을 현재 혜택으로 안내하지 않습니다. 슈퍼 멤버스데이도 10월 31일 종료했으며 11월 추가 적립은 확인되지 않았습니다.</p>
                <span className="text-primary text-sm font-semibold group-hover:underline">자세히 보기 →</span>
              </div>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponJapan} alt="트립닷컴 일본 슈퍼 데스티네이션 50% 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">GO 재팬 수요일 특가</h3>
                <p className="text-sm text-muted-foreground mb-2">매주 수요일 오전 11시 선착순 호텔 깜짝딜·지정 티켓 1+1 또는 반값. 종료 시까지·재고 소진 가능. 10월 회차를 11월 재고로 보장하지 않으며 상품·숙박일·수량은 개별 확인이 필요합니다.</p>
                <span className="text-primary text-sm font-semibold group-hover:underline">자세히 보기 →</span>
              </div>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponNewmember} alt="트립닷컴 신규회원 15% 웰컴 쿠폰팩" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">신규회원 웰컴 쿠폰팩</h3>
                <p className="text-sm text-muted-foreground mb-2">앱 웰컴팩 7종: 호텔 10%, 호텔 첫 예약 특가 최대 20%, 일본 기차 4%, 유럽 기차 5%, 공항픽업 15%·10%·12%. 로그인 후 받기·사용하기로 수령하고 My 계정의 할인코드 내역을 확인하세요. 예약·서비스 이용 이력이 없는 등 신규 자격과 동일 이용자 판정 기준이 적용되며 웰컴팩 수령은 1회입니다. 개별 리워드 유효기간·횟수·최소금액·한도는 발급 약관을 확인해야 합니다. 10%와 20% 또는 픽업 3종을 합산하지 않습니다.</p>
                <span className="text-primary text-sm font-semibold group-hover:underline">가입하기 →</span>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6">
            {[
              ["호텔 신규 10% 쿠폰", "공식 공개 화면은 10%를 확인합니다. 최대 13,000원은 최근 제휴 안내, 발급 후 14일은 공식 소개 안내이며 현재 개인별 발급 조건과 일치 여부는 미확인입니다. 13,000원 한도가 실제 적용되면 13만원에서 한도에 도달하고 26만원 예약의 할인도 13,000원입니다."],
              ["호텔 금액·연박 쿠폰", "45만원 이상 최대 3만원, 3연박 이상 5% 최대 18,500원. 공식 안내의 쿠폰 받기로 수령 후 계정에서 확인합니다. 별도 종료일·현재 발급 가능 여부·최소금액(연박 쿠폰)·통화는 미확인입니다. 3연박 쿠폰 발급 후 7일 안내는 개인 약관 재확인이 필요합니다. 둘 다 적격인 45만원 예약에서 최대 차이는 11,500원이며 중복은 가정하지 않습니다."],
              ["트립타임 선착순 쿠폰", "2026-03-09~12-31, 매일 오전 10시·오후 6시 호텔 첫 예약 카카오페이 전용 최대 4만원. 한국어·KRW·회원·소개 호텔 조건이며 웹·앱에서 수령합니다. 최소금액·정액 구간·횟수·발급 후 기한은 미확인입니다. 수령 후에도 사용 예산이 소진될 수 있고 결제 중 소진 시 결제 완료 후 즉시 취소될 수 있습니다."],
              ["전국 펜션·풀빌라 특가", "예약 2026-11-01~11-30, 숙박 11-01~12-31 중 숙소별 지정일. 소개 숙소 최대 10%, 한국어·KRW·회원 대상 선착순입니다. 행사 웹·앱 운영과 별개로 쿠폰 약관은 앱 직접 접속·소개 호텔 첫 예약 및 결제를 명시합니다. 한도·최소금액·횟수는 미확인입니다."],
              ["트립타임·신규 오픈 호텔", "트립타임은 2026-12-31까지 한국어·KRW 회원 대상 웹·앱 특가로 소개 호텔과 지정 숙박일에 적용됩니다. 수집 당시 데일리 판매분은 11월 1일 23:59 종료했습니다. 신규 오픈 호텔 특가는 2026-12-31까지 최대 20%이며 신규 회원 전용이라는 뜻이 아닙니다. 두 행사 모두 개별 객실 요금을 확인하세요."],
              ["항공+호텔 결합 요금", "종료 시까지·재고 소진 가능, 웹·앱 회원 대상. 공식 홍보의 평균 11%는 고정 할인율이나 최저 보장이 아닙니다. 항공 운임·수하물·객실·취소조건을 맞춘 별도 구매 합계와 비교하세요. 항공과 숙소 각각의 취소·변경 규정이 적용됩니다."],
              ["GO 태국 수요일 특가", "매주 수요일 낮 12시 선착순, 종료 시까지 운영하며 지정 스파 반값 옵션을 안내합니다. 모든 태국 상품 50% 할인이 아니며 실제 상품·가격 기준·이용일·한도·횟수는 미확인입니다. 웹·앱 회원 대상 해당 특가 옵션을 선택합니다."],
              ["종료된 티켓 회차", "해피 프라이데이 확인 회차는 2026-10-29~11-01, 부산 롯데월드 최대 40%·김해 롯데워터파크 최대 61% 판매도 11월 1일 종료했습니다. 현재 판매 혜택으로 사용하지 않습니다. 1+1은 동일 단가 두 장 중 한 장 무료 조건일 때 2인 합계 50%이며 1인 자동 반값을 뜻하지 않습니다."],
              ["회원 요금·트립코인", "등급 특가 태그 객실은 로그인 후 동일 객실·취소조건으로 비교하세요. 기본 예약 적립은 USD100당 호텔 50·항공 20·항공+호텔 35코인, 100코인≈USD1입니다. 호텔 기본 적립은 0.5%, 블랙은 1.5%이며 즉시할인과 다릅니다. 할인·코인 사용액은 적립 기준에서 제외됩니다. 예약 코인은 18개월, 리뷰 승인 코인은 6개월 유효하며 만료월 말일 GMT+8 기준입니다. 리뷰는 월 최대 1,200코인입니다."],
            ].map(([name, description]) => (
              <div key={name} className="coupon-card p-4">
                <h3 className="font-bold text-foreground mb-2">{name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{description}</p>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline">쿠폰 발급 →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container py-12">
        <h2 className="section-title text-center">📊 카테고리별 할인율 비교</h2>
        <p className="section-subtitle text-center">할인율과 함께 할인대상 금액·상한을 비교하세요. 기존 이미지의 수치는 현재 조건을 보장하지 않습니다.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={comparisonChart} alt="트립닷컴 할인코드 카테고리별 할인율 비교 차트" className="rounded-xl w-full" loading="lazy" />
          <div>
            <div className="table-container">
              <table>
                <thead>
                  <tr><th>카테고리</th><th>대상 금액</th><th>할인액</th><th>비교 조건</th></tr>
                </thead>
                <tbody>
                  <tr><td>항공권 첫 예약</td><td>549,999원 → 550,000원</td><td className="font-bold text-primary">5,000원 → 22,000원</td><td>구간 진입 시 할인액 17,000원 차이 · 최소금액 산정 기준 재확인</td></tr>
                  <tr><td>렌터카 72시간 이상</td><td>대여료 360,000원</td><td className="font-bold text-primary">12% 43,200원 / 10% 36,000원</td><td>두 코드가 같은 조건에 적용되면 12%가 7,200원 유리</td></tr>
                  <tr><td>렌터카 10% 한도</td><td>600,000원</td><td className="font-bold text-primary">40,000원 · 실효율 약 6.67%</td><td>400,000원에서 최대 한도 도달</td></tr>
                  <tr><td>투어·티켓</td><td>200,000원</td><td className="font-bold text-primary">7%·6% 모두 최대 10,000원</td><td>전용 채널이 달라 같은 경로 적용은 보장하지 않음</td></tr>
                  <tr><td>공항픽업</td><td>기본 120,000원 + 부가 20,000원</td><td className="font-bold text-primary">12,000원 · 결제 128,000원</td><td>10%는 기본요금만 할인 · 상한 13,000원</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Card Discounts */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title text-center">💳 카드사 제휴 할인</h2>
          <p className="section-subtitle text-center">카드·브랜드 할인은 일반 할인코드에 더하는 추가 할인으로 계산하지 않습니다. 전용 경유·결제 통화·대상 카드가 각각 다릅니다.</p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponSamsung} alt="삼성카드 트립닷컴 항공권 2% 자동 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">삼성 Visa × 트립닷컴</h3>
                <p className="text-sm text-muted-foreground">개인 신용카드·가족카드 대상 호텔 15%·항공 운임 10%, 각각 최대 USD 80. USD·전용 한국어 웹사이트 또는 앱 경유·즉시결제 조건입니다. 2027년 2월 28일까지 예약 및 체크인·출발해야 하며 예산 소진 시 종료됩니다.</p>
              </div>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponLotte} alt="롯데카드 트립닷컴 호텔 2% 자동 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">롯데카드 × 트립닷컴</h3>
                <p className="text-sm text-muted-foreground">호텔 단독 구매 최대 2%, KRW·대상 롯데 개인 신용·체크카드 직접 결제. 2026년 10월 12일부터 소진 시까지이며 실제 예산은 미확인입니다. 타 프로모션 경유·간편결제는 제외되므로 이 사이트의 제휴 버튼 경유로 같은 할인을 보장하지 않습니다.</p>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mt-6">
            {extraBenefits.map(([name, codes, benefit, conditions]) => (
              <div key={name} className="coupon-card p-4">
                <h3 className="font-bold text-foreground mb-2">{name} 트립닷컴 추가 할인</h3>
                <p className="text-primary font-bold mb-2">{benefit}</p>
                <p className="text-sm mb-2">할인코드: <code className="font-mono select-all break-all">{codes}</code></p>
                <p className="text-sm text-muted-foreground mb-2">{conditions}</p>
                <p className="text-sm text-muted-foreground mb-2">최소 결제액·전월 실적·일시불 조건은 현재 자료에서 확정하지 않았습니다. 전용 경로가 필요한 혜택은 해당 행사 경로를 확인하세요.</p>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold hover:underline">할인 받기 →</a>
              </div>
            ))}
          </div>
          <div className="prose max-w-none text-muted-foreground space-y-4 mt-6">
            <h3 className="font-bold text-foreground">트립닷컴 카드 할인 청구액 비교</h3>
            <p>동일 숙박료 USD 800에 15%가 적용되면 삼성 Visa는 USD 80 한도로 할인 후 USD 720, Mastercard World·World Elite는 USD 100 한도로 USD 700입니다. 원래 객실료와 수수료가 같을 때 할인 차이는 USD 20입니다. 호텔 세금·서비스 비용 등 할인 제외액은 별도로 더해야 합니다.</p>
            <p>항공은 세금·유류세를 제외한 운임으로 계산합니다. 삼성 Visa에서 운임 USD 500과 세금 USD 120이면 할인은 USD 50이며 총액 대비 약 8.06%입니다. 최대 USD 80은 순수 운임 USD 800에서 도달합니다. USD 한도에 임의 원화 환율을 대입하지 않았습니다.</p>
            <p>실제 청구액은 할인 후 USD 거래액에 카드사 적용 환율과 국제브랜드·해외서비스 수수료를 반영해야 합니다. 발급사와 상품별 수수료가 다르고 KRW 결제도 해외가맹점·DCC 수수료가 생길 수 있어 통화만으로 유불리를 단정할 수 없습니다.</p>
            <h3 className="font-bold text-foreground">트립닷컴 추가 할인 중복·변경 조건</h3>
            <p>삼성 Visa·신한·KB·Visa·UnionPay 전용 할인은 다른 프로모션·할인코드·트립코인과 중복 불가입니다. Mastercard는 트립코인 사용 불가이며 별도 허용이 없으면 타 프로모션과 중복할 수 없습니다. 우리카드는 중복 여부를 별도 확인해야 합니다. 카카오페이 최대 4만원과 별도 12% 코드를 합치거나 토스페이 종료 행사 한도를 가져와 계산하지 않습니다.</p>
            <p>삼성 Visa·신한·KB·우리·BC·Visa·UnionPay의 확인된 약관은 취소 시 할인액 자체를 환불하지 않고 코드를 행사 기간 내 재사용하도록 재발행하며, 예약 변경 시 사용 코드가 무효가 되는 구조입니다. UnionPay는 재사용에도 잔여 수량이 필요합니다. 이 규칙을 모든 일반 할인코드나 수령 쿠폰에 일괄 적용하지 않습니다.</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container py-12">
        <h2 className="section-title text-center">🗂️ 카테고리별 상세 페이지</h2>
        <p className="section-subtitle text-center">더 자세한 할인코드 정보는 각 페이지에서 확인하세요</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <Link to="/flight-discount" className="info-card flex items-center gap-4 hover:border-primary/30 border border-transparent">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Plane className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">항공권 할인코드</h3>
              <p className="text-sm text-muted-foreground">첫 예약 정액 할인·운임 기준 확인</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
          </Link>
          <Link to="/hotel-discount" className="info-card flex items-center gap-4 hover:border-primary/30 border border-transparent">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Hotel className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">호텔 할인코드</h3>
              <p className="text-sm text-muted-foreground">웰컴팩·수령 쿠폰·카드 조건 비교</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
          </Link>
          <Link to="/tips" className="info-card flex items-center gap-4 hover:border-primary/30 border border-transparent">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-success" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">사용법 & 꿀팁</h3>
              <p className="text-sm text-muted-foreground">할인코드 활용 가이드</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="container py-12">
        <h2 className="section-title">트립닷컴 할인코드란?</h2>
        <div className="prose max-w-none text-muted-foreground space-y-4">
          <p>
            <strong className="text-foreground">트립닷컴 할인코드</strong>는 전 세계 최대 온라인 여행사(OTA) 중 하나인 트립닷컴(Trip.com)에서 항공권, 호텔, 렌터카, 액티비티 등을 예약할 때 결제 단계에서 입력하면 즉시 할인이 적용되는 프로모션 코드입니다.
          </p>
          <p>
            트립닷컴 할인코드는 크게 4가지 유형으로 분류됩니다: <strong className="text-foreground">회원 전용 할인코드</strong>, <strong className="text-foreground">시즌 프로모션 코드</strong>, <strong className="text-foreground">파트너 제휴 코드</strong>, <strong className="text-foreground">앱 전용 프로모션 코드</strong>. 각 유형마다 적용 조건과 할인율이 다르므로, 본 사이트에서 최신 정보를 확인한 후 가장 유리한 코드를 선택하여 사용하시기 바랍니다.
          </p>
          <p>
            할인코드는 직접 입력하는 문자열, 웰컴팩은 계정에 수령하는 리워드, 호텔 특가는 지정 객실 요금으로 구분해 비교하세요. 수령형 혜택도 공식 화면에서는 할인코드라고 부를 수 있으며, 자동 연결·선택 적용인지 문자열 입력이 필요한지는 실제 발급 화면에서 확인해야 합니다. 미표기 조건을 최소금액 없음이나 무제한으로 해석하지 않습니다.
          </p>
          <p>
            본 사이트 <strong className="text-foreground">트립닷컴 할인코드</strong>에서는 매월 최신 할인코드를 업데이트하고, 카테고리별 비교 분석, 사용 방법 가이드, 카드사 제휴 정보 등을 종합적으로 제공하여 여행자 여러분이 가장 합리적인 가격으로 여행을 즐길 수 있도록 돕고 있습니다. <a href="https://travista.co.kr/trip-deals-promo-code/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">트립닷컴 할인코드</a> 관련 추가 정보도 함께 참고해 보세요.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="hero-section py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">지금 바로 트립닷컴 할인코드를 적용하세요!</h2>
          <p className="text-primary-foreground/80 mb-6">버튼 접속만으로 할인이 보장되지는 않습니다. 대상·경유 경로·통화와 결제 직전 할인 금액을 확인하세요.</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-10 py-4 font-bold text-secondary-foreground text-lg transition-all hover:scale-105 animate-pulse-glow">
            <ExternalLink className="w-5 h-5" />
            트립닷컴 할인 적용하기
          </a>
        </div>
      </section>

      {/* 업데이트 내역 (본문 맨 끝, 푸터 바로 앞) */}
      <UpdateLog />
    </>
  );
}
