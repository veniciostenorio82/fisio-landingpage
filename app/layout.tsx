import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const title = "Fisioclinic | Fisioterapia • saude • bem-estar";
const description =
  "Cuidado em fisioterapia para aliviar dores, recuperar movimentos e acompanhar você em cada etapa da sua jornada. Agende uma avaliação.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Clínica Movimento",
  keywords: [
    "fisioterapia",
    "reabilitação",
    "terapia manual",
    "fisioterapia ortopédica",
    "mobilidade",
    "alívio da dor",
    "clínica de fisioterapia",
  ],
  authors: [{ name: "Clínica Movimento" }],
  robots: { index: true, follow: true },
  openGraph: {
    locale: "pt_BR",
    type: "website",
    title,
    description:
      "Um cuidado próximo e individualizado para você reduzir dores, recuperar movimentos e retomar sua rotina.",
    images: [{ url: "/images/hero-care.jpg" }],
    siteName: "Clínica Movimento",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Fisioterapia com escuta, movimento e cuidado em cada etapa.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F3D2E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Clínica Movimento",
  description: "Fisioterapia e reabilitação com cuidado individualizado.",
  medicalSpecialty: "Physiotherapy",
  availableLanguage: "Portuguese",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
