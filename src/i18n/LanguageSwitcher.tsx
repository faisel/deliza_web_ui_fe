"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, getLocaleName, getLocaleShort, type Locale } from "./config";
import { switchLocalePath } from "./routing";
import { useTranslation } from "./useTranslation";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { locale, messages } = useTranslation();
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className={`language-switcher ${open ? "is-open" : ""} ${className}`}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button
        type="button"
        className="language-switcher-toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={messages.header.languageSwitcher.label}
        onClick={() => setOpen((prev) => !prev)}
        style={toggleStyle}
      >
        <i className="fa fa-globe" aria-hidden="true" />
        <span style={{ marginLeft: 6, fontWeight: 600 }}>
          {getLocaleShort(locale)}
        </span>
        <i
          className={`fa fa-chevron-${open ? "up" : "down"}`}
          aria-hidden="true"
          style={{ marginLeft: 6, fontSize: 10 }}
        />
      </button>

      {open && (
        <ul
          className="language-switcher-menu"
          role="listbox"
          aria-label={messages.header.languageSwitcher.label}
          style={menuStyle}
        >
          {locales.map((code) => {
            const isActive = code === locale;
            return (
              <li key={code} role="option" aria-selected={isActive}>
                <Link
                  href={switchLocalePath(pathname, code as Locale)}
                  hrefLang={code}
                  lang={code}
                  onClick={() => setOpen(false)}
                  style={{
                    ...itemStyle,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--primary, #1f2937)" : "#1f2937",
                    background: isActive ? "rgba(0,0,0,0.04)" : "transparent",
                  }}
                >
                  <span style={{ marginRight: 8, fontWeight: 700 }}>
                    {getLocaleShort(code)}
                  </span>
                  <span style={{ color: "#4b5563" }}>{getLocaleName(code)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const toggleStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "transparent",
  border: "1px solid rgba(0, 0, 0, 0.12)",
  borderRadius: 999,
  padding: "8px 14px",
  cursor: "pointer",
  fontSize: 14,
  lineHeight: 1,
  color: "inherit",
};

const menuStyle: React.CSSProperties = {
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  minWidth: 180,
  margin: 0,
  padding: 6,
  listStyle: "none",
  background: "#fff",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  borderRadius: 12,
  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.12)",
  zIndex: 1000,
};

const itemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "8px 12px",
  borderRadius: 8,
  fontSize: 14,
  textDecoration: "none",
  whiteSpace: "nowrap",
};
