import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Abei Foodphedia",
  description: "Company profile catering & makanan ringan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
