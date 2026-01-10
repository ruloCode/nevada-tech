import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed' // '/' para español, '/en/' para inglés
});

export type Locale = (typeof routing.locales)[number];
