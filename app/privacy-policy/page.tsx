import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy — Teacher Tots",
  description:
    "Teacher Tots privacy policy. We collect no personal data. No ads, no accounts, no internet.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen" style={{ background: "#FAFAFA" }}>
      <header
        style={{
          background: "linear-gradient(135deg, #4D96FF 0%, #FFD23F 100%)",
        }}
        className="py-10 px-6"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/app_icon.png"
              alt="Teacher Tots app icon"
              width={56}
              height={56}
              className="rounded-2xl shadow-lg"
            />
            <span className="text-white text-2xl font-extrabold">Teacher Tots</span>
          </Link>
          <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-white" style={{ opacity: 0.85 }}>
            Last updated: November 2026
          </p>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-14 prose prose-gray">
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          }}
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            Teacher Tots (&ldquo;the app&rdquo;) is a kids classroom simulator, published by Skillions.
            We built it so that children can play safely, without any data leaving the device.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              The Short Version
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nothing is collected.</strong> Teacher Tots does not collect, store on any
              server, or share any personal information. It has no ads, no in-app purchases, no
              accounts, no analytics, and it does not connect to the internet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              What We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not collect any personal information. The app does not ask for a child&apos;s
              name, a parent&apos;s name, an email address, or an account. It does not request or
              have permission to access the internet, location, contacts, camera, microphone,
              photos, or device identifiers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              What Stays on the Device
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              To make the app work, some information is saved only on the device and is never sent
              to us:
            </p>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2">
              <li>
                Play progress: stars earned, the current school day, which activities are finished
                today, and stickers collected.
              </li>
              <li>
                The teacher character the child picked, plus shirts and accessories unlocked with
                in-app stars. These stars are only points inside the game. They are not real money,
                and nothing is bought.
              </li>
              <li>App settings such as sound effects, background music, and voice narration.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Parents can clear all of this from the grown-ups area, which is protected by a
              press-and-hold lock. Uninstalling the app removes it as well. If Android backup is
              turned on, Android may include the app&apos;s saved progress in that device backup.
              We cannot see or use that backup.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              Internet, Ads and Purchases
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The app does not request internet access, shows no advertising and has no in-app
              purchases. There is no store inside the app and no link that opens the internet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              Voice
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The app speaks short lesson phrases using the text-to-speech engine built into the
              device. Only fixed phrases from the app are spoken. Nothing the child says or does is
              recorded or sent anywhere. Voice can be turned off in the grown-ups area.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The app contains no third-party advertising, analytics, tracking, or social media
              software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              Children
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Teacher Tots is designed for children and complies with Google Play&apos;s Families
              Policy and the U.S. Children&apos;s Online Privacy Protection Act (COPPA). Because the
              app collects no personal information from anyone, including children under 13, no
              parental consent for data collection is required. Settings are behind a parental
              gate.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              Changes to This Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If this policy changes, we will update this page and the date above.
            </p>
          </section>

          <section className="mb-2">
            <h2 className="text-xl font-bold mb-3" style={{ color: "#4D96FF" }}>
              Contact
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Questions? Email{" "}
              <a
                href="mailto:skillions.apps@gmail.com"
                style={{ color: "#FF9F1C" }}
                className="font-semibold hover:underline"
              >
                skillions.apps@gmail.com
              </a>
            </p>
          </section>
        </div>
      </article>

      <footer className="py-8 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <Link href="/" style={{ color: "#aaa" }} className="hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <p style={{ color: "#666" }}>© 2026 Skillions</p>
        </div>
      </footer>
    </main>
  );
}
