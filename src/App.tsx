import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import FaqPage from "./pages/FaqPage";
import DeleteAccountHockeyPage from "./pages/DeleteAccountHockeyPage";
import DeleteAccountSoccerPage from "./pages/DeleteAccountSoccerPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/delete-account-superstar-hockey" element={<DeleteAccountHockeyPage />} />
      <Route path="/delete-account-superstar-soccer" element={<DeleteAccountSoccerPage />} />
    </Routes>
  );
}
