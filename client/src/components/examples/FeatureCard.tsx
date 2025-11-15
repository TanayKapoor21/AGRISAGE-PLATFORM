import FeatureCard from '../FeatureCard';
import { Sprout } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <FeatureCard
      title="Farming Help"
      description="Get crop suggestions, planting details, climate alerts, and pest control assistance"
      icon={Sprout}
      color="hsl(142, 76%, 36%)"
    />
  );
}
