import { invitationConfig } from '@/lib/config';
import { Reveal } from './Reveal';

export function MapSection() {
  const { mapEmbedUrl, navigateUrl, venueName } = invitationConfig.content;

  return (
    <Reveal>
      <div className="space-y-6 rounded-3xl border border-[var(--theme-accent)]/35 bg-white/35 p-6 shadow-2xl backdrop-blur-md md:p-10">
        <h2 className="text-center font-serif text-4xl text-[var(--theme-primary)]">Venue</h2>
        <p className="text-center font-sans text-lg text-[var(--theme-primary)]/80">{venueName}</p>

        {mapEmbedUrl ? (
          <iframe
            src={mapEmbedUrl}
            className="h-[45vh] w-full rounded-2xl border border-[var(--theme-accent)]/20"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding location map"
          />
        ) : (
          <div className="flex h-[45vh] items-center justify-center rounded-2xl border border-dashed border-[var(--theme-accent)]/40 bg-white/50">
            <p className="font-serif text-xl text-[var(--theme-primary)]/70">Map details will be shared shortly.</p>
          </div>
        )}

        {navigateUrl ? (
          <div className="text-center">
            <a
              href={navigateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-[var(--theme-accent)] px-8 py-3 font-sans text-sm uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              Navigate
            </a>
          </div>
        ) : null}
      </div>
    </Reveal>
  );
}
