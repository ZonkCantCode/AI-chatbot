import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* BACKGROUND */}
      <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-indigo-950/70 border border-indigo-700/40 rounded-3xl shadow-2xl backdrop-blur p-10">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-3">
              Contact Us
            </h2>
            <p className="text-indigo-300 max-w-xl mx-auto">
              Have questions, feedback, or ideas?  
              We’d love to hear from you.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid gap-6 md:grid-cols-3 mb-14 text-sm">
            <div className="bg-black/40 border border-indigo-700/40 rounded-2xl p-6 text-center hover:border-violet-500 transition">
              📧
              <p className="text-white font-semibold mt-3">Email</p>
              <a
                href="mailto:rojalthapa2016@gmail.com"
                className="text-violet-400 hover:underline block mt-2"
              >
                rojalthapa2016@gmail.com
              </a>
              <p className="text-indigo-400 mt-2">
                Best for detailed queries
              </p>
            </div>

            <div className="bg-black/40 border border-indigo-700/40 rounded-2xl p-6 text-center hover:border-violet-500 transition">
              🔗
              <p className="text-white font-semibold mt-3">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/rojal-thapa-084243373"
                target="_blank"
                rel="noreferrer"
                className="text-violet-400 hover:underline block mt-2"
              >
                Connect professionally
              </a>
              <p className="text-indigo-400 mt-2">
                Let’s network & collaborate
              </p>
            </div>

            <div className="bg-black/40 border border-indigo-700/40 rounded-2xl p-6 text-center hover:border-violet-500 transition">
              🧑‍💻
              <p className="text-white font-semibold mt-3">GitHub</p>
              <a
                href="https://github.com/ZonkCantCode"
                target="_blank"
                rel="noreferrer"
                className="text-violet-400 hover:underline block mt-2"
              >
                View Projects
              </a>
              <p className="text-indigo-400 mt-2">
                Explore code & experiments
              </p>
            </div>
          </div>

          {/* QUICK INFO */}
          <div className="bg-black/50 border border-indigo-700/40 rounded-2xl p-6 mb-14 text-sm text-indigo-300">
            💡 <span className="text-white font-medium">Quick Note:</span>{" "}
            This chatbot project is built with React, AI APIs, and Tailwind CSS.
            We’re always open to feedback, improvements, and collaboration ideas.
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-indigo-300 mb-6">
              Want to try the chatbot right now?
            </p>
            <Link to="/learning">
              <button className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition shadow-lg shadow-violet-500/30">
                Start Learning 🚀
              </button>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
