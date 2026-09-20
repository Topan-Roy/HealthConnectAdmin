"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bot,
  Send,
  Sparkles,
  User,
  RefreshCw,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Stethoscope,
  Users,
  Calendar,
  BarChart2,
} from "lucide-react";

const quickPrompts = [
  { icon: TrendingUp, label: "Revenue Summary", prompt: "Give me a summary of this month's revenue performance and key financial metrics." },
  { icon: Users, label: "Patient Insights", prompt: "Analyze patient growth trends and provide insights on retention rates." },
  { icon: Stethoscope, label: "Doctor Performance", prompt: "Which doctors have the highest patient satisfaction ratings this quarter?" },
  { icon: Calendar, label: "Appointment Trends", prompt: "Show me appointment booking trends and peak hours for this week." },
  { icon: AlertCircle, label: "Pending Alerts", prompt: "What are the critical pending verifications and issues that need my attention?" },
  { icon: BarChart2, label: "Platform Analytics", prompt: "Give me an overview of platform usage analytics and user engagement." },
];

const aiInsights = [
  { type: "success", icon: CheckCircle2, title: "Appointment Rate Up", desc: "Bookings increased 18% vs last month.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
  { type: "warning", icon: AlertCircle, title: "5 Pending Verifications", desc: "Doctor documents awaiting review.", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
  { type: "info", icon: TrendingUp, title: "Revenue on Track", desc: "12.5M collected, target 95% achieved.", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
  { type: "success", icon: CheckCircle2, title: "High Satisfaction", desc: "Avg doctor rating is 4.7/5 this week.", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" },
];

const initialMessages = [
  {
    id: 1,
    role: "assistant",
    content: "Hello, Admin! I'm your HealthConnect AI Assistant. I can help you analyze platform data, summarize reports, identify trends, and answer any questions about your healthcare platform.\n\nWhat would you like to explore today?",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  },
];

const mockResponses = [
  "Based on the current platform data, here's what I found:\n\n**Key Metrics Overview**\n- Total active patients: **12,540** (+12% MoM)\n- Verified doctors: **850** (+8% MoM)\n- Appointments completed: **8,920** this month\n- Revenue collected: **12.5M** (95% of target)\n\nWould you like me to drill down into any specific area?",
  "I've analyzed the available data. Here's a concise summary:\n\nPlatform performance is strong across all major KPIs. Patient acquisition is trending upward, and doctor satisfaction scores remain high at **4.7/5**.\n\nNote: There are **5 pending doctor verifications** that may need your immediate attention.\n\nShall I generate a detailed report?",
  "Great question! Here's my analysis:\n\nThe HealthConnect platform is performing well. Appointment completion rates stand at **92%**, which is above the industry average of 85%.\n\nTop performing specialties this month:\n1. Cardiology — 320 appointments\n2. Dermatology — 280 appointments\n3. Pediatrics — 245 appointments\n\nWould you like recommendations to further optimize performance?",
];

let responseIndex = 0;

export default function AIPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: trimmed,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    setTimeout(() => {
      const response = mockResponses[responseIndex % mockResponses.length];
      responseIndex++;
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: response,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleTextareaChange = (e) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 140) + "px";
  };

  const handleCopy = (id, content) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages(initialMessages);
    responseIndex = 0;
  };

  const formatContent = (content) => {
    return content.split("\n").map((line, i) => {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <span key={i}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
          {i < content.split("\n").length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <div className="flex gap-6 h-[calc(100vh-130px)]">
      {/* Left: Chat */}
      <div className="flex-1 flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Chat Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0c1e3a] to-[#1b3a6e]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-[#1b64f2] flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#0c1e3a] rounded-full"></span>
            </div>
            <div>
              <h1 className="text-white font-semibold text-sm leading-none">HealthConnect AI</h1>
              <p className="text-blue-300 text-xs mt-0.5">Online · Powered by AI</p>
            </div>
          </div>
          <button
            id="btn-new-chat"
            onClick={handleClearChat}
            className="flex items-center gap-1.5 text-blue-300 hover:text-white text-xs px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            New Chat
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 bg-[#f8fafc]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === "assistant"
                  ? "bg-gradient-to-br from-[#1b64f2] to-[#0c1e3a]"
                  : "bg-gradient-to-br from-gray-700 to-gray-900"
                }`}>
                {msg.role === "assistant" ? (
                  <Bot className="w-4 h-4 text-white" />
                ) : (
                  <User className="w-4 h-4 text-white" />
                )}
              </div>

              <div className={`max-w-[75%] group flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === "user"
                    ? "bg-[#1b64f2] text-white rounded-tr-md"
                    : "bg-white text-gray-700 border border-gray-100 rounded-tl-md"
                  }`}>
                  {formatContent(msg.content)}
                </div>
                <div className={`flex items-center gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <span className="text-[10px] text-gray-400">{msg.time}</span>
                  {msg.role === "assistant" && (
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleCopy(msg.id, msg.content)}
                        className="p-1 rounded hover:bg-gray-200 transition-colors"
                        title="Copy message"
                      >
                        <Copy className="w-3 h-3 text-gray-400" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-200 transition-colors" title="Helpful">
                        <ThumbsUp className="w-3 h-3 text-gray-400" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-200 transition-colors" title="Not helpful">
                        <ThumbsDown className="w-3 h-3 text-gray-400" />
                      </button>
                      {copiedId === msg.id && (
                        <span className="text-[10px] text-emerald-500 font-medium">Copied!</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1b64f2] to-[#0c1e3a] flex items-center justify-center shadow-sm flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
                <div className="flex gap-1.5 items-center h-4">
                  <span className="w-2 h-2 bg-[#1b64f2] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-[#1b64f2] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-[#1b64f2] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-4 py-3 border-t border-gray-100 bg-white flex gap-2 overflow-x-auto scrollbar-hide">
          {quickPrompts.map((qp) => {
            const Icon = qp.icon;
            return (
              <button
                key={qp.label}
                onClick={() => sendMessage(qp.prompt)}
                disabled={isTyping}
                className="flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium border border-blue-100 transition-all hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <Icon className="w-3 h-3" />
                {qp.label}
              </button>
            );
          })}
        </div>

        {/* Input */}
        <div className="px-4 pb-4 pt-2 bg-white">
          <div className="flex items-end gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <textarea
              id="ai-chat-input"
              ref={textareaRef}
              value={input}
              onChange={handleTextareaChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about your platform..."
              rows={1}
              className="flex-1 resize-none bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none leading-relaxed"
              style={{ maxHeight: "140px" }}
              disabled={isTyping}
            />
            <button
              id="btn-send-message"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              className="w-9 h-9 rounded-xl bg-[#1b64f2] hover:bg-[#1450c8] flex items-center justify-center transition-all shadow-md shadow-blue-200 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-300 mt-2">
            AI responses are generated based on platform data · Always verify critical decisions
          </p>
        </div>
      </div>

      {/* Right: Insights Panel */}
      <div className="w-72 flex flex-col gap-4 flex-shrink-0">

        {/* Header Card */}
        <div className="bg-gradient-to-br from-[#0c1e3a] to-[#1b3a6e] rounded-2xl p-5 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">AI Insights</span>
          </div>
          <h2 className="font-bold text-base leading-tight">Platform Intelligence</h2>
          <p className="text-blue-300 text-xs mt-1">Real-time analysis of your health platform metrics.</p>
          <div className="mt-4 flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
            <Zap className="w-3.5 h-3.5 text-yellow-300" />
            <span className="text-xs text-blue-100">4 active insights today</span>
          </div>
        </div>

        {/* Insight Cards */}
        <div className="flex flex-col gap-3 flex-1">
          {aiInsights.map((insight, i) => {
            const Icon = insight.icon;
            return (
              <div
                key={i}
                className={`${insight.bg} border ${insight.border} rounded-xl p-4 flex gap-3 items-start hover:shadow-sm transition-all cursor-pointer group`}
              >
                <div className={`w-8 h-8 rounded-lg ${insight.bg} flex items-center justify-center flex-shrink-0 border ${insight.border}`}>
                  <Icon className={`w-4 h-4 ${insight.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-semibold ${insight.color}`}>{insight.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">{insight.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 flex-shrink-0 mt-0.5 transition-colors" />
              </div>
            );
          })}
        </div>

        {/* Suggested Topics */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Suggested Topics</p>
          <div className="space-y-1.5">
            {["Monthly revenue breakdown", "Top-rated doctors list", "Unresolved support tickets", "New patient registrations"].map((topic) => (
              <button
                key={topic}
                onClick={() => sendMessage(topic)}
                disabled={isTyping}
                className="w-full text-left text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-3 h-3 text-gray-300 group-hover:text-blue-400 transition-colors" />
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
