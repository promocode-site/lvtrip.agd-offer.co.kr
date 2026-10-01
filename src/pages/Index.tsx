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
    code: "TRIPH3F",
    discount: "3% 할인",
    category: "항공권",
    description: "트립닷컴 항공권 3% 할인코드 (한도 없음)",
    expiry: "2026년 10월 31일",
    image: couponFlight,
    conditions: ["KRW 결제 시 사용 가능", "사용 횟수 제한 없음", "네이버페이 결제 시 0.5% 추가 적립"],
  },
  {
    code: "TRIPBH3",
    discount: "3% 할인",
    category: "호텔",
    description: "전 세계 호텔 3% 할인코드 (한도없음)",
    expiry: "2026년 10월 31일",
    image: couponHotel,
    conditions: ["전 세계 모든 호텔 적용", "계정당 10회까지 사용 가능", "KRW 결제 시 사용"],
  },
  {
    code: "TRIPCAR8",
    discount: "8% 할인",
    category: "렌터카",
    description: "트립닷컴 렌터카 8% 할인코드",
    expiry: "2026년 10월 31일",
    image: couponCar,
    conditions: ["전 세계 렌터카 적용 가능"],
  },
  {
    code: "GO5",
    discount: "5% 할인",
    category: "액티비티",
    description: "트립닷컴 액티비티 5% 할인코드",
    expiry: "2026년 12월 31일",
    image: couponActivity,
    conditions: ["투어, 티켓 등 모든 액티비티 상품 적용"],
  },
];

function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success(`"${code}" 복사 완료!`);
    setTimeout(() => setCopied(false), 2000);
    window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
  };
  return (
    <button onClick={handleCopy} className="copy-button" aria-label={`${code} 복사`}>
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      <code className="tracking-wider">{code}</code>
    </button>
  );
}

export default function Index() {
  return (
    <>
      <SchemaOrg
        type="WebSite"
        title="트립닷컴 쿠폰"
        description="10월 트립닷컴 쿠폰 총정리! 트립닷컴 항공권 할인코드부터 호텔 할인코드까지, 지금 바로 쓸 수 있는 트립닷컴 할인쿠폰을 카테고리별로 정리했습니다. 매월 업데이트되는 트립닷컴 할인코드들을 확인해보세요!"
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
          <span className="badge-discount mb-4 inline-block text-sm">2026년 10월 업데이트</span>
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
        <h2 className="section-title text-center">📋 2026년 10월 트립닷컴 할인코드 요약</h2>
        <p className="section-subtitle text-center">현재 사용 가능한 모든 할인코드를 한눈에 확인하세요</p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>카테고리</th>
                <th>할인코드</th>
                <th>할인율</th>
                <th>마감기간</th>
                <th>적용</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>항공권</td><td><CopyCodeButton code="TRIPH3F" /></td><td className="font-bold text-primary">3% (한도없음)</td><td>26/10/31</td><td><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">적용 →</a></td></tr>
              <tr><td>항공권</td><td><CopyCodeButton code="TRIPBF3" /></td><td className="font-bold text-primary">3% (최대 12,000원)</td><td>26/10/31</td><td><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">적용 →</a></td></tr>
              <tr><td>호텔</td><td><CopyCodeButton code="TRIPBH3" /></td><td className="font-bold text-primary">3% (한도없음)</td><td>26/10/31</td><td><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">적용 →</a></td></tr>
              <tr><td>렌터카</td><td><CopyCodeButton code="TRIPCAR8" /></td><td className="font-bold text-primary">8%</td><td>26/10/31</td><td><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">적용 →</a></td></tr>
              <tr><td>렌터카</td><td><CopyCodeButton code="TRIPCAR7" /></td><td className="font-bold text-primary">7%</td><td>26/10/31</td><td><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">적용 →</a></td></tr>
              <tr><td>액티비티</td><td><CopyCodeButton code="GO5" /></td><td className="font-bold text-primary">5%</td><td>26/12/31</td><td><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">적용 →</a></td></tr>
              <tr><td>신규회원</td><td><CopyCodeButton code="HMNG5D" /></td><td className="font-bold text-primary">호텔 8% + 웰컴팩</td><td>가입 후 7일</td><td><a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">적용 →</a></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Main Coupon Cards */}
      <section className="container py-12">
        <h2 className="section-title text-center">🔥 인기 트립닷컴 할인코드 TOP 4</h2>
        <p className="section-subtitle text-center">가장 많이 사용되는 트립닷컴 할인코드를 확인하세요</p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mainCoupons.map((c) => (
            <CouponCard key={c.code} {...c} />
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title text-center">🎉 진행 중인 프로모션</h2>
          <p className="section-subtitle text-center">시즌 한정 특가 프로모션을 놓치지 마세요</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponMegasale} alt="트립닷컴 메가세일 최대 50% 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">메가세일 프로모션</h3>
                <p className="text-sm text-muted-foreground mb-2">항공권 최대 10만원, 호텔 최대 10만원, 액티비티 6% 할인</p>
                <span className="text-primary text-sm font-semibold group-hover:underline">자세히 보기 →</span>
              </div>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponJapan} alt="트립닷컴 일본 슈퍼 데스티네이션 50% 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">슈퍼 데스티네이션 일본</h3>
                <p className="text-sm text-muted-foreground mb-2">일본 호텔, 투어, 항공권 최대 50% 이상 할인</p>
                <span className="text-primary text-sm font-semibold group-hover:underline">자세히 보기 →</span>
              </div>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponNewmember} alt="트립닷컴 신규회원 15% 웰컴 쿠폰팩" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">신규회원 웰컴 쿠폰팩</h3>
                <p className="text-sm text-muted-foreground mb-2">가입 후 7일간 항공권·호텔·렌터카 최대 15% 할인</p>
                <span className="text-primary text-sm font-semibold group-hover:underline">가입하기 →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container py-12">
        <h2 className="section-title text-center">📊 카테고리별 할인율 비교</h2>
        <p className="section-subtitle text-center">어떤 카테고리에서 가장 큰 할인을 받을 수 있는지 비교해보세요</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={comparisonChart} alt="트립닷컴 할인코드 카테고리별 할인율 비교 차트" className="rounded-xl w-full" loading="lazy" />
          <div>
            <div className="table-container">
              <table>
                <thead>
                  <tr><th>카테고리</th><th>최소 할인</th><th>최대 할인</th><th>추천 대상</th></tr>
                </thead>
                <tbody>
                  <tr><td>항공권</td><td>3%</td><td className="font-bold text-primary">3%</td><td>모든 여행자</td></tr>
                  <tr><td>호텔</td><td>3%</td><td className="font-bold text-primary">8%</td><td>숙박 예약자</td></tr>
                  <tr><td>렌터카</td><td>7%</td><td className="font-bold text-primary">8%</td><td>자유 여행자</td></tr>
                  <tr><td>액티비티</td><td>5%</td><td className="font-bold text-primary">12%</td><td>체험 여행자</td></tr>
                  <tr><td>신규회원</td><td>5%</td><td className="font-bold text-primary">15%</td><td>첫 이용자</td></tr>
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
          <p className="section-subtitle text-center">카드사 제휴 할인은 할인코드와 중복 적용이 가능합니다</p>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponSamsung} alt="삼성카드 트립닷컴 항공권 2% 자동 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">삼성카드 × 트립닷컴</h3>
                <p className="text-sm text-muted-foreground">항공권 2% 자동 할인 (월별 선착순)</p>
              </div>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponLotte} alt="롯데카드 트립닷컴 호텔 2% 자동 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">롯데카드 × 트립닷컴</h3>
                <p className="text-sm text-muted-foreground">호텔 2% 자동 할인 (월별 선착순)</p>
              </div>
            </a>
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
              <p className="text-sm text-muted-foreground">전 노선 3% 할인 코드</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />
          </Link>
          <Link to="/hotel-discount" className="info-card flex items-center gap-4 hover:border-primary/30 border border-transparent">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Hotel className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">호텔 할인코드</h3>
              <p className="text-sm text-muted-foreground">호텔 3%~8% 할인 코드</p>
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
            2026년 10월 현재, 트립닷컴에서는 메가세일, 슈퍼 데스티네이션 일본, GO 차이나, GO 태국 등 다양한 프로모션을 동시에 진행하고 있습니다. 또한 삼성카드, 롯데카드 등 카드사 제휴 할인을 함께 적용하면 더욱 큰 할인 혜택을 누릴 수 있습니다.
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
          <p className="text-primary-foreground/80 mb-6">아래 버튼을 클릭하면 자동으로 할인이 적용됩니다</p>
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
