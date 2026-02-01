import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en', 'fr'],
  defaultLocale: 'es',
  localePrefix: 'as-needed' // '/' para español, '/en/' para inglés, '/fr/' para francés
});

export type Locale = (typeof routing.locales)[number];
