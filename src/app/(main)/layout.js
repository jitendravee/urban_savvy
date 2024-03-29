import { Inter } from "next/font/google";
import "@/app/globals.css";
import { TopBar } from "@/app/components/shared/TopBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="px-9">
      
      <TopBar />
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
