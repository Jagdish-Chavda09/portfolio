import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jagdishchavda.dev"),
  title: "Jagdish B Chavda | Java & Spring Boot Developer | Ahmedabad & Gandhinagar",
  description: "Official portfolio of Jagdish B Chavda, a Java & Spring Boot Backend Developer. MCA Student specializing in high-performance APIs, server-side development, and Oracle database integrations.",
  keywords: [
    "Jagdish Chavda",
    "Jagdish B Chavda",
    "Java Developer Ahmedabad",
    "Spring Boot Developer Fresher Gujarat",
    "Java Backend Developer Gandhinagar",
    "MCA Student Portfolio",
    "Java Fresher Ahmedabad",
    "Spring Boot Fresher Ahmedabad",
    "Software Engineer Fresher Gujarat",
    "Oracle DB Developer Gujarat",
  ],
  authors: [{ name: "Jagdish B Chavda", url: "https://github.com/Jagdish-Chavda09" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jagdish B Chavda | Java & Spring Boot Developer Portfolio",
    description: "Explore the backend development expertise, Spring Boot projects, and database architectures of Jagdish B Chavda.",
    type: "website",
    locale: "en_US",
    url: "https://jagdishchavda.dev",
    siteName: "Jagdish B Chavda Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jagdish B Chavda - Java & Spring Boot Developer Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdish B Chavda | Java & Spring Boot Developer Portfolio",
    description: "Discover enterprise Java and Spring Boot applications, Oracle DB integrations, and system layouts of Jagdish B Chavda.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Person schema structured data
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jagdish B Chavda",
    "jobTitle": "Java & Spring Boot Developer",
    "url": "https://jagdishchavda.dev",
    "sameAs": [
      "https://github.com/Jagdish-Chavda09",
      "https://linkedin.com/in/jagdish-chavda"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gandhinagar",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Kadi Sarva Vishwavidyalaya"
    }
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background-dark text-text-primary font-sans">
        <ThemeProvider>
          <CustomCursor />
          <CommandPalette />
          {children}
          <Toaster position="bottom-right" theme="dark" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
