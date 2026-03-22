import PageLayout from "../components/PageLayout";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl sm:text-2xl tracking-wider text-[#EAF6FF] mb-3 mt-8 first:mt-0">
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[#EAF6FF] font-semibold text-lg mb-2 mt-6">
      {children}
    </h3>
  );
}

export default function PrivacyPage() {
  return (
    <PageLayout>
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider text-[#EAF6FF] mb-2">
        Privacy Policy
      </h1>
      <p className="text-[#5A8AAF] text-sm mb-8">Last Updated: September 13, 2021</p>

      <div className="text-[#8BB8D9] leading-relaxed space-y-4">
        <p>
          Big Idea Games Inc. provides this Privacy Policy to explain how it collects, stores, and uses the information collected in connection with Big Idea Games' software applications, and websites (collectively, "services"). Big Idea Games respects the privacy of their users and is committed to protecting the user's information. You have a right to know our practices regarding the information we may collect and use when you use our services.
        </p>

        <SectionHeading>The Types Of Information We Collect And How We Collect It</SectionHeading>

        <SubHeading>Personal Information</SubHeading>
        <p>
          Big Idea Games collects the advertising identifier (Apple's IDFA/IDFV and Google's GAID), and a unique identifier for each user in our mobile games.
        </p>
        <p>
          Big Idea Games integrates third party SDKs into our services. These SDKs are used for advertising to our users, analyzing service usage, enabling in-app purchases, or providing game services including achievements, leaderboards, and account management. We allow third party operators this collected data solely for internal operations of the service as permitted by applicable rules and laws. This could include, but is not limited to, persistent advertising identifiers, geolocation information, and IP address. We encourage you to review the policies of the third party operators listed below.
        </p>
        <p>
          Should a user explicitly provide it to us when prompted, we will collect email addresses of our users for our mailing list(s), account recovery, or customer support purposes.
        </p>
        <p>
          Some of our services require or allow a user to provide a screen name so they can be identified within the service.
        </p>

        <SubHeading>Non-personal Information</SubHeading>
        <p>
          We allow third parties to collect some information by which users cannot be identified. Non-personal information may include technical information about your device, such as your browser type, screen resolution, device type, language, type of operating system and geo location (only general location).
        </p>
        <p>
          Non-personal information is gathered by third party services while you are accessing the service. They are allowed to use this information to conduct research and analysis, but only for strictly limited purposes. We encourage you to review the policies of the third party operators listed below.
        </p>
        <p>
          Internally, Big Idea Games also reserves the right to collect anonymous information for research and analysis. This information is generic in nature and cannot be used to individually identify a user. This information is collected each time a user runs one of our services.
        </p>

        <SubHeading>Service Specific Information</SubHeading>
        <p>
          Some Big Idea Games services allow users to send messages to each other while playing a game. These messages are then transmitted and stored on Big Idea Games controlled servers, or on the servers of one of our third party service providers.
        </p>

        <SectionHeading>What We Do With the Personal Information We Collect</SectionHeading>
        <p>
          Advertisers collect data regarding advertisement performance, user's interaction with ads, our apps and user's interests. Collected data may include user's personal information in order to serve users ads and for the third parties' legitimate business interests.
        </p>
        <p>
          Big Idea Games and third party operators may use collected personal data to help measure the effectiveness of Big Idea Games' promotional campaigns.
        </p>
        <p>
          Big Idea Games collects persistent identifiers in order to provide support for our services to our users. Additionally, Big Idea Games uses persistent identifiers to send promotions regarding new products or updates to our users. If we keep track of persistent advertising identifiers, it allows us to only notify these users about new products that they will actually be interested in.
        </p>
        <p>
          We collect email addresses in many of our services so that we can notify interested users of upcoming releases and updates of our products and services. These emails always include a way to unsubscribe from receiving future emails. We may also collect email addresses for the purposes of offering support or recovering a user's account.
        </p>
        <p>
          When a service asks for a username, it is used to visually identify that user to other users playing the game. Big Idea Games prohibits any user under the age of 13 from providing individually identifiable information in their username or screen name. This includes, but is not limited to the user's first name, last name, email address, and physical address.
        </p>

        <SectionHeading>What We Do With the Non-personal Information We Collect</SectionHeading>
        <p>
          Third party operators are allowed to collect and use non-personal information to conduct research and analysis, or to target advertisements, or other limited purposes. This information cannot be used to individually identify any user. We encourage you to review the policies of the third party operators listed below.
        </p>
        <p>
          Similarly, Big Idea Games also uses non-personal information to conduct research and analysis. We do this to improve our services in future updates or to gain knowledge about how our users are interacting with the service.
        </p>

        <SectionHeading>What We Do With Service Specific Information We Collect</SectionHeading>
        <p>
          Each of our games that allow messaging other users provide an option for joining or creating publicly visible worlds/matches, or for playing only against other users known to the current user. Big Idea Games prohibits any user under the age of 13 from joining or creating publicly visible worlds/matches in these services. Additionally, Big Idea Games prohibits any user under the age of 13 from sharing personal or individually identifiable information while using the messaging functionality in these services.
        </p>
        <p>
          If Big Idea Games collects identifiers associated with a user's account on social networks like Facebook or Twitter, or game services like Apple Game Center, Google Play Game Services, or Amazon Game Circle, then it is explicitly required for some feature in that service. For example, the identifier could be saved so that a user's connections on the social network can see their high score or progress in the game. As stated elsewhere in this policy, you can contact us to have this information deleted for yourself or your child under the age of 13.
        </p>

        <SectionHeading>How to Opt-out of Targeted Advertising</SectionHeading>
        <p>
          If you would like to opt-out of interest-based advertising, you may do so in your mobile device's settings. On iOS, this can be done by turning on the Limit Ad Tracking option under Settings → Privacy → Advertising. On Android, this can typically be found under Settings → Google → Ads → Opt out of Ads Personalization, although the exact location of this setting may differ depending on your device make and Android version. To learn more about targeted advertising and additional options that you can take regarding targeted advertising, please visit{" "}
          <a href="https://youradchoices.com/" target="_blank" rel="noopener noreferrer" className="text-[#28A9FF] hover:underline">
            youradchoices.com
          </a>.
        </p>

        <SectionHeading>Children</SectionHeading>
        <p>
          We understand the importance of protecting the privacy and safety of children using our services, as outlined by the Children's Online Privacy Protection Act of 1998 (COPPA). Accordingly, we do not knowingly collect, use, or disclose personal information from children under 13.
        </p>
        <p>
          If you are a parent of a child under 13 years of age and you believe your child has provided us with personal information, please contact us using the information below and we will delete the information from our systems.
        </p>

        <SectionHeading>Disclosure of Personal Information</SectionHeading>
        <p>The scenarios in which we will share your personal data are as follows:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>we determine that it is required by law;</li>
          <li>we have a good faith belief it is necessary to protect our rights or property;</li>
          <li>we are participating in a merger, acquisition, liquidation, dissolution or sale of assets;</li>
          <li>we have your consent; and</li>
          <li>as described above in relation to third-party operators collecting information from our services.</li>
        </ul>
        <p>
          Under no other circumstances will Big Idea Games share, sell, rent, or release your data.
        </p>
        <p>
          You may contact Big Idea Games to request access, change, update or delete your personal information at any time via email:{" "}
          <a href="mailto:privacy@bigidea.games" className="text-[#28A9FF] hover:underline">
            privacy@bigidea.games
          </a>. You have the right to these options as well as the right to not be discriminated against for exercising these options. A small fee may be imposed for access and disclosure of your personal information, where permitted under applicable law.
        </p>

        <SectionHeading>Security</SectionHeading>
        <p>
          We follow generally accepted industry standards and internal procedures to protect the personal information submitted to us, both during transmission and once we receive it.
        </p>

        <SectionHeading>Third-party Operators</SectionHeading>

        <SubHeading>Advertising Networks</SubHeading>
        <p>
          Big Idea Games allows advertisements from the Third Party ad networks to be displayed in our services. Big Idea Games makes commercially reasonable efforts to ensure that the third party ad networks are configured to comply with applicable privacy laws, and we reasonably believe this to be the case for each of them. If we determine a service to be directed at children under the age of 13, we configure each of these ad networks to be compliant with the Children's Online Privacy Protection Act of 1998 (COPPA). For persons in European Union countries, we also configure networks to be compliant with the General Data Protection Regulation of 2016 (GDPR).
        </p>

        <SubHeading>In-App Purchases</SubHeading>
        <p>
          In order to make in-app purchases, a user must use a third party checkout option that we have integrated with our services to finalize and pay for their order. The third party operator's privacy policy and security practices will apply to this process a user's information. We encourage you to read that privacy statement before providing your information.
        </p>

        <SubHeading>Social Networks</SubHeading>
        <p>
          Some of our services integrate a third-party social network such as Facebook or Twitter to allow sharing progress with friends, or allowing them to be invited to use our service. The privacy policy of each social network will indicate what data is available to us and how we use it.
        </p>

        <SubHeading>Game Services</SubHeading>
        <p>
          Many of our services integrate either Apple Game Center, Google Play Game Services. Each of these third-party operators offer their own privacy policy (listed below), and we encourage you to review them.
        </p>

        <SubHeading>Analytics</SubHeading>
        <p>
          Big Idea Games makes use of Third Party service in order to measure how users utilize our services so that we may improve them, and to measure the effectiveness of our advertising campaigns.
        </p>

        <SubHeading>Third Party Operators List</SubHeading>
        <ul className="space-y-3 ml-4">
          {[
            { name: "AppLovin Corporation", detail: "849 High St., Palo Alto, CA 94301", email: "care@applovin.com", url: "https://www.applovin.com/privacy" },
            { name: "Adjust", detail: "Saarbrücker Str. 37A, 10405 Berlin, Germany", url: "https://www.adjust.com/terms/privacy-policy/" },
            { name: "AdColony", detail: "1888 Century Park East, Suite 1450, Century City, CA 90067", url: "https://www.adcolony.com/privacy-policy/" },
            { name: "Apple (iAd, Game Center)", url: "http://www.apple.com/privacy/privacy-policy/" },
            { name: "brainCloud", detail: "1309 Carling Avenue, Ottawa, Ontario, K1Z 7L3, Canada", url: "https://getbraincloud.com/privacy-policy/" },
            { name: "Chartboost", detail: "420 Taylor Street, San Francisco, CA 94102", email: "privacy@chartboost.com", url: "https://answers.chartboost.com/hc/en-us/articles/200780269-Privacy-Policy" },
            { name: "DevToDev", detail: "Vilnius Tech Park, Antakalnio 17-4, Vilnius, Lithuania, 10312", url: "https://www.devtodev.com/policy" },
            { name: "Facebook Inc.", detail: "1601 Willow Road, Menlo Park, CA 94025", url: "https://www.facebook.com/policy.php" },
            { name: "Fyber N.V.", detail: "Wallstraße 9-13, 10179 Berlin, Germany", url: "https://www.fyber.com/services-privacy-statement/" },
            { name: "GameAnalytics", detail: "1 Hardwick St, London EC1R 4RB, UK", url: "https://gameanalytics.com/privacy/" },
            { name: "Google (Play, AdMob, Play Game Services, Analytics, Firebase)", url: "https://www.google.com/intl/en/policies/privacy/" },
            { name: "ironSource Mobile Ltd.", detail: "121 Menachem Begin Rd., Tel Aviv, Israel", email: "dpo@ironsrc.com", url: "https://developers.ironsrc.com/ironsource-mobile/air/ironsource-mobile-privacy-policy/" },
            { name: "Mintegral", detail: "RM701A, 7/F., OfficePlus @Prince Edward, 794-802 Nathan Road, KL, Hong Kong 999077", email: "privacy@mintegral.com", url: "https://www.mintegral.com/en/privacy/" },
            { name: "N3TWORK", detail: "PO Box 26209, San Francisco, CA 94126", url: "https://static.n3twork.com/docs/privacy-policy.html" },
            { name: "UnityAds", detail: "Unity Technologies, 795 Folsom Street, San Francisco, CA 94107", email: "privacy@unity3d.com", url: "https://unity3d.com/legal/privacy-policy" },
            { name: "Vungle", detail: "185 Clara Street, San Francisco, CA 94107", email: "marketing@vungle.com", url: "http://vungle.com/privacy/" },
          ].map((op) => (
            <li key={op.name} className="text-[#8BB8D9]">
              <span className="text-[#EAF6FF] font-semibold">{op.name}</span>
              {op.detail && <span> — {op.detail}</span>}
              {op.email && (
                <>
                  {" "}—{" "}
                  <a href={`mailto:${op.email}`} className="text-[#28A9FF] hover:underline">{op.email}</a>
                </>
              )}
              {" "}—{" "}
              <a href={op.url} target="_blank" rel="noopener noreferrer" className="text-[#28A9FF] hover:underline break-all">
                {op.url}
              </a>
            </li>
          ))}
        </ul>

        <SectionHeading>Changes to this Privacy Policy</SectionHeading>
        <p>
          We will periodically update this privacy policy to reflect changes in our information practices, and to add additional third party operators. Please check back regularly, as your continued use of our services indicates your acceptance of any changes to this policy.
        </p>

        <SectionHeading>Contact Information</SectionHeading>
        <p>
          If you have any questions about our privacy policy, please contact us via email at{" "}
          <a href="mailto:privacy@bigidea.games" className="text-[#28A9FF] hover:underline">
            privacy@bigidea.games
          </a>, or mail us at:
        </p>
        <address className="not-italic text-[#EAF6FF] ml-4 mt-2">
          Big Idea Games Inc.<br />
          4628 Highlawn Drive<br />
          Burnaby, BC<br />
          V5C 3S8
        </address>
      </div>
    </PageLayout>
  );
}
