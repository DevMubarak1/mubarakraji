import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// Fallback values for environment variables
const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "Mubarak Raji - Portfolio";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "Personal portfolio of Mubarak Raji, showcasing projects, skills, and achievements.";

export const metadata = {
  title: siteName,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/images/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
