## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-6.16.2-2D3748?style=for-the-badge&logo=prisma)
![Neon](https://img.shields.io/badge/Neon-PostgreSQL-00D9FF?style=for-the-badge&logo=postgresql)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge)

# 🌙 Sleep Tracker

A modern, full-stack sleep tracking application built with Next.js, React, and TypeScript. Track your sleep patterns, analyze trends, and improve your rest quality with an intuitive interface.

## 🚀 Live Demo

[Live Demo Link](https://next-sleep-tracker-omega.vercel.app/)

### Core Technologies

- **Frontend**: Next.js 15 , React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Neon PostgreSQL with Prisma 6.16.2 ORM
- **Authentication**: Clerk
- **Deployment**: Vercel

## ✨ Features

- 🔐 **Secure Authentication** - User login/signup with Clerk
- 📝 **Sleep Logging** - Record sleep quality, duration, and date
- 📊 **Analytics Dashboard** - Visual charts of sleep patterns
- 📈 **Progress Tracking** - Best/worst sleep records and averages
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🗃️ **Data Management** - Full CRUD operations for sleep records
- 🎨 **Modern UI/UX** - Clean interface with gradient designs

## 🏗️ Architecture

### Frontend Architecture

- **App Router** - Next.js 13+ app directory structure
- **Server Components** - For data fetching and static content
- **Client Components** - For interactive UI elements
- **Server Actions** - For form submissions and database operations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Neon PostgreSQL database
- Clerk account for authentication

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/viboverse/next-sleep-tracker.git
   cd next-sleep-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@host/database?sslmode=require"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_OUT_FALLBACK_REDIRECT_URL=/
   ```

4. **Set up the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
