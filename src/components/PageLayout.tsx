import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#071B33] flex flex-col">
      {/* Header */}
      <header className="py-4 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={`${import.meta.env.BASE_URL}assets/hockey/logos/BIG Logo - Transparent on Dark - Final.webp`}
              alt="Big Idea Games"
              className="w-[140px] sm:w-[180px] h-auto drop-shadow-lg group-hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </header>

      {/* Back link */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 mb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[#8BB8D9] hover:text-[#28A9FF] transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 pb-12 sm:pb-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}
