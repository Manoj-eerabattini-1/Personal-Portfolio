# Manoj Eerabattini — Portfolio

A clean, professional portfolio site built with **React + Vite + Tailwind CSS**.

---

## 📁 Project Structure

```
manoj-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js     ← Edit this to update your info!
│   ├── hooks/
│   │   └── useFadeIn.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

> **Tip:** Almost everything you'd want to change lives in `src/data/portfolio.js`.
> You can update your name, links, projects, skills, etc. without touching any component files.

---

## 🚀 Option A — Set Up Locally First, Then Push to GitHub

### Step 1: Prerequisites
Make sure you have these installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Git](https://git-scm.com/)

Check versions:
```bash
node -v
git --version
```

### Step 2: Open the project in VS Code
1. Download/unzip this project folder (or copy it somewhere on your machine)
2. Open VS Code → **File → Open Folder** → select `manoj-portfolio`

### Step 3: Install dependencies
Open the VS Code terminal (`Ctrl + `` ` `` `) and run:
```bash
npm install
```

### Step 4: Start the dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. 🎉

### Step 5: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Stage all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Create a new repo on GitHub (github.com → New Repository)
# Then link it:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push
git branch -M main
git push -u origin main
```

---

## 🚀 Option B — Push to GitHub First, Then Clone Locally

### Step 1: Create a new GitHub repository
1. Go to [github.com](https://github.com) → click **New repository**
2. Name it (e.g., `portfolio`) → **Create repository**
3. **Don't** initialize with README (we'll push our own)

### Step 2: Push this project to that repo
```bash
git init
git add .
git commit -m "Initial portfolio setup"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Clone it locally (on any machine)
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
npm install
npm run dev
```

---

## ✏️ Making Changes

All your personal data is in one place:

```
src/data/portfolio.js
```

**To add a new project:**
```js
// In src/data/portfolio.js → projects array
{
  year: "2025",
  title: "Your Project Name",
  stack: ["React", "Node.js"],
  highlights: [
    "What you built",
    "Key technical decisions",
    "Impact or results",
  ],
  github: "https://github.com/your-repo",  // optional
  live: "https://your-live-link.com",       // optional
},
```

**To add a GitHub/Live link to existing projects:**
Uncomment the `github` and `live` fields in each project object in `portfolio.js`.

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add to `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/',  // ← add this line
})
```

Then deploy:
```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| DM Serif Display | Heading font |
| DM Sans | Body font |

---

## 📬 Contact

**Manoj Eerabattini** · eerabattinimanoj1@gmail.com
