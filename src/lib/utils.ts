import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

// Trinity Agent utilities
export function getTrinityAgentColor(agent: 'oracle' | 'sentinel' | 'sage'): string {
  const colors = {
    oracle: 'from-blue-500 to-blue-600',
    sentinel: 'from-pink-500 to-pink-600', 
    sage: 'from-green-500 to-green-600'
  }
  return colors[agent]
}

export function calculateDeploymentSavings(monthlyPrice: number): {
  traditionalCost: number
  x3oSavings: number
  timeToValue: string
} {
  // Traditional implementation costs (6+ months, $200K+ for enterprise automation)
  const traditionalCost = 200000
  const x3oAnnualCost = monthlyPrice * 12
  const savings = traditionalCost - x3oAnnualCost
  
  return {
    traditionalCost,
    x3oSavings: savings,
    timeToValue: '15 minutes vs 6+ months'
  }
}

export function generateTrialData() {
  return {
    trialDuration: 14, // days
    features: 'Full access to Trinity Agents',
    support: '24/7 chat support',
    commitment: 'No credit card required'
  }
}