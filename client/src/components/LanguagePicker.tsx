import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useState } from "react";

interface LanguagePickerProps {
  onChange?: (language: string) => void;
}

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "ta", label: "தமிழ்" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "mr", label: "मराठी" },
];

export default function LanguagePicker({ onChange }: LanguagePickerProps) {
  const [selected, setSelected] = useState("en");

  const handleSelect = (code: string) => {
    setSelected(code);
    onChange?.(code);
    console.log(`Language changed to: ${code}`);
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Languages className="h-4 w-4 text-muted-foreground" />
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={selected === lang.code ? "default" : "ghost"}
          size="sm"
          onClick={() => handleSelect(lang.code)}
          data-testid={`button-lang-${lang.code}`}
          className="min-h-8"
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
