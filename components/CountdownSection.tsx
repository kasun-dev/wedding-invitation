'use client';

import { useEffect, useMemo, useState } from 'react';

import { invitationConfig } from '@/lib/config';
import { Reveal } from './Reveal';

const getTimeLeft = (dateString: string) => {
  const target = new Date(dateString).getTime();
  if (Number.isNaN(target)) return null;

  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
};

export function CountdownSection() {
  const weddingDate = invitationConfig.content.weddingDate;
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(weddingDate)), 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  const formattedDate = useMemo(() => {
    const date = new Date(weddingDate);
    if (Number.isNaN(date.getTime())) return null;
    return date.toLocaleString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  }, [weddingDate]);

  if (!formattedDate || !timeLeft) {
    return (
      <div className="rounded-3xl border border-[var(--theme-accent)]/35 bg-white/35 p-8 text-center backdrop-blur-md">
        <p className="font-serif text-2xl text-[var(--theme-primary)]">Date to be announced soon.</p>
      </div>
    );
  }

  return (
    <Reveal>
      <div className="space-y-6 rounded-3xl border border-[var(--theme-accent)]/35 bg-white/40 p-8 text-center shadow-xl backdrop-blur-md md:p-12">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-[var(--theme-accent)]">Save The Date</p>
        <h2 className="font-serif text-3xl text-[var(--theme-primary)] md:text-5xl">{formattedDate}</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="rounded-2xl border border-[var(--theme-accent)]/25 bg-white/55 p-4">
              <p className="font-serif text-4xl text-[var(--theme-primary)]">{value}</p>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--theme-accent)]">{unit}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
