import styles from "./DelizaBanner.module.css";
import { asset } from "@/lib/asset";

interface DelizaBannerProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
}

let instanceCounter = 0;

export default function DelizaBanner({
  title = "DELIZA",
  subtitle = "Die Genuss GmbH",
  videoSrc = "/assets/images/deliza/video/BannerVideoSeq.mp4",
}: DelizaBannerProps) {
  const maskId = `deliza-banner-mask-${++instanceCounter}`;

  return (
    <div className={styles.wrap}>
      <section
        className={styles.banner}
        aria-label={`${title} – ${subtitle}`}
      >
        <video
          className={styles.video}
          src={asset(videoSrc)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <svg
          className={styles.overlay}
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <mask
              id={maskId}
              maskUnits="userSpaceOnUse"
              x="-2000"
              y="-2000"
              width="5200"
              height="4500"
            >
              {/* Oversized white rect so the mask region always
                  covers the full SVG viewport, even when the
                  banner aspect-ratio is taller than the viewBox
                  on mobile / tablet (xMidYMid meet would otherwise
                  letterbox the inner 1200x500 rect). */}
              <rect
                x="-2000"
                y="-2000"
                width="5200"
                height="4500"
                fill="white"
              />
              <text
                x="600"
                y="220"
                textAnchor="middle"
                dominantBaseline="middle"
                textLength="1000"
                lengthAdjust="spacingAndGlyphs"
                className={styles.title}
                fill="black"
              >
                {title}
              </text>
            </mask>
          </defs>
          <rect
            x="-2000"
            y="-2000"
            width="5200"
            height="4500"
            fill="var(--deliza-banner-bg, #ffffff)"
            mask={`url(#${maskId})`}
          />
          <text
            x="600"
            y="430"
            textAnchor="middle"
            dominantBaseline="middle"
            textLength="1000"
            lengthAdjust="spacing"
            className={styles.subtitle}
          >
            {subtitle}
          </text>
        </svg>
      </section>
    </div>
  );
}
