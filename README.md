# 🌐 Portfolio Website

## 📌 About

This is my personal portfolio built using React + Vite, showcasing my projects, skills, and experience.

---

## 🚀 Tech Stack

* React (Vite)
* JavaScript / TypeScript
* CSS / Tailwind 
* GitHub Pages (for hosting)

---

## ▶️ Run Locally

```bash
npm install
npm run dev
```

---

## 🏗️ Build Project

```bash
npm run build
```

This generates a `dist/` folder.

---

## 🌍 Deployment (GitHub Pages)

### 🚀 Deploy Steps

```bash
npm run build
npm run deploy
```

---

## 🔁 How to Update Website (IMPORTANT)

Whenever you make changes:

1. Save your code
2. Run:

```bash
npm run deploy
```

That’s it — it will:

* Build your project
* Push `dist/` to `gh-pages` branch
* Update your live site

---

## ⚙️ Important Config (Vite)

Make sure your `vite.config.js` has correct base path:

```js
export default defineConfig({
  base: '/<repo-name>/',
});
```

---

## 🔗 Live Website

[Pritam's Portfolio](https://pritam-akatsuki.github.io/pritam_portfolio/)

---
