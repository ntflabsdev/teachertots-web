import Image from "next/image";
import Link from "next/link";

const ACTIVITIES = [
  {
    emoji: "📋",
    title: "Attendance",
    time: "8:00",
    description:
      "Friends walk in, tap to say good morning, and they answer “Present!” then sit at their desks.",
    bg: "from-sky-100 to-sky-200",
  },
  {
    emoji: "🧽",
    title: "Clean the Board",
    time: "8:15",
    description:
      "Rub chalk scribbles away with a sponge, then a greeting writes itself in chalk.",
    bg: "from-cyan-100 to-teal-200",
  },
  {
    emoji: "✏️",
    title: "Sharpen Pencils",
    time: "8:30",
    description:
      "Turn the crank and watch shavings fly as pencils get pointy and ready for class.",
    bg: "from-orange-100 to-amber-200",
  },
  {
    emoji: "🔤",
    title: "Teach ABC",
    time: "9:00",
    description:
      "Trace letters and numbers with start dots. The class chants “A is for Apple!”",
    bg: "from-purple-100 to-violet-200",
  },
  {
    emoji: "🙋",
    title: "Question Time",
    time: "9:45",
    description:
      "A student raises a hand: counting, colours, shapes, animal sounds, biggest and smallest.",
    bg: "from-pink-100 to-fuchsia-200",
  },
  {
    emoji: "🍎",
    title: "Snack Time",
    time: "10:30",
    description:
      "Wash hands first, then drag the snack each friend is thinking of.",
    bg: "from-red-100 to-rose-200",
  },
  {
    emoji: "📝",
    title: "Check Homework",
    time: "11:00",
    description:
      "Count the pictures and mark ✔ or ❌ with giant buttons — nothing to misread.",
    bg: "from-indigo-100 to-blue-200",
  },
  {
    emoji: "🎨",
    title: "Art Class",
    time: "11:45",
    description:
      "Tap-to-fill colouring with a crayon box and three pages to paint.",
    bg: "from-green-100 to-emerald-200",
  },
  {
    emoji: "⚽",
    title: "Playground",
    time: "12:30",
    description:
      "Tap falling balls to catch 12. No fails — just PE fun.",
    bg: "from-lime-100 to-lime-200",
  },
  {
    emoji: "🤝",
    title: "Kindness Corner",
    time: "1:15",
    description:
      "Share, help, include. Positive choices only, with a hearts meter.",
    bg: "from-yellow-100 to-amber-200",
  },
  {
    emoji: "🚌",
    title: "Home Time",
    time: "2:00",
    description:
      "Report card, stars, Teacher of the Day trophy, a goodbye wave and the school bus.",
    bg: "from-orange-100 to-red-200",
  },
];

const SKILLS = [
  "Letters and numbers",
  "Counting and comparing",
  "Colours and shapes",
  "Sharing and kindness",
  "Fine motor play",
  "Daily school routines",
  "Listening to the teacher",
  "Classroom habits",
];

const TRUST_BADGES = [
  {
    emoji: "🚫",
    title: "No Ads",
    desc: "Zero ads, zero in-app purchases. Always free to play.",
  },
  {
    emoji: "✈️",
    title: "Works Offline",
    desc: "No internet needed. Perfect for car trips and waiting rooms.",
  },
  {
    emoji: "🔒",
    title: "No Data Collected",
    desc: "No accounts, no sign-up, no analytics. Nothing leaves the device.",
  },
  {
    emoji: "👶",
    title: "Ages 2–6",
    desc: "Built for toddlers and preschoolers who cannot read yet.",
  },
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.skillions.teachertots";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section
        style={{
          background: "linear-gradient(135deg, #4D96FF 0%, #3FD18B 45%, #FFD23F 100%)",
        }}
        className="relative overflow-hidden"
      >
        <div
          style={{ background: "rgba(255,255,255,0.08)", borderRadius: "50%" }}
          className="absolute -top-16 -left-16 w-64 h-64"
        />
        <div
          style={{ background: "rgba(255,255,255,0.06)", borderRadius: "50%" }}
          className="absolute -bottom-24 -right-10 w-96 h-96"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">
          <Image
            src="/app_icon.png"
            alt="Teacher Tots app icon"
            width={120}
            height={120}
            className="rounded-3xl shadow-2xl"
            priority
          />

          <h1
            style={{ color: "#FFFFFF", textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
            className="text-5xl font-extrabold leading-tight"
          >
            Teacher Tots
          </h1>
          <h2 className="text-2xl font-bold text-white">Kids Classroom Simulator</h2>
          <p className="text-white text-lg max-w-xl" style={{ opacity: 0.92 }}>
            Be the teacher for a day. Take attendance, clean the board, teach ABCs and send the class home on the bus.
            <br />
            <strong>Ad-free and offline.</strong>
          </p>

          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#000000",
              borderRadius: "12px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
            className="mt-2 hover:opacity-90 transition-opacity shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32">
              <path fill="#4CAF50" d="M5.9 4.2 26.5 24 5.9 43.8A3.1 3.1 0 0 1 4 41V7a3.1 3.1 0 0 1 1.9-2.8z" />
              <path fill="#F44336" d="M44 24 36.6 28.1 26.5 24l10.1-4.1L44 24z" />
              <path fill="#FFC107" d="m36.6 28.1-10.1 4.1L5.9 43.8l20.6-19.8 10.1 4.1z" />
              <path fill="#2196F3" d="M5.9 4.2 26.5 19.9 36.6 15.9 26.5 24 5.9 4.2z" />
            </svg>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#aaa", fontSize: "11px", lineHeight: 1 }}>GET IT ON</div>
              <div style={{ color: "#fff", fontSize: "18px", fontWeight: 700, lineHeight: 1.3 }}>
                Google Play
              </div>
            </div>
          </a>

          <div
            className="w-full max-w-2xl mt-4 rounded-2xl overflow-hidden shadow-2xl px-8 py-10"
            style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}
          >
            <p className="text-white font-extrabold text-xl mb-6">A full school day of play</p>
            <div className="flex flex-wrap justify-center gap-3">
              {ACTIVITIES.map((a) => (
                <span
                  key={a.title}
                  className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold"
                  style={{ color: "#34408F" }}
                >
                  {a.emoji} {a.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#FAFAFA" }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "#4D96FF" }} className="text-3xl font-extrabold text-center mb-2">
            11 Activities in One School Day
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Follow a real classroom timetable — from morning attendance to the home-time bus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((g) => (
              <div
                key={g.title}
                className={`rounded-3xl p-6 bg-gradient-to-br ${g.bg} shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-5xl">{g.emoji}</div>
                  <span className="text-xs font-bold text-gray-500 bg-white/70 rounded-full px-3 py-1">
                    {g.time}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1a1a1a" }}>
                  {g.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "#FF9F1C" }} className="text-3xl font-extrabold text-center mb-2">
            A Day in the Classroom
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Swipe through the school day, just like in the app.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {ACTIVITIES.map((a) => (
              <div
                key={a.title}
                className="flex-none rounded-3xl overflow-hidden shadow-lg flex flex-col items-center justify-center p-6"
                style={{
                  width: "220px",
                  height: "380px",
                  background: "linear-gradient(180deg, #FFF7E8 0%, #FFE3B8 100%)",
                }}
              >
                <div className="text-7xl mb-4">{a.emoji}</div>
                <p className="text-sm font-bold" style={{ color: "#4D96FF" }}>
                  {a.time}
                </p>
                <h3 className="text-xl font-extrabold text-center mt-1" style={{ color: "#34408F" }}>
                  {a.title}
                </h3>
                <p className="text-gray-600 text-sm text-center mt-3 leading-snug">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6"
        style={{ background: "linear-gradient(135deg, #FFF7E8 0%, #E8F4FF 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "#4D96FF" }} className="text-3xl font-extrabold text-center mb-2">
            What Children Learn
          </h2>
          <p className="text-center text-gray-500 mb-10">
            A friendly teacher voice narrates every step, so kids who cannot read can still play.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {SKILLS.map((skill, i) => (
              <div
                key={skill}
                className="rounded-2xl px-4 py-3 text-center font-semibold text-sm shadow-sm"
                style={{
                  background: [
                    "#FFE6E6",
                    "#FFE6F2",
                    "#FFF9D6",
                    "#E6FFE9",
                    "#E6F4FF",
                    "#FFE9E6",
                    "#F0E6FF",
                    "#FFE6D6",
                  ][i % 8],
                  color: [
                    "#C62828",
                    "#F15BB5",
                    "#B8860B",
                    "#2E7D32",
                    "#1565C0",
                    "#FF9F1C",
                    "#9B5DE5",
                    "#4D96FF",
                  ][i % 8],
                }}
              >
                ✓ {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "#FF9F1C" }} className="text-3xl font-extrabold text-center mb-2">
            Why Parents Love Teacher Tots
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Safe, simple, and genuinely educational.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_BADGES.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center text-center p-6 rounded-3xl shadow-md"
                style={{ background: "linear-gradient(135deg, #FFF7E8, #E8F4FF)" }}
              >
                <div className="text-5xl mb-3">{b.emoji}</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "#4D96FF" }}>
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #4D96FF 0%, #FFD23F 100%)" }}
      >
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Give Your Child a Fun Day as the Teacher 🍎
        </h2>
        <p className="text-white text-lg mb-8" style={{ opacity: 0.92 }}>
          Free to download. No ads. No in-app purchases. Works offline.
        </p>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#FFFFFF",
            borderRadius: "50px",
            display: "inline-block",
            padding: "16px 40px",
            fontWeight: 800,
            fontSize: "18px",
            color: "#4D96FF",
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
          className="hover:opacity-90 transition-opacity"
        >
          Download Free on Google Play
        </a>
      </section>

      <footer className="py-10 px-6" style={{ background: "#1a1a2e" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/app_icon.png"
              alt="Teacher Tots"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-white font-semibold">Teacher Tots</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              style={{ color: "#aaa" }}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:skillions.apps@gmail.com"
              style={{ color: "#aaa" }}
              className="hover:text-white transition-colors"
            >
              skillions.apps@gmail.com
            </a>
          </div>
          <p style={{ color: "#666" }}>© 2026 Skillions</p>
        </div>
      </footer>
    </main>
  );
}
