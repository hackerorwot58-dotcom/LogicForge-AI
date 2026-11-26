
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f0ff] text-slate-800">
      {/* Navigation */}
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-black text-violet-700">
          LogicForge<span className="text-orange-500"> AI</span>
        </h1>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold">
            ⭐ Level 1
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-200 text-xl">
            🧑‍🚀
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl p-6">
        {/* Welcome */}
        <section className="mb-8 rounded-3xl bg-gradient-to-r from-violet-500 to-blue-500 p-8 text-white shadow-lg">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="mb-2 font-semibold text-violet-100">
                YOUR CODING ADVENTURE STARTS HERE
              </p>
              <h2 className="mb-3 text-3xl font-black md:text-4xl">
                Hello, Future Programmer! 🚀
              </h2>
              <p className="mb-5 max-w-lg text-violet-100">
                Learn programming through fun challenges, colourful lessons,
                and interactive activities.
              </p>
              <a
                href="#lessons"
                className="inline-block rounded-full bg-yellow-300 px-6 py-3 font-bold text-violet-900 shadow-md transition hover:scale-105"
              >
                Start Learning →
              </a>
            </div>
            <div className="text-8xl">🧑‍🚀</div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Learning progress</p>
            <h3 className="mt-2 text-3xl font-black text-violet-600">15%</h3>
            <div className="mt-3 h-3 rounded-full bg-violet-100">
              <div className="h-3 w-[15%] rounded-full bg-violet-500" />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Learning points</p>
            <h3 className="mt-2 text-3xl font-black text-orange-500">120 ⭐</h3>
            <p className="mt-2 text-sm text-slate-400">Keep earning points!</p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">Lessons completed</p>
            <h3 className="mt-2 text-3xl font-black text-green-500">3 / 20</h3>
            <p className="mt-2 text-sm text-slate-400">Your journey is growing!</p>
          </div>
        </section>

        {/* Lessons */}
        <section id="lessons" className="mb-8">
          <h2 className="mb-5 text-2xl font-black">
            🎯 Your Learning Adventure
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            <Lesson
              emoji="🧩"
              title="Programming Basics"
              description="Discover what programming is and how computers think."
              color="bg-pink-100"
              label="START HERE"
            />
            <Lesson
              emoji="📦"
              title="Variables"
              description="Learn how computers store information."
              color="bg-yellow-100"
              label="BEGINNER"
            />
            <Lesson
              emoji="🔀"
              title="Conditions"
              description="Teach computers to make decisions."
              color="bg-green-100"
              label="BEGINNER"
            />
          </div>
        </section>

        {/* Daily challenge */}
        <section className="mb-8 rounded-3xl bg-orange-100 p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="font-bold text-orange-700">DAILY CHALLENGE</p>
              <h2 className="mt-2 text-2xl font-black">
                🧠 Become a Logic Detective!
              </h2>
              <p className="mt-2 text-slate-600">
                Solve one small programming puzzle today.
              </p>
            </div>
            <a
              href="#lessons"
              className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
            >
              Explore Challenge →
            </a>
          </div>
        </section>

        {/* AI Tutor */}
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="text-5xl">🤖</div>
            <div>
              <h2 className="text-xl font-black text-violet-700">
                Meet Your AI Learning Buddy
              </h2>
              <p className="mt-1 text-slate-500">
                Your friendly programming companion is here to help you learn.
              </p>
            </div>
          </div>
          <p className="mt-4 rounded-xl bg-violet-50 p-4 text-violet-800">
            "Every expert programmer was once a beginner. Let's learn something
            new today!"
          </p>
        </section>

        <footer className="py-8 text-center text-sm text-slate-400">
          LogicForge AI · Understand the Logic. Master the Code.
        </footer>
      </div>
    </main>
  );
}

function Lesson({
  emoji,
  title,
  description,
  color,
  label,
}: {
  emoji: string;
  title: string;
  description: string;
  color: string;
  label: string;
}) {
  return (
    <article className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`mb-4 flex h-28 items-center justify-center rounded-2xl ${color}`}>
        <span className="text-6xl">{emoji}</span>
      </div>
      <p className="text-xs font-bold tracking-wider text-violet-500">
        {label}
      </p>
      <h3 className="mt-2 text-xl font-black">{title}</h3>
      <p className="mt-2 min-h-12 text-sm text-slate-500">{description}</p>
      <a
        href="#"
        className="mt-4 inline-block font-bold text-violet-600 hover:text-violet-800"
      >
        Open lesson →
      </a>
    </article>
  );
}
