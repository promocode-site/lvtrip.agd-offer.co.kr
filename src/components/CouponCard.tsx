import { Copy, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AFFILIATE_LINK = "https://app.ac/Iqp4O9293";

interface CouponCardProps {
  code: string;
  discount: string;
  category: string;
  description: string;
  expiry: string;
  image?: string;
  conditions?: string[];
  link?: string;
}

export default function CouponCard({ code, discount, category, description, expiry, image, conditions, link }: CouponCardProps) {
  const [copied, setCopied] = useState(false);
  const targetLink = link || AFFILIATE_LINK;

  const handleCopy = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    toast.success(`할인코드 "${code}" 가 복사되었습니다!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="coupon-card group flex flex-col">
      <div className="relative">
        {image ? (
          <img src={image} alt={`${category} ${discount} 할인코드 ${code}`} className="w-full aspect-square object-cover" loading="lazy" />
        ) : (
          <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <span className="text-2xl sm:text-4xl font-black text-primary text-center px-2">{discount}</span>
          </div>
        )}
        <span className="badge-discount absolute top-2 right-2 text-[10px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1">{discount}</span>
        <span className="badge-category absolute top-2 left-2 text-[10px] sm:text-xs px-2 py-0.5 sm:px-3 sm:py-1">{category}</span>
      </div>
      <div className="p-3 sm:p-5 flex flex-col flex-1">
        <h3 className="font-bold text-xs sm:text-lg mb-1 text-foreground line-clamp-2">{description}</h3>
        <p className="text-[10px] sm:text-sm text-muted-foreground mb-2 sm:mb-3">마감: {expiry}</p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 bg-muted rounded-lg px-2 sm:px-4 py-1.5 sm:py-2">
          <code className="text-primary font-bold text-[11px] sm:text-base flex-1 tracking-wider truncate">{code}</code>
          <a
            href={targetLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCopy}
            className={`copy-button text-[10px] sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 justify-center ${copied ? "bg-success" : ""}`}
            aria-label={`할인코드 ${code} 복사`}
          >
            {copied ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
            {copied ? "복사됨!" : "복사"}
          </a>
        </div>

        {conditions && conditions.length > 0 && (
          <ul className="text-[10px] sm:text-xs text-muted-foreground space-y-0.5 sm:space-y-1 mb-2 sm:mb-3 hidden sm:block">
            {conditions.map((c, i) => (
              <li key={i} className="flex items-start gap-1">
                <span className="text-primary mt-0.5">•</span>
                {c}
              </li>
            ))}
          </ul>
        )}

        <a
          href={targetLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button w-full text-center text-[10px] sm:text-sm py-2 sm:py-3 px-2 sm:px-4 mt-auto animate-pulse-glow"
        >
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="truncate">할인 적용하기</span>
        </a>
      </div>
    </article>
  );
}
