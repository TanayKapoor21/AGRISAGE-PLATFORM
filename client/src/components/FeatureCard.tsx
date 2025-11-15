import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  onClick?: () => void;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  color,
  onClick,
}: FeatureCardProps) {
  return (
    <Card
      className="hover-elevate active-elevate-2 cursor-pointer transition-all"
      onClick={() => {
        onClick?.();
        console.log(`${title} card clicked`);
      }}
      data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <CardHeader className="gap-4">
        <div
          className="w-16 h-16 rounded-md flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div className="space-y-2">
          <CardTitle className="flex items-center justify-between gap-2">
            {title}
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
