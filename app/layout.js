import Header from "./header"; 
import Footer from "./Footer"; 
import "./globals.css";

export const metadata = {
  title: "Aditya Spine & Joint Rehabilitation Clinic | Borivali West, Mumbai",
  description: "Advanced non-surgical spine, joint, and neuro rehabilitation in Borivali West, Mumbai. Personalized recovery programs led by Dr. Santosh Prajapati (PT).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 antialiased">
        {/* Header */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}