import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Abei Foodphedia",
  description: "Company profile catering & makanan ringan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
