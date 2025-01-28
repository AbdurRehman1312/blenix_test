import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Blenix",
  description: "Unleash the Power of Blockchain for a Sustainable Future",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    title: "Blenix",
    description: "Unleash the Power of Blockchain for a Sustainable Future",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YL1QHY3QNE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-YL1QHY3QNE');
      `,
          }}
        />
      </head>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
