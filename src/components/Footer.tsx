import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A3A5C] bg-[#050F1D] py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          {/* Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[#5A8AAF] text-sm">
              © 2026 Big Idea Games Inc.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-[#8BB8D9] hover:text-[#28A9FF] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#8BB8D9] hover:text-[#28A9FF] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/faq"
              className="text-[#8BB8D9] hover:text-[#28A9FF] transition-colors"
            >
              FAQ
            </Link>
            <a
              href="mailto:superstarhockey@bigidea.games"
              className="inline-flex items-center gap-1.5 text-[#8BB8D9] hover:text-[#28A9FF] transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
