import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const userName = "Learner";

  return (
    <>
      <Navbar />

      {/* BACKGROUND */}
      <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black px-4 flex items-center justify-center">
        <div className="w-full max-w-5xl rounded-3xl border border-indigo-800/40 bg-indigo-950/70 backdrop-blur-xl shadow-2xl p-10 text-center">

          {/* WELCOME */}
          <p className="text-sm text-indigo-300 mb-2">
            👋 Welcome back,{" "}
            <span className="text-violet-400 font-medium">
              {userName}
            </span>
          </p>

          <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
            Learn Smarter with AI
          </h1>

          <p className="text-indigo-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            A next-generation learning chatbot built using{" "}
            <span className="text-violet-400 font-semibold">React</span>, powered by{" "}
            <span className="text-violet-400 font-semibold">AI APIs</span>, and styled with{" "}
            <span className="text-violet-400 font-semibold">Tailwind CSS</span>.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {[
              {
                icon: "⚡",
                title: "Instant Answers",
                desc: "Fast AI responses with minimal latency.",
              },
              {
                icon: "🌌",
                title: "Midnight UI",
                desc: "Calm, focused design for deep learning.",
              },
              {
                icon: "🧠",
                title: "Concept-Driven",
                desc: "Learn with clarity, not confusion.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-indigo-900/50 border border-indigo-700/40 p-6
                hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/20 transition"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-indigo-300 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* MINI INFO STRIP */}
          <div className="grid gap-6 md:grid-cols-3 mb-12 text-sm">
            {[
              { icon: "📚", text: "Any Topic" },
              { icon: "⏳", text: "Save Hours" },
              { icon: "🚀", text: "Skill Growth" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-indigo-800/40 px-4 py-3 text-indigo-300 hover:bg-indigo-900/50 transition"
              >
                {item.icon} {item.text}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learning">
              <button className="px-8 py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-violet-600 to-indigo-600
                hover:from-violet-500 hover:to-indigo-500
                transition shadow-lg shadow-violet-500/30">
                Start Learning 🚀
              </button>
            </Link>

            <Link to="/about">
              <button className="px-8 py-3 rounded-xl font-semibold
                border border-indigo-700 text-indigo-300
                hover:bg-indigo-900 transition">
                Learn More ℹ️
              </button>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
