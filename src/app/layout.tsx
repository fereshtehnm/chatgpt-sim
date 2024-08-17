import "./globals.css";
import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: {
    default: "ChatGPT Simulation",
    template: '%s - ChatGPT'
  },
  description: "Ask anything here..."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
