import { Link, Outlet, useLocation } from "react-router-dom";
import { Plane, Hotel, Ticket, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

const AFFILIATE_LINK = "https://app.ac/Iqp4O9293";

// 푸터에만 들어가는 페이지 (public/ 아래 정적 페이지라 Link 가 아니라 일반 a 로 연다)
const footerGroups = [
  {
    title: "카드사별 할인",
    links: [
      ["/shinhan-card/", "신한카드"],
      ["/samsung-card/", "삼성카드"],
      ["/nh-card/", "NH농협카드"],
      ["/master-card/", "마스터카드"],
      ["/visa-card/", "비자카드"],
      ["/kb-card/", "KB국민카드"],
      ["/woori-card/", "우리카드"],
      ["/bc-card/", "BC카드"],
      ["/unionpay-card/", "유니온페이"],
      ["/kakao-pay/", "카카오페이"],
      ["/toss-pay/", "토스페이"],
    ],
  },
  {
    title: "다른 할인코드",
    links: [
      ["/agoda/", "아고다 할인코드"],
      ["/myrealtrip/", "마이리얼트립 할인코드"],
      ["/hotelscom/", "호텔스닷컴 할인코드"],
      ["/klook/", "클룩 할인코드"],
      ["/kkday/", "kkday 할인코드"],
    ],
  },
];

const navItems = [
  { path: "/", label: "메인", icon: Ticket },
  { path: "/flight-discount", label: "항공권 할인코드", icon: Plane },
  { path: "/hotel-discount", label: "호텔 할인코드", icon: Hotel },
  { path: "/tips", label: "사용법 & 꿀팁", icon: BookOpen },
];

export default function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <nav className="container flex items-center justify-between h-16" aria-label="메인 네비게이션">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-primary">
            <Ticket className="w-6 h-6" />
            <span>트립닷컴 쿠폰</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link flex items-center gap-1.5 ${
                    location.pathname === item.path ? "nav-link-active" : ""
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex cta-button text-sm py-2 px-4">
            트립닷컴 바로가기
          </a>

          {/* Mobile menu toggle */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <ul className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`nav-link flex items-center gap-2 py-2 ${
                      location.pathname === item.path ? "nav-link-active" : ""
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm w-full text-center">
                  트립닷컴 바로가기
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="bg-foreground text-primary-foreground mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary-foreground">트립닷컴 쿠폰</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                <a href="https://xn--bk1b700b1cz40buif.com/dealstore/tripcom/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline">트립닷컴 쿠폰</a>는 2026년 최신 트립닷컴(Trip.com) 할인코드, 쿠폰, 프로모션 정보를 실시간으로 업데이트하여 제공하는 사이트입니다. 항공권, 호텔, 렌터카, 액티비티 등 다양한 카테고리의 할인 혜택을 한눈에 확인하세요.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary-foreground">빠른 링크</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-primary-foreground">제휴 안내</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
                본 사이트는 트립닷컴 공식 파트너로서, 제휴 링크를 통해 예약 시 수수료를 제공받을 수 있습니다. 이는 이용자에게 추가 비용 없이 운영됩니다.
              </p>
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="cta-button text-sm">
                트립닷컴에서 할인 받기 →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-primary-foreground/20 mt-8 pt-8">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-bold mb-4 text-primary-foreground">{group.title}</h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {group.links.map(([href, label]) => (
                    <li key={href}>
                      <a href={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
            <p>© 2026 트립닷컴 쿠폰. All rights reserved. | 트립닷컴 공식 제휴 파트너</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
