const parseBoolean = (value: string | undefined, fallback = true) => {
  if (value == null) return fallback;
  return value.toLowerCase() === 'true';
};

const normalizeColor = (value: string | undefined, fallback: string) => {
  if (!value) return fallback;
  const trimmed = value.trim();
  return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(trimmed) ? trimmed : fallback;
};

const ensureMapUrl = (value: string | undefined) => {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
};

const ensureImageUrl = (value: string | undefined) => {
  if (!value?.trim()) return null;
  const src = value.trim();
  if (src.startsWith('/')) return src;
  try {
    const url = new URL(src);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
};

export const invitationConfig = {
  theme: {
    primary: normalizeColor(process.env.NEXT_PUBLIC_THEME_PRIMARY, '#1f3a32'),
    accent: normalizeColor(process.env.NEXT_PUBLIC_THEME_ACCENT, '#cba35c'),
    background: normalizeColor(process.env.NEXT_PUBLIC_THEME_BACKGROUND, '#f6efe3')
  },
  content: {
    name1: process.env.NEXT_PUBLIC_COUPLE_NAME_1?.trim() || 'Bride',
    name2: process.env.NEXT_PUBLIC_COUPLE_NAME_2?.trim() || 'Groom',
    weddingDate: process.env.NEXT_PUBLIC_WEDDING_DATE || '',
    venueName: process.env.NEXT_PUBLIC_VENUE_NAME?.trim() || 'Wedding Venue',
    mapEmbedUrl: ensureMapUrl(process.env.NEXT_PUBLIC_MAP_EMBED_URL),
    navigateUrl: ensureMapUrl(process.env.NEXT_PUBLIC_NAVIGATE_URL),
    brideImage: ensureImageUrl(process.env.NEXT_PUBLIC_HERO_BRIDE_IMAGE),
    groomImage: ensureImageUrl(process.env.NEXT_PUBLIC_HERO_GROOM_IMAGE),
    heroBackground: ensureImageUrl(process.env.NEXT_PUBLIC_HERO_BACKGROUND_IMAGE)
  },
  show: {
    hero: parseBoolean(process.env.NEXT_PUBLIC_SHOW_HERO, true),
    countdown: parseBoolean(process.env.NEXT_PUBLIC_SHOW_COUNTDOWN, true),
    map: parseBoolean(process.env.NEXT_PUBLIC_SHOW_MAP, true),
    rsvp: parseBoolean(process.env.NEXT_PUBLIC_SHOW_RSVP, true)
  }
};
