# Deimonmi Kyndiah - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- 🎨 **Modern Design** - Clean and professional UI with dark mode support
- 🌙 **Dark Mode** - Seamless theme switching with localStorage persistence
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast** - Built with Next.js App Router for optimal performance
- 🎭 **Animations** - Smooth transitions and engaging micro-interactions
- ♿ **Accessible** - WCAG compliant with proper semantic HTML
- 🎯 **SEO Optimized** - Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Theme:** next-themes
- **Font:** Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/deimon999/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build

To create a production build:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Home page
├── components/
│   ├── sections/            # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   └── contact.tsx
│   ├── ui/                  # shadcn/ui components
│   │   └── button.tsx
│   ├── navbar.tsx           # Navigation bar
│   ├── footer.tsx           # Footer component
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🎨 Customization

### Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --background: 0 0% 100%;
  /* ... */
}
```

### Content

Update your information in the section components:
- `components/sections/hero.tsx` - Name, title, and introduction
- `components/sections/projects.tsx` - Project showcase
- `components/sections/experience.tsx` - Work experience
- `components/sections/skills.tsx` - Technical skills
- `components/sections/contact.tsx` - Contact information

### Resume

Place your resume PDF in the `public` folder as `resume.pdf` for the download button to work.

## 📧 Contact

- **Email:** kyndiahdeimon753@gmail.com
- **Phone:** +91 7005318120
- **LinkedIn:** [linkedin.com/in/deimonmi-kyndiah](https://linkedin.com/in/deimonmi-kyndiah)
- **GitHub:** [github.com/deimon999](https://github.com/deimon999)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Deimonmi Kyndiah
