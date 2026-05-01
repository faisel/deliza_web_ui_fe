"use client";

import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { localizePath } from "./routing";
import { useTranslation } from "./useTranslation";

type LocalizedLinkProps = Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    href: string;
    children?: ReactNode;
  };

export function LocalizedLink({ href, children, ...rest }: LocalizedLinkProps) {
  const { locale } = useTranslation();
  return (
    <Link href={localizePath(href, locale)} {...rest}>
      {children}
    </Link>
  );
}
