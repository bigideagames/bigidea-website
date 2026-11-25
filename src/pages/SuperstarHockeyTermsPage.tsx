import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-xl sm:text-2xl tracking-wider text-[#EAF6FF] mb-3">
        {number}. {title}
      </h2>
      <div className="text-[#8BB8D9] leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

const linkClass = "text-[#28A9FF] hover:underline";
const EMAIL = "superstarhockey@bigidea.games";

function Email() {
  return (
    <a href={`mailto:${EMAIL}`} className={linkClass}>
      {EMAIL}
    </a>
  );
}

export default function SuperstarHockeyTermsPage() {
  return (
    <PageLayout>
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider text-[#EAF6FF] mb-2">
        Superstar Hockey Terms of Use
      </h1>
      <p className="text-[#5A8AAF] text-sm mb-8">Last Updated: November 25, 2026</p>

      <Section number="1" title="ABOUT THESE TERMS">
        <p>
          These Terms of Use ("Terms") are an agreement between you and Big Idea Games Inc. ("Big Idea Games", "we",
          "us" or "our") and govern your use of the Superstar Hockey mobile game, including any updates, online
          features, servers, virtual items and related services (together, the "Game").
        </p>
        <p>
          By downloading, installing, accessing or playing the Game, you agree to these Terms and to our{" "}
          <Link to="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
          , which explains how we collect and use information. If you do not agree, do not use the Game.
        </p>
        <p>
          If you downloaded the Game from the Apple App Store or Google Play, that store's terms also apply to your
          download and to any purchases you make. If these Terms conflict with a store's mandatory terms, the store's
          terms win to the extent of the conflict.
        </p>
      </Section>

      <Section number="2" title="ELIGIBILITY AND YOUNGER PLAYERS">
        <p>
          You may use the Game only if you can form a binding agreement with us, or if your parent or legal guardian
          has reviewed and agreed to these Terms on your behalf. If you are under the age of majority where you live,
          you confirm that your parent or guardian has done so, and that they are responsible for your use of the Game,
          including any purchases.
        </p>
        <p>
          Players under 13 must not share personal information (such as a real name, email address or location) in a
          team name, username or any other part of the Game. Parents can contact us at <Email /> to ask about or delete
          their child's information, as described in our Privacy Policy.
        </p>
      </Section>

      <Section number="3" title="YOUR ACCOUNT AND GAME PROGRESS">
        <p>
          The Game creates an account for you automatically, and you may link it to a platform account such as Apple
          Game Center, Sign in with Apple or Google. You are responsible for keeping access to your device and any
          linked accounts secure, and for everything that happens under your account.
        </p>
        <p>
          Your progress is stored on our servers. If you delete the Game without linking your account, change devices,
          or reset your device, you may lose your progress, and we may not be able to restore it. You may ask us to
          delete your account and its data at any time through our{" "}
          <Link to="/delete-account-superstar-hockey" className={linkClass}>
            account deletion page
          </Link>
          . Deletion is permanent and removes your progress, virtual currency and items.
        </p>
        <p>You may not sell, trade, transfer or share your account, and you may not use another player's account.</p>
      </Section>

      <Section number="4" title="LICENCE TO PLAY">
        <p>
          The Game and everything in it, including its software, code, art, characters, player cards, sounds, music,
          text and designs, is owned by Big Idea Games or our licensors and is protected by copyright, trademark and
          other laws. We license it to you; we do not sell it to you.
        </p>
        <p>
          Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable, revocable licence
          to install and play the Game on devices you own or control, for your own non-commercial entertainment. Except
          as allowed by these Terms or by law, you may not copy, modify, distribute, sell, rent, reverse engineer,
          decompile or create derivative works from the Game.
        </p>
        <p>
          You may share screenshots and videos of your own gameplay, including on streaming and social platforms, as
          long as you do not imply that we endorse you or your content. We may ask you to remove content that misuses
          the Game.
        </p>
      </Section>

      <Section number="5" title="VIRTUAL CURRENCY AND ITEMS">
        <p>
          The Game includes virtual currencies (such as Coins and Gems) and virtual items (such as player cards,
          packs, boosters, jerseys and passes) (together, "Virtual Items"). Some Virtual Items can be earned by playing
          and some can be bought with real money.
        </p>
        <p>
          Virtual Items are licensed, not sold. When you obtain a Virtual Item, you receive a limited, personal,
          non-transferable, revocable licence to use it inside the Game only. Virtual Items have no real-world value,
          cannot be exchanged for real money, goods or anything of value outside the Game, and cannot be transferred
          or sold to anyone else. You have no ownership or property interest in any Virtual Item, and we do not
          operate a bank or store of value.
        </p>
        <p>
          We may change, rebalance, rename, limit or discontinue Virtual Items, their prices, their in-game effects
          and how they are earned at any time, including as part of normal game balancing. Unused Virtual Items may be
          lost if your account is deleted or terminated, or if the Game is discontinued.
        </p>
      </Section>

      <Section number="6" title="PURCHASES, PACKS AND REFUNDS">
        <p>
          Real-money purchases are processed by the Apple App Store or Google Play, not by us, and are subject to that
          store's payment terms. Prices are shown in the Game before you buy. Purchases are final once the Virtual
          Item is delivered to your account, except where a refund is required by law or granted by the store under
          its own policies. Refund requests for store purchases must be made to the store.
        </p>
        <p>
          Some packs and rewards contain items selected at random. Where the Game shows the odds or possible contents
          of a randomized item, those disclosures apply. You agree that you are paying for the chance to receive items,
          not for any specific item, unless the Game says a specific item is guaranteed.
        </p>
        <p>
          If a purchase does not arrive, contact us at <Email /> with your store receipt and we will investigate. Parents
          can use the parental controls on their device and store account to require approval for purchases.
        </p>
      </Section>

      <Section number="7" title="ONLINE PLAY, EVENTS AND ADVERTISING">
        <p>
          Some features, such as online matches, leagues, tournaments, leaderboards, events and rewards, need an
          internet connection and our servers. These features, their schedules, rules, rewards and rankings may change
          or end at any time. We may adjust or remove rankings, results or rewards that were obtained through bugs,
          cheating or a breach of these Terms.
        </p>
        <p>
          The Game may show advertising, including optional videos you can choose to watch for in-game rewards. Ads are
          provided by third-party networks listed in our Privacy Policy, and we are not responsible for third-party
          products, websites or services they promote.
        </p>
      </Section>

      <Section number="8" title="RULES OF CONDUCT">
        <p>When using the Game, you agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>cheat, or use bots, mods, hacks, scripts or any unauthorized software that alters or automates the Game;</li>
          <li>exploit bugs or errors, or fail to report ones that give an unfair advantage;</li>
          <li>interfere with, disrupt or overload our servers or other players' games;</li>
          <li>buy, sell or trade accounts or Virtual Items outside the Game, or obtain them by unauthorized means;</li>
          <li>
            use a team name, username or other content that is offensive, hateful, sexual, harassing, infringes
            someone else's rights, or contains personal information;
          </li>
          <li>impersonate Big Idea Games, our staff or another person; or</li>
          <li>use the Game for any unlawful or commercial purpose.</li>
        </ul>
        <p>
          If you break these rules, we may remove content, reset progress or Virtual Items, or suspend or terminate
          your account, without refund where permitted by law.
        </p>
      </Section>

      <Section number="9" title="UPDATES AND CHANGES TO THE GAME">
        <p>
          We may update the Game at any time to fix problems, add or remove features, or change content. Some updates
          may be required to keep playing. We may stop offering or supporting the Game, or any part of it, at any time.
          If we decide to shut down the Game, we will try to give reasonable notice in the Game or on our website.
        </p>
      </Section>

      <Section number="10" title="NO AFFILIATION">
        <p>
          Superstar Hockey is an independent game. Unless the Game expressly says otherwise, it is not affiliated with,
          sponsored by or endorsed by any professional hockey league, players' association, team or player, and any
          resemblance of in-game players, teams or logos to real ones is coincidental.
        </p>
      </Section>

      <Section number="11" title="TERMINATION">
        <p>
          You may stop using the Game at any time and may ask us to delete your account. We may suspend or terminate
          your access to the Game, or to any part of it, if you breach these Terms, if required by law, or if we
          discontinue the Game. Sections of these Terms that by their nature should survive termination (including
          ownership, disclaimers, limits of liability and dispute resolution) will survive.
        </p>
      </Section>

      <Section number="12" title="DISCLAIMERS">
        <p className="uppercase">
          To the maximum extent permitted by law, the Game and all Virtual Items are provided "as is" and "as
          available", without warranties or conditions of any kind, whether express, implied or statutory, including
          warranties of merchantability, fitness for a particular purpose and non-infringement. We do not warrant that
          the Game will be uninterrupted, error-free, secure or available on any particular device, or that your
          progress or data will never be lost.
        </p>
      </Section>

      <Section number="13" title="LIMITATION OF LIABILITY">
        <p className="uppercase">
          To the maximum extent permitted by law, Big Idea Games and its officers, directors, employees and agents will
          not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of
          profits, data, progress or Virtual Items, arising out of or relating to the Game. Our total liability to you
          for all claims relating to the Game will not exceed the greater of (a) the amount you paid us for the Game
          and Virtual Items in the six months before the claim arose, or (b) CAD $50.
        </p>
        <p>
          Some jurisdictions do not allow certain warranties or liabilities to be excluded or limited, so some of the
          above may not apply to you. Nothing in these Terms limits any rights you have under consumer protection laws
          that cannot be waived by contract.
        </p>
      </Section>

      <Section number="14" title="INDEMNITY">
        <p>
          To the extent permitted by law, you agree to indemnify and hold harmless Big Idea Games and its officers,
          directors, employees and agents from any claims, losses and expenses (including reasonable legal fees)
          arising from your breach of these Terms or your misuse of the Game.
        </p>
      </Section>

      <Section number="15" title="GOVERNING LAW AND DISPUTES">
        <p>
          These Terms are governed by the laws of the Province of British Columbia and the federal laws of Canada that
          apply there, without regard to conflict-of-law rules. If you have a concern, please contact us first at{" "}
          <Email /> so we can try to resolve it informally.
        </p>
        <p>
          If we cannot resolve a dispute informally, and to the extent permitted by the laws where you live, it will be
          resolved by confidential, binding arbitration before a single arbitrator in British Columbia under the
          Arbitration Act (British Columbia), on an individual basis and not as part of any class or representative
          proceeding. Either party may instead bring an individual claim in small claims court. If you live somewhere
          whose laws give you the right to bring a claim in your local courts or prohibit arbitration or class action
          waivers in consumer contracts, those rights are not affected.
        </p>
      </Section>

      <Section number="16" title="CHANGES TO THESE TERMS">
        <p>
          We may update these Terms from time to time. We will post the updated Terms on this page and change the "Last
          Updated" date, and for material changes we will try to notify you in the Game. Continuing to play after the
          updated Terms take effect means you accept them. If you do not agree, stop using the Game.
        </p>
      </Section>

      <Section number="17" title="GENERAL">
        <p>
          These Terms, together with our Privacy Policy and any in-game rules for specific features or events, are the
          entire agreement between you and us about the Game. If any part of these Terms is found unenforceable, the
          rest stays in effect. Our failure to enforce a provision is not a waiver. You may not assign these Terms; we
          may assign them, for example to a buyer of the Game. Apple and Google are not parties to these Terms and are
          not responsible for the Game or its support.
        </p>
      </Section>

      <Section number="18" title="CONTACT US">
        <p>
          Big Idea Games Inc., British Columbia, Canada. Questions about these Terms or the Game: <Email />.
        </p>
      </Section>
    </PageLayout>
  );
}
