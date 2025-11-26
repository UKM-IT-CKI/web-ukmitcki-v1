---
description: Deploy UKM IT Website ke Vercel
---

# Workflow: Deploy ke Vercel

Ikuti langkah-langkah berikut untuk deploy website UKM IT ke Vercel:

## 1. Inisialisasi Git Repository (jika belum)

```bash
git init
```

## 2. Add semua file ke Git

```bash
git add .
```

## 3. Commit perubahan

```bash
git commit -m "Ready for deployment"
```

## 4. Buat repository di GitHub

- Buka [github.com](https://github.com)
- Klik tombol "New" atau "+" di pojok kanan atas
- Beri nama repository (contoh: `ukm-it-website`)
- Pilih "Public" atau "Private"
- **JANGAN** centang "Initialize this repository with a README"
- Klik "Create repository"

## 5. Connect local repository ke GitHub

```bash
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub kamu dan `REPOSITORY_NAME` dengan nama repository yang kamu buat.

## 6. Deploy ke Vercel

### Opsi A: Melalui Website Vercel (Recommended)

1. Buka [vercel.com](https://vercel.com)
2. Klik "Sign Up" atau "Login" dengan akun GitHub
3. Setelah login, klik "Add New..." → "Project"
4. Pilih repository GitHub yang baru kamu buat
5. Vercel akan otomatis mendeteksi:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Klik "Deploy"
7. Tunggu proses deployment selesai (biasanya 1-2 menit)
8. Setelah selesai, kamu akan mendapat URL production (contoh: `ukm-it-website.vercel.app`)

### Opsi B: Melalui Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

## 7. Update dan Re-deploy

Setiap kali kamu melakukan perubahan:

```bash
git add .
git commit -m "Deskripsi perubahan"
git push
```

Vercel akan otomatis melakukan re-deployment setiap kali ada push ke branch `main`.

## 8. Custom Domain (Opsional)

1. Di dashboard Vercel, pilih project kamu
2. Klik tab "Settings"
3. Klik "Domains"
4. Tambahkan domain custom kamu
5. Ikuti instruksi untuk konfigurasi DNS

## Troubleshooting

### Build Error

Jika terjadi error saat build:
1. Cek logs di Vercel dashboard
2. Pastikan semua dependencies terinstall dengan benar
3. Test build di local dengan `npm run build`

### 404 Error pada Routing

File `vercel.json` sudah dikonfigurasi untuk handle SPA routing. Jika masih ada masalah:
- Pastikan file `vercel.json` ada di root project
- Re-deploy ulang

### Environment Variables

Jika butuh environment variables:
1. Di Vercel dashboard, pilih project
2. Klik "Settings" → "Environment Variables"
3. Tambahkan variable yang dibutuhkan
4. Re-deploy

## Catatan Penting

- ✅ File `vercel.json` sudah dikonfigurasi
- ✅ Build settings otomatis terdeteksi
- ✅ Favicon dan assets sudah dikonfigurasi dengan benar
- ✅ Semua dependencies sudah ada di `package.json`
