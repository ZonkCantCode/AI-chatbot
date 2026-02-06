import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey });

// SUBJECT LIST
const subjects = [
  "JavaScript",
  "React",
  "Python",
  "HTML / CSS",
  "Machine Learning",
];

const Learning = () => {
  const [userRequest, setUserRequest] = useState("");
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  // Scroll only when AI sends a message
  useEffect(() => {
    if (messages.length === 0) return; // Don't scroll on page load
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.type === "ai") {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleRequest = async () => {
    if (!topic) return setError("Please select a subject first.");
    if (!userRequest.trim()) return setError("Please type a question.");

    setError("");
    setIsLoading(true);

    const currentQuestion = userRequest.trim();
    setUserRequest("");

    // Push user question
    setMessages((prev) => [...prev, { type: "user", text: currentQuestion }]);

    const prompt = `
You are an expert ${topic} educator with 10+ years of teaching experience.
Respond to this user request: "${currentQuestion}"
If the user is making casual conversation or greeting, respond naturally and conversationally.
For educational requests, provide a clear, structured response following this exact format:

OUTPUT FORMAT REQUIREMENTS:
- Return ONLY valid JSON with no additional text outside the JSON structure.
- Output must be an array containing exactly 1 object.
- The object MUST strictly follow this schema:

{
  "summary": "A concise 4-word headline summary from user question if question is one or two word use your intelligence and make it 4 word",
  "answer": "Your complete response here following the three-part structure below"
}

RESPONSE RULES:
1. "summary" must always be a short, exactly 4-word headline that gives the user understanding of the question.
2. "answer" must always contain three labeled sections:

EXPLANATION:
Step-by-step breakdown in simple language.

EXAMPLE:
A practical working example with input/output.

SUMMARY:
Detailed overview covering:
- What (definition)
- When (use cases)
- Where (context/environment)
- Why (benefits/importance)
- How (key methods/approaches)

Ensure the response directly answers "${currentQuestion}".
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const rawText = response.candidates?.[0]?.content?.parts?.[0]?.text;
      const cleaned = rawText.replace(/```json|```/gi, "").trim();
      const parsed = JSON.parse(cleaned);
      const aiData = Array.isArray(parsed) ? parsed[0] : parsed;

      // Push AI response
      setMessages((prev) => [
        ...prev,
        { type: "ai", summary: aiData.summary, answer: aiData.answer },
      ]);
    } catch (err) {
      console.error(err);
      setError("Failed to get response. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* BACKGROUND */}
      <div className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-black px-4 py-8 text-white">
        <div className="max-w-4xl mx-auto flex flex-col h-full">

          {/* HEADER */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              Learning Assistant 🤖
            </h1>
            <p className="text-indigo-300 text-sm">
              Ask. Understand. Improve.
            </p>
          </div>

          {/* SUBJECT PICKER */}
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setTopic(sub)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition border
                  ${
                    topic === sub
                      ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/30"
                      : "bg-indigo-950/60 border-indigo-700/40 text-indigo-300 hover:border-violet-500 hover:text-white"
                  }
                `}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* CURRENT SUBJECT */}
          {topic && (
            <p className="text-center text-sm text-indigo-300 mb-4">
              📘 Current subject:{" "}
              <span className="text-violet-400 font-medium">{topic}</span>
            </p>
          )}

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto space-y-6 mb-6 pr-1">
            {messages.length === 0 && !isLoading && (
              <div className="text-center text-indigo-400 text-sm mt-20 border border-dashed border-indigo-700/40 rounded-xl p-6">
                🧠 Your AI tutor is ready.  
                <br />
                Select a subject and ask a question.
              </div>
            )}

            {messages.map((msg, index) => (
              <div key={index}>
                {msg.type === "user" && (
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-3 rounded-2xl max-w-[80%] text-sm shadow-lg shadow-violet-500/30">
                      {msg.text}
                    </div>
                  </div>
                )}

                {msg.type === "ai" && (
                  <div className="flex justify-start">
                    <div className="bg-indigo-950/70 border border-indigo-700/40 px-5 py-4 rounded-2xl max-w-[85%] text-sm backdrop-blur">
                      <p className="text-violet-400 font-semibold mb-2">
                        {msg.summary}
                      </p>
                      <p className="text-indigo-200 whitespace-pre-line leading-relaxed">
                        {msg.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="text-indigo-400 text-sm animate-pulse text-center">
                🤔 Thinking...
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-400 text-sm text-center mb-3">{error}</p>
          )}

          {/* INPUT BOX */}
          <div className="bg-indigo-950/70 border border-indigo-700/40 rounded-2xl p-4 backdrop-blur">
            <div className="flex gap-3 items-end">
              <textarea
                value={userRequest}
                onChange={(e) => setUserRequest(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  !e.shiftKey &&
                  (e.preventDefault(), handleRequest())
                }
                placeholder="Ask a question..."
                rows={1}
                className="flex-1 bg-black border border-indigo-700/40 rounded-2xl px-5 py-4 text-sm text-white focus:border-violet-500 outline-none resize-none placeholder:text-indigo-500"
              />
              <button
                onClick={handleRequest}
                disabled={isLoading}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white h-[52px] px-8 rounded-2xl font-bold text-xs uppercase tracking-widest hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 transition shadow-lg shadow-violet-500/30"
              >
                Send
              </button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Learning;
