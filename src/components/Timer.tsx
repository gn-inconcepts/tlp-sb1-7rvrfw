import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function Timer() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    function getNextTuesday4PM() {
      const now = new Date();
      const targetDay = 2; // Tuesday (0 = Sunday, 1 = Monday, ...)
      const daysUntilTarget = (targetDay - now.getDay() + 7) % 7;
      
      const nextTuesday = new Date(now);
      nextTuesday.setDate(now.getDate() + daysUntilTarget);
      nextTuesday.setHours(16, 0, 0, 0); // 4 PM UTC+2
      nextTuesday.setMinutes(nextTuesday.getMinutes() - nextTuesday.getTimezoneOffset() + 120); // UTC+2 adjustment
      
      if (nextTuesday <= now) {
        nextTuesday.setDate(nextTuesday.getDate() + 7);
      }
      
      return nextTuesday;
    }

    function calculateTimeLeft() {
      const targetDate = getNextTuesday4PM();
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex justify-center mb-8">
        <Button className="bg-green-600 hover:bg-green-700 text-xl px-8 py-4">
          BUY NOW
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-8 mb-8">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="text-6xl font-bold mb-2">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xl capitalize">{label}</div>
        </div>
      ))}
    </div>
  );
}