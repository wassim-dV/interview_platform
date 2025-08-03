# 🎙️ AI Voice Agent Interview Platform – Full Stack Real-Time App

An intelligent and scalable **real-time AI voice interview platform** built with modern web technologies. This platform allows candidates to attend fully automated voice-based interviews, powered by AI voice agents that understand, ask, and evaluate spoken answers in real-time.

## Key Features

- 🧠 **AI Voice Interview Agent** – Generates dynamic, contextual questions
- 🔊 **Real-Time Voice Conversation** – Using WebRTC or Vonage Voice API
- 📝 **Answer Transcription & Sentiment Analysis**
- 📊 **AI-Powered Candidate Scoring & Feedback**
- 💾 **Recording & Playback** of Interview Sessions
- 🌐 **Multi-language Support**
- 🛡️ **Secure User Authentication & Role Management**
- 🎛️ **Admin Dashboard** to manage interviews, sessions, and results

---

## 🛠️ Tech Stack

| Layer         | Technology                                  |
|---------------|---------------------------------------------|
| Frontend      | React.js (Next.js), Tailwind CSS, Shadcn UI |
| Voice API     | Vonage Voice API                            |
| AI Services   |   Whisper                                   |
| Transcription | Whisper API (OpenAI)                        |
| Sentiment     |  HuggingFace Transformers                   |
| Backend       | Next.js API Routes                          |
| Database      | PostgreSQL + Prisma ORM                     |
| Auth          | Auth.js                                     |
| Deployment    | Vercel                                      |

---


## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/ai-voice-interview-platform.git
cd ai-voice-interview-platform

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Add your Vonage, OpenAI, and database credentials

# 4. Set up the database
npx prisma db push

# 5. Start  AI Agent Capabilities
 Dynamic questioning based on resume or role

 Context-aware follow-up questions

🗣 Real-time transcription & voice analysis

 Candidate performance scoring

 Summary & feedback generation post-interview

 Roles
 Candidate: Attend voice interviews

 AI Agent: Ask and respond in real-time
 Admin: View results, assign interviews, manage platform

 Environment Variables (.env.example)
env
Copy
Edit
DATABASE_URL=postgresql://...
NEXT_PUBLIC_OPENAI_API_KEY=sk-...
NEXT_PUBLIC_VONAGE_API_KEY=...
NEXT_PUBLIC_VONAGE_API_SECRET=...
 Contributing
We welcome contributions! Here's how:

bash
Copy
Edit
# Fork the repo
# Create a feature branch
git checkout -b feature/your-feature

# Commit and push
git commit -m "Add new feature"
git push origin feature/your-feature
Then open a pull request 🚀

📄 License
MIT © Your Namedevelopment server
npm run dev
