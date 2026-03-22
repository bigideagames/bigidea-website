import { useEffect } from "react";

const BASE = import.meta.env.BASE_URL;

const STEPS = [
  {
    num: 1,
    text: 'From the Main Screen, tap the Settings gear icon in the top-left corner.',
    image: `${BASE}assets/hockey/delete-account/step2-accounts.png`,
  },
  {
    num: 2,
    text: 'In Settings, tap the blue "Accounts" button.',
    image: `${BASE}assets/hockey/delete-account/step3-delete-button.png`,
  },
  {
    num: 3,
    text: 'Under Cloud Save Games, tap the "Delete Account" button.',
    image: `${BASE}assets/hockey/delete-account/step4-confirm.png`,
  },
  {
    num: 4,
    text: 'Tap the red "Delete Account" button to confirm permanent deletion of your data.',
    image: `${BASE}assets/hockey/delete-account/step5-final-confirm.png`,
  },
];

export default function DeleteAccountHockeyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#071B33] text-[#D4E8F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <h1 className="font-display text-3xl sm:text-4xl tracking-wider text-[#EAF6FF] mb-2">
          Delete Account — Superstar Hockey
        </h1>
        <h2 className="text-lg sm:text-xl text-[#8BB8D9] mb-4">
          How to Permanently Delete Your Account
        </h2>

        <p className="text-[#8BB8D9] mb-10">
          If you need support, please email us at{" "}
          <a
            href="mailto:superstarhockey@bigidea.games"
            className="text-[#28A9FF] hover:underline"
          >
            superstarhockey@bigidea.games
          </a>
        </p>

        {/* Steps */}
        <div className="space-y-10">
          {STEPS.map((step) => (
            <div key={step.num} className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0E66C1] text-white font-bold flex items-center justify-center text-lg">
                  {step.num}
                </span>
                <p className="text-lg leading-relaxed pt-1.5">{step.text}</p>
              </div>
              <div className="ml-0 sm:ml-14 max-w-[280px]">
                <img
                  src={step.image}
                  alt={`Step ${step.num}`}
                  loading="lazy"
                  className="rounded-xl shadow-lg border border-[#1A3A5C]/40"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-sm text-[#5A8AAF] text-center">
          © {new Date().getFullYear()} Big Idea Games Inc.
        </p>
      </div>
    </div>
  );
}
