# UKM IT CKI - Website Resmi

Website resmi Unit Kegiatan Mahasiswa Teknologi Informasi (UKM IT) CKI.

## 🚀 Tech Stack

- **React** - Library JavaScript untuk membangun UI
- **Vite** - Build tool yang cepat dan modern
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icon library

## 📦 Instalasi

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy ke Vercel

### Persiapan

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <URL_REPOSITORY_GITHUB>
   git push -u origin main
   ```

2. **Deploy di Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan akun GitHub
   - Klik "Add New Project"
   - Import repository GitHub kamu
   - Vercel akan otomatis mendeteksi Vite configuration
   - Klik "Deploy"

### Build Settings (Otomatis terdeteksi)

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Struktur Proyek

```
ukm-website/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images dan media
│   ├── components/     # React components
│   │   ├── About.jsx
│   │   ├── Activities.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── JoinForm.jsx
│   │   ├── Navbar.jsx
│   │   └── Project.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## ✨ Fitur

- 🎨 Modern dan responsive design
- 📱 Mobile-friendly
- ⚡ Fast loading dengan Vite
- 🎭 Smooth animations
- 📝 Form pendaftaran terintegrasi dengan WhatsApp
- 🖼️ Galeri kegiatan dengan marquee animation.
