import { CountdownSection } from '@/components/CountdownSection';
import { FullSection } from '@/components/FullSection';
import { GoldParticles } from '@/components/GoldParticles';
import { HeroSection } from '@/components/HeroSection';
import { MapSection } from '@/components/MapSection';
import { RsvpSection } from '@/components/RsvpSection';
import { invitationConfig } from '@/lib/config';

export default function Home() {
  const { show, theme } = invitationConfig;

  return (
    <main
      className="relative h-dvh snap-y snap-mandatory overflow-y-scroll"
      style={{
        ['--theme-primary' as string]: theme.primary,
        ['--theme-accent' as string]: theme.accent,
        ['--theme-background' as string]: theme.background
      }}
    >
      <GoldParticles />

      {show.hero ? (
        <FullSection id="hero" className="z-20">
          <HeroSection />
        </FullSection>
      ) : null}

      {show.countdown ? (
        <FullSection id="countdown" className="z-20">
          <CountdownSection />
        </FullSection>
      ) : null}

      {show.map ? (
        <FullSection id="map" className="z-20">
          <MapSection />
        </FullSection>
      ) : null}

      {show.rsvp ? (
        <FullSection id="rsvp" className="z-20">
          <RsvpSection />
        </FullSection>
      ) : null}
    </main>
  );
}
