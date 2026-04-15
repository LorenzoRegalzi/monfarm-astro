# MonFarm Experience — Sito Web

Sito statico Astro per **MonFarm Experience**, progetto di ritiri immersi nella natura del Monferrato.

---

## Stack tecnico

| Tool | Versione |
|------|----------|
| Astro | 4.x (static) |
| Node.js | ≥ 20 |
| CSS | Vanilla CSS + Custom Properties |
| Deploy | Vercel |

---

## Avvio rapido

```bash
# Installa le dipendenze
npm install

# Server di sviluppo (http://localhost:4321)
npm run dev

# Build di produzione
npm run build

# Preview della build
npm run preview
```

---

## Struttura del progetto

```
monfarm-astro/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── logo.png                        ← sostituisci con SVG reale
│       ├── logo-symbol.svg                 ← sostituisci con SVG reale
│       ├── hero.jpg                        ← aggiungi foto reale
│       ├── og-image.jpg                    ← 1200×630px per social
│       └── esperienze/
│           ├── risveglio-fioritura.jpg
│           └── le-radici.jpg
├── src/
│   ├── components/
│   │   ├── Header.astro       ← navigazione + mobile burger menu
│   │   ├── Footer.astro
│   │   ├── ExperienceCard.astro
│   │   └── ContactForm.astro  ← form con dropdown + privacy policy
│   ├── layouts/
│   │   └── Layout.astro       ← meta SEO, Google Fonts, head
│   ├── pages/
│   │   ├── index.astro
│   │   ├── il-format.astro
│   │   ├── a-chi-e-rivolto.astro
│   │   ├── esperienze.astro
│   │   ├── collabora.astro
│   │   ├── contatti.astro
│   │   └── privacy-policy.astro
│   └── styles/
│       └── global.css          ← design system completo
├── astro.config.mjs
├── vercel.json
└── package.json
```

---

## Palette colori (da InDesign)

```css
--color-brown:       #715b43;   /* testo, titoli */
--color-cream:       #dfd3bd;   /* bordi, sfondi card */
--color-cream-bg:    #ede7d9;   /* sfondo pagina */
--color-olive:       #828259;   /* bottoni, link, accenti */
--color-olive-light: #98926E;
--color-terracotta:  #c97542;   /* accento secondario */
```

---

## Deploy su Vercel

1. Importa il repository su [vercel.com](https://vercel.com)
2. Vercel rileva automaticamente Astro
3. Build command: `npm run build` — Output: `dist/`
4. Aggiungi il dominio personalizzato dalle impostazioni Vercel
5. Aggiorna `site` in `astro.config.mjs` con l'URL definitivo

---

## Da fare prima del go-live

- [ ] Sostituire `public/images/logo.png` con il logo reale (esporta da InDesign)
- [ ] Aggiungere tutte le foto reali in `public/images/`
- [ ] Creare `public/images/og-image.jpg` (1200×630px)
- [ ] Completare i dati del Titolare nella Privacy Policy (`/privacy-policy`)
- [ ] Aggiornare i link Instagram con URL reali
- [ ] Configurare la gestione del form (Netlify Forms o Formspree per Vercel)
- [ ] Aggiornare `site` in `astro.config.mjs` con il dominio definitivo
- [ ] Aggiungere Google Analytics o Plausible se necessario

---

## Gestione form contatti

Il form usa attributi **Netlify Forms** (`data-netlify="true"`).  
Per deploy su **Vercel** usa una di queste alternative:

- **Formspree**: aggiungi `action="https://formspree.io/f/YOUR_ID"` e rimuovi gli attributi Netlify
- **Resend / EmailJS**: per invio email tramite API
- **Vercel Functions**: crea `src/pages/api/contatti.ts` come endpoint serverless

---

## Note dal mockup InDesign

- Il dropdown "Cosa ti porta qui?" è un `<select>` chiuso, non una lista aperta
- "Accetto la privacy policy" collega a `/privacy-policy` (link cliccabile, obbligatorio GDPR)
- I link Instagram si aprono in `target="_blank"` con `rel="noopener noreferrer"`
- Il menu burger apre un overlay full-screen con tasto X per chiudere
