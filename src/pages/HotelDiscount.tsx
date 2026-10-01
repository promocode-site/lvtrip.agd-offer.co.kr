import { useState } from "react";
import { Copy, Check, ExternalLink, Hotel, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import SchemaOrg from "@/components/SchemaOrg";
import CouponCard from "@/components/CouponCard";

import couponHotel12 from "@/assets/coupon-hotel-12pct.png";
import couponNewmember from "@/assets/coupon-newmember.png";
import couponLotte from "@/assets/coupon-lotte.png";
import couponMegasale from "@/assets/coupon-megasale.png";
import couponJapan from "@/assets/coupon-japan.png";
import couponSamsung from "@/assets/coupon-samsung.png";
import couponCar from "@/assets/coupon-car-8pct.png";
import couponCar7 from "@/assets/coupon-car-7pct.png";
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

const hotelCoupons = [
  {
    code: "TRIPBH3", discount: "3% 할인", category: "호텔",
    description: "전 세계 호텔 3% 할인코드 (한도없음)",
    expiry: "2026년 10월 31일",
    conditions: ["전 세계 모든 호텔 적용", "투숙 기간: 2026년 10월 31일까지", "할인 한도 없음, 계정당 10회까지 사용 가능", "KRW 결제 시 사용"],
  },
  {
    code: "HMNG5D", discount: "8% 쿠폰", category: "신규회원",
    description: "신규회원 추천코드 – 호텔 8% 할인쿠폰 지급",
    expiry: "가입 후 7일", image: couponNewmember,
    conditions: ["앱 설치 후 가입 시 입력", "호텔 8% 할인쿠폰 즉시 지급", "웰컴 쿠폰팩 추가 혜택"],
  },
  {
    code: "TRIPCAR8", discount: "8% 할인", category: "렌터카",
    description: "트립닷컴 렌터카 8% 할인코드",
    expiry: "2026년 10월 31일", image: couponCar,
    conditions: ["전 세계 렌터카 적용", "자유여행 필수 아이템"],
  },
  {
    code: "TRIPCAR7", discount: "7% 할인", category: "렌터카",
    description: "트립닷컴 렌터카 7% 할인코드",
    expiry: "2026년 10월 31일", image: couponCar7,
    conditions: ["전 세계 렌터카 적용", "TRIPCAR8 미적용 시 사용"],
  },
  {
    code: "RVZBEEWRDF", discount: "5% 할인", category: "호텔 (토스페이)",
    description: "토스페이 결제 시 중국 호텔 5% 할인 (최대 5만원)",
    expiry: "선착순 마감",
    conditions: [
      "토스페이 결제 시 중국 호텔 5% 할인",
      "최대 5만원 할인",
      "선착순 마감, 소진 시 종료",
    ],
  },
];

export default function HotelDiscount() {
  return (
    <>
      <SchemaOrg
        type="Article"
        title="트립닷컴 호텔 할인코드 2026년 10월 - 최대 8% 할인"
        description="2026년 10월 최신 트립닷컴 호텔 할인코드 총정리. 전 세계 호텔 3% 할인코드, 신규회원 8% 쿠폰, 롯데카드 2% 자동 할인, 웰컴 쿠폰팩까지 모든 호텔 할인 정보를 확인하세요."
        url="/hotel-discount"
        breadcrumbs={[
          { name: "홈", url: "/" },
          { name: "호텔 할인코드", url: "/hotel-discount" },
        ]}
      />

      {/* Hero */}
      <section className="hero-section py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBanner} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="container relative text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Hotel className="w-8 h-8" />
            <span className="badge-discount text-sm">2026년 10월 최신</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">트립닷컴 호텔 할인코드</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            호텔 할인코드 최대 5%, 신규회원 8% 쿠폰, 카드사 제휴 할인까지. 최저가 호텔을 예약하세요.
          </p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 font-bold text-secondary-foreground text-lg hover:scale-105 transition-all animate-pulse-glow">
            <ExternalLink className="w-5 h-5" /> 호텔 할인 적용하기
          </a>
        </div>
      </section>

      {/* Summary */}
      <section className="container py-12">
        <h2 className="section-title">🏨 호텔 & 렌터카 할인코드 전체 목록</h2>
        <p className="section-subtitle">코드를 클릭하면 복사 후 트립닷컴으로 이동합니다</p>
        <div className="table-container mb-8">
          <table>
            <thead><tr><th>카테고리</th><th>할인코드</th><th>할인혜택</th><th>적용 대상</th><th>마감</th></tr></thead>
            <tbody>
              <tr><td>호텔</td><td><CopyBtn code="TRIPBH3" /></td><td className="font-bold text-primary">3% 할인</td><td>전 세계 호텔</td><td>26/10/31</td></tr>
              <tr><td>호텔</td><td><CopyBtn code="HMNG5D" /></td><td className="font-bold text-primary">8% 쿠폰 지급</td><td>신규회원</td><td>가입 후 7일</td></tr>
              <tr><td>호텔</td><td>롯데카드 자동적용</td><td className="font-bold text-primary">2% 자동 할인</td><td>롯데카드 결제</td><td>월별 선착순</td></tr>
              <tr><td>호텔</td><td><CopyBtn code="RVZBEEWRDF" /></td><td className="font-bold text-primary">5% 할인 (최대 5만원)</td><td>중국 호텔, 토스페이 결제</td><td>선착순 마감</td></tr>
              <tr><td>렌터카</td><td><CopyBtn code="TRIPCAR8" /></td><td className="font-bold text-primary">8% 할인</td><td>전 세계</td><td>26/10/31</td></tr>
              <tr><td>렌터카</td><td><CopyBtn code="TRIPCAR7" /></td><td className="font-bold text-primary">7% 할인</td><td>전 세계</td><td>26/10/31</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Coupon Cards */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title text-center">🎫 호텔 & 렌터카 할인코드 상세</h2>
          <p className="section-subtitle text-center">각 할인코드의 조건과 사용법을 자세히 확인하세요</p>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {hotelCoupons.map((c) => <CouponCard key={c.code} {...c} />)}
          </div>
        </div>
      </section>

      {/* Welcome Pack */}
      <section className="container py-12">
        <h2 className="section-title">🎁 신규회원 웰컴 쿠폰팩 상세</h2>
        <p className="section-subtitle">회원가입만 해도 받을 수 있는 다양한 할인 쿠폰</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card">
            <img src={couponNewmember} alt="트립닷컴 신규회원 15% 웰컴 쿠폰팩" className="w-full h-56 object-cover" loading="lazy" />
          </a>
          <div className="table-container">
            <table>
              <thead><tr><th>쿠폰 종류</th><th>할인 혜택</th></tr></thead>
              <tbody>
                <tr><td>항공권 할인 쿠폰</td><td className="font-bold text-primary">최대 24,000원 할인</td></tr>
                <tr><td>호텔 할인 쿠폰</td><td className="font-bold text-primary">숙소 5% 할인 + 연박 5% 할인</td></tr>
                <tr><td>"첫예약 특가" 호텔</td><td className="font-bold text-primary">최대 20% 할인</td></tr>
                <tr><td>액티비티 할인 쿠폰</td><td className="font-bold text-primary">투어, 티켓 5% 할인</td></tr>
                <tr><td>기차표 할인 쿠폰</td><td className="font-bold text-primary">유럽·중국 기차표 5% 할인</td></tr>
                <tr><td>렌터카 할인 쿠폰</td><td className="font-bold text-primary">렌터카 8% 할인</td></tr>
                <tr><td>공항픽업 할인 쿠폰</td><td className="font-bold text-primary">공항픽업 최대 15% 할인</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Hotel Comparison */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title">📊 호텔 예약 플랫폼 비교 (트립닷컴 vs 경쟁사)</h2>
          <p className="section-subtitle">트립닷컴 할인코드 적용 시 타 플랫폼 대비 절약 금액</p>
          <div className="table-container">
            <table>
              <thead><tr><th>항목</th><th>트립닷컴 (할인코드 적용)</th><th>A사</th><th>B사</th></tr></thead>
              <tbody>
                <tr><td>서울 5성급 호텔 (1박)</td><td className="font-bold text-primary">₩194,000 (3% OFF)</td><td>₩195,000</td><td>₩200,000</td></tr>
                <tr><td>도쿄 3성급 호텔 (1박)</td><td className="font-bold text-primary">₩92,000 (3% OFF)</td><td>₩92,000</td><td>₩95,000</td></tr>
                <tr><td>방콕 4성급 호텔 (1박)</td><td className="font-bold text-primary">₩58,000 (3% OFF)</td><td>₩62,000</td><td>₩58,000</td></tr>
                <tr><td>무료 취소 정책</td><td className="text-success font-bold">✅ 대부분 무료 취소</td><td>✅</td><td>⚠️ 일부 제한</td></tr>
                <tr><td>할인코드 사용</td><td className="text-success font-bold">✅ 다양한 코드 제공</td><td>❌ 제한적</td><td>⚠️ 일부</td></tr>
                <tr><td>카드사 추가 할인</td><td className="text-success font-bold">✅ 최대 2% 추가</td><td>❌</td><td>❌</td></tr>
                <tr><td>네이버페이 적립</td><td className="text-success font-bold">✅ 0.5% 적립</td><td>❌</td><td>❌</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lotte Card */}
      <section className="container py-12">
        <h2 className="section-title">💳 롯데카드 호텔 추가 할인</h2>
        <p className="section-subtitle">호텔 예약 시 롯데카드로 결제하면 자동 2% 할인</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card">
            <img src={couponLotte} alt="롯데카드 트립닷컴 호텔 2% 자동 할인" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold text-foreground">롯데카드 × 트립닷컴</h3>
              <p className="text-sm text-muted-foreground">호텔 2% 자동 할인 (월별 선착순)</p>
            </div>
          </a>
          <div className="info-card">
            <h3 className="font-bold text-foreground mb-3">중복 할인 시뮬레이션 (호텔 20만원 기준)</h3>
            <div className="table-container">
              <table>
                <thead><tr><th>적용 할인</th><th>절약 금액</th></tr></thead>
                <tbody>
                  <tr><td>TRIPBH3 코드 (3%)</td><td>-6,000원</td></tr>
                  <tr><td>롯데카드 (2%)</td><td>-4,000원</td></tr>
                  <tr><td>네이버페이 적립 (0.5%)</td><td>+1,000원 적립</td></tr>
                  <tr><td className="font-bold text-foreground">총 절약</td><td className="font-bold text-primary text-lg">11,000원</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title">호텔 예약 시 알아두면 좋은 팁</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="info-card">
              <h3 className="font-bold text-foreground text-lg mb-3">📌 호텔 할인코드 최대 활용법</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 할인코드는 <strong className="text-foreground">반드시 제휴 링크</strong>를 통해 접속해야 사용 가능합니다.</li>
                <li>• 할인코드와 카드사 할인은 <strong className="text-foreground">중복 적용이 가능</strong>합니다.</li>
                <li>• 신규회원이라면 <strong className="text-foreground">추천코드(HMNG5D) + 웰컴쿠폰팩</strong>을 모두 활용하세요.</li>
                <li>• 연박 예약 시 <strong className="text-foreground">연박 할인쿠폰</strong>이 추가로 적용됩니다.</li>
                <li>• "첫예약 특가" 태그가 붙은 호텔은 <strong className="text-foreground">최대 20% 추가 할인</strong>이 적용됩니다.</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold text-foreground text-lg mb-3">📌 호텔 예약 최적 타이밍</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong className="text-foreground">체크인 2~4주 전:</strong> 가장 다양한 객실과 가격 옵션</li>
                <li>• <strong className="text-foreground">주중 예약:</strong> 주말보다 10~20% 저렴한 경우가 많음</li>
                <li>• <strong className="text-foreground">메가세일 기간:</strong> 럭셔리 호텔 19,000원 특가 등 파격 할인</li>
                <li>• <strong className="text-foreground">비수기 (3~7월, 9~11월):</strong> 동일 호텔도 30~50% 저렴</li>
                <li>• <strong className="text-foreground">당일 특가:</strong> 일부 호텔은 당일 예약 시 추가 할인 제공</li>
              </ul>
            </div>
            <div className="info-card">
              <h3 className="font-bold text-foreground text-lg mb-3">📌 인기 여행지별 호텔 평균가</h3>
              <div className="table-container">
                <table>
                  <thead><tr><th>여행지</th><th>3성급</th><th>4성급</th><th>5성급</th></tr></thead>
                  <tbody>
                    <tr><td>일본 도쿄</td><td>8~12만원</td><td>15~25만원</td><td>30~50만원</td></tr>
                    <tr><td>태국 방콕</td><td>3~5만원</td><td>5~10만원</td><td>10~20만원</td></tr>
                    <tr><td>베트남 하노이</td><td>2~4만원</td><td>4~8만원</td><td>8~15만원</td></tr>
                    <tr><td>홍콩</td><td>8~15만원</td><td>15~30만원</td><td>30~60만원</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="info-card">
              <h3 className="font-bold text-foreground text-lg mb-3">📌 무료 취소 정책 활용</h3>
              <p className="text-sm text-muted-foreground mb-3">트립닷컴의 대부분 호텔은 무료 취소 정책을 제공합니다. 여행 일정이 확정되지 않았더라도 할인코드가 유효한 동안 미리 예약해두는 것이 좋습니다.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 무료 취소 가능 호텔은 <strong className="text-foreground">"무료 취소"</strong> 태그로 표시됩니다.</li>
                <li>• 대부분 체크인 <strong className="text-foreground">24~72시간 전</strong>까지 무료 취소가 가능합니다.</li>
                <li>• 할인코드 만료 전에 예약하고, 더 좋은 가격이 나오면 재예약도 가능합니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="container py-12">
        <h2 className="section-title text-center">🎉 호텔 관련 프로모션</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
            <img src={couponMegasale} alt="트립닷컴 메가세일 호텔 최대 10만원 할인" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold text-foreground">메가세일</h3>
              <p className="text-sm text-muted-foreground">호텔 최대 10만원 할인 + 럭셔리 호텔 19,000원 특가</p>
            </div>
          </a>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
            <img src={couponJapan} alt="트립닷컴 일본 호텔 슈퍼 데스티네이션" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold text-foreground">슈퍼 데스티네이션 일본</h3>
              <p className="text-sm text-muted-foreground">일본 호텔 최대 50% 할인 + 연박 5% 추가</p>
            </div>
          </a>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="coupon-card group">
            <img src={couponHotel12} alt="트립닷컴 호텔 12% 인플루언서 할인코드" className="w-full h-48 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-bold text-foreground">숙소 최대 50% 핫딜</h3>
              <p className="text-sm text-muted-foreground">전 세계 인기 호텔 최대 50% 할인 특가</p>
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">지금 트립닷컴에서 최저가 호텔을 예약하세요!</h2>
          <p className="text-primary-foreground/80 mb-6">할인코드 적용 시 추가 할인이 자동으로 적용됩니다</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-10 py-4 font-bold text-secondary-foreground text-lg hover:scale-105 transition-all animate-pulse-glow">
            <Hotel className="w-5 h-5" /> 호텔 할인 적용하기
          </a>
        </div>
      </section>
    </>
  );
}
