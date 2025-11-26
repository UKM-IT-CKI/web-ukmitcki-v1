#!/bin/bash

# Script untuk setup Git dan push ke GitHub
# Jalankan dengan: bash setup-git.sh

echo "🚀 Setup Git Repository untuk UKM IT Website"
echo "=============================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Inisialisasi Git repository..."
    git init
    echo "✅ Git repository berhasil diinisialisasi"
else
    echo "✅ Git repository sudah ada"
fi

echo ""
echo "📝 Menambahkan semua file ke staging area..."
git add .

echo ""
echo "💾 Membuat commit..."
git commit -m "Ready for deployment - UKM IT Website"

echo ""
echo "🌿 Mengatur branch ke 'main'..."
git branch -M main

echo ""
echo "=============================================="
echo "⚠️  LANGKAH SELANJUTNYA:"
echo "=============================================="
echo ""
echo "1. Buat repository baru di GitHub:"
echo "   https://github.com/new"
echo ""
echo "2. Setelah membuat repository, jalankan command berikut:"
echo "   (Ganti USERNAME dan REPO_NAME dengan milik kamu)"
echo ""
echo "   git remote add origin https://github.com/USERNAME/REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "3. Atau jika sudah punya remote, langsung push:"
echo ""
echo "   git push -u origin main"
echo ""
echo "=============================================="
echo "✅ Setup selesai! Siap untuk push ke GitHub"
echo "=============================================="
