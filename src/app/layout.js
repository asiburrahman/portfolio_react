import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asibur Rahman - Full Stack Developer",
  description: "Portfolio of Asibur Rahman, a Full Stack Developer specializing in React, Node.js, and MERN stack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
