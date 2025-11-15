import { Button } from "@/components/ui/button";
import { Mic, WifiOff, Contrast, Volume2 } from "lucide-react";
import { useState } from "react";

export default function AccessibilityBar() {
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button
        variant={voiceEnabled ? "default" : "outline"}
        size="sm"
        onClick={() => {
          setVoiceEnabled(!voiceEnabled);
          console.log("Voice search toggled:", !voiceEnabled);
        }}
        data-testid="button-voice-search"
        className="gap-2"
      >
        <Mic className="h-4 w-4" />
        <span>Voice Search</span>
      </Button>
      <Button
        variant={offlineMode ? "default" : "outline"}
        size="sm"
        onClick={() => {
          setOfflineMode(!offlineMode);
          console.log("Offline mode toggled:", !offlineMode);
        }}
        data-testid="button-offline-mode"
        className="gap-2"
      >
        <WifiOff className="h-4 w-4" />
        <span>Offline Mode</span>
      </Button>
      <Button
        variant={highContrast ? "default" : "outline"}
        size="sm"
        onClick={() => {
          setHighContrast(!highContrast);
          console.log("High contrast toggled:", !highContrast);
        }}
        data-testid="button-high-contrast"
        className="gap-2"
      >
        <Contrast className="h-4 w-4" />
        <span>High Contrast</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => console.log("Audio navigation activated")}
        data-testid="button-audio-nav"
        className="gap-2"
      >
        <Volume2 className="h-4 w-4" />
        <span>Audio Help</span>
      </Button>
    </div>
  );
}
