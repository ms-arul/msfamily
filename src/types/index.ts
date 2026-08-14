export interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  paymentMethod: string;
  description: string;
  type: 'income' | 'expense';
  merchant?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalBalance: number;
  monthlyIncome: number;
  monthlyExpense: number;
  monthlySavings: number;
}

export interface FamilyMember {
  id: string;
  name: string;
  avatar?: string;
  monthlySpending: number;
  budget: number;
  remainingBudget: number;
}

export interface Budget {
  id: string;
  category: string;
  limit: number;
  spent: number;
}

export interface Subscription {
  plan: 'free' | 'premium' | 'family';
  status: 'active' | 'inactive';
  renewalDate?: string;
}

export interface Insight {
  id: string;
  type: 'insight' | 'warning' | 'opportunity' | 'reminder';
  message: string;
  suggestion?: string;
  potentialSaving?: number;
}

export interface GoldSilverRate {
  type: 'gold22k' | 'gold24k' | 'silver';
  pricePerGram: number;
  percentageChange: number;
  isUp: boolean;
  historicalData: { date: string; price: number }[];
}
