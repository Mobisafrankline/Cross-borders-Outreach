# Cross-Borders Outreach Ministry Inc - NGO Website

A modern, full-featured website for Cross-Borders Outreach Ministry Inc, a humanitarian organization focused on transforming lives through sustainable programs.

## 🌟 Features

### Two-Layer Navigation System
- **Top Layer**: Primary navigation with dropdown menus
  - What We Do (Food Support, Education, Health Outreach, Economic Empowerment)
  - Ways to Give (Donate, Volunteer, Partner, Fundraise)
  - Stories (Blog, Impact Stories, News)
  - About Us (Mission & Vision, Team, Partners, Reports)
  - Multi-language support (EN, ES, FR, PT)
  - Donor Portal & Admin access
- **Bottom Layer**: Quick access secondary navigation
  - Direct links to programs, news, events, gallery

### Admin Dashboard
Complete Content Management System with:
- **Image Management**: Upload, categorize, and manage gallery images
- **Content Creation**: Write and publish articles, news, blogs, and impact stories
- **Donor Management**: View, search, filter, and manage donor information
- **Analytics Dashboard**: Track donations, content, and engagement
- **User-friendly Editor**: Rich text editor with SEO fields

### Donor Portal
Full-featured donor management system:
- **Registration & Login**: Secure authentication with Supabase
- **Donation Tracking**: Complete history with receipts
- **Impact Visualization**: See your personal impact metrics
- **Profile Management**: Update personal information and preferences
- **Recurring Donations**: Set up and manage monthly giving
- **Tax Receipts**: Download donation receipts

### Payment Processing
Comprehensive Stripe integration supporting:
- **Credit/Debit Cards**: Visa, Mastercard, Amex, Discover
- **Bank Accounts**: ACH direct debit
- **Digital Wallets**: Apple Pay, Google Pay, PayPal
- **Buy Now Pay Later**: Cash App Pay, Afterpay, Klarna
- **One-time & Recurring**: Support for both donation types
- **PCI Compliant**: Secure payment processing

### Gallery
- Modern blue/white/neutral color scheme
- Masonry and grid view options
- Category filtering
- Full-screen lightbox with navigation
- Download and share functionality

### Programs
- Food Support
- Education Support
- Health Outreach
- Economic Empowerment

### Multilingual Support
- English
- Spanish (Español)
- French (Français)
- Portuguese (Português)

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Routing**: React Router 7.13.0
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion (Framer Motion) 12.23.24
- **UI Components**: Radix UI, Lucide React icons
- **Internationalization**: i18next, react-i18next
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Payments**: Stripe (complete payment processing)
- **Build Tool**: Vite 6.3.5

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/cross-borders-ngo.git
   cd cross-borders-ngo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   # Supabase
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key

   # Stripe
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your-key
   STRIPE_SECRET_KEY=sk_test_your-secret
   STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
   ```

4. Set up Supabase database:
   Follow the instructions in `SUPABASE_SETUP.md`

5. Run development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:5173](http://localhost:5173)

## 🗂️ Project Structure

```
cross-borders-ngo/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── TwoLayerNavbar.tsx      # Main navigation
│   │   │   ├── PaymentForm.tsx         # Stripe payment form
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── DonateStripe.tsx        # Donation page with Stripe
│   │   │   ├── Gallery.tsx
│   │   │   ├── admin/                  # Admin pages
│   │   │   │   ├── AdminDashboard.tsx
│   │   │   │   ├── AdminGallery.tsx
│   │   │   │   ├── AdminContentEditor.tsx
│   │   │   │   └── AdminDonors.tsx
│   │   │   └── donor/                  # Donor portal pages
│   │   │       ├── DonorLogin.tsx
│   │   │       ├── DonorRegister.tsx
│   │   │       ├── DonorDashboard.tsx
│   │   │       └── DonorProfile.tsx
│   │   └── routes.ts
│   ├── lib/
│   │   ├── supabase.ts                 # Supabase client & helpers
│   │   └── stripe.ts                   # Stripe integration
│   ├── data/
│   │   └── content.ts                  # Centralized data
│   ├── i18n/
│   │   └── config.ts                   # i18n configuration
│   └── styles/
│       ├── theme.css
│       └── fonts.css
├── SUPABASE_SETUP.md                   # Database setup guide
└── README.md
```

## 🔐 Authentication & Authorization

### Donor Authentication
- Email/password authentication via Supabase
- Secure password requirements
- Password reset functionality
- Session management

### Admin Authentication
- Separate admin login portal
- Role-based access control
- Protected admin routes

## 💳 Payment Methods Supported

All major US payment methods through Stripe:
1. **Credit/Debit Cards**: Visa, Mastercard, American Express, Discover
2. **Bank Transfers**: ACH direct debit
3. **Digital Wallets**: Apple Pay, Google Pay
4. **Third-party**: PayPal, Cash App Pay
5. **BNPL**: Afterpay, Klarna

## 🌍 Deployment

### Environment Setup
1. Set environment variables in your hosting platform
2. Configure Supabase production settings
3. Update Stripe webhook endpoints
4. Set production URLs in authentication redirects

### Recommended Platforms
- **Frontend**: Vercel, Netlify, or Cloudflare Pages
- **Backend**: Supabase (managed)
- **CDN**: Cloudflare
- **Images**: Supabase Storage or Cloudinary

## 📱 Pages & Routes

### Public Routes
- `/` - Home
- `/food-support` - Food Support Program
- `/education` - Education Support
- `/healthcare` - Health Outreach
- `/economic` - Economic Empowerment
- `/donate` - Donation page with Stripe
- `/volunteer` - Volunteer opportunities
- `/partner` - Partnership information
- `/fundraise` - Fundraising campaigns
- `/blog` - Blog posts
- `/impact` - Impact stories
- `/news` - News updates
- `/events` - Events calendar
- `/gallery` - Photo gallery
- `/mission` - Mission & Vision
- `/team` - Team members
- `/partners` - Partners & Sponsors
- `/reports` - Annual reports
- `/contact` - Contact information

### Admin Routes
- `/admin/login` - Admin login
- `/admin/dashboard` - Admin dashboard
- `/admin/gallery` - Image management
- `/admin/articles/new` - Create article
- `/admin/news/new` - Create news
- `/admin/blog/new` - Create blog post
- `/admin/stories/new` - Create impact story
- `/admin/donors` - Donor management

### Donor Portal Routes
- `/donor/login` - Donor login
- `/donor/register` - Donor registration
- `/donor/dashboard` - Donor dashboard
- `/donor/profile` - Profile settings

## 🎨 Design System

### Colors
- **Primary**: Blue (#1D4ED8, #3B82F6)
- **Secondary**: Purple, Orange
- **Neutral**: Gray scale (50-900)
- **Success**: Green
- **Error**: Red

### Typography
- Headings: Bold, sans-serif
- Body: Regular, sans-serif
- Responsive font sizes

### Components
- Modern glassmorphism effects
- Smooth animations and transitions
- Consistent spacing and shadows
- Accessible contrast ratios

## 🔧 Configuration

### Language Configuration
Edit `/src/i18n/config.ts` to:
- Add new languages
- Update translations
- Modify language fallbacks

### Content Management
Edit `/src/data/content.ts` to:
- Update program information
- Add team members
- Manage gallery images
- Configure events

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Run linter
npm run lint

# Type check
npm run type-check
```

## 📄 License

Copyright © 2026 Cross-Borders Outreach Ministry Inc. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For technical support or questions:
- Email: tech@cross-borders.org
- Documentation: See `SUPABASE_SETUP.md`
- Issues: GitHub Issues

## 🙏 Acknowledgments

- Built with ❤️ for humanitarian work
- Powered by Stripe for secure donations
- Backend by Supabase
- Icons by Lucide React
- Images from Unsplash

---

**Mission**: Transforming lives through sustainable humanitarian programs across food support, education, healthcare, and economic empowerment.
