// App Configuration
export const APP_CONFIG = {
  name: 'Next.js Template',
  description: 'A modern Next.js template with TypeScript',
  version: '1.0.0',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
} as const;

// API Configuration
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000
} as const;

// Routes
export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact'
} as const;

// Environment
export const ENV = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test'
} as const;

// UI Constants
export const UI_CONFIG = {
  defaultPageSize: 20,
  maxFileSize: 5 * 1024 * 1024, // 5MB
  supportedImageTypes: ['image/jpeg', 'image/png', 'image/webp']
} as const;
