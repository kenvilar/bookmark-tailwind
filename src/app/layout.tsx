import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Bookmark - Ken Vilar",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
