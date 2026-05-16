# 🎨 The Canvas Fable

A premium, curated online art gallery and portfolio showcasing diverse mediums including oil paintings, acrylics, sketches, watercolors, and charcoal. Built with a modern, static, high-performance web stack.

**Live Website:** [thecanvasfable.com](https://thecanvasfable.com)

---

## ✨ Features

- **Modern & Vibrant UI:** Glassmorphism effects, dynamic CSS gradients, and fluid hover animations.
- **Fully Responsive:** Beautifully adapts to desktop, tablet, and mobile screens.
- **Interactive Gallery:** Sortable collections with smooth, cinematic image zooming (Lightbox).
- **Static First:** Configured to export entirely as a static site (HTML/CSS/JS) for maximum speed and security.
- **Automated CI/CD:** Deploys instantly to GitHub Pages upon pushing to the `main` branch.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router, Static Export)
- **Library:** React 19
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **UI Components:** Built with inspiration from `shadcn/ui` (Radix UI primitives)
- **Deployment:** GitHub Pages & GitHub Actions

---

## 📁 Project Structure

```text
canvas-gallery/
├── .github/workflows/   # CI/CD pipelines (e.g., deploy.yml for GitHub Pages)
├── public/
│   ├── images/          # 🖼️ PLACE ALL YOUR ARTWORK IMAGES HERE
│   └── favicon.ico      # Site icon
├── src/
│   ├── app/
│   │   ├── globals.css  # Global Tailwind styles & custom animations
│   │   ├── layout.tsx   # Root layout, metadata (SEO), and font configuration
│   │   └── page.tsx     # Main application UI, routing, and portfolio design
│   ├── components/      # Reusable UI components (like the Lightbox)
│   └── data/
│       └── artworkData.ts # 🗄️ THE "DATABASE" - Update this to change gallery photos
├── next.config.ts       # Next.js configuration (Set to "export" for static hosting)
├── package.json         # Project dependencies
└── tailwind.config.ts   # Tailwind setup
```

---

## 🚀 Local Setup & Installation

If you want to run or edit this project locally on your machine, follow these steps:

1. **Ensure Node.js is installed** (v18 or higher recommended).
2. **Clone the repository:**
   ```bash
   git clone https://github.com/rajeshkumar-cse/canvas-gallery.git
   cd canvas-gallery
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the local development server:**
   ```bash
   npm run dev
   ```
5. **View the site:** Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🖼️ How to Manage Artwork & Content

Because this is a **Static Website**, you do not need a database. To add or remove artwork:

1. **Add Images:** Copy your artwork `.jpg` or `.png` files into the `public/images/` folder.
2. **Update the Data:** Open `src/data/artworkData.ts` and update the arrays. 
   - Change `coverImage: "/images/your-image.jpg"` to set a folder's cover.
   - Add objects to the `photos` array to add images inside a folder:
     `{ id: "unique_id", title: "Painting Name", image: "/images/your-image.jpg" }`
3. **Push to GitHub:** Save the file, commit the changes, and push to GitHub. The live site will automatically update within minutes!

---

## 🌍 Deployment Strategies

### Option 1: GitHub Pages (Current Setup)

This repository is pre-configured to deploy automatically to GitHub Pages.

1. Ensure your `next.config.ts` has `output: "export"` and `images: { unoptimized: true }` set.
2. The `.github/workflows/deploy.yml` file is already created.
3. Every time you run `git push origin main`, GitHub Actions will build and deploy the site automatically.
4. **Custom Domain Setup for GitHub Pages:**
   - In GitHub: Go to Repository **Settings > Pages**. Enter your custom domain (`thecanvasfable.com`).
   - In your Domain Registrar (GoDaddy, Namecheap, etc.), add the following DNS records:
     - **A Records:** Point `@` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - **CNAME Record:** Point `www` to `rajeshkumar-cse.github.io`

### Option 2: Vercel (Alternative)

Vercel is the creator of Next.js and offers a seamless hosting experience if you prefer not to use GitHub Pages.

1. Create an account at [vercel.com](https://vercel.com).
2. Click **"Add New Project"** and import this GitHub repository.
3. *Optional:* If deploying to Vercel, you can remove `output: "export"` from `next.config.ts` to take advantage of Vercel's automatic image optimization and server-side features.
4. Click **Deploy**. Vercel will automatically build the site and provide a live URL.
5. In the Vercel project dashboard, go to **Settings > Domains** to attach your custom domain (`thecanvasfable.com`). Vercel will give you the exact DNS records to copy into your domain registrar.

---

## 🚫 Ignored Files & Security (.gitignore)

To keep the repository clean, lightweight, and secure, certain files and folders are explicitly ignored from Git version control via the `.gitignore` file. **Do not force commit these files:**

- **`node_modules/`**: Contains thousands of heavy dependency files. These are automatically regenerated using `npm install`.
- **`.next/` & `out/`**: Compiled build outputs generated locally when you run `npm run dev` or `npm run build`. GitHub Actions generates these fresh during deployment.
- **`.env` & `.env.local`**: Environment variable files. (You don't currently need these, but if you ever add private API keys, they will stay safe on your machine and won't upload to GitHub).
- **`.DS_Store` & `Thumbs.db`**: Hidden files created automatically by macOS and Windows.

---

## 📄 License

All artworks, designs, and content displayed on this website are the property of Hema Rajpoot and The Canvas Fable. Unauthorized use, reproduction, or distribution is strictly prohibited.
