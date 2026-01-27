# Nevada Tech Website

## MCP Servers Configurados

### 1. context7 (📚 Documentación Actualizada) — USAR SIEMPRE
Docs actualizados de Next.js, React, Tailwind y otros frameworks.
```
# ANTES de implementar algo, consultar docs:
mcp__context7__resolve-library-id: { libraryName: "nextjs" }
mcp__context7__get-library-docs: { libraryId: "/vercel/next.js", topic: "metadata" }

# Librerías disponibles:
- nextjs → App Router, Server Components, Metadata, Image, etc.
- react → React 19, hooks, patterns
- tailwindcss → Tailwind CSS 4, utilities
- framer-motion → Animaciones, variants
- next-intl → i18n (buscar como "next-intl")
```

### 2. next-devtools (Next.js DevTools)
Detecta errores, hydration issues, estructura de rutas, logs del dev server.
```
# Ver errores en tiempo real:
mcp__next-devtools__nextjs_call: { action: "get_errors" }

# Ver estructura de rutas:
mcp__next-devtools__nextjs_call: { action: "get_routes" }

# Buscar en docs oficiales:
mcp__next-devtools__nextjs_docs: { action: "search", query: "generateMetadata" }
```

### 3. playwright (Browser Automation)
Screenshots, testing visual, interacción con el browser.
```
# Tomar screenshot:
mcp__playwright__browser_eval: { action: "screenshot", url: "http://localhost:3000" }

# Con viewport específico:
mcp__playwright__browser_eval: { 
  action: "screenshot", 
  url: "http://localhost:3000",
  viewport: { width: 375, height: 667 }
}
```

### 4. github (GitHub Integration)
PRs, issues, code review, repositorios.
```
# Crear PR:
gh pr create --title "feat: ..." --body "..."

# Ver PRs:
gh pr list

# Ver issues:
gh issue list
```

## Stack

- **Next.js 16.1.1** (App Router) + **React 19**
- **TypeScript** + **Tailwind CSS 4**
- **next-intl** para i18n (locales: es, en)
- **Framer Motion** para animaciones
- **tsparticles** para efectos de partículas

## Estructura

```
app/
├── [locale]/           # Rutas con i18n (es|en)
│   ├── page.tsx        # Home
│   ├── about/          # Página About
│   └── projects/       # Portfolio con categorías
├── components/
│   ├── ui/             # Componentes reutilizables
│   ├── sections/       # Secciones de página
│   ├── hero/           # Componentes del hero
│   ├── about/          # Componentes de about
│   ├── projects/       # Componentes de proyectos
│   └── navigation/     # Navbar
messages/               # Traducciones JSON (en.json, es.json)
public/                 # Assets estáticos
.claude/                # Configuración de Claude Code
├── agents/             # Agentes especializados
├── commands/           # Comandos personalizados
├── skills/             # Guías y patrones
└── hooks/              # Hooks de automatización
```

## Comandos Principales

```bash
npm run dev     # Servidor de desarrollo (localhost:3000)
npm run build   # Build de producción
npm run lint    # ESLint
```

---

## 🚀 Flujo de Trabajo con Git

### Crear nueva feature
```bash
git checkout -b feature/nombre-descriptivo
```

### Commits (convención)
```bash
git commit -m "feat(scope): descripción"   # Nueva funcionalidad
git commit -m "fix(scope): descripción"    # Corrección
git commit -m "style(scope): descripción"  # Estilos
git commit -m "refactor(scope): ..."       # Refactor
git commit -m "docs(scope): ..."           # Documentación
```

### Crear PR
```bash
git push -u origin feature/nombre
gh pr create --title "feat: ..." --body "..."
```

---

## 📋 Reglas de Código (OBLIGATORIAS)

### TypeScript
- ✅ Tipos estrictos — NO `any`
- ✅ Interfaces para props con JSDoc si es complejo
- ✅ Tipos de retorno explícitos en funciones complejas

### React/Next.js
- ✅ `'use client'` solo cuando sea necesario (hooks, eventos)
- ✅ Server Components por defecto
- ✅ `next/image` para imágenes
- ✅ `next/link` o `@/i18n/routing` para links internos
- ✅ Metadata con `generateMetadata` en páginas

### Estilos
- ✅ Tailwind CSS 4 — NO CSS modules ni styled-components
- ✅ Mobile-first responsive
- ✅ Clases ordenadas: layout → spacing → sizing → visual

### Animaciones
- ✅ Framer Motion (motion.div, variants, useInView)
- ✅ `viewport={{ once: true }}` para animaciones de scroll
- ✅ Duración 0.3-0.6s típica

### i18n (CRÍTICO)
- ✅ TODOS los textos en `messages/en.json` y `messages/es.json`
- ✅ NUNCA hardcodear texto visible
- ✅ `useTranslations('Seccion')` en client components
- ✅ `getTranslations('Seccion')` en server components
- ✅ Mantener ambos archivos sincronizados

---

## 📚 Documentation-First (IMPORTANTE)

**SIEMPRE consultar documentación ANTES de implementar:**

1. **context7** → Primera opción para docs actualizadas
2. **next-devtools** → Docs de Next.js
3. **Web search** → Si no está en MCPs

**NO adivinar APIs.** Si no estás 100% seguro, consulta docs.

Ver skill completo: `.claude/skills/documentation-first/SKILL.md`

---

## 🛠️ Comandos de Claude Code

### Desarrollo
| Comando | Descripción |
|---------|-------------|
| `/project:feature [descripción]` | **Workflow completo de desarrollo** (rama, docs, código, QA, commit) |
| `/project:new-page [nombre]` | Crear nueva página con estructura base |

### Calidad
| Comando | Descripción |
|---------|-------------|
| `/project:quality` | Pipeline completo (lint + build + reviews + i18n) |
| `/project:review` | Code review de cambios |
| `/project:ui-review` | UI/UX review de componentes |
| `/project:qa` | QA completo con screenshots |
| `/project:pre-commit` | Check rápido antes de commit |

### Git & PR
| Comando | Descripción |
|---------|-------------|
| `/project:pr [título]` | Crear PR con descripción automática |

### Utilidades
| Comando | Descripción |
|---------|-------------|
| `/project:fix-i18n` | Sincronizar traducciones |
| `/project:check-build` | Verificar lint + build |

---

## 🤖 Agentes Especializados

| Agente | Uso |
|--------|-----|
| `@code-reviewer` | Revisión de TypeScript, React, clean code |
| `@ui-reviewer` | Revisión de UI/UX, responsive, a11y |
| `@qa-engineer` | Testing visual, funcional, screenshots |
| `@quality-orchestrator` | Orquesta pipeline completo |

---

## 🔄 Flujo Automático

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
5. Si hay errores → Claude los ve y corrige
   Si todo OK → Listo para commit
```

---

## 📁 Skills Disponibles

| Skill | Descripción |
|-------|-------------|
| `documentation-first` | Consultar docs antes de implementar |
| `new-section` | Crear nueva sección de página |
| `new-component` | Crear componente UI reutilizable |
| `add-translation` | Agregar/modificar traducciones |
| `framer-animation` | Patrones de animación |
| `tailwind-patterns` | Patrones de Tailwind CSS |
| `clean-code` | Principios de código limpio |

---

## ⚠️ Hooks Activos

1. **PreToolUse (Edit/Write):** Advierte si estás en main
2. **PostToolUse (Edit/Write):** ESLint auto-fix en archivos TS/TSX
3. **Stop:** Quality check automático al terminar tarea

---

## 🎯 Checklist de Calidad

Antes de considerar una tarea completa:

- [ ] Lint pasa sin errores
- [ ] TypeScript compila sin errores
- [ ] Build genera correctamente
- [ ] Traducciones en ambos idiomas
- [ ] UI responsive (mobile/tablet/desktop)
- [ ] Animaciones suaves
- [ ] Sin console.log abandonados
- [ ] Código sigue patrones del proyecto
