# 🚀 Portfolio Website - Sirrul Fatih Ahdiat

Website portfolio pribadi yang modern, responsif, dan siap di-hosting menggunakan GitHub Pages.

![Portfolio Preview](assets/images/og-image.png)

## ✨ Fitur

- **Fully Responsive** - Tampil sempurna di mobile, tablet, dan desktop
- **SEO Friendly** - Meta tags lengkap untuk optimasi mesin pencari
- **Performance Ringan** - Tanpa framework atau library berat
- **Modern Design** - Desain clean dengan animasi smooth
- **Dark Theme** - Tema gelap yang nyaman di mata
- **Accessibility** - Skip link dan ARIA labels untuk aksesibilitas

## 📋 Struktur Halaman

- **Home (Hero)** - Perkenalan diri dengan foto profil dan link download CV
- **About** - Informasi tentang saya
- **Skills** - Technical Skills & Tools & Software dalam bentuk tags/badges
- **Education** - Riwayat pendidikan dengan timeline
- **Experience** - Pengalaman organisasi dan kegiatan
- **Projects** - Showcase karya dan portfolio
- **Contact** - Informasi kontak (Email, Lokasi, WhatsApp)
- **Footer** - Link sosial media dan navigasi

## 🛠️ Teknologi

- HTML5 (Semantic)
- CSS3 (Flexbox & Grid, CSS Variables)
- Vanilla JavaScript (ES6+)
- SVG Icons (inline)

## 📁 Struktur Folder

```
portfolio/
├── index.html          # Halaman utama
├── style.css           # Stylesheet
├── script.js           # JavaScript
├── README.md           # Dokumentasi
└── assets/
    ├── cv.pdf          # File CV untuk di-download
    └── images/
        ├── icons/      # Favicon dan icons
        │   ├── favicon.svg
        │   └── apple-touch-icon.png
        ├── profile.jpg         # Foto profil hero
        ├── og-image.png        # Open Graph image
        └── KANTIN JAWARA.png   # Screenshot project
```

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1: Buat Repository GitHub

1. Buka [GitHub](https://github.com) dan login
2. Klik tombol **"New"** atau **"+"** → **"New repository"**
3. Isi nama repository (contoh: `portfolio` atau `username.github.io`)
4. Pilih **Public**
5. Klik **"Create repository"**

### Langkah 2: Upload Files

**Opsi A: Via GitHub Web Interface**

1. Di halaman repository, klik **"uploading an existing file"**
2. Drag & drop semua file portfolio
3. Klik **"Commit changes"**

**Opsi B: Via Git Command Line**

```bash
# Clone repository
git clone https://github.com/username/portfolio.git

# Masuk ke folder
cd portfolio

# Copy semua file portfolio ke folder ini

# Add semua files
git add .

# Commit
git commit -m "Initial portfolio website"

# Push ke GitHub
git push origin main
```

### Langkah 3: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik tab **"Settings"**
3. Scroll ke section **"Pages"** (di sidebar kiri)
4. Di **"Source"**, pilih:
   - Branch: `main`
   - Folder: `/ (root)`
5. Klik **"Save"**
6. Tunggu beberapa menit untuk proses deployment

### Langkah 4: Akses Website

Website akan tersedia di:
- `https://username.github.io/portfolio/` (jika nama repo: portfolio)
- `https://username.github.io/` (jika nama repo: username.github.io)

## 📝 Kustomisasi

### Mengubah Informasi Personal

1. Buka `index.html`
2. Ganti nama, deskripsi, dan informasi kontak
3. Update link sosial media dengan URL Anda

### Mengubah Warna Theme

1. Buka `style.css`
2. Edit CSS Variables di bagian `:root`

```css
:root {
    --color-primary: #6366f1;      /* Warna utama */
    --color-primary-dark: #4f46e5;
    --color-bg: #0f172a;           /* Background */
    /* ... */
}
```

### Menambah Project

1. Buka `index.html`
2. Copy template project card
3. Update gambar, judul, deskripsi, dan tags

## 🖼️ Assets yang Perlu Disiapkan

Siapkan gambar-gambar berikut sebelum deploy:

| File | Ukuran | Keterangan |
|------|--------|------------|
| `profile.jpg` | 400x400px | Foto profil untuk hero section |
| `og-image.png` | 1200x630px | Preview saat link dibagikan |
| `favicon.svg` | 32x32px | Icon browser tab |
| `apple-touch-icon.png` | 180x180px | Icon untuk iOS |
| `KANTIN JAWARA.png` | 800x500px | Screenshot project |
| `cv.pdf` | - | File CV untuk di-download |

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan.

## 🤝 Kontribusi

Jika menemukan bug atau ingin menambah fitur:
1. Fork repository
2. Buat branch baru
3. Commit perubahan
4. Buat Pull Request

---

Made with ❤️ by Sirrul Fatih Ahdiat
