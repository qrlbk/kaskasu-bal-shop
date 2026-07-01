# Kaskasu Bal Shop

React conversion of the **Modern Honey WhatsApp Shop** Stitch design.

## Features

- Responsive landing page matching the Stitch design
- KZ / RU language switcher
- Volume selection with live pricing (0.5 L, 1.0 L, 3.0 L)
- WhatsApp order button with pre-filled message

## Setup

```bash
npm install
npm run dev
```

## Configure WhatsApp

Edit `src/data/mockData.ts` and set your real number:

```ts
whatsappPhone: '77057809840', // digits only, no +
```

## Deploy (GitHub Pages)

Site URL: https://qrlbk.github.io/kaskasu-bal-shop/

Pushes to `main` deploy automatically via GitHub Actions. Enable **Settings → Pages → Source: GitHub Actions** once if the site is not live yet.


- Project: `17824498302291606624`
- Screen: `4c2e34b414dd441196b4aaa06b741995`
- Original assets: `.stitch/designs/`
