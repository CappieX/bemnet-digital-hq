import { useEffect, useRef, useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { services } from "@/lib/site-data";

type Msg = { role: "user" | "assistant"; content: string };

const greeting: Msg = {
  role: "assistant",
  content:
    "Hi, I'm Cappie — Bemnet's assistant. I can explain services, share pricing, or help you set up a consultation. What are you working on?",
};

function reply(input: string): string {
  const q = input.toLowerCase();

  if (/price|pricing|cost|how much|birr|budget/.test(q)) {
    return services.map((s) => `${s.name}: ${s.price} (${s.timeline})`).join("\n");
  }
  if (/book|consult|meeting|call|appointment|schedule/.test(q)) {
    return "Great — send your project details through the contact page and Bement replies within one working day to confirm a consultation slot.";
  }
  if (/payment|telebirr|chapa|bank|cbe/.test(q)) {
    return "Payments can be made by Telebirr, Chapa or a transfer to Commercial Bank of Ethiopia. Full details are confirmed on your invoice.";
  }
  if (/service|do you|offer|help with|build/.test(q)) {
    return `Bement offers: ${services.map((s) => s.name).join(", ")}. Which one would you like to hear more about?`;
  }
  if (/portfolio|project|work|case study|experience/.test(q)) {
    return "Recent work covers payment integration hubs, logistics operations suites and clinic record platforms — see the portfolio page for the results of each.";
  }
  if (/hi|hello|hey|selam/.test(q)) {
    return "Hello! Ask me about services, pricing, past projects, or booking a consultation.";
  }
  return "I've noted that. For a detailed answer, send it through the contact page and Bemnet will follow up personally — or ask me about services, pricing or booking.";
}

export function Cappie() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text: string) => {
    const value = text.trim();
    if (!value || typing) return;
    setMessages((m) => [...m, { role: "user", content: value }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: reply(value) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat with Cappie" : "Chat with Cappie"}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-4 text-primary-foreground shadow-2xl transition-transform hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[26rem] w-[min(22rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-xl border border-border bg-surface red-glow">
          <div className="flex items-center gap-3 border-b border-border bg-background/60 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground">
              C
            </span>
            <div>
              <p className="font-heading text-sm font-semibold">Cappie</p>
              <p className="text-xs text-muted-foreground">AI receptionist • Online</p>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] whitespace-pre-line rounded-lg px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {m.content}
              </div>
            ))}
            {typing && (
              <div className="w-16 rounded-lg bg-secondary px-3 py-2 text-sm text-muted-foreground">
                •••
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="flex flex-wrap gap-2 px-4 pb-2">
            {["Services", "Pricing", "Book a call"].map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Cappie anything..."
              aria-label="Message Cappie"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="rounded-md bg-primary p-2 text-primary-foreground"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
