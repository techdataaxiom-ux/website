import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/lib/LocaleProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zulfiqar-ali-ai.vercel.app"),
  title: "Tech Data Axiom | Public Health Consulting & Data Science",
  description:
    "Tech Data Axiom — a consulting firm specializing in survey design, policy analysis, data analytics, and AI-enabled decision support systems for government and development sectors.",
  keywords: [
    "Tech Data Axiom",
    "Data Science Consulting",
    "Public Health Analytics",
    "Machine Learning",
    "AI Consulting",
    "Survey Design",
    "Policy Analysis",
    "Power BI",
    "Data Warehousing",
  ],
  openGraph: {
    title: "Tech Data Axiom | Public Health Consulting & Data Science",
    description:
      "Tech Data Axiom — a consulting firm specializing in survey design, policy analysis, data analytics, and AI-enabled decision support systems for government and development sectors.",
    url: "https://zulfiqar-ali-ai.vercel.app",
    siteName: "Tech Data Axiom",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Tech Data Axiom - Data Science & AI Consulting",
      },
    ],
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tech Data Axiom",
  description: "A consulting firm specializing in data science, AI solutions, public health analytics, and decision support systems.",
  url: "https://zulfiqar-ali-ai.vercel.app",
  logo: "https://zulfiqar-ali-ai.vercel.app/profile.png",
  sameAs: [
    "https://www.linkedin.com/company/development-thorough-data/",
  ],
  knowsAbout: [
    "Machine Learning",
    "Data Analytics",
    "Power BI",
    "Automation",
    "NLP",
    "Computer Vision",
    "AI Agents",
    "Data Pipelines",
  ],
  hasSkill: [
    "AI Engineering",
    "Data Engineering",
    "Business Intelligence",
    "Dashboard Development",
    "ETL Development",
  ],
  hasPart: [
    {
      "@type": "Project",
      name: "AI Automation & Workflow System",
      description:
        "Automated cross-department workflows using APIs and orchestration tools to reduce manual work and errors.",
      keywords: ["AI Automation", "Workflow Orchestration", "APIs", "Process Automation"],
    },
    {
      "@type": "Project",
      name: "Payment & Transaction Analytics Dashboard",
      description:
        "Executive-ready dashboards for real-time payment tracking, anomaly detection, and KPI monitoring.",
      keywords: ["Financial Analytics", "Dashboards", "Power BI", "Data Modeling"],
    },
    {
      "@type": "Project",
      name: "Retail & Sales BI Platform",
      description:
        "Sales performance analytics with hourly granularity, peak hour analysis, and product performance insights.",
      keywords: ["Retail Analytics", "Sales Dashboards", "ETL", "Reporting"],
    },
    {
      "@type": "Project",
      name: "Centralized Data System (Survey Tracker MVP)",
      description:
        "Centralized data platform for consolidating and tracking multi-year survey and operational data.",
      keywords: ["Data Architecture", "Data Warehousing", "SQL", "Analytics"],
    },
    {
      "@type": "Project",
      name: "AI Social Media Analytics Platform",
      description:
        "NLP-powered platform for sentiment analysis, trend detection, and campaign performance measurement.",
      keywords: ["NLP", "Social Media Analytics", "Machine Learning", "Dashboards"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground bg-white dark:bg-[#050505] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LocaleProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
