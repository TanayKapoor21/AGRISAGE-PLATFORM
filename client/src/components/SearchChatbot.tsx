import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Mic, Send } from "lucide-react";
import { useState } from "react";

export default function SearchChatbot() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Search query:", query);
      setMessages([...messages, { role: "user", content: query }]);
      setQuery("");
      
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "I'm here to help you with farming assistance, market prices, waste management, and more. How can I assist you today?" }
        ]);
      }, 500);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Ask anything... crop, weather, seeds, prices, diseases..."
          className="pl-12 pr-24 h-14 text-base"
          data-testid="input-search"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => console.log("Voice input activated")}
            data-testid="button-voice-input"
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            onClick={handleSearch}
            data-testid="button-search"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {messages.length > 0 && (
        <Card className="p-6 space-y-4 max-h-96 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              data-testid={`message-${idx}`}
            >
              <div
                className={`max-w-[80%] rounded-md p-3 ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
}
