'use client';

import { FormEvent, useState } from 'react';

import { Reveal } from './Reveal';

export function RsvpSection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Reveal>
      <div className="rounded-3xl border border-[var(--theme-accent)]/35 bg-white/25 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <h2 className="text-center font-serif text-4xl text-[var(--theme-primary)]">RSVP</h2>
        <p className="mt-2 text-center text-[var(--theme-primary)]/70">Kindly let us know your presence.</p>

        <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-xl space-y-4">
          <input required placeholder="Your Name" className="w-full rounded-xl border border-white/40 bg-white/55 p-3 outline-none" />
          <input required type="number" min={1} placeholder="Number of Guests" className="w-full rounded-xl border border-white/40 bg-white/55 p-3 outline-none" />
          <select required className="w-full rounded-xl border border-white/40 bg-white/55 p-3 outline-none">
            <option value="">Will you attend?</option>
            <option value="yes">Joyfully attending</option>
            <option value="no">Unable to attend</option>
          </select>
          <textarea placeholder="Message for the couple" className="h-28 w-full rounded-xl border border-white/40 bg-white/55 p-3 outline-none" />

          <button type="submit" className="w-full rounded-full bg-[var(--theme-accent)] px-6 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white">
            Send RSVP
          </button>
        </form>

        {submitted ? (
          <p className="mt-4 text-center font-serif text-xl text-[var(--theme-primary)]">Thank you! We cannot wait to celebrate with you.</p>
        ) : null}
      </div>
    </Reveal>
  );
}
