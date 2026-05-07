'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "@/i18n/LocalizedLink";
import { useTranslation } from "@/i18n/useTranslation";
import type { Locale } from "@/i18n/config";
import {
    getServiceContent,
    getServicePath,
    SERVICE_IMAGES,
    type ServiceId,
} from "@/app/[locale]/services-detail/content";

gsap.registerPlugin(SplitText, ScrollTrigger);

type ProjectTwoProps = {
    className?: string
    id?: string;
};

const SERVICE_ORDER: ServiceId[] = ["chutnee", "giessenpark", "7310"];

const SECTION_LABELS: Record<Locale, { eyebrow: string; title: string }> = {
    de: { eyebrow: "Marken & Konzepte", title: "Unsere Spezialgebiete" },
    en: { eyebrow: "Brands & Concepts", title: "Our specialist areas" },
    fr: { eyebrow: "Marques & Concepts", title: "Nos domaines de spécialité" },
    it: { eyebrow: "Marchi & Concept", title: "Le nostre aree di specializzazione" },
};

function ProjectTwo({ className = "", id = "" }: ProjectTwoProps) {
    const { locale } = useTranslation();
    const labels = SECTION_LABELS[locale];

    const splitRef = useRef<HTMLHeadingElement>(null);
    // SplitText animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const raw = splitRef.current;
            if (!raw) return;

            const element = raw as HTMLHeadingElement & {
                animation?: gsap.core.Tween;
                split?: { revert: () => void; chars: Element[] };
            };

            if (element.animation) {
                element.animation.progress(1).kill();
                element.split?.revert();
            }

            element.split = new SplitText(element, {
                type: "lines,words,chars",
                linesClass: "split-line",
            }) as unknown as { revert: () => void; chars: Element[] };

            gsap.set(element, { perspective: 400 });
            gsap.set(element.split.chars, { opacity: 0, x: 50 });

            element.animation = gsap.to(element.split.chars, {
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.7)",
                stagger: 0.02,
            });
        });

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    const cards = SERVICE_ORDER.map((serviceId) => {
        const content = getServiceContent(serviceId, locale);
        const image = SERVICE_IMAGES[serviceId].card;
        return {
            serviceId,
            href: getServicePath(serviceId, locale),
            title: content.heroTitle,
            // infoCards[2] is the "Category"/"Kategorie" entry across all locales.
            category: content.infoCards[2].value,
            image,
        };
    });

    return (
        <>
            {/* case studies area start */}
            <div id={id} className={`rts-case-studies-area rts-section-gapBottom ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-three center">
                                <span className="pre">{labels.eyebrow}</span>
                                <div className="bg-title">03</div>
                                <h2 className="title rts-text-anime-style-1" ref={splitRef}>
                                    {labels.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--10 rts_jump_animation-wrapper">
                        {cards.map((card) => (
                            <div
                                key={card.serviceId}
                                className="col-lg-4 col-md-6 rts-jump__item"
                            >
                                <div className="single-project-style-three">
                                    <Link href={card.href} className="thumbnail">
                                        <Image
                                            src={card.image.src}
                                            alt={card.image.alt}
                                            width={card.image.width}
                                            height={card.image.height}
                                        />
                                    </Link>
                                    <div className="inner-content">
                                        <Link href={card.href}>
                                            <h4 className="title">{card.title}</h4>
                                        </Link>
                                        <span>{card.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* case studies area end */}
        </>

    )
}

export default ProjectTwo
