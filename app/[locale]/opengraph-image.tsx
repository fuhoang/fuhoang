import { ImageResponse } from "next/og";
import { isLocale } from "@/components/i18n/config";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

function getImageCopy(locale: string) {
  if (locale === "es") {
    return {
      alt: "Vista previa del portafolio de Fu Hoang",
      title: "Desarrollador Full-Stack Senior",
      body: "Next.js, React, Laravel y MongoDB. Entrega para producción, testing, CI/CD y mejora de plataformas.",
      pills: ["Londres", "Startups", "SaaS", "Enterprise"],
    };
  }

  return {
    alt: "Fu Hoang portfolio preview",
    title: "Senior Full-Stack Software Developer",
    body: "Next.js, React, Laravel, MongoDB. Production-grade delivery, testing, CI/CD, and platform improvement.",
    pills: ["London", "Startups", "SaaS", "Enterprise"],
  };
}

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const copy = getImageCopy(resolvedLocale);

  return [
    {
      id: resolvedLocale,
      alt: copy.alt,
      size,
      contentType,
    },
  ];
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = isLocale(locale) ? locale : "en";
  const copy = getImageCopy(resolvedLocale);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.26), transparent 32%), radial-gradient(circle at 80% 35%, rgba(244,114,182,0.24), transparent 30%), linear-gradient(135deg, #050816 0%, #0b1220 55%, #111827 100%)",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(148, 163, 184, 0.24)",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "space-between",
            padding: "44px",
            background: "rgba(15, 23, 42, 0.58)",
          }}
        >
          <div
            style={{
              color: "#94a3b8",
              display: "flex",
              fontSize: 28,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {"< Fu Hoang />"}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
              }}
            >
              {copy.title}
            </div>
            <div
              style={{
                color: "#cbd5e1",
                display: "flex",
                fontSize: 34,
                lineHeight: 1.35,
              }}
            >
              {copy.body}
            </div>
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 18,
            }}
          >
            {copy.pills.map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(148, 163, 184, 0.28)",
                  borderRadius: "999px",
                  color: "#e2e8f0",
                  display: "flex",
                  fontSize: 24,
                  padding: "12px 20px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
