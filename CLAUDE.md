# Nevada Tech Website

## Stack
- Next.js 16.1.1 (App Router) + React 19
- TypeScript + Tailwind CSS 4
- next-intl para i18n (locales: es, en)
- Framer Motion para animaciones
- tsparticles para efectos de partículas

## Estructura
```
app/
├── [locale]/           # Rutas con i18n (es|en)
│   ├── page.tsx        # Home
│   ├── about/          # Página About
│   └── projects/       # Portfolio con categorías
├── components/
│   ├── ui/             # Componentes reutilizables (Button, SectionTitle, AnimatedCounter)
│   ├── sections/       # Secciones de página (Services, Stats, Portfolio, Testimonials, CTA)
│   ├── hero/           # Componentes del hero
│   ├── about/          # Componentes de la página about
│   ├── projects/       # Componentes de proyectos
│   └── navigation/     # Navbar
messages/               # Traducciones JSON (en.json, es.json)
public/                 # Assets estáticos
```

## Comandos
- `npm run dev` — Servidor de desarrollo (localhost:3000)
- `npm run build` — Build de producción
- `npm run lint` — ESLint

## Reglas de Código
- Componentes en TypeScript (.tsx) con 'use client' cuando usen hooks
- ES modules (import/export), NUNCA CommonJS (require)
- Tailwind CSS 4 para estilos, no CSS modules ni styled-components
- Animaciones con Framer Motion (motion.div, variants, useInView)
- Destructurar imports: `import { motion } from 'framer-motion'`

## i18n (IMPORTANTE)
- TODOS los textos visibles van en `messages/en.json` y `messages/es.json`
- NUNCA hardcodear texto en componentes
- Usar: `const t = useTranslations('NombreSeccion')`
- Mantener ambos archivos de traducción sincronizados
- Las claves en JSON deben coincidir exactamente

## Patrones del Proyecto
- Secciones usan SectionTitle para títulos consistentes
- Cards usan Framer Motion para animaciones de entrada
- Links internos con next-intl: `import { Link } from '@/i18n/routing'`

## Verificación (después de cambios)
1. `npm run build` — Verificar que compila sin errores
2. `npm run lint` — Sin errores de lint
3. Revisar ambos idiomas en el navegador

## Skills Disponibles
Ver `.claude/skills/` para guías específicas:
- new-section: Crear nueva sección
- new-component: Crear componente UI
- add-translation: Agregar traducciones
- framer-animation: Patrones de animación
- tailwind-patterns: Patrones de Tailwind CSS
- clean-code: Principios de código limpio

## Agentes de Calidad
Ver `.claude/agents/` para revisores especializados:
- **code-reviewer**: Revisa TypeScript, React, clean code
- **ui-reviewer**: Revisa UI/UX, responsive, a11y
- **quality-orchestrator**: Orquesta pipeline completo de calidad

## Comandos de Calidad
- `/project:review` — Code review de cambios
- `/project:ui-review` — UI/UX review de componentes
- `/project:quality` — Pipeline completo (lint + build + reviews + i18n)
- `/project:pre-commit` — Check rápido antes de commit
- `/project:fix-i18n` — Sincronizar traducciones

## Flujo de Trabajo (AUTOMÁTICO)
```
1. Claude escribe/edita código
   ↓
2. [Hook PostToolUse] ESLint auto-fix
   ↓
3. Claude termina la tarea
   ↓
4. [Hook Stop] Quality Check automático:
   • Lint
   • TypeScript check
   • i18n sync
   • Build verification
   ↓
5. Si hay errores → Claude los ve y puede corregir
   Si todo OK → Listo para commit
```

**El quality check corre automáticamente al terminar cada tarea.**
Para checks manuales más detallados: `/project:quality`
