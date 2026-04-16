import "./globals.css";

export const metadata = {
  title: "Qroissantage",
  description: "A QR-code awareness landing page built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
