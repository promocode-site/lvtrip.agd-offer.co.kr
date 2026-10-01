import { useState } from "react";
import { Copy, Check, ExternalLink, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import SchemaOrg from "@/components/SchemaOrg";

import howtoGuide from "@/assets/howto-guide.png";
import appMockup from "@/assets/app-mockup.png";
import comparisonChart from "@/assets/comparison-chart.png";
import couponFlight from "@/assets/coupon-flight-3pct.png";
import couponHotel from "@/assets/coupon-hotel-12pct.png";
import couponCar from "@/assets/coupon-car-8pct.png";
import couponActivity from "@/assets/coupon-activity-5pct.png";
import couponNewmember from "@/assets/coupon-newmember.png";
import couponMegasale from "@/assets/coupon-megasale.png";
import couponSamsung from "@/assets/coupon-samsung.png";
import couponLotte from "@/assets/coupon-lotte.png";
import heroBanner from "@/assets/hero-banner.png";

const AFFILIATE_LINK = "http://app.ac/Iqp4O9293";

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

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground text-sm md:text-base">{q}</h3>
        {open ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
}

const faqItems = [
  { question: "트립닷컴 할인코드는 어디에 입력하나요?", answer: "트립닷컴에서 항공권, 호텔, 렌터카 등 원하는 상품을 선택한 후 결제 페이지로 이동하면 '할인코드 입력'란이 표시됩니다. 해당 란에 할인코드를 정확히 입력하고 '적용' 버튼을 누르면 할인 금액이 자동으로 계산됩니다." },
  { question: "할인코드를 여러 개 동시에 사용할 수 있나요?", answer: "트립닷컴에서는 한 번의 결제에 하나의 할인코드만 적용 가능합니다. 다만, 카드사 제휴 할인(삼성카드 2%, 롯데카드 2%)은 할인코드와 별도로 자동 적용되므로 중복 할인이 가능합니다. 네이버페이 적립도 별도로 적용됩니다." },
  { question: "할인코드가 적용되지 않는 이유는 무엇인가요?", answer: "할인코드가 적용되지 않는 주요 원인은 다음과 같습니다: 1) 유효기간 만료, 2) 대소문자 오타 또는 띄어쓰기 오류, 3) 적용 대상 상품이 아닌 경우(예: 항공권 코드를 호텔에 사용), 4) 최소 결제 금액 미달, 5) 신규/기존 회원 구분, 6) 제휴 링크를 통해 접속하지 않은 경우." },
  { question: "인플루언서 할인코드란 무엇인가요?", answer: "인플루언서 할인코드는 트립닷컴이 선정한 공식 파트너(인플루언서)에게 제공하는 전용 할인코드입니다. 일반 프로모션 코드보다 높은 할인율을 제공하며, 반드시 해당 인플루언서의 제휴 링크를 통해 접속해야만 사용할 수 있습니다. 본 사이트의 버튼을 통해 접속하면 자동으로 제휴 링크가 적용됩니다." },
  { question: "신규회원 웰컴 쿠폰팩은 어떻게 받나요?", answer: "트립닷컴 앱을 설치하고 회원가입을 완료하면 자동으로 웰컴 쿠폰팩이 지급됩니다. 가입 시 추천코드(HMNG5D)를 입력하면 호텔 8% 할인쿠폰이 추가로 지급됩니다. 웰컴 쿠폰팩은 가입 후 7일 이내에만 사용 가능하니 빨리 사용하세요." },
  { question: "트립닷컴 할인코드는 PC와 모바일 앱 모두 사용 가능한가요?", answer: "대부분의 할인코드는 PC 웹과 모바일 앱 모두에서 사용 가능합니다. 다만, 일부 앱 전용 프로모션 코드는 모바일 앱에서만 입력할 수 있으므로 주의가 필요합니다. 앱 전용 코드의 경우 PC 웹에서는 입력란이 표시되지 않을 수 있습니다." },
  { question: "카드사 할인은 어떻게 적용되나요?", answer: "삼성카드(항공권 2%)와 롯데카드(호텔 2%) 할인은 해당 카드로 결제 시 자동으로 적용됩니다. 별도의 코드 입력이 필요 없으며, 할인코드와 중복 적용이 가능합니다. 다만, 월별 선착순으로 제공되므로 조기 소진될 수 있습니다." },
  { question: "네이버페이로 결제하면 어떤 혜택이 있나요?", answer: "트립닷컴에서 네이버페이로 결제하면 결제 금액의 0.5%가 네이버페이 포인트로 적립됩니다. 이는 할인코드, 카드사 할인과 별도로 적용되므로, 할인코드 + 카드사 할인 + 네이버페이 적립을 모두 활용하면 최대 혜택을 누릴 수 있습니다." },
  { question: "트립닷컴 메가세일은 언제 진행되나요?", answer: "트립닷컴 메가세일은 보통 연 2~4회 진행되며, 4월, 7월, 9월, 11~12월(블랙프라이데이)에 주로 열립니다. 메가세일 기간에는 항공권 최대 10만원, 호텔 최대 10만원, 액티비티 6% 할인 등 평소보다 파격적인 혜택이 제공됩니다." },
  { question: "할인코드의 유효기간은 어떻게 확인하나요?", answer: "본 사이트 '트립닷컴 할인코드'에서는 모든 할인코드의 유효기간을 실시간으로 업데이트하고 있습니다. 각 할인코드 카드에 마감일이 표시되어 있으니 참고하세요. 일반적으로 월말에 코드가 변경되므로, 월초에 새로운 코드를 확인하는 것이 좋습니다." },
];

export default function Tips() {
  return (
    <>
      <SchemaOrg
        type="FAQPage"
        title="트립닷컴 할인코드 사용법 & 꿀팁 - 완벽 가이드 2026"
        description="트립닷컴 할인코드 사용방법부터 최대 할인 받는 꿀팁, 카드사 중복 할인, FAQ까지 완벽 정리. 초보자도 쉽게 따라할 수 있는 단계별 가이드."
        url="/tips"
        faqItems={faqItems}
        breadcrumbs={[
          { name: "홈", url: "/" },
          { name: "사용법 & 꿀팁", url: "/tips" },
        ]}
      />

      {/* Hero */}
      <section className="hero-section py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBanner} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="container relative text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8" />
            <span className="badge-discount text-sm">완벽 가이드</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">트립닷컴 할인코드 사용법 & 꿀팁</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            할인코드 입력 방법부터 최대 할인을 위한 꿀팁, 자주 묻는 질문까지 — 트립닷컴 할인코드 활용의 모든 것
          </p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 font-bold text-secondary-foreground text-lg hover:scale-105 transition-all animate-pulse-glow">
            <ExternalLink className="w-5 h-5" /> 트립닷컴 할인 적용하기
          </a>
        </div>
      </section>

      {/* How to Use */}
      <section className="container py-12">
        <h2 className="section-title">🧭 트립닷컴 할인코드 사용방법 (4단계)</h2>
        <p className="section-subtitle">아래 순서대로 따라하면 누구나 쉽게 할인코드를 적용할 수 있습니다</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <img src={howtoGuide} alt="트립닷컴 할인코드 사용방법 4단계 안내" className="rounded-xl w-full" loading="lazy" />
          <div className="space-y-4">
            {[
              { step: 1, title: "상품 선택", desc: "트립닷컴에서 항공권, 호텔, 투어 등 원하는 상품을 검색하고 선택합니다." },
              { step: 2, title: "결제 페이지 이동", desc: "결제 단계에서 '할인코드 입력'란을 확인합니다. 앱과 웹의 위치가 다를 수 있습니다." },
              { step: 3, title: "할인코드 입력", desc: "정확히 입력 후 '적용' 버튼을 누르면 자동으로 할인 금액이 계산됩니다." },
              { step: 4, title: "최종 결제", desc: "할인이 적용된 최종 금액을 확인하고 결제를 완료합니다." },
            ].map((s) => (
              <div key={s.step} className="info-card flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={appMockup} alt="트립닷컴 앱에서 할인코드 입력하는 화면" className="rounded-xl w-full h-64 object-cover" loading="lazy" />
          <div className="info-card">
            <h3 className="font-bold text-foreground text-lg mb-3">💡 앱 vs 웹 차이점</h3>
            <div className="table-container">
              <table>
                <thead><tr><th>항목</th><th>모바일 앱</th><th>PC 웹</th></tr></thead>
                <tbody>
                  <tr><td>할인코드 입력</td><td className="text-success font-bold">✅ 모든 코드</td><td>⚠️ 앱 전용 코드 불가</td></tr>
                  <tr><td>앱 전용 프로모션</td><td className="text-success font-bold">✅ 이용 가능</td><td>❌ 불가</td></tr>
                  <tr><td>추천코드 입력</td><td className="text-success font-bold">✅ 가입 시 가능</td><td>❌ 불가</td></tr>
                  <tr><td>푸시 알림 쿠폰</td><td className="text-success font-bold">✅ 수신 가능</td><td>❌ 불가</td></tr>
                  <tr><td>가격 알림</td><td className="text-success font-bold">✅ 설정 가능</td><td>❌ 불가</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Code Types */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title">📌 트립닷컴 할인코드 유형별 완전 분석</h2>
          <p className="section-subtitle">4가지 유형을 이해하면 최적의 코드를 선택할 수 있습니다</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="info-card">
              <div className="flex items-center gap-3 mb-3">
                <img src={couponNewmember} alt="트립닷컴 회원 전용 할인코드" className="w-16 h-16 rounded-lg object-cover" loading="lazy" />
                <div>
                  <h3 className="font-bold text-foreground">1. 회원 전용 할인코드</h3>
                  <span className="badge-category">이메일 · 앱 알림</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">회원 가입하고 로그인한 사용자만 받을 수 있는 코드입니다. 신규 가입자에게 더 높은 할인이 제공되며, 웰컴 쿠폰팩에 포함된 다양한 쿠폰을 활용할 수 있습니다.</p>
            </div>
            <div className="info-card">
              <div className="flex items-center gap-3 mb-3">
                <img src={couponMegasale} alt="트립닷컴 시즌 프로모션 코드" className="w-16 h-16 rounded-lg object-cover" loading="lazy" />
                <div>
                  <h3 className="font-bold text-foreground">2. 시즌 프로모션 코드</h3>
                  <span className="badge-category">홈페이지 · SNS · 앱</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">블랙프라이데이, 추석, 여름방학 등 특정 시즌에만 공개되는 한정 코드입니다. 수량 제한이 있는 경우가 많으므로 빠르게 사용하는 것이 좋습니다.</p>
            </div>
            <div className="info-card">
              <div className="flex items-center gap-3 mb-3">
                <img src={couponFlight} alt="트립닷컴 파트너 제휴 코드" className="w-16 h-16 rounded-lg object-cover" loading="lazy" />
                <div>
                  <h3 className="font-bold text-foreground">3. 파트너 제휴 코드</h3>
                  <span className="badge-discount">최고 할인율!</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">카드사나 기업 제휴를 통해 제공되는 할인코드로, 가장 높은 할인율을 제공합니다. 제휴 링크로 접속해야 하며, 본 사이트의 버튼을 통해 자동 적용됩니다.</p>
            </div>
            <div className="info-card">
              <div className="flex items-center gap-3 mb-3">
                <img src={couponActivity} alt="트립닷컴 앱 전용 프로모션 코드" className="w-16 h-16 rounded-lg object-cover" loading="lazy" />
                <div>
                  <h3 className="font-bold text-foreground">4. 앱 전용 프로모션 코드</h3>
                  <span className="badge-category">앱 푸시 · 앱 내 팝업</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">모바일 앱에서만 입력할 수 있는 할인코드입니다. 웹에서는 사용이 불가하며, 할인율이 높은 코드가 많으므로 앱 설치를 추천합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product/Region Codes */}
      <section className="container py-12">
        <h2 className="section-title">📦 상품 · 국가별 할인코드 비교</h2>
        <p className="section-subtitle">할인코드가 적용되는 범위를 미리 확인하세요</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="table-container">
            <table>
              <thead><tr><th>할인코드 종류</th><th>할인 혜택</th><th>특징</th></tr></thead>
              <tbody>
                <tr><td>항공권 할인코드</td><td className="font-bold text-primary">3%</td><td>제휴사 코드가 가장 높은 할인율</td></tr>
                <tr><td>호텔 할인코드</td><td className="font-bold text-primary">3~8%</td><td>조건없이 무제한 할인 가능</td></tr>
                <tr><td>액티비티 할인코드</td><td className="font-bold text-primary">5~12%</td><td>신규회원 할인율이 가장 큼</td></tr>
              </tbody>
            </table>
          </div>
          <img src={comparisonChart} alt="트립닷컴 할인코드 카테고리별 비교 차트" className="rounded-xl w-full" loading="lazy" />
        </div>
      </section>

      {/* Caution */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title">⚠️ 할인코드 사용 시 주의사항</h2>
          <p className="section-subtitle">이것만 체크하면 할인코드 적용 실패를 예방할 수 있습니다</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "코드 오타 주의", desc: "띄어쓰기나 대소문자 오류 없이 정확하게 입력해야 합니다. 복사 버튼을 사용하면 오타 없이 입력할 수 있습니다.", img: couponFlight },
              { title: "유효기간 확인", desc: "대부분의 코드는 단기간만 유효합니다. 본 사이트에서 최신 코드를 확인하세요.", img: couponHotel },
              { title: "최소 결제 금액", desc: "일부 할인코드는 일정 금액 이상 결제 시에만 적용됩니다. 조건을 미리 확인하세요.", img: couponCar },
              { title: "회원 구분 확인", desc: "신규 회원 전용 코드는 기존 회원 계정에서 사용할 수 없습니다.", img: couponNewmember },
            ].map((item, i) => (
              <div key={i} className="info-card">
                <img src={item.img} alt={`${item.title} 주의사항`} className="w-full h-32 object-cover rounded-lg mb-3" loading="lazy" />
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Max Discount Strategy */}
      <section className="container py-12">
        <h2 className="section-title">🏆 최대 할인 전략: 할인코드 + 카드 + 네이버페이</h2>
        <p className="section-subtitle">3가지를 조합하면 최대 할인을 받을 수 있습니다</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-foreground text-lg mb-4">✈️ 항공권 최대 할인 조합</h3>
            <div className="table-container mb-6">
              <table>
                <thead><tr><th>할인 항목</th><th>할인율/금액</th><th>적용 방법</th></tr></thead>
                <tbody>
                  <tr><td>TRIPH3F</td><td className="font-bold text-primary">3%</td><td>제휴 링크 접속 후 코드 입력</td></tr>
                  <tr><td>삼성카드</td><td className="font-bold text-primary">2%</td><td>삼성카드로 결제 (자동)</td></tr>
                  <tr><td>네이버페이</td><td className="font-bold text-primary">0.5% 적립</td><td>네이버페이로 결제</td></tr>
                  <tr><td className="font-bold text-foreground">총 할인</td><td className="font-bold text-primary text-lg">최대 5.5%</td><td></td></tr>
                </tbody>
              </table>
            </div>
            <img src={couponSamsung} alt="삼성카드 트립닷컴 항공권 할인" className="w-full h-40 object-cover rounded-xl" loading="lazy" />
          </div>
          <div>
            <h3 className="font-bold text-foreground text-lg mb-4">🏨 호텔 최대 할인 조합</h3>
            <div className="table-container mb-6">
              <table>
                <thead><tr><th>할인 항목</th><th>할인율/금액</th><th>적용 방법</th></tr></thead>
                <tbody>
                  <tr><td>인플루언서 코드</td><td className="font-bold text-primary">3%</td><td>제휴 링크 접속 후 코드 입력</td></tr>
                  <tr><td>롯데카드</td><td className="font-bold text-primary">2%</td><td>롯데카드로 결제 (자동)</td></tr>
                  <tr><td>네이버페이</td><td className="font-bold text-primary">0.5% 적립</td><td>네이버페이로 결제</td></tr>
                  <tr><td className="font-bold text-foreground">총 할인</td><td className="font-bold text-primary text-lg">최대 5.5%</td><td></td></tr>
                </tbody>
              </table>
            </div>
            <img src={couponLotte} alt="롯데카드 트립닷컴 호텔 할인" className="w-full h-40 object-cover rounded-xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Monthly Schedule */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title">📅 트립닷컴 할인 일정 (2026년)</h2>
          <p className="section-subtitle">주요 프로모션 일정을 미리 파악하고 최적의 타이밍에 예약하세요</p>
          <div className="table-container">
            <table>
              <thead><tr><th>시기</th><th>프로모션</th><th>주요 혜택</th><th>추천 상품</th></tr></thead>
              <tbody>
                <tr><td>1~2월</td><td>설 연휴 특가</td><td>항공권·호텔 최대 30% 할인</td><td>동남아, 일본</td></tr>
                <tr><td>4월</td><td>메가세일 + 슈퍼 데스티네이션</td><td>항공 10만원↓, 호텔 10만원↓</td><td>일본, 태국, 중국</td></tr>
                <tr><td>4~7월</td><td>봄 여행 시즌</td><td>벚꽃 여행 특가</td><td>일본, 대만</td></tr>
                <tr><td>6~8월</td><td>여름 휴가 프로모션</td><td>리조트·해변 호텔 특가</td><td>동남아, 하와이</td></tr>
                <tr><td className="font-bold text-primary">10~11월 (현재)</td><td className="font-bold text-primary">가을 여행 특가</td><td className="font-bold text-primary">유럽·미주 항공권 할인</td><td className="font-bold text-primary">유럽, 미국</td></tr>
                <tr><td>11월</td><td>블랙프라이데이</td><td>연중 최대 할인 (최대 50%)</td><td>전 세계</td></tr>
                <tr><td>12월</td><td>연말 특가</td><td>겨울 여행·스키 패키지</td><td>일본, 유럽</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2 className="section-title">❓ 자주 묻는 질문 (FAQ)</h2>
        <p className="section-subtitle">트립닷컴 할인코드에 대해 가장 많이 궁금해하는 질문들</p>
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqItems.map((item, i) => (
            <FAQItem key={i} q={item.question} a={item.answer} />
          ))}
        </div>
      </section>

      {/* Quick Code Reference */}
      <section className="bg-accent/30 py-12">
        <div className="container">
          <h2 className="section-title text-center">📋 빠른 할인코드 참조</h2>
          <p className="section-subtitle text-center">자주 사용하는 코드를 빠르게 복사하세요</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { code: "TRIPH3F", label: "항공권 3%" },
              { code: "TRIPBF3", label: "항공권 3% (한도)" },
              { code: "TRIPBH3", label: "호텔 3%" },
              { code: "TRIPCAR8", label: "렌터카 8%" },
              { code: "GO5", label: "액티비티 5%" },
              { code: "RVZBEEWRDF", label: "중국 호텔 5%" },
              { code: "TRIPCAR7", label: "렌터카 7%" },
              { code: "HMNG5D", label: "신규회원" },
            ].map((item) => (
              <div key={item.code} className="info-card text-center p-4">
                <p className="text-xs text-muted-foreground mb-2">{item.label}</p>
                <CopyBtn code={item.code} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section py-12">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">지금 트립닷컴에서 최대 할인을 받으세요!</h2>
          <p className="text-primary-foreground/80 mb-6">할인코드와 카드사 할인을 함께 적용하면 최대 12.5% 절약</p>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-10 py-4 font-bold text-secondary-foreground text-lg hover:scale-105 transition-all animate-pulse-glow">
            <ExternalLink className="w-5 h-5" /> 트립닷컴 할인 적용하기
          </a>
        </div>
      </section>
    </>
  );
}
