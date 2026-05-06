import styles from "./DelizaBanner.module.css";

interface DelizaBannerProps {
  title?: string;
  subtitle?: string;
  videoSrc?: string;
}

let instanceCounter = 0;

export default function DelizaBanner({
  title = "DELIZA",
  subtitle = "Die Genuss GmbH",
  videoSrc = "/assets/images/banner/01.mp4",
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
          src={videoSrc}
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
            <mask id={maskId}>
              <rect width="1200" height="500" fill="white" />
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
            width="1200"
            height="500"
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
