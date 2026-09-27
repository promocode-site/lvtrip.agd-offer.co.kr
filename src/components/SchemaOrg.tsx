import { Head } from "vite-react-ssg";

interface SchemaOrgProps {
  type: "WebPage" | "FAQPage" | "Article" | "WebSite";
  title: string;
  description: string;
  url: string;
  faqItems?: { question: string; answer: string }[];
  breadcrumbs?: { name: string; url: string }[];
  /** 메인 페이지만: WebPage 발행일·수정일·발행처 (src/data/updateLog.ts) */
  pageDates?: { datePublished: string; dateModified: string };
}

export default function SchemaOrg({ type, title, description, url, faqItems, breadcrumbs, pageDates }: SchemaOrgProps) {
  const baseUrl = "https://lvtrip.agd-offer.co.kr";

  const schemas: object[] = [];

  // WebSite schema
  if (type === "WebSite") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "트립닷컴 쿠폰",
      url: baseUrl,
      description: "9월 트립닷컴 쿠폰 총정리! 트립닷컴 항공권 할인코드부터 호텔 할인코드까지, 지금 바로 쓸 수 있는 트립닷컴 할인쿠폰을 카테고리별로 정리했습니다. 매월 업데이트되는 트립닷컴 할인코드들을 확인해보세요!",
      potentialAction: {
        "@type": "SearchAction",
        target: `${baseUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    });
  }

  // WebPage schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": type === "FAQPage" ? "FAQPage" : type === "Article" ? "Article" : "WebPage",
    name: title,
    description,
    url: `${baseUrl}${url}`,
    publisher: {
      "@type": "Organization",
      name: "트립닷컴 쿠폰",
      url: baseUrl,
    },
    datePublished: "2026-01-01",
    dateModified: "2026-09-01",
    ...pageDates,
    ...(type === "Article" && {
      author: { "@type": "Organization", name: "트립닷컴 쿠폰" },
      headline: title,
    }),
  });

  // FAQ schema
  if (type === "FAQPage" && faqItems) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  // BreadcrumbList
  if (breadcrumbs) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((bc, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: bc.name,
        item: `${baseUrl}${bc.url}`,
      })),
    });
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${baseUrl}${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${url}`} />
      <meta property="og:image" content={`${baseUrl}/og-image.png`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="트립닷컴 쿠폰" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}
