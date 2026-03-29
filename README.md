# 🦸 Hero IO — App Discovery Platform

> A modern, responsive app discovery and installation tracking platform built with React.

---

## 📖 Description

**Hero IO** is a feature-rich app store explorer that lets users browse, search, and manage their favorite applications. Users can explore top-rated apps, view detailed information and review charts, install apps to their personal library, and manage installations — all in a sleek, fast single-page application.

---

## ✨ Features

- 🔍 **Live Search** — Real-time, case-insensitive app filtering
- 📊 **Review Charts** — Interactive bar charts powered by Recharts
- 💾 **LocalStorage Persistence** — Installed apps saved across sessions
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🔃 **Sort by Downloads** — High-to-Low and Low-to-High sorting
- ⚡ **Loading Animations** — Smooth transitions during navigation and search
- 🔔 **Toast Notifications** — Feedback on install and uninstall actions
- 🚫 **Custom 404 Page** — Friendly error page for invalid routes

---

## 🛠️ Technologies

| Category | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Routing | [React Router DOM v6](https://reactrouter.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Charts | [Recharts](https://recharts.org/) |
| Toast Notifications | [React Hot Toast](https://react-hot-toast.com/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Language | JavaScript (ES6+) |
| Data Storage | Browser LocalStorage |
| Version Control | Git & GitHub |
| Deployment | Firebase / Netlify / Vercel |

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Banner, stats section, top 8 apps |
| All Apps | `/apps` | Full app list with search & sort |
| App Details | `/apps/:id` | App info, install button, review chart |
| My Installation | `/installation` | Installed apps with uninstall option |
| 404 Error | `*` | Custom not-found page |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/web-joyanta/hero.io.git

# Navigate into the project
cd hero-io

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
hero-io/
├── public/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── AppCard.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/           # Route-level page components
│   │   ├── Home.jsx
│   │   ├── AllApps.jsx
│   │   ├── AppDetails.jsx
│   │   ├── MyInstallation.jsx
│   │   └── ErrorPage.jsx
│   ├── data/
│   │   └── apps.json    # Local app dataset (12–20 entries)
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions (localStorage, etc.)
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🗃️ Data Structure

Each app object in `apps.json` follows this schema:

```json
{
  "id": 1,
  "title": "App Name",
  "companyName": "Company Inc.",
  "image": "https://image-url.com/app.png",
  "description": "Short description of the app.",
  "size": 45,
  "reviews": 1200,
  "ratingAvg": 4.5,
  "downloads": 500000,
  "ratings": [
    { "name": "1 star", "count": 20 },
    { "name": "2 star", "count": 50 },
    { "name": "3 star", "count": 150 },
    { "name": "4 star", "count": 400 },
    { "name": "5 star", "count": 580 }
  ]
}
```

---

## 🌐 Live Demo

🔗 [View Live Site](https://hero-io-murex.vercel.app)

---

## 💻 GitHub Repository

🔗 [View on GitHub](https://github.com/web-joyanta/hero.io)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests via the [GitHub repository](https://github.com/web-joyanta/hero.io).

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ for Assignment 03</p>