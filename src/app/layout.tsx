import "./globals.css";
import { Header, Footer, SideBar } from "@/components/layout";

export const metadata = {
  title: {
    default: "ChatGPT Simulation",
    template: "%s - ChatGPT",
  },
  description: "Ask anything here...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow">
          <SideBar />

          <main className="flex-grow pt-20 pb-16 md:pl-64">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
