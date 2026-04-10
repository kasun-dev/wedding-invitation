import Image from 'next/image';

import { invitationConfig } from '@/lib/config';
import { Reveal } from './Reveal';

const Arch = () => (
  <svg viewBox="0 0 320 210" className="mx-auto h-auto w-full max-w-xl" aria-hidden="true">
    <path
      d="M30,205 L30,120 A130,130 0 0,1 290,120 L290,205"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line x1="65" y1="205" x2="65" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    <line x1="255" y1="205" x2="255" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.6" />
  </svg>
);

export function HeroSection() {
  const { name1, name2, brideImage, groomImage, heroBackground } = invitationConfig.content;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/30 bg-white/35 p-6 shadow-2xl backdrop-blur-md md:p-12">
      {heroBackground ? (
        <Image
          src={heroBackground}
          alt="Wedding floral background"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
      ) : null}

      <div className="relative z-10 space-y-8 text-center text-[var(--theme-primary)]">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.45em] text-[var(--theme-accent)]">Together With Families</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto flex max-w-sm items-end justify-center gap-6">
            {brideImage ? (
              <Image src={brideImage} alt="Cartoon bride" width={150} height={190} className="h-auto w-32 object-contain md:w-36" />
            ) : (
              <div className="h-36 w-28 rounded-full border border-dashed border-[var(--theme-accent)]/60 bg-white/30" />
            )}
            {groomImage ? (
              <Image src={groomImage} alt="Cartoon groom" width={150} height={190} className="h-auto w-32 object-contain md:w-36" />
            ) : (
              <div className="h-36 w-28 rounded-full border border-dashed border-[var(--theme-accent)]/60 bg-white/30" />
            )}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto max-w-xl text-[var(--theme-accent)]">
          <Arch />
          <h1 className="-mt-20 font-serif text-5xl leading-tight md:text-7xl">
            {name1} <span className="px-3 text-3xl md:text-4xl">&</span> {name2}
          </h1>
        </Reveal>
      </div>
    </div>
  );
}
