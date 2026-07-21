import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";
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
  title: "Jagdish B Chavda | Java & Spring Boot Developer",
  description: "Personal Portfolio of Jagdish B Chavda - Core Java & Spring Boot Fresher Developer. MCA Student specializing in high-performance backend systems.",
  keywords: [
    "Jagdish Chavda",
    "Java Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "Java Fresher",
    "Gujarat Tech Fresher",
    "MCA Student",
    "Gandhinagar Developer"
  ],
  authors: [{ name: "Jagdish B Chavda" }],
  openGraph: {
    title: "Jagdish B Chavda | Java & Spring Boot Developer Portfolio",
    description: "Explore the technical expertise, projects, and credentials of Jagdish B Chavda.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background-dark text-text-primary font-sans">
        {children}
        <Toaster position="bottom-right" theme="dark" richColors />
      </body>
    </html>
  );
}
