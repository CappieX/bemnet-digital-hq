# Bemnet's Digital HQ

roject Overview

Build a full-stack, enterprise-grade professional service platform for Fitsum Mulugeta (Full-Stack Software Engineer & IT Systems Architect). This serves as a digital headquarters combining CV, online store, booking system, and client engagement platform with AI-powered assistance.

REPOSITORY STRUCTURE

text
Bemnets-frontend/    # Frontend (Next.js) - Deploy on Vercel
Bemnets-backend/     # Backend (NestJS/Express) - Deploy on Render
TECHNOLOGY STACK

Frontend (Vercel)

Framework: Next.js 14+ (App Router)
Language: TypeScript
Styling: Tailwind CSS + Framer Motion
State Management: Zustand + React Query
Forms: React Hook Form + Zod
API Client: tRPC or Axios
Analytics: Plausible/Umami (privacy-first)
Monitoring: Sentry
Backend (Render)

Framework: NestJS (recommended) or Express.js
Language: TypeScript
ORM: Mongoose (for MongoDB)
Auth: JWT + OAuth2 (Google) + Magic Links
Validation: class-validator + Zod
Email: Nodemailer + SendGrid/Resend
Queue: BullMQ with Redis
WebSocket: Socket.io
Database (MongoDB Atlas)

Primary: MongoDB Atlas
Caching: Redis (Upstash)
Search: Meilisearch/Algolia
File Storage: Cloudinary/AWS S3
DevOps

CI/CD: GitHub Actions
Hosting: Vercel (frontend) + Render (backend)
SSL: Automatic (Vercel/Render)
DNS: Custom domain (fitsum.dev)
ENVIRONMENT VARIABLES

Backend (.env.example)

bash
# Database
MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/fitsum_db"

# Authentication
JWT_SECRET="your_jwt_secret"
JWT_REFRESH_SECRET="your_refresh_token_secret"
JWT_EXPIRATION="7d"
JWT_REFRESH_EXPIRATION="30d"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your_email@gmail.com"
SMTP_PASS="your_app_password"
EMAIL_FROM="hello@fitsum.dev"

# Ethiopian Payment Gateways
TELEBIRR_API_KEY="your_telebirr_key"
TELEBIRR_MERCHANT_ID="your_merchant_id"
TELEBIRR_CALLBACK_URL="https://api.fitsum.dev/callback/telebirr"
TELEBIRR_ENVIRONMENT="sandbox"

CHAPA_SECRET_KEY="your_chapa_secret"
CHAPA_PUBLIC_KEY="your_chapa_public"
CHAPA_WEBHOOK_URL="https://api.fitsum.dev/webhook/chapa"

# Bank Details (Public)
BANK_NAME="Commercial Bank of Ethiopia"
BANK_ACCOUNT="1000292750521"
BANK_ACCOUNT_NAME=" Bemnet Admasu Zeleke "
BANK_SWIFT="CBETETADD"
BANK_BRANCH="Head Office"

# AI Chatbot
OPENAI_API_KEY="your_openai_key"
OPENAI_ASSISTANT_ID="your_assistant_id"

# Redis
REDIS_URL="redis://:password@host:port"
REDIS_PASSWORD="your_redis_password"

# Cloud Storage
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Communication APIs
WHATSAPP_PHONE_ID="your_phone_id"
WHATSAPP_ACCESS_TOKEN="your_whatsapp_token"
TELEGRAM_BOT_TOKEN="your_telegram_bot_token"
TELEGRAM_BOT_CHAT_ID="your_chat_id"

# OAuth
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_secret"
GOOGLE_REDIRECT_URI="https://api.fitsum.dev/auth/google/callback"

LINKEDIN_CLIENT_ID="your_linkedin_id"
LINKEDIN_CLIENT_SECRET="your_linkedin_secret"

# Integrations
SLACK_WEBHOOK_URL="your_slack_webhook"
GITHUB_TOKEN="your_github_token"

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
CORS_ORIGIN="https://fitsum.dev"
SENTRY_DSN="your_sentry_dsn"

# Environment
NODE_ENV="production"
PORT=5000
API_URL="https://api.fitsum.dev"
FRONTEND_URL="https://fitsum.dev"
Frontend (.env.local.example)

bash
NEXT_PUBLIC_API_URL="https://api.fitsum.dev"
NEXT_PUBLIC_WEBSITE_URL="https://fitsum.dev"

# Public Keys
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your_google_id"
NEXT_PUBLIC_CHAPA_PUBLIC_KEY="your_chapa_public"
NEXT_PUBLIC_TELEBIRR_ENVIRONMENT="sandbox"
NEXT_PUBLIC_OPENAI_API_KEY="your_openai_public_key"

# Analytics
NEXT_PUBLIC_GA_ID="your_ga_id"  # Optional
NEXT_PUBLIC_PLAUSIBLE_DOMAIN="fitsum.dev"
NEXT_PUBLIC_SENTRY_DSN="your_sentry_dsn"

# SEO
NEXT_PUBLIC_SITE_URL="https://fitsum.dev"
NEXT_PUBLIC_SITE_NAME="Fitsum Mulugeta - Professional Services"

# Social
NEXT_PUBLIC_LINKEDIN_URL="https://linkedin.com/in/fitsum-mulugeta-39454750"
NEXT_PUBLIC_GITHUB_URL="https://github.com/CappieX"
NEXT_PUBLIC_EMAIL="fitmulugeta@gmail.com"
NEXT_PUBLIC_CALENDAR_URL="https://cal.com/fitsum"
PROFESSIONAL FONT CONFIGURATION

javascript
// next.config.js
{
  experimental: { optimizeFonts: true },
}

// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      heading: ['Space Grotesk', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      code: ['Fira Code', 'monospace'],
      tech: ['Orbitron', 'sans-serif'],
    }
  }
}
COLOR SCHEME

css
:root {
  --primary-red: #CC0000;
  --primary-black: #1A1A1A;
  --primary-white: #FFFFFF;
  --gray-100: #F7F7F7;
  --gray-300: #E0E0E0;
  --gray-500: #888888;
  --gray-700: #444444;
  --gray-900: #222222;
}
DATABASE SCHEMAS (MongoDB)

Core Collections

typescript
// User
interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password?: string;
  phone: string;
  role: 'client' | 'team_member' | 'admin' | 'super_admin';
  avatar: string;
  bio: string;
  location: string;
  timezone: string;
  preferredLanguage: 'en' | 'am';
  emailVerified: boolean;
  twoFactorEnabled: boolean;
  twoFactorSecret: string;
  lastLogin: Date;
  loginAttempts: number;
  lockedUntil: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Team Member
interface TeamMember {
  _id: ObjectId;
  userId: ObjectId;
  role: 'developer' | 'marketing' | 'ui_ux' | 'consultant' | 'support';
  title: string;
  specialties: string[];
  skills: { name: string; level: string }[];
  availability: { status: string; schedule: any[] };
  social: { linkedin: string; github: string; twitter: string };
  portfolio: string[];
  rating: number;
  active: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// Service
interface Service {
  _id: ObjectId;
  name: string;
  category: 'development' | 'consulting' | 'design' | 'support' | 'training';
  description: string;
  longDescription: string;
  price: { amount: number; currency: 'ETB' | 'USD'; type: string };
  features: string[];
  deliverables: string[];
  timeline: string;
  teamRequired: string[];
  prerequisites: string[];
  images: { main: string; gallery: string[] };
  testimonials: ObjectId[];
  rating: number;
  active: boolean;
  order: number;
  seo: any;
  createdAt: Date;
  updatedAt: Date;
}

// Booking
interface Booking {
  _id: ObjectId;
  service: ObjectId;
  client: ObjectId;
  teamMember: ObjectId;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  date: Date;
  duration: number;
  budget: number;
  requirements: { description: string; files: string[]; priority: string };
  communication: { email: string; phone: string; preferred: string };
  payment: { method: string; amount: number; status: string; reference: string };
  meetingLink: string;
  notes: string[];
  reminderSent: boolean;
  feedback: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

// Chatbot Session
interface ChatSession {
  _id: ObjectId;
  userId: ObjectId;
  sessionId: string;
  messages: { role: string; content: string; timestamp: Date; metadata: any }[];
  context: { service: ObjectId; status: string; collectedSpecs: any };
  escalated: boolean;
  escalatedTo: ObjectId;
  resolved: boolean;
  feedback: number;
  createdAt: Date;
  updatedAt: Date;
}

// Communication
interface Communication {
  _id: ObjectId;
  type: 'email' | 'whatsapp' | 'telegram' | 'sms';
  recipient: string;
  sender: string;
  subject: string;
  content: string;
  template: string;
  status: 'queued' | 'sent' | 'delivered' | 'read' | 'failed';
  readAt: Date;
  deliveredAt: Date;
  metadata: { opens: number; clicks: number; attachments: string[] };
  createdAt: Date;
  updatedAt: Date;
}

// Newsletter
interface Newsletter {
  _id: ObjectId;
  name: string;
  email: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  subscribedAt: Date;
  unsubscribedAt: Date;
  interactions: { opens: number; clicks: number; lastOpen: Date };
  preferences: { categories: string[]; frequency: string };
  createdAt: Date;
  updatedAt: Date;
}

// Payment
interface Payment {
  _id: ObjectId;
  booking: ObjectId;
  client: ObjectId;
  amount: number;
  currency: 'ETB' | 'USD';
  method: 'telebirr' | 'chapa' | 'bank_transfer' | 'stripe';
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
  reference: string;
  providerReference: string;
  metadata: any;
  paidAt: Date;
  refundedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Project
interface Project {
  _id: ObjectId;
  title: string;
  subtitle: string;
  description: string;
  category: 'web' | 'mobile' | 'desktop' | 'system' | 'consulting';
  technologies: string[];
  images: string[];
  video: string;
  github: string;
  liveDemo: string;
  client: string;
  team: ObjectId[];
  challenges: string[];
  solutions: string[];
  results: { metric: string; value: string }[];
  testimonial: ObjectId;
  featured: boolean;
  order: number;
  seo: any;
  createdAt: Date;
  updatedAt: Date;
}
PAGES & ROUTES

Frontend Pages

text
/                      # Home - Hero section with profile, services preview
/about                 # About - Professional summary, timeline, skills
/services              # Services - Service catalog with pricing
/services/[slug]       # Service Detail - Full service description
/portfolio             # Portfolio - Project showcase
/portfolio/[slug]      # Project Detail - Case study
/team                  # Team - Team member grid with departments
/team/[member]         # Team Member Profile
/blog                  # Blog - Articles and insights
/blog/[slug]           # Blog Post
/contact               # Contact - Form, booking, communication options
/booking               # Booking - Service booking with payment
/client-portal         # Client Dashboard
/admin/*               # Admin Dashboard
/legal/privacy         # Privacy Policy
/legal/terms           # Terms & Conditions
/legal/cookies         # Cookie Policy
/404                   # Custom 404 Page
/sitemap.xml           # Auto-generated sitemap
/robots.txt            # Robots configuration
Backend API Routes

text
/auth/*
  POST /register
  POST /login
  POST /logout
  POST /refresh-token
  POST /forgot-password
  POST /reset-password
  GET /verify-email/:token
  POST /magic-link
  GET /google
  GET /google/callback

/users/*
  GET /profile
  PUT /profile
  GET /:id

/team/*
  GET /
  GET /:id
  GET /departments
  POST /contact

/services/*
  GET /
  GET /:id
  GET /categories
  POST /request-quote
  POST / (Admin)
  PUT /:id (Admin)
  DELETE /:id (Admin)

/bookings/*
  POST /
  GET /
  GET /:id
  PUT /:id
  DELETE /:id
  GET /check-availability
  POST /:id/reschedule

/payments/*
  POST /telebirr/initiate
  POST /telebirr/webhook
  POST /chapa/initiate
  POST /chapa/webhook
  POST /bank-transfer
  GET /:id
  GET /verify/:reference
  POST /callback

/chatbot/*
  POST /message
  GET /session
  POST /escalate
  POST /feedback
  GET /history/:session
  POST /collect-specs

/communications/*
  POST /email/send
  POST /whatsapp/send
  POST /telegram/send
  POST /newsletter/subscribe
  POST /newsletter/unsubscribe
  POST /newsletter/send
  GET /newsletter/analytics

/projects/*
  GET /
  GET /:id
  GET /featured
  GET /github
  POST / (Admin)
  PUT /:id (Admin)
  DELETE /:id (Admin)

/blog/*
  GET /
  GET /:slug
  POST / (Admin)
  PUT /:id (Admin)
  DELETE /:id (Admin)
  GET /categories
  POST /subscribe

/support/*
  POST /tickets
  GET /tickets
  GET /tickets/:id
  PUT /tickets/:id/status
  POST /tickets/:id/comment
  GET /faqs

/analytics/*
  GET /visitors
  GET /bookings
  GET /revenue
  GET /services
  GET /chatbot
  GET /team-performance

/uploads/*
  POST /
  POST /images
  POST /documents
  POST /specifications
  DELETE /:id
AI CHATBOT "CAPPIE" IMPLEMENTATION

Chatbot Configuration

typescript
// Cappie - AI Receptionist/Sales Assistant
interface CappieConfig {
  name: 'Cappie';
  personality: 'professional' | 'friendly' | 'helpful';
  capabilities: {
    introduction: boolean;        // Greet and introduce Fitsum
    availability_check: boolean;  // Check service availability
    service_information: boolean; // Explain services and pricing
    specification_collection: boolean; // Collect project specs
    booking_assistance: boolean;  // Guide through booking
    referral_handoff: boolean;    // Escalate to human when needed
  };
  knowledgeBase: {
    services: Service[];
    pricing: { service: string; price: number }[];
    faqs: { question: string; answer: string }[];
  };
}
Chatbot Widget

tsx
// Floating action button with red/black theme
// Popup chat interface with:
// - Welcome message
// - Quick action buttons (Services, Booking, Support)
// - File upload for specifications
// - Typing simulation
// - Real-time responses using OpenAI
// - Context-aware conversations
// - Transfer to human agent option
// - Rating after conversation
PAYMENT INTEGRATION

Ethiopian Payment Methods

typescript
// 1. Telebirr Integration
POST /api/payments/telebirr/initiate
{
  amount: number;
  service: string;
  phoneNumber: string;
  callbackUrl: string;
}

// 2. Chapa (International)
POST /api/payments/chapa/initiate
{
  amount: number;
  currency: 'ETB';
  service: string;
  callbackUrl: string;
  returnUrl: string;
}

// 3. Bank Transfer (CBE)
POST /api/payments/bank-transfer
{
  amount: number;
  reference: string;
  bankName: 'Commercial Bank of Ethiopia';
  accountNumber: '1000292750521';
  accountName: ' Bemnet Admasu Zeleke ';
  swiftCode: 'CBETETADD';
}

// 4. Amole (Awash Bank)
POST /api/payments/amole/initiate
{
  amount: number;
  phoneNumber: string;
}
COMMUNICATION SYSTEM

Multi-Channel Implementation

typescript
interface CommunicationService {
  // Email
  sendWelcome(subscriber: string): Promise<void>;
  sendBookingConfirmation(booking: Booking): Promise<void>;
  sendPaymentConfirmation(payment: Payment): Promise<void>;
  sendNewsletter(newsletter: Newsletter): Promise<void>;
  sendSpecRequest(spec: any): Promise<void>;
  
  // WhatsApp
  sendWhatsAppMessage(number: string, message: string): Promise<void>;
  sendTemplate(template: string, data: any): Promise<void>;
  
  // Telegram
  sendTelegramMessage(chatId: string, message: string): Promise<void>;
  sendTelegramDocument(chatId: string, document: Buffer): Promise<void>;
  
  // SMS
  sendSMS(number: string, message: string): Promise<void>;
}
Email Templates

text
welcome.html          - Welcome new subscribers
booking-confirmation.html - Confirm service booking
payment-receipt.html  - Payment receipt
spec-request-confirmation.html - Spec received
consultation-reminder.html - Upcoming consultation
team-assignment.html  - Team member assigned
weekly-digest.html    - Weekly newsletter
DEPLOYMENT CONFIGURATION

Vercel Frontend (vercel.json)

json
{
  "builds": [{ "src": "package.json", "use": "@vercel/next" }],
  "routes": [{ "src": "/(.*)", "dest": "/$1" }],
  "env": {
    "NEXT_PUBLIC_API_URL": "https://api.fitsum.dev"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
Render Backend (render.yaml)

yaml
services:
  - type: web
    name: fitsum-backend
    env: node
    plan: starter
    buildCommand: npm install && npm run build
    startCommand: npm run start:prod
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        fromDatabase:
          name: fitsum-db
          property: connectionString
    healthCheckPath: /health
GitHub Actions (deploy.yml)

yaml
name: Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '18' }
      - run: npm ci
      - run: npm run test
      - run: npm run lint
      - run: npm run build

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: johnbeynon/render-deploy-action@v1
        with:
          service-id: ${{ secrets.RENDER_SERVICE_ID }}
          api-key: ${{ secrets.RENDER_API_KEY }}
PROJECT STRUCTURE

Frontend Structure

text
fitsum-frontend/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   ├── blog/
│   ├── portfolio/
│   ├── services/
│   ├── about/
│   ├── contact/
│   ├── team/
│   ├── legal/
│   ├── booking/
│   ├── client-portal/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── forms/
│   ├── sections/
│   ├── chatbot/
│   ├── shared/
│   └── admin/
├── lib/
├── hooks/
├── types/
├── utils/
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── styles/
└── config/
Backend Structure

text
fitsum-backend/
├── src/
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── team/
│   │   ├── services/
│   │   ├── bookings/
│   │   ├── payments/
│   │   ├── chatbot/
│   │   ├── communications/
│   │   ├── projects/
│   │   ├── blog/
│   │   ├── support/
│   │   └── analytics/
│   ├── common/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── filters/
│   │   └── decorators/
│   ├── config/
│   ├── database/
│   ├── services/
│   └── main.ts
├── tests/
├── docker/
└── prisma/
ADDITIONAL FEATURES TO IMPLEMENT

Security

□ Two-Factor Authentication (2FA)
□ Rate Limiting (Redis)
□ IP Whitelisting
□ Request Validation (class-validator)
□ Data Encryption
□ HTTPS Enforcement
□ Security Headers
□ XSS Protection
□ CSRF Protection
□ SQL Injection Prevention
□ Regular Security Audits
Performance

□ Image Optimization (WebP)
□ Lazy Loading
□ Code Splitting
□ Server-Side Rendering
□ Static Generation
□ CDN Integration
□ Redis Caching
□ Database Indexing
□ Compression (Gzip/Brotli)
□ Minification
SEO & Analytics

□ Meta Tags (Title, Description)
□ Open Graph Images
□ Twitter Cards
□ Sitemap Generation
□ Robots.txt
□ Schema Markup (JSON-LD)
□ Google Analytics
□ Plausible Analytics
□ Search Console Integration
□ Social Preview Images
Accessibility

□ WCAG 2.1 AA Compliance
□ Screen Reader Support (ARIA)
□ Keyboard Navigation
□ High Contrast Mode
□ Font Size Adjustment
□ Focus Indicators
□ Alt Text on Images
□ Color Contrast Check
UX Features

□ Cookie Consent Banner
□ Custom 404 Page
□ Loading States
□ Error Boundaries
□ Toast Notifications
□ Dark/Light Mode
□ Mobile Responsive
□ Touch-Friendly
□ Fast Page Load (< 3s)
□ Smooth Animations
IMPLEMENTATION PHASES

Phase 1: Foundation (Weeks 1-2)

Setup repositories (frontend/backend)
Configure CI/CD pipelines
Setup MongoDB Atlas
Configure Redis (Upstash)
Implement authentication system
Setup basic frontend structure
Configure Tailwind CSS with theme
Setup environment variables
Phase 2: Core Features (Weeks 3-5)

Service catalog management
Booking system with availability
Team member profiles
Payment integration (Telebirr, Chapa, Bank)
Client management
Profile management
Basic SEO optimization
Phase 3: AI & Communications (Weeks 6-7)

Implement "Cappie" AI Chatbot
Email system with templates
WhatsApp integration
Telegram integration
Newsletter system
Notification service
Multi-language (Amharic/English)
Phase 4: Advanced Features (Weeks 8-10)

Client portal dashboard
Document management
Project management integration
Analytics dashboard
Support ticket system
Blog/CMS system
Team management
Feedback system
Phase 5: Testing & Launch (Weeks 11-12)

Comprehensive testing
Security audit
Performance optimization
Accessibility audit
Mobile responsiveness
Documentation
Deployment to production
Go-live monitoring
SAMPLE CODE TEMPLATES

Homepage Hero Section (Next.js)

tsx
// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    


      {/* Animated Background */}
      


        {/* Code/matrix animation effect */}
      


      
      


        


          {/* Left Column */}
          
            


              Full-Stack Software Engineer
            


            


              Bemnet Admassu
              Zeleke
            


            


              IT Systems Architect with 10+ years of experience. 
              Building scalable systems and enterprise solutions.
            


            


              
                Book Consultation
              
              
                View Portfolio
              
            


          
          
          {/* Right Column - Profile Image */}
          
            


              


              


                
              


            


          
        


      


    


  );
}
Chatbot Widget Component

tsx
// components/chatbot/ChatbotWidget.tsx
'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    // Send message to backend API
    const response = await fetch('/api/chatbot/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input, sessionId: localStorage.getItem('chatSession') })
    });
    const data = await response.json();
    setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: data.response }]);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
       setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
      >
        {isOpen ?  : }
      

      {/* Chat Window */}
      {isOpen && (
        


          {/* Header */}
          


            


              C
            


            


              

Cappie


              

AI Receptionist • Online


            


          



          {/* Messages */}
          


            {messages.map((msg, i) => (
              


                {msg.content}
              


            ))}
          



          {/* Input */}
          


            


               setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Cappie anything..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-red-600"
              />
              
                
              
            


          


        


      )}
    
  );
}
KEY DELIVERABLES CHECKLIST

Before Go-Live

□ All images optimized (WebP format)
□ Color contrast checked (WCAG 2.1)
□ Mobile responsive testing
□ Cross-browser testing
□ Broken links fixed
□ Form validation implemented
□ Spam protection active (honeypot + recaptcha)
□ Analytics tracking setup
□ Sitemap generated
□ robots.txt configured
□ SSL enabled (HTTPS)
□ Favicon added
□ Social preview images created
□ Clear CTA on every page
□ Cookie consent banner implemented
□ Custom 404 page designed
□ Meta titles and descriptions set
□ Alt text on all images
□ Secrets removed from frontend
□ Performance score > 95 (Lighthouse)
□ Documentation complete
□ Backup system configured
□ Monitoring setup (Sentry)
□ Error logging configured
COMPLETE DOCUMENTATION REQUIREMENTS

Backend API Documentation (OpenAPI/Swagger)

yaml
openapi: 3.0.0
info:
  title: Fitsum Mulugeta API
  version: 1.0.0
  description: Professional Service Platform API
servers:
  - url: https://api.fitsum.dev
    description: Production
  - url: https://staging-api.fitsum.dev
    description: Staging
paths:
  /auth/login:
    post:
      summary: Login user
      tags: [Authentication]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                email: { type: string }
                password: { type: string }
      responses:
        200: { description: Login successful }
        401: { description: Invalid credentials }
Integration Guides

Frontend Integration Guide
Backend Setup Guide
Deployment Guide
Environment Setup Guide
Team Member Onboarding
Payment Integration Guide
AI Chatbot Configuration Guide
Communication System Guide
SUCCESS METRICS

Technical Metrics

Performance: Lighthouse score > 95
Availability: 99.9% uptime
Response Time: < 200ms (API)
Load Time: < 2.5s (First Contentful Paint)
Error Rate: < 0.1%
Business Metrics

Conversion Rate: > 5%
Booking Completion: > 80%
Chatbot Resolution: > 70%
Client Satisfaction: > 4.5/5
Newsletter Growth: 10% monthly

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/266bfadf-0a45-4983-b4e1-a51310b296b8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
