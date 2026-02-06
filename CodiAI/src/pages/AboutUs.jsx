import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Navbar />

      {/* BACKGROUND */}
      <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-indigo-950/70 border border-indigo-700/40 rounded-3xl shadow-2xl backdrop-blur p-10">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-4">
              About Us
            </h2>
            <p className="text-indigo-300 max-w-3xl mx-auto leading-relaxed">
              We build intelligent, developer-friendly chatbots that transform
              learning into an interactive, fast, and engaging experience.
            </p>
          </div>

          {/* MISSION & VISION */}
          <div className="grid gap-6 md:grid-cols-2 mb-16 text-sm">
            <div className="bg-black/40 border border-indigo-700/40 rounded-2xl p-6">
              🎯 <p className="text-white font-semibold mt-2">Our Mission</p>
              <p className="text-indigo-300 mt-2 leading-relaxed">
                To simplify complex topics and empower learners by delivering
                instant, accurate, and structured knowledge through AI-driven
                conversations.
              </p>
            </div>

            <div className="bg-black/40 border border-indigo-700/40 rounded-2xl p-6">
              🌱 <p className="text-white font-semibold mt-2">Our Vision</p>
              <p className="text-indigo-300 mt-2 leading-relaxed">
                To become a trusted AI learning companion for students,
                developers, and curious minds worldwide.
              </p>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              How Our Chatbot Works
            </h3>

            <div className="grid gap-6 md:grid-cols-3 text-sm">
              <div className="bg-indigo-950/60 border border-indigo-700/40 rounded-2xl p-5 hover:border-violet-500 transition">
                📝 <p className="text-indigo-200 mt-2 font-medium">
                  Ask a Question
                </p>
                <p className="text-indigo-400 mt-2">
                  Choose a subject and ask anything — from basics to advanced
                  concepts.
                </p>
              </div>

              <div className="bg-indigo-950/60 border border-indigo-700/40 rounded-2xl p-5 hover:border-violet-500 transition">
                🤖 <p className="text-indigo-200 mt-2 font-medium">
                  AI Processing
                </p>
                <p className="text-indigo-400 mt-2">
                  Our AI analyzes your query and generates a clear, structured
                  response.
                </p>
              </div>

              <div className="bg-indigo-950/60 border border-indigo-700/40 rounded-2xl p-5 hover:border-violet-500 transition">
                📚 <p className="text-indigo-200 mt-2 font-medium">
                  Learn Effectively
                </p>
                <p className="text-indigo-400 mt-2">
                  Get explanations, examples, and summaries designed for
                  understanding.
                </p>
              </div>
            </div>
          </div>

          {/* TECH STACK */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Technology Stack
            </h3>

            <div className="grid gap-4 md:grid-cols-3 text-sm">
              <div className="bg-black/40 border border-indigo-700/40 rounded-2xl p-5">
                ⚛️ <p className="text-indigo-200 mt-2">React.js</p>
                <p className="text-indigo-400 mt-2">
                  Component-based UI for speed, scalability, and clean
                  architecture.
                </p>
              </div>

              <div className="bg-black/40 border border-indigo-700/40 rounded-2xl p-5">
                🔌 <p className="text-indigo-200 mt-2">AI APIs</p>
                <p className="text-indigo-400 mt-2">
                  Real-time intelligent responses powered by modern AI models.
                </p>
              </div>

              <div className="bg-black/40 border border-indigo-700/40 rounded-2xl p-5">
                🎨 <p className="text-indigo-200 mt-2">Tailwind CSS</p>
                <p className="text-indigo-400 mt-2">
                  Fully responsive, clean, and eye-friendly dark UI design.
                </p>
              </div>
            </div>
          </div>

          {/* VALUES */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              What We Believe In
            </h3>

            <div className="grid gap-6 md:grid-cols-3 text-sm">
              <div className="bg-indigo-950/60 border border-indigo-700/40 rounded-2xl p-5">
                🚀 <p className="text-indigo-200 mt-2">Speed</p>
                <p className="text-indigo-400 mt-2">
                  Fast answers without sacrificing clarity or accuracy.
                </p>
              </div>

              <div className="bg-indigo-950/60 border border-indigo-700/40 rounded-2xl p-5">
                🧠 <p className="text-indigo-200 mt-2">Clarity</p>
                <p className="text-indigo-400 mt-2">
                  Simple explanations that make complex ideas easy to grasp.
                </p>
              </div>

              <div className="bg-indigo-950/60 border border-indigo-700/40 rounded-2xl p-5">
                🌙 <p className="text-indigo-200 mt-2">Comfort</p>
                <p className="text-indigo-400 mt-2">
                  A dark, minimal interface designed for long learning sessions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-indigo-300 mb-6">
              Ready to experience smarter learning?
            </p>
            <Link to="/learning">
              <button className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition shadow-lg shadow-violet-500/30">
                Try the Chatbot 🚀
              </button>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
