import { useState } from "react";
import { Copy, Check, ExternalLink, Plane, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import SchemaOrg from "@/components/SchemaOrg";
import CouponCard from "@/components/CouponCard";

import couponFlight from "@/assets/coupon-flight-3pct.png";
import couponSamsung from "@/assets/coupon-samsung.png";
import couponMegasale from "@/assets/coupon-megasale.png";
import couponJapan from "@/assets/coupon-japan.png";
import couponNewmember from "@/assets/coupon-newmember.png";
import comparisonChart from "@/assets/comparison-chart.png";
import heroBanner from "@/assets/hero-banner.png";

const AFFILIATE_LINK = "https://app.ac/Iqp4O9293";

function CopyBtn({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success(`"${code}" 복사 완료!`);
    setTimeout(() => setCopied(false), 2000);
    window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
  };
  return (
    <button onClick={handle} className="copy-button">
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      <code className="tracking-wider">{code}</code>
    </button>
  );
}

const flightCoupons = [
  {
    code: "TRIPH3F", discount: "3% 할인", category: "항공권",
    description: "트립닷컴 항공권 3% 할인코드 – 전 노선 한도 없음",
    expiry: "2026년 10월 31일", image: couponFlight,
    conditions: ["전 세계 모든 노선 적용", "할인 한도 없음 (가장 큰 혜택)", "KRW 결제 시 사용", "사용 횟수 제한 없음", "네이버페이 0.5% 추가 적립 가능"],
  },
  {
    code: "TRIPBF3", discount: "3% 할인", category: "항공권",
    description: "트립닷컴 항공권 3% 할인코드 – 전 세계 모든 노선, 한도 최대 12,000원",
    expiry: "2026년 10월 31일",
    conditions: ["전 세계 모든 노선 적용", "할인 한도 최대 12,000원", "탑승 기간: 2027년 12월 31일까지", "KRW 결제 시 사용"],
  },
  {
    code: "TOSSF05", discount: "5% 할인", category: "항공권 (토스페이)",
    description: "토스페이 결제 시 항공권 5% 할인 (최대 6만원)",
    expiry: "2026년 9월 30일",
    conditions: [
      "토스페이 결제 시 항공권 5% 할인",
      "최대 6만원 할인, 최소 사용 금액 없음",
      "이륙(출발) 기간: 2026년 9월 30일까지",
      "트립닷컴 계정당 1일 1회 선착순",
      "전용 링크 유입 후 결제 시 코드 입력",
    ],
    link: "http://app.ac/cEMTKrS53",
  },
];

export default function FlightDiscount() {
  return (
    <>
      <SchemaOrg
        type="Article"
        title="트립닷컴 항공권 할인코드 2026년 10월 - 최대 5% 할인"
        description="2026년 10월 최신 트립닷컴 항공권 할인코드 총정리. 전 노선 3% 할인(한도없음)부터 토스페이 5% 할인까지 모든 항공권 할인코드를 확인하세요."
        url="/flight-discount"
        breadcrumbs={[
          { name: "홈", url: "/" },
          { name: "항공권 할인코드", url: "/flight-discount" },
        ]}
      />

      {/* Hero */}
      <section className="hero-section py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBanner} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="container relative text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plane className="w-8 h-8" />
            <span className="badge-discount text-sm">2026년 10월 최신</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">트립닷컴 항공권 할인코드</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            전 세계 모든 노선 3% 할인(한도없음)부터 토스페이 결제 5% 할인까지. 지금 바로 최저가 항공권을 예약하세요.
          </p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 font-bold text-secondary-foreground text-lg hover:scale-105 transition-all animate-pulse-glow">
            <ExternalLink className="w-5 h-5" /> 항공권 할인 적용하기
          </a>
        </div>
      </section>

      {/* Summary Table */}
      <section className="container py-12">
        <h2 className="section-title">✈️ 항공권 할인코드 전체 목록</h2>
        <p className="section-subtitle">코드를 클릭하면 복사 후 트립닷컴으로 이동합니다</p>
        <div className="table-container mb-8">
          <table>
            <thead>
              <tr><th>할인코드</th><th>할인혜택</th><th>적용 대상</th><th>마감</th></tr>
            </thead>
            <tbody>
              <tr><td><CopyBtn code="TRIPH3F" /></td><td className="font-bold text-primary">3% 할인 (한도없음)</td><td>전 세계 모든 노선</td><td>26/10/31</td></tr>
              <tr><td><CopyBtn code="TRIPBF3" /></td><td className="font-bold text-primary">3% 할인 (최대 12,000원)</td><td>전 세계 모든 노선</td><td>26/10/31</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Coupon Cards */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title text-center">🎫 항공권 할인코드 상세 정보</h2>
          <p className="section-subtitle text-center">각 할인코드의 조건과 사용법을 자세히 확인하세요</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {flightCoupons.map((c) => <CouponCard key={c.code} {...c} />)}
          </div>
        </div>
      </section>

      {/* Comparison: % vs Fixed */}
      <section className="container py-12">
        <h2 className="section-title">📊 할인 방식 비교: 정률(%) vs 정액(원)</h2>
        <p className="section-subtitle">어떤 코드가 더 유리한지 항공권 가격에 따라 비교해보세요</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="table-container">
            <table>
              <thead><tr><th>항공권 가격</th><th>TRIPH3F (3%)</th><th>TRIPBF3 (최대 ₩12,000)</th><th>추천 코드</th></tr></thead>
              <tbody>
                <tr><td>200,000원</td><td>6,000원 할인</td><td>6,000원 할인</td><td className="text-muted-foreground">동일</td></tr>
                <tr><td>400,000원</td><td>12,000원 할인</td><td>12,000원 할인</td><td className="text-muted-foreground">동일</td></tr>
                <tr><td>500,000원</td><td>15,000원 할인</td><td>12,000원 할인</td><td className="font-bold text-primary">TRIPH3F</td></tr>
                <tr><td>800,000원</td><td>24,000원 할인</td><td>12,000원 할인</td><td className="font-bold text-primary">TRIPH3F</td></tr>
                <tr><td>1,000,000원</td><td>30,000원 할인</td><td>12,000원 할인</td><td className="font-bold text-primary">TRIPH3F</td></tr>
                <tr><td>1,500,000원</td><td>45,000원 할인</td><td>12,000원 할인</td><td className="font-bold text-primary">TRIPH3F</td></tr>
              </tbody>
            </table>
          </div>
          <div className="info-card">
            <h3 className="font-bold text-lg text-foreground mb-3">💡 항공권 할인코드 선택 팁</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-primary font-bold">1.</span> <span>항공권 가격이 <strong className="text-foreground">400,000원 이하</strong>라면 TRIPH3F와 TRIPBF3의 할인 금액이 동일합니다.</span></li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">2.</span> <span>항공권 가격이 <strong className="text-foreground">400,000원 초과</strong>라면 할인 한도가 없는 TRIPH3F가 더 유리합니다.</span></li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">3.</span> <span>삼성카드로 결제 시 추가 2% 자동 할인을 받을 수 있어 <strong className="text-foreground">최대 5% 할인</strong>이 가능합니다.</span></li>
              <li className="flex items-start gap-2"><span className="text-primary font-bold">4.</span> <span>네이버페이로 결제하면 <strong className="text-foreground">0.5% 추가 적립</strong>도 가능합니다.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Route Comparison */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title">🌏 인기 노선별 예상 할인 금액</h2>
          <p className="section-subtitle">실제 예상 할인 금액을 노선별로 확인해보세요</p>
          <div className="table-container">
            <table>
              <thead><tr><th>노선</th><th>평균 가격</th><th>TRIPH3F (3%)</th><th>지역 코드</th><th>최대 절약</th></tr></thead>
              <tbody>
                <tr><td>인천 → 도쿄</td><td>350,000원</td><td>10,500원</td><td>-</td><td className="font-bold text-primary">10,500원</td></tr>
                <tr><td>인천 → 오사카</td><td>280,000원</td><td>8,400원</td><td>-</td><td className="font-bold text-primary">8,400원</td></tr>
                <tr><td>인천 → 방콕</td><td>450,000원</td><td className="font-bold text-secondary">13,500원</td><td>-</td><td className="font-bold text-primary">13,500원</td></tr>
                <tr><td>인천 → 홍콩</td><td>320,000원</td><td className="font-bold text-secondary">9,600원</td><td>-</td><td className="font-bold text-primary">9,600원</td></tr>
                <tr><td>인천 → 광저우</td><td>250,000원</td><td className="font-bold text-secondary">7,500원</td><td>-</td><td className="font-bold text-primary">7,500원</td></tr>
                <tr><td>인천 → 마카오</td><td>300,000원</td><td className="font-bold text-secondary">9,000원</td><td>-</td><td className="font-bold text-primary">9,000원</td></tr>
                <tr><td>인천 → 파리</td><td>1,200,000원</td><td className="font-bold text-secondary">36,000원</td><td>-</td><td className="font-bold text-primary">36,000원</td></tr>
                <tr><td>인천 → LA</td><td>1,500,000원</td><td className="font-bold text-secondary">45,000원</td><td>-</td><td className="font-bold text-primary">45,000원</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Samsung Card */}
      <section className="container py-12">
        <h2 className="section-title">💳 삼성카드 항공권 추가 할인</h2>
        <p className="section-subtitle">할인코드와 중복 적용 가능한 카드사 할인</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card">
            <img src={couponSamsung} alt="삼성카드 트립닷컴 항공권 2% 자동 할인" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold text-foreground">삼성카드 × 트립닷컴</h3>
              <p className="text-sm text-muted-foreground">항공권 2% 자동 할인 (월별 선착순)</p>
            </div>
          </a>
          <div className="info-card">
            <h3 className="font-bold text-foreground mb-3">중복 할인 시뮬레이션</h3>
            <div className="table-container">
              <table>
                <thead><tr><th>적용 할인</th><th>100만원 항공권</th></tr></thead>
                <tbody>
                  <tr><td>TRIPH3F (3%)</td><td>-30,000원</td></tr>
                  <tr><td>삼성카드 (2%)</td><td>-20,000원</td></tr>
                  <tr><td>네이버페이 적립 (0.5%)</td><td>+5,000원 적립</td></tr>
                  <tr><td className="font-bold text-foreground">총 절약</td><td className="font-bold text-primary text-lg">55,000원</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title text-center">🎉 항공권 관련 프로모션</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponMegasale} alt="트립닷컴 메가세일 항공권 최대 10만원 할인" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">메가세일</h3>
                <p className="text-sm text-muted-foreground">항공권 최대 10만원 할인 + 제주 왕복 3,300원</p>
              </div>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponJapan} alt="트립닷컴 일본 슈퍼 데스티네이션" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">슈퍼 데스티네이션 일본</h3>
                <p className="text-sm text-muted-foreground">일본 항공권 초특가 + 호텔 패키지</p>
              </div>
            </a>
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
              <img src={couponNewmember} alt="트립닷컴 신규회원 항공권 쿠폰" className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-bold text-foreground">신규회원 항공권 쿠폰</h3>
                <p className="text-sm text-muted-foreground">최대 22,000원 항공권 할인 쿠폰</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="container py-12">
        <h2 className="section-title">트립닷컴 항공권 할인코드 사용 가이드</h2>
        <div className="space-y-6 text-muted-foreground">
          <div className="info-card">
            <h3 className="font-bold text-foreground text-lg mb-3">📌 TRIPH3F 할인코드 상세 안내</h3>
            <p className="mb-3">TRIPH3F는 현재 트립닷컴에서 제공하는 항공권 할인코드 중 가장 범용적이고 유용한 코드입니다. 더 많은 <a href="https://solar-revival.co.kr/tripcom" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">트립닷컴 할인코드</a>는 별도 페이지에서 확인할 수 있습니다. 전 세계 모든 노선에 적용 가능하며, 할인 한도가 없어 고가의 비즈니스/퍼스트클래스 항공권에서도 3% 할인을 받을 수 있습니다.</p>
            <p className="mb-3">예를 들어, 유럽행 비즈니스클래스 항공권이 300만원이라면 TRIPH3F 코드 적용 시 9만원의 할인을 받을 수 있습니다. 여기에 삼성카드 2% 추가 할인까지 적용하면 총 15만원을 절약할 수 있습니다.</p>
            <p>이 코드는 인플루언서 제휴 코드로, 반드시 제휴 링크를 통해 접속한 후 사용해야 합니다. 아래 버튼을 클릭하면 자동으로 제휴 링크가 적용됩니다.</p>
          </div>
          <div className="info-card">
            <h3 className="font-bold text-foreground text-lg mb-3">📌 지역별 전용 할인코드 활용법</h3>
            <p className="mb-3">현재 트립닷컴에서는 태국, 중국(광둥), 홍콩, 마카오 등 특정 지역 전용 항공권 할인코드가 운영되지 않습니다. 대신 전 세계 모든 노선에 적용되는 일반 할인코드를 사용하는 것이 가장 유리합니다.</p>
            <p className="mb-3">TRIPH3F는 할인 한도가 없어 고가 항공권에서도 3% 할인을 온전히 받을 수 있으며, TRIPBF3는 최대 12,000원 한도의 3% 할인코드로 TRIPH3F를 사용할 수 없는 경우의 대안으로 활용할 수 있습니다.</p>
            <p>항공권 가격이 400,000원을 넘으면 할인 한도가 없는 TRIPH3F가 TRIPBF3보다 더 큰 할인을 제공합니다.</p>
          </div>
          <div className="info-card">
            <h3 className="font-bold text-foreground text-lg mb-3">📌 항공권 예약 최적 타이밍</h3>
            <p className="mb-3">트립닷컴에서 항공권을 가장 저렴하게 예약하려면 다음 타이밍을 참고하세요:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-foreground">출발 8~12주 전:</strong> 일반적으로 가장 저렴한 가격대</li>
              <li><strong className="text-foreground">화~목요일:</strong> 주중 예약이 주말보다 5~15% 저렴</li>
              <li><strong className="text-foreground">메가세일 기간:</strong> 트립닷컴 자체 프로모션 + 할인코드 중복 적용 가능</li>
              <li><strong className="text-foreground">새벽 시간대:</strong> 일부 항공사는 새벽에 좌석을 재배포하여 가격이 낮아질 수 있음</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">지금 트립닷컴에서 최저가 항공권을 예약하세요!</h2>
          <p className="text-primary-foreground/80 mb-6">할인코드 적용 시 추가 할인이 자동으로 적용됩니다</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-10 py-4 font-bold text-secondary-foreground text-lg hover:scale-105 transition-all animate-pulse-glow">
            <Plane className="w-5 h-5" /> 항공권 할인 적용하기
          </a>
        </div>
      </section>
    </>
  );
}
