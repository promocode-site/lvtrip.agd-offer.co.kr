import type { CSSProperties } from "react";
import { accent, entries, heading, lastUpdated } from "@/data/updateLog";

const dot = (d: string) => d.replace(/-/g, ".");
const rgb = (h: string) => {
  const n = parseInt(h.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(",");
};

// 정적 사이트의 "업데이트 내역" 섹션과 같은 모양
const css = `
.upd-log{max-width:780px;margin:32px auto;padding:28px 20px 24px;box-sizing:border-box;word-break:keep-all;text-align:left;background:#fff;color:#1f2328;border-radius:18px;box-shadow:0 1px 3px rgba(0,0,0,.06)}
@media (max-width:820px){.upd-log{margin:24px 16px}}
.upd-log *{box-sizing:border-box}
.upd-log :where(h2,p,ol,li){margin:0;padding:0}
.upd-log-head{text-align:center;margin-bottom:16px}
.upd-log-title{font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1.35;color:inherit}
.upd-log-last{margin-top:8px;font-size:13px;opacity:.75}
.upd-log-last time{font-weight:800;color:var(--upd-c);opacity:1}
.upd-log-list{list-style:none;background:rgba(var(--upd-rgb),.05);border:1px solid rgba(var(--upd-rgb),.18);border-radius:14px;padding:4px 18px}
.upd-log-list li{display:flex;gap:14px;align-items:baseline;padding:11px 0;border-top:1px solid rgba(var(--upd-rgb),.14)}
.upd-log-list li:first-child{border-top:0}
.upd-log-list time{flex:0 0 auto;font:800 12.5px/1.6 ui-monospace,Menlo,Consolas,monospace;color:var(--upd-c)}
.upd-log-list p{font-size:14px;line-height:1.6}
@media (max-width:640px){.upd-log-title{font-size:19px}.upd-log-list li{flex-direction:column;gap:2px}}
`;

const UpdateLog = () => (
  <section
    className="upd-log"
    id="update-log"
    aria-labelledby="upd-log-title"
    style={{ "--upd-c": accent, "--upd-rgb": rgb(accent) } as CSSProperties}
  >
    <style dangerouslySetInnerHTML={{ __html: css }} />
    <div className="upd-log-head">
      <h2 className="upd-log-title" id="upd-log-title">{heading}</h2>
      <p className="upd-log-last">
        최종 업데이트 <time dateTime={lastUpdated}>{dot(lastUpdated)}</time>
      </p>
    </div>
    <ol className="upd-log-list">
      {entries.map((e) => (
        <li key={e.date + e.text}>
          <time dateTime={e.date}>{dot(e.date)}</time>
          <p>{e.text}</p>
        </li>
      ))}
    </ol>
  </section>
);

export default UpdateLog;
