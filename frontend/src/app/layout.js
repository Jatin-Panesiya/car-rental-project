import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/provider";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "J & P Cars",
  description: "Drive your dream car now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#121212]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>{children}</Providers>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
