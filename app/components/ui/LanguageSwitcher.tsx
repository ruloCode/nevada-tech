'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/app/i18n/navigation';
import { useTransition } from 'react';
import { routing, type Locale } from '@/app/i18n/routing';

const localeLabels: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français'
};

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className={`relative ${className}`}>
      <select
        value={locale}
        onChange={handleChange}
        disabled={isPending}
        className={`
          appearance-none
          bg-transparent
          border border-white/20
          rounded-lg
          px-3 py-2
          pr-8
          text-sm text-white/80
          cursor-pointer
          hover:border-white/40
          focus:border-white/60
          focus:outline-none
          transition-all
          disabled:opacity-50
          disabled:cursor-not-allowed
        `}
      >
        {routing.locales.map((loc) => (
          <option
            key={loc}
            value={loc}
            className="bg-black text-white"
          >
            {localeLabels[loc]}
          </option>
        ))}
      </select>
      {/* Dropdown arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          className={`h-4 w-4 text-white/60 transition-transform ${isPending ? 'animate-spin' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isPending ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          )}
        </svg>
      </div>
    </div>
  );
}
