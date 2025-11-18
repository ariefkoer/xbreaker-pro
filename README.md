# X-Breaker Pro - Website

Website promosi untuk X-Breaker Pro Expert Advisor dengan theme hijau selaras logo.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🎨 Color Palette

Sesuai logo X-Breaker Pro:
- **Primary Green**: #7CB342 (lime green utama)
- **Secondary Green**: #558B2F (dark green)
- **Accent Green**: #9CCC65 (light green)
- **Dark Green**: #33691E 
- **Light Green**: #C5E1A5
- **Yellow-Green**: #CDDC39

## 📁 Project Structure

```
x-breaker-pro/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── public/              # Static assets (add logo images here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## ✨ Features

### Landing Page Sections:
1. **Hero** - Headline powerful dengan data forward test nyata
2. **Trust Indicators** - Stats & metrics
3. **Why Choose** - 3 value propositions utama
4. **Performance** - Forward test breakdown detail
5. **Services** - 3 layanan dengan pricing
6. **Testimonials** - Social proof
7. **FAQ** - Common questions
8. **Contact** - CTA dengan WhatsApp integration

### Design Features:
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations & transitions
- ✅ Gradient backgrounds sesuai brand
- ✅ Professional shadowing & depth
- ✅ Floating WhatsApp button
- ✅ SEO optimized

## 🎯 Pitch Strategy

Website dirancang dengan psychological triggers:

1. **Social Proof**: Forward test data nyata (26.5% ROI)
2. **Urgency**: Limited slots, diskon terbatas
3. **Authority**: Professional design, detailed stats
4. **Reciprocity**: Free consultation, password investor access
5. **Scarcity**: "10 client pertama" messaging

### Key CTAs:
- "Lihat Live Account dengan Password Investor"
- "Konsultasi Gratis 30 Menit"
- Request password investor via WhatsApp

## 📝 Customization

### Update Contact Info:
Edit di `app/page.tsx`:
```typescript
// Line ~820
href="https://wa.me/6281234567890"  // Ganti nomor WA

// Line ~835
href="mailto:admin@xbreakerpro.com"  // Ganti email
```

### Update Pricing:
Edit di section Services (~line 550-700)

### Add Logo Images:
1. Letakkan file logo di folder `/public/`
2. Update di hero section dengan:
```typescript
<Image src="/x-breaker-logo.png" alt="X-Breaker Pro" width={200} height={80} />
```

## 🔧 Deployment

### Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Manual:
```bash
npm run build
npm start
```

## 📊 Conversion Optimization Tips

1. **A/B Test Headlines**: Coba variasi headline di hero
2. **Track CTAs**: Gunakan UTM parameters untuk WhatsApp links
3. **Add Live Chat**: Integrate Tawk.to atau Tidio
4. **Add Video**: Demo EA performance (embed YouTube)
5. **Add Blog**: SEO content tentang EA trading

## 🎓 Support

Untuk pertanyaan development:
- Create issue di repository
- Email: dev@xbreakerpro.com

---

**Built with ❤️ using Next.js 14 + Tailwind CSS**
