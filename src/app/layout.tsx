import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "บันทึกแคลอรี่และการออกกำลังกาย",
  description: "บันทึกแคลอรี่จากอาหาร และดึงข้อมูลออกกำลังกายจาก Strava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
