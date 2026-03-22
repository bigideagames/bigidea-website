import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageLayout from "../components/PageLayout";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do Weekly League prizes work? What is the difference between your score and your prize?",
    answer:
      "If you can earn enough Coins to finish at the top of your Weekly Division you will be rewarded with a Card Pack. Any Card Packs you have won will appear when first load Superstar Hockey after the Weekly League has ended. Please be aware that you will NOT receive Coins shown on the leaderboard for your weekly league position. The Coins on the leaderboard are simply your \"Score\". The \"Score\" column on the leaderboard shows you how many Coins you have won this week. The more Coins you win the higher up the leaderboard you will finish!",
  },
  {
    question: "What do the different colours of player cards mean?",
    answer:
      "The different colours on the cards represent the \"Rarity\", or how likely they are to appear in packs, of the cards. Blue = Common, Orange = Uncommon, and Pink = Rare.",
  },
  {
    question: 'Are "Rare" cards better than "Common" or "Uncommon"?',
    answer:
      "The rarity of a card determines how frequently the card will show up in opened packs. Generally speaking Rare > Uncommon > Common, but cards found at higher divisions can be better (depending on upgrade level) than cards found at lower divisions. For example, a Division 4 Common Card can be better than a Division 1 Uncommon.",
  },
  {
    question: "Am I playing real players?",
    answer:
      "The teams (Cards, Upgrade Level, Team Name etc) you are playing against are from real players, but are controlled by AI. The competitive Leaderboards for Tournaments are real and update as other players win and lose matches.",
  },
  {
    question: "Why am I not winning Trophies for winning matches?",
    answer:
      "There is a maximum number of Trophies you can earn in each division. Once you have reached Max Trophies in a division, you need to select a different division and play matches in order to win more trophies.",
  },
  {
    question: "iPhone Users: How do I fix the screen going to half when I swipe down on defense?",
    answer:
      'This is an Apple system feature that is annoying in a lot of games. Here\'s the fix: Go to Settings → Accessibility → Touch and set "Reachability" to the "Off" position.',
  },
  {
    question: 'I bought a package, telling me "no ads", still having ads. Why?',
    answer:
      'If you make any purchase in the "in game" shop ($4.99 and up) then you will no longer see unprompted Ads after matches. To clarify, the "No Ads" feature that is included with purchase is only intended to remove the Ads that come up after a match without any user interaction. You should expect to still see offers to get extra Coins and Gems which can be dismissed without watching an Ad. Most users like to have the opportunity to earn extra Coins and Gems.',
  },
  {
    question:
      "With the new jersey system, it can be really difficult to tell the difference between 2 teams if your opponent also starts a dark jersey. How can I fix this?",
    answer:
      "You can tap the Jersey on the matchups screen or in the Pause menu toggle light or dark!",
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#1A3A5C]/50 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-3 p-4 sm:p-5 text-left hover:bg-[#0C2444]/50 transition-colors cursor-pointer"
      >
        <ChevronDown
          className={`h-5 w-5 text-[#28A9FF] shrink-0 mt-0.5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <span className="text-[#EAF6FF] font-semibold leading-snug">{item.question}</span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-12 sm:pl-13">
            <p className="text-[#8BB8D9] leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <PageLayout>
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider text-[#EAF6FF] mb-2">
        Superstar Hockey FAQ
      </h1>
      <p className="text-[#8BB8D9] mb-8 leading-relaxed">
        Thank you for coming by! We hope we can solve some of your issues using the FAQ below. If you still need support with your game, please email us at{" "}
        <a href="mailto:superstarhockey@bigidea.games" className="text-[#28A9FF] hover:underline">
          superstarhockey@bigidea.games
        </a>
      </p>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>

      <div className="mt-10 p-6 rounded-xl bg-[#0C2444]/50 border border-[#1A3A5C]/50 text-center">
        <p className="text-[#8BB8D9]">
          Still need help? Contact us at{" "}
          <a href="mailto:superstarhockey@bigidea.games" className="text-[#28A9FF] hover:underline">
            superstarhockey@bigidea.games
          </a>
        </p>
      </div>
    </PageLayout>
  );
}
