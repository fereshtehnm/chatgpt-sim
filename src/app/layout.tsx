import "./globals.css";
import { Header, Footer, SideBar } from "@/components/layout";

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
    <body className="relative flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col ml-64"> {/* Adjust the margin to accommodate sidebar width */}
        <Header />
        <main className="flex-grow pt-20 pb-16">
          {children}
        </main>
        <Footer />
      </div>
    </body>
  </html>
  );
}
