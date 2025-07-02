# 🧑‍💻 Igor Moreno Semedo — Portfolio

Welcome to the source code of [**igormorenosemedo.com**](https://igormorenosemedo.com/) — a modern, performant developer portfolio built with React, Vite, Tailwind CSS, and interactive 3D/animated components. It features smooth UI, motion effects, and a working contact form powered by **EmailJS**.

---

## 🚀 Tech Stack

* ⚛️ **React + Vite**
* 🎨 **Tailwind CSS** (with custom utility layers)
* 📧 **EmailJS** for contact form
* ✨ **GSAP**, `@react-three/fiber`, and **Three.js** for 3D and motion
* 🧪 **Vitest + Testing Library**
* 🔔 **Sonner** for clean toast notifications

Builded from <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

---

## 📅 Live Site

➡️ [https://igormorenosemedo.com](https://igormorenosemedo.com)

---

## 💻 Getting Started

1. **Install dependencies**:

```bash
npm install
```

2. **Create a `.env` file** from the example:

```bash
cp .env.example .env
```

3. **Set your EmailJS credentials** in `.env`:

```env
VITE_APP_EMAILS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start the dev server**:

```bash
npm run dev
```

---

## ✉️ EmailJS Integration

The contact form uses `emailjs.sendForm` and `useRef` to submit messages without a backend.

* [Create an account at emailjs.com](https://www.emailjs.com/)
* Set up a service, template, and get your public key
* Paste values into your `.env` file

No backend or server required!

---

## 🪙 Developer Tips

* All sections are modular and easy to reuse.
* Testimonials and social links are managed from a single `constants.ts` file.
* Utility classes like `flex-center` or `section-padding` are defined in Tailwind's `@layer`.
* Toasts use [`sonner`](https://sonner.emilkowal.ski) instead of `react-toastify` for a smoother dev experience.
* Tests are written with `Vitest` and `Testing Library`. Use `npm run test` to run them.

---

## 📚 File Structure

```
src/
├── components/        # UI Components
├── constants.ts       # Static data (testimonials, socials)
├── hooks/             # Custom hooks
├── styles/            # Global and Tailwind styles
├── assets/            # Images and 3D models
├── pages/             # Major page sections
└── App.tsx            # Main entry
```

---

## 🔐 .env.example

```env
VITE_APP_EMAILS_SERVICE_ID=
VITE_APP_EMAILJS_TEMPLATE_ID=
VITE_APP_EMAILJS_PUBLIC_KEY=
```

---

## 🛍️ License

MIT License. Feel free to fork and customize, but credit is appreciated.

---

## 💬 Contact

Made with ❤️ by [Igor Moreno Semedo](https://www.linkedin.com/in/igor-ms)

[View Live](https://igormorenosemedo.com) | [GitHub](https://github.com/igorms-pro)
