import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Wind, Sun, AlertTriangle, ThermometerSun } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

//todo: remove mock functionality
const mockWeatherData = {
  current: {
    temp: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
  },
  hourly: [
    { time: "Now", temp: 28, condition: "Partly Cloudy" },
    { time: "14:00", temp: 30, condition: "Sunny" },
    { time: "15:00", temp: 31, condition: "Sunny" },
    { time: "16:00", temp: 29, condition: "Cloudy" },
  ],
  daily: [
    { day: "Today", high: 32, low: 24, condition: "Partly Cloudy" },
    { day: "Tomorrow", high: 33, low: 25, condition: "Sunny" },
    { day: "Wednesday", high: 30, low: 23, condition: "Rainy" },
    { day: "Thursday", high: 29, low: 22, condition: "Cloudy" },
  ],
  alerts: [
    {
      type: "warning",
      title: "Heavy Rain Expected",
      description: "Heavy rainfall expected in next 48 hours. Avoid irrigation.",
    },
  ],
};

export default function ClimateAlerts() {
  return (
    <div className="space-y-6">
      {mockWeatherData.alerts.map((alert, idx) => (
        <Alert key={idx} variant="destructive" data-testid={`alert-${idx}`}>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      ))}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-market-blue" />
            Current Weather
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-5xl font-bold">{mockWeatherData.current.temp}°C</div>
              <div className="text-lg text-muted-foreground mt-2">{mockWeatherData.current.condition}</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-market-blue" />
                <span className="text-sm text-muted-foreground">Humidity:</span>
                <span className="font-medium">{mockWeatherData.current.humidity}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Wind Speed:</span>
                <span className="font-medium">{mockWeatherData.current.windSpeed} km/h</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hourly Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4">
            {mockWeatherData.hourly.map((hour, idx) => (
              <div key={idx} className="text-center space-y-2" data-testid={`hourly-${idx}`}>
                <div className="text-sm text-muted-foreground">{hour.time}</div>
                <Sun className="h-6 w-6 mx-auto text-stubble-orange" />
                <div className="font-semibold">{hour.temp}°C</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>7-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockWeatherData.daily.map((day, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-muted rounded-md"
                data-testid={`daily-${idx}`}
              >
                <div className="flex items-center gap-4">
                  <ThermometerSun className="h-5 w-5 text-stubble-orange" />
                  <div>
                    <div className="font-medium">{day.day}</div>
                    <div className="text-sm text-muted-foreground">{day.condition}</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Badge variant="outline">{day.high}°C</Badge>
                  <Badge variant="secondary">{day.low}°C</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
